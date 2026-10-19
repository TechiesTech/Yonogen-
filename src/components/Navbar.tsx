import React, { useState } from 'react';
import { Send, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCounselling: () => void;
}

export const Navbar: React.FC<NavbarProps> = React.memo(({ onOpenCounselling }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#8408FC] text-white shadow-md transition-all will-change-transform">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          <a href="#home" className="flex items-center group py-2" aria-label="YOLOgen home">
            <img
              src="https://res.cloudinary.com/droqi9jl3/image/upload/v1792413052/White_YOLOGen_Flight_Logo_bdhwgp.png"
              alt="YOLOgen Logo"
              width="150"
              height="56"
              className="h-10 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
              loading="eager"
              decoding="async"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="#home"
              className="text-sm font-semibold text-white relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-full"
            >
              Home
            </a>
            <a href="#about-us" className="text-sm font-medium text-white/90 hover:text-white transition-colors py-1">
              About us
            </a>
            <a href="#study-abroad" className="text-sm font-medium text-white/90 hover:text-white transition-colors py-1">
              Our Services
            </a>
            <a href="#testimonials" className="text-sm font-medium text-white/90 hover:text-white transition-colors py-1">
              Blog
            </a>
            <a href="#contact" className="text-sm font-medium text-white/90 hover:text-white transition-colors py-1">
              Contact us
            </a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCounselling}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#8408FC] text-xs sm:text-sm font-semibold shadow-sm hover:shadow hover:bg-slate-50 transition-all active:scale-95 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-[#8408FC] rotate-12" />
              Get in Touch
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-white hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="lg:hidden bg-[#8408FC] border-t border-white/15 px-4 pt-3 pb-6 space-y-2 shadow-2xl transition-all"
        >
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-bold text-white bg-white/20"
          >
            Home
          </a>
          <a
            href="#about-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-medium text-white/90 hover:bg-white/10"
          >
            About us
          </a>
          <a
            href="#study-abroad"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-medium text-white/90 hover:bg-white/10"
          >
            Our Services
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-medium text-white/90 hover:bg-white/10"
          >
            Blog
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-medium text-white/90 hover:bg-white/10"
          >
            Contact us
          </a>
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCounselling();
              }}
              className="w-full py-3 rounded-full bg-white text-[#8408FC] text-xs sm:text-sm font-bold hover:bg-slate-50 shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Send className="w-4 h-4 rotate-12 text-[#8408FC]" /> Get in Touch
            </button>
          </div>
        </nav>
      )}
    </header>
  );
});

Navbar.displayName = 'Navbar';