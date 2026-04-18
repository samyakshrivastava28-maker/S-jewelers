import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  try {
    const url = 'https://i.pinimg.com/736x/a9/e0/1f/a9e01f6cf97785bb30002f701e5dac6b.jpg';
    const resp = await fetch(url);
    const buffer = await resp.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: [
        { inlineData: { data: base64, mimeType: 'image/jpeg' } },
        "Describe the layout and UI design of this website screenshot in extreme detail. Focus on the typography, colors, placement of elements, navigation style, hero section, and overall aesthetic. Give me frontend layout instructions to replicate it in Tailwind."
      ]
    });
    console.log(response.text);
  } catch(e) {
    console.error(e);
  }
}
run();
