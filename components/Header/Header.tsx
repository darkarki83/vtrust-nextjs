"use client";
import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/95 border-b border-[rgba(234,234,241,0.5)] shadow-sm" style={{ backdropFilter: 'saturate(180%) blur(12px)' }}>
      <div className="max-w-[1200px] mx-auto px-4 max-[560px]:px-3 flex items-center justify-between h-[70px] max-[560px]:h-16">
        <a
          href="#"
          className="flex gap-2.5 items-center font-extrabold tracking-wide transition-transform duration-200 hover:scale-[1.02]"
          aria-label="VTrust logo"
        >
          <img className="h-10 max-[560px]:h-8 block object-contain" src="/logo/logo_transparent.png" alt="VTrust" />
        </a>
        {/* Desktop nav hidden on mobile */}
        <nav className="flex gap-8 max-[980px]:gap-3 items-center max-[560px]:hidden">
          <a href="#features" className="text-[15px] font-medium text-[var(--text)]">Features</a>
          <a href="#how" className="text-[15px] font-medium text-[var(--text)]">How it works</a>
          <a href="#tutorial" className="text-[15px] font-medium text-[var(--text)]">Tutorial</a>
          <a href="#faq" className="text-[15px] font-medium text-[var(--text)]">FAQ</a>
          <a href="#download" className="text-[15px] font-medium text-[var(--text)]">Get Started</a>
        </nav>
        {/* Mobile menu button only */}
        <button
          className="block max-[560px]:block min-[561px]:hidden p-2 rounded-md border border-[var(--brand)] bg-white"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--brand)]">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      {/* Mobile menu overlay with links */}
      {menuOpen && (
        <nav className="fixed top-16 left-0 w-full z-50 bg-white shadow-lg max-[560px]:block hidden">
          <div className="flex flex-col items-center gap-4 py-6">
            <a href="#features" className="text-[17px] font-semibold text-[var(--text)]" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#how" className="text-[17px] font-semibold text-[var(--text)]" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#tutorial" className="text-[17px] font-semibold text-[var(--text)]" onClick={() => setMenuOpen(false)}>Tutorial</a>
            <a href="#faq" className="text-[17px] font-semibold text-[var(--text)]" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href="#download" className="text-[17px] font-semibold text-[var(--text)]" onClick={() => setMenuOpen(false)}>Get Started</a>
          </div>
        </nav>
      )}
    </header>
  );
}
