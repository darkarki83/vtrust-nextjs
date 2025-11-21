'use client';

export default function Header() {
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
        <nav className="flex gap-8 max-[980px]:gap-3 items-center">
          <a href="#features" className="text-[15px] font-medium text-[var(--text)] opacity-85 transition-all duration-200 relative hover:opacity-100 hover:text-[var(--brand)] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[var(--brand)] after:transition-[width] after:duration-300 hover:after:w-full max-[980px]:hidden">
            Features
          </a>
          <a href="#how" className="text-[15px] font-medium text-[var(--text)] opacity-85 transition-all duration-200 relative hover:opacity-100 hover:text-[var(--brand)] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[var(--brand)] after:transition-[width] after:duration-300 hover:after:w-full max-[980px]:hidden">
            How it works
          </a>
          <a href="#tutorial" className="text-[15px] font-medium text-[var(--text)] opacity-85 transition-all duration-200 relative hover:opacity-100 hover:text-[var(--brand)] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[var(--brand)] after:transition-[width] after:duration-300 hover:after:w-full max-[980px]:hidden">
            Tutorial
          </a>
          <a href="#faq" className="text-[15px] font-medium text-[var(--text)] opacity-85 transition-all duration-200 relative hover:opacity-100 hover:text-[var(--brand)] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[var(--brand)] after:transition-[width] after:duration-300 hover:after:w-full max-[980px]:hidden">
            FAQ
          </a>
          <a
            href="#download"
            className="inline-flex items-center justify-center gap-2 px-6 max-[560px]:px-4 py-2.5 max-[560px]:py-2 rounded-[10px] bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] text-white font-semibold text-sm max-[560px]:text-xs transition-all duration-200 whitespace-nowrap shadow-[0_2px_8px_rgba(139,92,246,0.3)] hover:shadow-[0_4px_16px_rgba(139,92,246,0.4)] hover:-translate-y-px hover:scale-[1.02]"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
