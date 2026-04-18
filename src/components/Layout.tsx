import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartSidebar } from './CartSidebar';
import { AIAssistant } from './AIAssistant';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-primary">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CartSidebar />
      <AIAssistant />
    </div>
  );
}
