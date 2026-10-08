import React, { useState } from 'react';
import { Send, Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  onOpenCounselling: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCounselling }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center group py-2">
            <img
              src="/images/Yologen Global Flight Logo.png"
              alt="YOLOgen Logo"
              className="h-12 sm:h-20 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <a href="#home" className="text-sm font-semibold text-amber-600 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-amber-500 after:rounded-full">
              Home
            </a>
            <a href="#study-abroad" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">
              Study Abroad
            </a>
            <a href="#test-prep" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">
              Test Prep
            </a>
            <a href="#jobs" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">
              Job
            </a>
            <a href="#about-us" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">
              About us
            </a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">
              Contact us
            </a>
          </nav>

          {/* Right Action Button matching Screenshot 1 */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCounselling}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200/90 shadow-sm hover:shadow-md hover:border-amber-300 hover:text-amber-700 transition-all active:scale-95"
            >
              <Send className="w-3.5 h-3.5 text-amber-600 rotate-12" />
              Get in Touch
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-bold text-amber-700 bg-amber-50"
          >
            Home
          </a>
          <a
            href="#study-abroad"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Study Abroad
          </a>
          <a
            href="#test-prep"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Test Prep
          </a>
          <a
            href="#jobs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Job
          </a>
          <a
            href="#about-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            About us
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Blog
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Contact us
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCounselling();
              }}
              className="w-full py-2.5 rounded-full bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-600 shadow flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5 rotate-12" /> Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
