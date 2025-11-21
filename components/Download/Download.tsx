'use client';

export default function Download() {
  return (
    <section id="download" className="py-24 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white text-center scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-white text-[42px] mb-3 font-bold">Ready to make your deals safer?</h2>
        <p className="text-white/90 max-w-[700px] mx-auto mb-2 text-lg">
          <span className="max-[560px]:inline-block">Vtrust makes every deal transparent and secure.</span>
          <span className="max-[560px]:hidden">Whether you're a freelancer tired of chasing payments or a business owner who wants peace of mind, Vtrust makes every deal transparent, secure, and stress‑free.</span>
        </p>
        <p className="text-white/90 max-w-[700px] mx-auto mb-2 text-lg mt-2">
          <span className="max-[560px]:inline-block">Available on iOS & Android.</span>
          <span className="max-[560px]:hidden">Available on iOS & Android. Manage contracts, approve milestones, and resolve disputes—all from your phone.</span>
        </p>
        <div className="flex gap-4 flex-wrap justify-center mt-8">
          <a className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-black text-white transition-all border-none min-w-[160px] cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]" href="#" aria-label="Download on the App Store">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px] uppercase opacity-80 font-normal tracking-wide">Download on the</span>
              <strong className="text-base font-semibold mt-0.5">App Store</strong>
            </div>
          </a>

          <a className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-black text-white transition-all border-none min-w-[160px] cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]" href="#" aria-label="Get it on Google Play">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px] uppercase opacity-80 font-normal tracking-wide">GET IT ON</span>
              <strong className="text-base font-semibold mt-0.5">Google Play</strong>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
