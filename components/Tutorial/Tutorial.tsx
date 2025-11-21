
'use client';
import React, { useState } from 'react';

export default function Tutorial() {
  const tutorials = [
    {
      title: "Download & Sign Up",
      description: "Download the Vtrust app from the App Store or Google Play. Create your account in under 2 minutes.",
      level: "Beginner"
    },
    {
      title: "Create Your First Contract",
      description: "Fill in the basic details: project description, total amount, and payment milestones.",
      level: "Beginner"
    },
    {
      title: "Fund the Contract",
      description: "Deposit funds into the smart contract. Money is held securely until milestones are completed.",
      level: "Beginner"
    }
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);
  const cardsPerPage = 1;
  const maxIndex = tutorials.length - cardsPerPage;

  const cardClass = "relative overflow-hidden rounded-2xl bg-white border border-[#f0f0f0] shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 text-left w-full hover:shadow-[0_12px_40px_rgba(139,92,246,0.15)] hover:-translate-y-1";

  return (
    <section id="tutorial" className="py-24 max-[980px]:py-20 max-[560px]:py-14 bg-white scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-center mb-4 text-[42px] max-[980px]:text-[36px] max-[560px]:text-[32px] text-[var(--text)] font-bold">
          Learn Vtrust in Minutes
        </h2>
        <p className="text-center text-[var(--muted)] text-lg max-w-[700px] mx-auto mb-14 leading-relaxed">
          Master the platform with our interactive step-by-step tutorials. Quick, easy, and designed to get you started fast.
        </p>

        {/* Mobile carousel */}
        <div className="hidden max-[560px]:flex items-center justify-center gap-2 mb-14">
          <button
            className="p-2 rounded-full bg-gray-100 text-gray-500 disabled:opacity-40"
            onClick={() => setCarouselIndex(i => Math.max(0, i - 1))}
            disabled={carouselIndex === 0}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <div className="flex-1 flex justify-center">
            {tutorials.slice(carouselIndex, carouselIndex + cardsPerPage).map((tutorial) => (
              <div
                key={tutorial.title}
                className={cardClass}
              >
                <div className="relative h-[200px] max-[980px]:h-[180px] max-[560px]:h-[160px] bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] overflow-hidden group">
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:scale-110">
                      <svg className="w-7 h-7 text-[#8b5cf6] ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5 max-[560px]:p-3">
                  <div className="inline-block px-3 py-1 rounded-xl text-xs font-semibold bg-[#d1fae5] text-[#047857] mb-3">
                    {tutorial.level}
                  </div>
                  <h4 className="text-lg max-[560px]:text-base font-semibold text-[var(--text)] mb-2 transition-colors duration-300">
                    {tutorial.title}
                  </h4>
                  <p className="text-sm max-[560px]:text-xs text-[var(--muted)] leading-relaxed mb-4 line-clamp-2">
                    {tutorial.description}
                  </p>
                  <div className="pt-4 border-t border-[#f0f0f0]">
                    <span className="text-sm font-semibold text-[#8b5cf6] transition-all duration-300">
                      Video Coming Soon →
                    </span>
                  </div>
                </div>
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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] max-[560px]:hidden gap-6 mb-14">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.title}
              className={cardClass}
            >
              <div className="relative h-[200px] max-[980px]:h-[180px] bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] overflow-hidden group">
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:scale-110">
                    <svg className="w-7 h-7 text-[#8b5cf6] ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5 max-[560px]:p-4">
                <div className="inline-block px-3 py-1 rounded-xl text-xs font-semibold bg-[#d1fae5] text-[#047857] mb-3">
                  {tutorial.level}
                </div>
                <h4 className="text-lg font-semibold text-[var(--text)] mb-2 transition-colors duration-300">
                  {tutorial.title}
                </h4>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 line-clamp-2">
                  {tutorial.description}
                </p>
                <div className="pt-4 border-t border-[#f0f0f0]">
                  <span className="text-sm font-semibold text-[#8b5cf6] transition-all duration-300">
                    Video Coming Soon →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://vtrust-dashboard.vercel.app/sign-in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] text-white font-semibold text-base rounded-xl shadow-[0_4px_16px_rgba(139,92,246,0.3)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(139,92,246,0.4)] hover:-translate-y-0.5"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
