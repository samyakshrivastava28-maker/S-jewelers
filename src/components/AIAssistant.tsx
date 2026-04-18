import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { PRODUCTS } from '../lib/data';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `You are a helpful, formal, and knowledgeable AI assistant for 'S Jewelers', an elegant jewelry shop.
Your goal is to impress clients and help them navigate our collections (Gold, Silver, Diamond).
Be concise, polite, and persuasive. Our shop specializes in high-quality items.

Current inventory context:
${PRODUCTS.map(p => `- ${p.name} (${p.category}): $${p.price}`).join('\n')}

If users ask to book or purchase, tell them they can browse our collections, add items to their cart, and checkout via WhatsApp (8305500767) where our staff will finalize the booking.`;

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: 'Welcome to S Jewelers. How may I assist you with our exquisite collections today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    const newMsgId = Date.now().toString();
    const aiMsgId = (Date.now() + 1).toString();
    
    setMessages(prev => [...prev, { id: newMsgId, role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      // FORCED HARDCODED KEY to bypass any Netlify environment issues temporarily
      const apiKey = "AIzaSyBH3pdM2ro18TZ-u8dTYY77n6leyV8OT60";
      
      const ai = new GoogleGenAI({ apiKey });
      
      // Combine strict system rules with previous messages for context
      const chatHistory = messages.map(m => `${m.role === 'assistant' ? 'Assistant' : 'User'}: ${m.content}`).join('\n');
      const fullPrompt = `${SYSTEM_PROMPT}\n\nChat history:\n${chatHistory}\n\nUser: ${userMsg}\nAssistant:`;

      // Use gemini-3-flash-preview for general fast usage
      const responseStream = await ai.models.generateContentStream({
        model: "gemini-3-flash-preview",
        contents: fullPrompt
      });

      setMessages(prev => [...prev, { id: aiMsgId, role: 'assistant', content: '' }]);
      setIsLoading(false);

      for await (const chunk of responseStream) {
        if (chunk.text) {
          setMessages(prev => prev.map(msg => 
            msg.id === aiMsgId ? { ...msg, content: msg.content + chunk.text } : msg
          ));
        }
      }
    } catch (error: any) {
      console.error('AI Error Raw Debug:', error);
      
      const errText = error instanceof Error ? error.message : (typeof error === 'string' ? error : JSON.stringify(error));
      let errorMessage = `⚠️ Error! \nDetail: ${errText}`;
      
      if (errText.includes('API key not valid') || errText.includes('400') || errText.includes('403')) {
        errorMessage = `⚠️ API Key Error: The Gemini API key you provided appears to be invalid or incorrectly formatted.\n\nDetails: ${errText}`;
      } else if (errText.includes('fetch') || errText.includes('Network') || errText.includes('Failed to fetch')) {
         errorMessage = `⚠️ Network Error: Your browser is blocking the request. Do you have an ad-blocker or brave shields active? It might block API calls. \n\nDetails: ${errText}`;
      }

      setMessages(prev => {
        const hasAiMsg = prev.some(m => m.id === aiMsgId);
        if (hasAiMsg) {
          return prev.map(msg => msg.id === aiMsgId ? { ...msg, content: errorMessage } : msg);
        }
        return [...prev, { id: aiMsgId, role: 'assistant', content: errorMessage }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-4 bg-yellow-400 text-black rounded-full shadow-lg hover:bg-yellow-300 transition-all ${isOpen ? 'scale-0' : 'scale-100 z-50'}`}
      >
        <MessageSquare size={24} />
      </button>

      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-32px)] sm:w-[280px] h-[350px] max-h-[75vh] bg-white rounded-2xl border border-gray-200 shadow-2xl flex flex-col z-50 overflow-hidden">
          <div className="bg-primary text-white p-3 sm:p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={20} className="text-yellow-400" />
              <span className="font-serif font-semibold text-lg">S Jewelers Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-white border text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border text-gray-800 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-gold" />
                  <span className="text-xs text-gray-500">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 bg-white border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about our jewelry..."
              className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2 bg-primary text-white rounded-full hover:bg-black disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
