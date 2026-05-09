'use client';

import React from 'react';

const CTABanner: React.FC = () => (
  <section className="w-full bg-background-main py-8 md:py-12">
    <div className="max-w-[1200px] mx-auto px-6 pt-10">
    <div
      className="relative rounded-3xl overflow-hidden flex items-end"
      style={{ height: 'clamp(380px,42vw,600px)' }}
    >
      {/* Background image */}
      <img
        src="/images/cta-banner.png"
        alt="Charming red house on a tiny island surrounded by calm water and lush greenery"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />

      {/* Gradient for text legibility */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.55) 100%)' }}
        aria-hidden="true"
      />

      {/* Text content */}
      <div className="relative z-10 p-8 sm:p-12 flex flex-col gap-[16.9px] max-w-[600px]">
      

        {/* Heading + desc */}
        <div className="flex flex-col gap-[14px]">
          <h2
            className="font-medium text-white m-0"
            style={{ fontFamily: '"Mona Sans","DM Sans",Inter,sans-serif', fontSize: 'clamp(28px,3.5vw,48px)', lineHeight: '52.8px', letterSpacing: '-1.92px' }}
          >
            Find your perfect<br />dream property easily
          </h2>
          <p className="font-inter text-base font-medium leading-6 tracking-[-0.32px] text-white/80 m-0">
            We help you find your perfect dream property easily, guiding every step with expert support.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="rounded-full border border-white/40 px-5 py-2.5 font-inter text-base font-medium tracking-[-0.32px] text-white no-underline transition-colors duration-150 hover:bg-white/15"
          >
            Contact us
          </a>
          <a
            href="#properties"
            className="inline-flex items-center gap-1.5 font-inter text-base font-medium tracking-[-0.32px] text-white no-underline hover:opacity-80 transition-opacity"
          >
            Browse properties
          </a>
        </div>
      </div>
    </div>
    </div>
  </section>
);

export default CTABanner;
