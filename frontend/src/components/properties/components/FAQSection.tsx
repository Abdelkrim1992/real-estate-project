'use client';

import React, { useState } from 'react';
import { faqs } from '@/data/properties';

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<number>(1);

  return (
    <section id="blogs" className="w-full bg-background-main py-8 md:py-12">
      
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6">
        <div className="flex flex-col gap-[10.9px] max-w-[540px]">
          <div className="flex items-center gap-2">
            <img src="/images/img_vector_black_900_8x10.svg" alt="" className="w-[6px] h-[6px]" />
            <span className="font-inter text-base font-medium tracking-[-0.32px] text-black">FAQ</span>
          </div>
          <h2
            className="font-medium text-black m-0"
            style={{ fontFamily: '"Mona Sans","DM Sans",Inter,sans-serif', fontSize: 'clamp(32px,3.5vw,48px)', lineHeight: '52.8px', letterSpacing: '-1.92px' }}
          >
            Quick answers to<br />common concerns
          </h2>
        </div>
        <p className="font-inter text-base font-medium leading-6 tracking-[-0.32px] text-[#5b5b5b] max-w-[380px] m-0">
          We provide clear answers to common questions helping clients understand our services easily.
        </p>
      </div>

      {/* Content row */}
      <div className="flex flex-col lg:flex-row gap-[54px] mt-10">
        {/* Left guidance card */}
        <div className="flex-shrink-0 lg:w-[348px] bg-[#fffff2] max-h-[300px] rounded-2xl p-[30px] flex flex-col gap-[14px]">
          <div className="w-10 h-10 rounded-full bg-[#f2f1e8] flex items-center justify-center">
            <img src="/images/img_component_1.svg" alt="" className="w-5 h-5" />
          </div>
          <p className="font-inter text-base font-medium leading-6 tracking-[-0.32px] text-[#5b5b5b] m-0">
            Need extra guidance? Book your free personalized call now.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="#contact"
              className="flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-center font-inter text-base font-medium tracking-[-0.32px] text-white no-underline transition-[background-color,transform] duration-150 hover:bg-[#1a1a1a] active:scale-[0.98]"
            >
              Contact us
            </a>
            <p className="font-inter text-base font-medium tracking-[-0.32px] text-[#5b5b5b] m-0">
              or email us at{' '}
              <a href="mailto:helloestatix@gmail.com" className="text-black no-underline hover:underline">
                helloestatix@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Right accordion */}
        <div className="flex-1 flex flex-col">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id}>
                <div className={`rounded-lg transition-colors duration-150 hover:bg-black/[0.02] ${isOpen ? 'pb-2' : ''}`}>
                  <button
                    className="w-full flex items-center justify-between py-6 text-left bg-transparent border-0 cursor-pointer gap-4"
                    onClick={() => setOpenId(isOpen ? -1 : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="font-inter text-[20px] font-medium leading-tight tracking-[-0.80px] text-black">
                      {faq.question}
                    </span>
                    <span
                      className="flex-shrink-0 w-[26px] h-[26px] rounded-full flex items-center justify-center transition-transform duration-200"
                      style={{ border: isOpen ? '1.17px solid #000' : '1.17px solid transparent' }}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <span className="block w-[11px] h-[1.17px] bg-black rounded-full" />
                      ) : (
                        <img src="/images/img_1092509595.svg" alt="" className="w-[11px] h-[11px]" />
                      )}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${faq.id}`}
                    className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
                    style={{ maxHeight: isOpen ? '200px' : '0', opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="font-inter text-base font-medium leading-6 tracking-[-0.32px] text-[#5b5b5b] m-0 pb-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
                {idx < faqs.length - 1 && (
                  <div className="h-px w-full bg-black/[0.08]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
};

export default FAQSection;
