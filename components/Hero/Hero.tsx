'use client';

export default function Hero() {
    return (
        <section className="relative py-20 pb-24 max-[980px]:py-12 max-[980px]:pb-16 max-[560px]:py-8 max-[560px]:pb-12 bg-gradient-to-b from-[#faf5ff] to-white overflow-hidden before:content-[''] before:absolute before:-top-[200px] before:-left-[100px] before:w-[600px] before:h-[600px] before:bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] before:pointer-events-none before:z-0 after:content-[''] after:absolute after:-bottom-[150px] after:-right-[150px] after:w-[500px] after:h-[500px] after:bg-[radial-gradient(circle,rgba(124,58,237,0.1)_0%,transparent_70%)] after:pointer-events-none after:z-0">
            <div className="max-w-[1200px] mx-auto px-4 max-[560px]:px-3 relative z-10 grid grid-cols-[1.1fr_0.9fr] max-[980px]:grid-cols-1 gap-16 max-[980px]:gap-8 max-[560px]:gap-6 items-center">
                <div className="animate-[fadeInUp_0.8s_ease-out_forwards]">
                    <h1 className="text-[52px] max-[980px]:text-[36px] max-[560px]:text-[28px] leading-[1.1] my-5 max-[560px]:my-3 font-extrabold text-[var(--text)] animate-[fadeInUp_0.8s_ease-out_0.3s_backwards]">
                        Get paid safely. Pay with confidence.
                    </h1>
                    <p className="text-[19px] max-[980px]:text-[17px] max-[560px]:text-[15px] text-[var(--muted)] max-w-[640px] leading-[1.7] animate-[fadeInUp_0.8s_ease-out_0.5s_backwards]">
                        Smart‑payment contracts for buyers and sellers. Funds locked safely, released milestone by milestone.
                    </p>
                    <div className="flex gap-4 max-[560px]:gap-3 flex-wrap mt-8 max-[560px]:mt-6 animate-[fadeInUp_0.8s_ease-out_0.7s_backwards]">
                        <a className="inline-flex items-center gap-3 max-[560px]:gap-2 px-6 max-[560px]:px-4 py-3 max-[560px]:py-2.5 rounded-xl bg-black text-white transition-all border-none min-w-[160px] max-[560px]:min-w-[140px] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]" href="#download">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            <div className="flex flex-col items-start leading-tight">
                                <span className="text-[10px] max-[560px]:text-[9px] uppercase opacity-80 font-normal tracking-wide">Download on the</span>
                                <strong className="text-base max-[560px]:text-sm font-semibold mt-0.5">App Store</strong>
                            </div>
                        </a>
                        <a className="inline-flex items-center gap-3 max-[560px]:gap-2 px-6 max-[560px]:px-4 py-3 max-[560px]:py-2.5 rounded-xl bg-black text-white transition-all border-none min-w-[160px] max-[560px]:min-w-[140px] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]" href="#download">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                            </svg>
                            <div className="flex flex-col items-start leading-tight">
                                <span className="text-[10px] max-[560px]:text-[9px] uppercase opacity-80 font-normal tracking-wide">GET IT ON</span>
                                <strong className="text-base max-[560px]:text-sm font-semibold mt-0.5">Google Play</strong>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center animate-[fadeInScale_1s_ease-out_0.4s_backwards]">
                    <img
                        src="/img/image.png"
                        alt="Vtrust App Interface"
                        className="w-full max-w-[320px] max-[560px]:max-w-[280px] h-auto rounded-[20px] shadow-[0_20px_60px_rgba(123,97,255,0.25)] transition-transform hover:-translate-y-2"
                    />
                </div>
            </div>
        </section>
    );
}
