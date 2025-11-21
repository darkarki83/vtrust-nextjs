'use client';

export default function Stats() {
  return (
    <section className="scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-4 max-[980px]:grid-cols-2 gap-6 text-center py-20">
        <div className="p-8 py-8 px-5 bg-gradient-to-br from-[#faf5ff] to-white rounded-2xl border-2 border-[#f0eaff] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-[0_8px_24px_rgba(139,92,246,0.15)]">
          <b className="block text-[32px] mb-2 font-bold text-[var(--brand)]">0% custody</b>
          <span className="text-[var(--muted)] text-[15px] font-medium">Non‑custodial smart contracts</span>
        </div>
        <div className="p-8 py-8 px-5 bg-gradient-to-br from-[#faf5ff] to-white rounded-2xl border-2 border-[#f0eaff] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-[0_8px_24px_rgba(139,92,246,0.15)]">
          <b className="block text-[32px] mb-2 font-bold text-[var(--brand)]">Milestones</b>
          <span className="text-[var(--muted)] text-[15px] font-medium">Auto‑release on approval</span>
        </div>
        <div className="p-8 py-8 px-5 bg-gradient-to-br from-[#faf5ff] to-white rounded-2xl border-2 border-[#f0eaff] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-[0_8px_24px_rgba(139,92,246,0.15)]">
          <b className="block text-[32px] mb-2 font-bold text-[var(--brand)]">KYC verified</b>
          <span className="text-[var(--muted)] text-[15px] font-medium">Identity verification built‑in</span>
        </div>
        <div className="p-8 py-8 px-5 bg-gradient-to-br from-[#faf5ff] to-white rounded-2xl border-2 border-[#f0eaff] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-[0_8px_24px_rgba(139,92,246,0.15)]">
          <b className="block text-[32px] mb-2 font-bold text-[var(--brand)]">Arbitration</b>
          <span className="text-[var(--muted)] text-[15px] font-medium">Fast dispute handling</span>
        </div>
      </div>
    </section>
  );
}
