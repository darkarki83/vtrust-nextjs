'use client';

export default function Features() {
  const cardClass = "p-8 max-[980px]:p-6 max-[560px]:p-5 bg-[#fafafa] border border-[#f0f0f0] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(139,92,246,0.12)] hover:border-[rgba(139,92,246,0.2)] hover:bg-white";
  const titleClass = "mb-3 max-[560px]:mb-2 text-xl max-[560px]:text-lg font-semibold text-[var(--text)]";
  const textClass = "text-[var(--muted)] text-[15px] max-[560px]:text-sm leading-relaxed m-0";

  return (
    <section id="features" className="py-24 max-[980px]:py-16 max-[560px]:py-12 bg-white scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 max-[560px]:px-3">
        <h2 className="text-center mb-14 max-[980px]:mb-10 max-[560px]:mb-8 text-[42px] max-[980px]:text-[32px] max-[560px]:text-[26px] font-bold text-[var(--text)]">
          Why Vtrust makes deals safer and faster
        </h2>
        <div className="grid grid-cols-3 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1 gap-6 max-[980px]:gap-5 max-[560px]:gap-4">
          <div className={cardClass}>
            <h3 className={titleClass}>Secure payment contracts</h3>
            <p className={textClass}>
              Funds stay safe in a smart contract. Released only when conditions are met.
            </p>
          </div>
          <div className={cardClass}>
            <h3 className={titleClass}>Milestone-based releases</h3>
            <p className={textClass}>
              Split projects into stages. Payment released step by step as work gets approved.
            </p>
          </div>
          <div className={cardClass}>
            <h3 className={titleClass}>Built-in KYC verification</h3>
            <p className={textClass}>
              Verify identity to build trust and unlock higher limits.
            </p>
          </div>
          <div className={cardClass}>
            <h3 className={titleClass}>Fair dispute resolution</h3>
            <p className={textClass}>
              Neutral mediator reviews disputes. Smart contract follows their decision automatically.
            </p>
          </div>
          <div className={cardClass}>
            <h3 className={titleClass}>Easy for non-crypto users</h3>
            <p className={textClass}>
              Simple as any payment app. No need to understand blockchain.
            </p>
          </div>
          <div className={cardClass}>
            <h3 className={titleClass}>Built-in stablecoin access</h3>
            <p className={textClass}>
              Handle local and international payments without currency volatility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
