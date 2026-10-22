import React from "react";
import { Link } from "react-router-dom";
import { Home, Send, Phone } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

/**
 * Custom 404 Not Found page.
 * Served with a true 404 HTTP status via Netlify _redirects / netlify.toml.
 * noindex meta tag prevents this from being indexed by search engines.
 */
export const NotFoundPage: React.FC = () => {
  usePageMeta({
    title: "Page Not Found | YOLOgen Consultant",
    description: "The page you're looking for doesn't exist. Return to YOLOgen Consultant's homepage for visa and migration guidance.",
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f0ff] via-white to-[#f3e8ff] flex flex-col font-sans">
      {/* Branded top bar */}
      <header className="bg-[#8408FC] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 sm:h-20">
            <Link to="/" aria-label="YOLOgen home" className="flex items-center group py-2">
              <img
                src="https://res.cloudinary.com/droqi9jl3/image/upload/v1792413052/White_YOLOGen_Flight_Logo_bdhwgp.png"
                alt="YOLOgen Logo"
                width="150"
                height="56"
                className="h-10 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                loading="eager"
                decoding="async"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Main 404 content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center">
        {/* Large decorative 404 */}
        <div className="select-none mb-6 leading-none">
          <span
            className="text-[120px] sm:text-[180px] font-extrabold tracking-tighter"
            style={{
              background: "linear-gradient(135deg, #8408FC 0%, #c98fff 60%, #5e09aa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            aria-hidden="true"
          >
            404
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          Oops! Page not found.
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-md mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track
          to your global journey.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          <Link
            to="/"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#8408FC] text-white font-semibold text-sm shadow-md hover:bg-[#700bd8] transition-all active:scale-95"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Back to Homepage
          </Link>
          <a
            href="https://wa.me/919703962596"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-[#8408FC] text-[#8408FC] font-semibold text-sm shadow-sm hover:bg-[#f3e8ff] transition-all active:scale-95"
          >
            <Send className="w-4 h-4 rotate-12" aria-hidden="true" />
            Contact Us
          </a>
        </div>

        {/* Quick nav */}
        <nav aria-label="Popular pages" className="mt-12">
          <p className="text-sm text-slate-400 mb-3 font-medium uppercase tracking-wider">Popular Pages</p>
          <ul className="flex flex-wrap justify-center gap-3">
            {[
              { label: "About Us", href: "/#about-us" },
              { label: "Visa Services", href: "/#study-abroad" },
              { label: "Job Opportunities", href: "/#jobs" },
              { label: "Destinations", href: "/#destinations" },
              { label: "Contact", href: "/#contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600 hover:border-[#8408FC] hover:text-[#8408FC] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Phone */}
        <a
          href="tel:+919703962596"
          className="mt-10 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#8408FC] transition-colors"
          aria-label="Call YOLOgen at +91 97039 62596"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          +91 97039 62596
        </a>
      </main>

      {/* Footer mini */}
      <div className="border-t border-violet-200 bg-[#f3e8ff] py-5 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} Zenbeta Technologies Pvt. Ltd. All rights reserved. ·{" "}
          <Link to="/privacy-policy" className="hover:text-[#8408FC] underline">Privacy Policy</Link> ·{" "}
          <Link to="/terms-and-conditions" className="hover:text-[#8408FC] underline">Terms &amp; Conditions</Link>
        </p>
      </div>
    </div>
  );
};
