'use client';

export default function Features() {
  return (
    <section id="features" className="py-24 max-[980px]:py-20 max-[560px]:py-14 bg-white scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-center mb-14 max-[980px]:mb-10 text-[42px] max-[980px]:text-[32px] font-bold text-[var(--text)]">
          Why Vtrust makes deals safer and faster
        </h2>
        <div className="grid grid-cols-3 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1 gap-7 max-[980px]:gap-5">
          <div className="p-8 max-[560px]:p-6 bg-[#fafafa] border border-[#f0f0f0] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(139,92,246,0.12)] hover:border-[rgba(139,92,246,0.2)] hover:bg-white">
            <h3 className="mb-3 text-xl font-semibold text-[var(--text)]">Secure payment contracts</h3>
            <p className="text-[var(--muted)] text-[15px] leading-relaxed m-0">
              Funds stay safe in a smart contract. Released only when conditions are met.
            </p>
          </div>
          <div className="p-8 max-[560px]:p-6 bg-[#fafafa] border border-[#f0f0f0] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(139,92,246,0.12)] hover:border-[rgba(139,92,246,0.2)] hover:bg-white">
            <h3 className="mb-3 text-xl font-semibold text-[var(--text)]">Milestone-based releases</h3>
            <p className="text-[var(--muted)] text-[15px] leading-relaxed m-0">
              Split projects into stages. Payment released step by step as work gets approved.
            </p>
          </div>
          <div className="p-8 max-[560px]:p-6 bg-[#fafafa] border border-[#f0f0f0] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(139,92,246,0.12)] hover:border-[rgba(139,92,246,0.2)] hover:bg-white">
            <h3 className="mb-3 text-xl font-semibold text-[var(--text)]">Built-in KYC verification</h3>
            <p className="text-[var(--muted)] text-[15px] leading-relaxed m-0">
              Verify identity to build trust and unlock higher limits.
            </p>
          </div>
          <div className="p-8 max-[560px]:p-6 bg-[#fafafa] border border-[#f0f0f0] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(139,92,246,0.12)] hover:border-[rgba(139,92,246,0.2)] hover:bg-white">
            <h3 className="mb-3 text-xl font-semibold text-[var(--text)]">Fair dispute resolution</h3>
            <p className="text-[var(--muted)] text-[15px] leading-relaxed m-0">
              Neutral mediator reviews disputes. Smart contract follows their decision automatically.
            </p>
          </div>
          <div className="p-8 max-[560px]:p-6 bg-[#fafafa] border border-[#f0f0f0] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(139,92,246,0.12)] hover:border-[rgba(139,92,246,0.2)] hover:bg-white">
            <h3 className="mb-3 text-xl font-semibold text-[var(--text)]">Easy for non-crypto users</h3>
            <p className="text-[var(--muted)] text-[15px] leading-relaxed m-0">
              Simple as any payment app. No need to understand blockchain.
            </p>
          </div>
          <div className="p-8 max-[560px]:p-6 bg-[#fafafa] border border-[#f0f0f0] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(139,92,246,0.12)] hover:border-[rgba(139,92,246,0.2)] hover:bg-white">
            <h3 className="mb-3 text-xl font-semibold text-[var(--text)]">Built-in stablecoin access</h3>
            <p className="text-[var(--muted)] text-[15px] leading-relaxed m-0">
              Handle local and international payments without currency volatility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
