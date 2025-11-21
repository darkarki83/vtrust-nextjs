'use client';

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 max-[980px]:py-20 max-[560px]:py-14 bg-gradient-to-b from-white to-[#fafafa] scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-center mb-14 max-[980px]:mb-10 max-[560px]:mb-8 text-[42px] max-[980px]:text-[32px] max-[560px]:text-[28px] font-bold text-[var(--text)]">
          How it works
        </h2>
        <div className="max-w-[1000px] mx-auto flex justify-center items-center">
          <img
            src="/Vtrust-6.jpg"
            alt="How Vtrust Works - Step by step process"
            className="w-full h-auto rounded-[20px] max-[980px]:rounded-2xl max-[560px]:rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
          />
        </div>
      </div>
    </section>
  );
}
