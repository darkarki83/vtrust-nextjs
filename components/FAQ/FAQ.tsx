"use client";

import React, { useState } from 'react';

function MobileFAQ({ faqs }: { readonly faqs: ReadonlyArray<{ question: string; answer: string }> }) {
  const [startIdx, setStartIdx] = useState(0);
  const itemsPerPage = 2;
  const endIdx = startIdx + itemsPerPage;
  const visibleFaqs = faqs.slice(startIdx, endIdx);
  const canGoLeft = startIdx > 0;
  const canGoRight = endIdx < faqs.length;

  return (
    <div className="max-[560px]:block hidden">
      <div className="flex flex-col gap-4">
        {visibleFaqs.map((faq) => (
          <details key={faq.question} className="mb-0 p-5 border-2 border-[#e5e5e5] rounded-2xl bg-white transition-all duration-300 hover:border-[var(--brand)] hover:shadow-[0_4px_20px_rgba(139,92,246,0.1)] open:border-[var(--brand)]">
            <summary className="cursor-pointer font-semibold text-[16px] select-none text-[var(--text)] hover:text-[var(--brand)] px-2 py-3 rounded-xl">
              {faq.question}
            </summary>
            <p className="text-[var(--muted)] mt-3 pt-2 leading-relaxed text-[14px]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
      <div className="flex items-center justify-center gap-6 mt-4">
        <button
          className={`p-2 rounded-full bg-[#e5e5e5] text-[var(--brand)]${canGoLeft ? '' : ' opacity-50 cursor-not-allowed'}`}
          onClick={() => canGoLeft && setStartIdx(startIdx - itemsPerPage)}
          disabled={!canGoLeft}
          aria-label="Previous"
        >
          &#8592;
        </button>
        <button
          className={`p-2 rounded-full bg-[#e5e5e5] text-[var(--brand)]${canGoRight ? '' : ' opacity-50 cursor-not-allowed'}`}
          onClick={() => canGoRight && setStartIdx(startIdx + itemsPerPage)}
          disabled={!canGoRight}
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "What is a smart-payment contract?",
      answer: "It's a secure digital agreement that holds funds until specific conditions (like milestone approvals) are met. The contract runs automatically, so neither party can break the terms or take money unfairly."
    },
    {
      question: "Is VTrust custodial?",
      answer: "No. Funds are held in smart contracts on the blockchain. Vtrust cannot move, freeze, or access your funds—only the pre‑agreed contract terms control what happens."
    },
    {
      question: "Do I need to own crypto to use Vtrust?",
      answer: "Not necessarily. Vtrust supports multiple payment methods, including stablecoins and fiat‑on‑ramps, depending on your region and project settings."
    },
    {
      question: "How does KYC work?",
      answer: "Identity verification is handled through certified third‑party providers. Your documents are encrypted, and only your verification status is stored on Vtrust. This protects your privacy while reducing fraud."
    },
    {
      question: "What happens if I have a dispute?",
      answer: "Either party can open a dispute in‑app. A neutral mediator reviews the case and decides how locked funds should be split or refunded. The smart contract then follows this decision automatically."
    },
    {
      question: "What blockchains does Vtrust support?",
      answer: "You can start with your preferred mainnet, and Layer‑2 options are planned. Contact our team for specific chain availability in your region."
    },
    {
      question: "Can I integrate Vtrust into my own platform?",
      answer: "Yes. Vtrust offers an open API for marketplaces, agencies, and freelance platforms that want to add secure payment contracts to their ecosystem."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#fafafa] scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-center mb-14 text-[42px] font-bold text-[var(--text)]">FAQ</h2>
        {/* Mobile: show 2 items, reveal more on button click */}
        <MobileFAQ faqs={faqs} />
        {/* Desktop/tablet grid */}
        <div className="grid grid-cols-2 max-[980px]:grid-cols-1 max-[560px]:hidden gap-5 max-w-[1000px] mx-auto">
          {faqs.map((faq) => (
            <details key={faq.question} className="p-6 border-2 border-[#e5e5e5] rounded-2xl bg-white transition-all duration-300 hover:border-[var(--brand)] hover:shadow-[0_4px_20px_rgba(139,92,246,0.1)] open:border-[var(--brand)]">
              <summary className="cursor-pointer font-semibold text-[17px] select-none text-[var(--text)] hover:text-[var(--brand)]">
                {faq.question}
              </summary>
              <p className="text-[var(--muted)] mt-4 pt-3 leading-relaxed text-[15px]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
