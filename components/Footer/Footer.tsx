'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-7 text-[var(--muted)] border-t border-[var(--stroke)]">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center gap-3 flex-wrap">
        <div className="opacity-80">
          © {currentYear} VTrust. Built for safer freelance deals.
        </div>
        <div className="flex gap-3.5 opacity-90">
          <button type="button" className="hover:text-[var(--brand)] bg-transparent border-none p-0 cursor-pointer">Privacy</button>
          <a href="/terms" className="hover:text-[var(--brand)]">Terms</a>
          <button type="button" className="hover:text-[var(--brand)] bg-transparent border-none p-0 cursor-pointer">Contact</button>
        </div>
      </div>
    </footer>
  );
}
