'use client';

import React, { useState } from 'react';

export default function Features() {
  const cardClass = "p-8 max-[980px]:p-6 max-[560px]:p-5 bg-[#fafafa] border border-[#f0f0f0] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(139,92,246,0.12)] hover:border-[rgba(139,92,246,0.2)] hover:bg-white";
  const titleClass = "mb-3 max-[560px]:mb-2 text-xl max-[560px]:text-lg font-semibold text-[var(--text)]";
  const textClass = "text-[var(--muted)] text-[15px] max-[560px]:text-sm leading-relaxed m-0";

  const features = [
    {
      title: 'Secure payment contracts',
      text: 'Funds stay safe in a smart contract. Released only when conditions are met.'
    },
    {
      title: 'Milestone-based releases',
      text: 'Split projects into stages. Payment released step by step as work gets approved.'
    },
    {
      title: 'Built-in KYC verification',
      text: 'Verify identity to build trust and unlock higher limits.'
    },
    {
      title: 'Fair dispute resolution',
      text: 'Neutral mediator reviews disputes. Smart contract follows their decision automatically.'
    },
    {
      title: 'Easy for non-crypto users',
      text: 'Simple as any payment app. No need to understand blockchain.'
    },
    {
      title: 'Built-in stablecoin access',
      text: 'Handle local and international payments without currency volatility.'
    }
  ];

  // Carousel state for mobile
  const [carouselIndex, setCarouselIndex] = useState(0);
  const cardsPerPage = 1;
  const maxIndex = features.length - cardsPerPage;

  // Responsive check

  return (
    <section id="features" className="py-24 max-[980px]:py-16 max-[560px]:py-12 bg-white scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 max-[560px]:px-3">
        <h2 className="text-center mb-14 max-[980px]:mb-10 max-[560px]:mb-8 text-[42px] max-[980px]:text-[32px] max-[560px]:text-[26px] font-bold text-[var(--text)]">
          Why Vtrust makes deals safer and faster
        </h2>
        {/* Desktop/tablet grid */}
        <div className="hidden max-[560px]:flex items-center justify-center gap-2">
          <button
            className="p-2 rounded-full bg-gray-100 text-gray-500 disabled:opacity-40"
            onClick={() => setCarouselIndex(i => Math.max(0, i - 1))}
            disabled={carouselIndex === 0}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <div className="flex-1 flex justify-center">
            {features.slice(carouselIndex, carouselIndex + cardsPerPage).map((feature) => (
              <div key={feature.title} className={cardClass + ' min-w-0 flex-1'}>
                <h3 className={titleClass}>{feature.title}</h3>
                <p className={textClass}>{feature.text}</p>
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
        <div className="grid grid-cols-3 max-[980px]:grid-cols-2 max-[560px]:hidden gap-6 max-[980px]:gap-5">
          {features.map((feature) => (
            <div key={feature.title} className={cardClass}>
              <h3 className={titleClass}>{feature.title}</h3>
              <p className={textClass}>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
