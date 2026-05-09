'use client';

import React from 'react';
import { featuredProperty } from '../data';

const HeroSection: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 pt-10 pb-0 flex flex-col gap-16">
      {/* Heading row */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-0">
        {/* Left: badge + heading */}
        <div className="flex flex-col gap-[14px] max-w-[540px]">
          <div className="flex items-center gap-2">
            <img src="/images/img_vector_black_900_8x10.svg" alt="" className="w-[6px] h-[6px]" />
            <span className="font-inter text-base font-medium tracking-[-0.32px] text-black">
              Properties
            </span>
          </div>
          <h1
            className="font-mona-sans text-[40px] sm:text-[48px] lg:text-[56px] font-medium text-black"
            style={{
              fontFamily: '"Mona Sans", "DM Sans", Inter, sans-serif',
              lineHeight: '1',
              letterSpacing: '-2.24px',
            }}
          >
            Explore top real
            <br />
            estate listings now
          </h1>
        </div>

        {/* Right: description + CTA */}
        <div className="flex flex-col gap-3 max-w-[480px] lg:pt-6">
          <p className="font-inter text-[20px] font-medium leading-[32px] tracking-[-0.80px] text-[#5b5b5b] m-0">
            We showcase full property information, guiding
            <br className="hidden sm:block" />
            buyers to choose their perfect homes effortlessly.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-inter text-base font-medium tracking-[-0.32px] text-black no-underline hover:opacity-70 transition-opacity w-fit"
          >
            Contact us
            <img src="/images/img_div_framer_jbkgu_mask_group_black_900.svg" alt="" className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>

      {/* Featured property card */}
      <div className="relative rounded-[20px] overflow-hidden w-full" style={{ height: 'clamp(360px, 45vw, 650px)' }}>
        {/* Background image */}
        <img
          src={featuredProperty.image}
          alt={featuredProperty.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Info overlay card */}
        <div
          className="absolute bottom-6 left-6 right-6 sm:right-auto sm:w-[min(400px,90%)] bg-[#fffff2] rounded-[18px] p-6 flex flex-col gap-3"
          role="region"
          aria-label="Featured property details"
        >
          {/* Badge */}
          <span className="self-start font-inter text-sm font-medium tracking-[-0.56px] leading-[16.8px] text-black border border-black/10 rounded-full px-3 py-[5px]">
            {featuredProperty.type}
          </span>

          {/* Name + description */}
          <div className="flex flex-col gap-[6px]">
            <h2 className="font-inter text-[26px] font-medium tracking-[-1.04px] text-black m-0 leading-tight">
              {featuredProperty.name}
            </h2>
            <p className="font-inter text-base font-medium leading-6 tracking-[-0.32px] text-[#5b5b5b] m-0 line-clamp-2">
              {featuredProperty.description}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-black/20" />

          {/* Stats */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-black/10 px-[10px] py-1 font-inter text-sm font-medium leading-[16.8px] tracking-[-0.56px] text-black">
              <img src="/images/bed-white.svg" alt="bedrooms" className="w-[15px] h-[11px]" />
              {featuredProperty.beds}
            </span>
            <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-black/10 px-[10px] py-1 font-inter text-sm font-medium leading-[16.8px] tracking-[-0.56px] text-black">
              <img src="/images/bath-white.svg" alt="bathrooms" className="w-[15px] h-3" />
              {featuredProperty.baths}
            </span>
            <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-black/10 px-[10px] py-1 font-inter text-sm font-medium leading-[16.8px] tracking-[-0.56px] text-black">
              <img src="/images/area-white.svg" alt="area" className="w-[11px] h-[11px]" />
              {featuredProperty.area}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
