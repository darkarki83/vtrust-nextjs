
'use client';
import React, { useState } from 'react';

export default function Stats() {
  const stats = [
    {
      title: '0% custody',
      text: 'Non‑custodial smart contracts',
    },
    {
      title: 'Milestones',
      text: 'Auto‑release on approval',
    },
    {
      title: 'KYC verified',
      text: 'Identity verification built‑in',
    },
    {
      title: 'Arbitration',
      text: 'Fast dispute handling',
    },
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);
  const cardsPerPage = 2;
  const maxIndex = stats.length - cardsPerPage;

  const cardClass = "p-8 max-[980px]:p-6 max-[560px]:p-4 bg-gradient-to-br from-[#faf5ff] to-white rounded-2xl border-2 border-[#f0eaff] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-[0_8px_24px_rgba(139,92,246,0.15)] text-center flex-1 min-w-0";
  const titleClass = "block text-[32px] max-[560px]:text-[22px] mb-2 font-bold text-[var(--brand)]";
  const textClass = "text-[var(--muted)] text-[15px] max-[560px]:text-[13px] font-medium leading-snug max-[560px]:leading-normal break-words";

  return (
    <section className="scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Mobile carousel */}
        <div className="hidden max-[560px]:flex items-center justify-center gap-2 py-10">
          <button
            className="p-2 rounded-full bg-gray-100 text-gray-500 disabled:opacity-40"
            onClick={() => setCarouselIndex(i => Math.max(0, i - 1))}
            disabled={carouselIndex === 0}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <div className="flex gap-4 w-full">
            {stats.slice(carouselIndex, carouselIndex + cardsPerPage).map((stat) => (
              <div key={stat.title} className={cardClass}>
                <b className={titleClass}>{stat.title}</b>
                <span className={textClass}>{stat.text}</span>
              </div>
            ))}
          </div>
          <button
            className="p-2 rounded-full bg-gray-100 text-gray-500 disabled:opacity-40"
            onClick={() => setCarouselIndex(i => Math.min(maxIndex, i + 1))}
            disabled={carouselIndex >= maxIndex}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
        {/* Desktop/tablet grid */}
        <div className="grid grid-cols-4 max-[980px]:grid-cols-2 max-[560px]:hidden gap-6 text-center py-20">
          {stats.map((stat) => (
            <div key={stat.title} className={cardClass}>
              <b className={titleClass}>{stat.title}</b>
              <span className={textClass}>{stat.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
