"use client";

import { useState, useEffect } from "react";
import { SiteSettings } from "@/lib/types";

export function Navigation({ settings }: { settings: SiteSettings }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = settings.whatsapp
    ? `https://wa.me/${settings.whatsapp}?text=${encodeURIComponent("Hi Sai, I'd like to discuss a project")}`
    : `mailto:${settings.email}`;

  return (
    <>
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cinema-accent focus:text-black focus:font-bold focus:text-sm focus:rounded"
      >
        Skip to content
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-40 px-6 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
        aria-label="Main navigation"
      >
        <a href="#main-content" className="text-xl font-serif font-bold tracking-widest text-white">
          <span className="text-cinema-accent">SAI</span> VAIBHAV
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
          <a href="#about" className="hover:text-cinema-accent transition-colors">
            About
          </a>
          <a href="#portfolio" className="hover:text-cinema-accent transition-colors">
            Work
          </a>
          <a href="#contact" className="hover:text-cinema-accent transition-colors">
            Contact
          </a>
        </div>

        <a
          href={whatsappUrl}
          target={settings.whatsapp ? "_blank" : undefined}
          rel={settings.whatsapp ? "noopener noreferrer" : undefined}
          className="hidden md:inline-block px-5 py-2 text-xs font-bold tracking-widest uppercase border border-white/20 hover:border-cinema-accent hover:text-cinema-accent transition-colors rounded-sm"
        >
          Let&apos;s Talk
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md md:hidden border-t border-white/10"
            role="menu"
          >
            <div className="flex flex-col items-center gap-6 py-8 text-sm font-medium tracking-widest uppercase">
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-cinema-accent transition-colors" role="menuitem">About</a>
              <a href="#portfolio" onClick={() => setMenuOpen(false)} className="hover:text-cinema-accent transition-colors" role="menuitem">Work</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-cinema-accent transition-colors" role="menuitem">Contact</a>
              <a
                href={whatsappUrl}
                target={settings.whatsapp ? "_blank" : undefined}
                rel={settings.whatsapp ? "noopener noreferrer" : undefined}
                className="px-5 py-2 text-xs font-bold tracking-widest uppercase border border-cinema-accent text-cinema-accent rounded-sm"
                role="menuitem"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
