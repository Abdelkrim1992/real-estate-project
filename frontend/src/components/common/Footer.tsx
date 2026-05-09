'use client';

import React from 'react';

const SOCIAL_LINKS = [
  { icon: '/images/instagram.svg', label: 'Instagram', href: '#' },
  { icon: '/images/linkedin.svg',  label: 'LinkedIn',  href: '#' },
  { icon: '/images/twitter.svg',   label: 'X (Twitter)', href: '#' },
  { icon: '/images/dribbble.svg',  label: 'Dribbble',  href: '#' },
] as const;

const QUICK_LINKS = ['Home', 'About us', 'Services', 'Agents', 'Contact us', '404'] as const;
const CMS_PAGES   = ['Properties', 'Blogs'] as const;

const Footer: React.FC = () => (
  <section className="bg-background-main">
    <footer id="contact" className="max-w-[1200px] mx-auto px-6 pt-16 pb-0">
    {/* Social + email row */}
    <div className="flex items-center justify-between flex-wrap gap-4 pb-8">
      <div className="flex items-center gap-[10px]">
        {SOCIAL_LINKS.map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="social-icon w-9 h-9 rounded-full border border-black/10 flex items-center justify-center hover:border-black/30 transition-colors"
          >
            <img src={icon} alt={label} className="w-5 h-5" />
          </a>
        ))}
      </div>
      <a
        href="mailto:helloestatix@gmail.com"
        className="no-underline hover:opacity-70 transition-opacity"
        style={{ fontFamily: '"Mona Sans","DM Sans",Inter,sans-serif', fontSize: 'clamp(18px,2.2vw,30px)', fontWeight: 500, letterSpacing: '-1.05px', lineHeight: '36px', color: '#000' }}
      >
        helloestatix@gmail.com
      </a>
    </div>

    {/* Divider */}
    <div className="h-px w-full bg-black/10" />

    {/* Footer grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-10 pb-12">
      {/* Brand column */}
      <div className="flex flex-col gap-[14px] lg:col-span-1">
        <a href="#" className="flex items-center gap-2 no-underline w-fit">
          <img src="/images/logo.svg" alt="Estatix" className="w-7 h-7" />
          <span style={{ fontFamily: '"Mona Sans","DM Sans",Inter,sans-serif', fontSize: '28px', fontWeight: 500, letterSpacing: '-0.28px', lineHeight: '33.6px', color: '#000' }}>
            Estatix
          </span>
        </a>
        <p className="font-inter text-base font-medium leading-6 tracking-[-0.32px] text-[#5b5b5b] m-0">
          A modern property template built to drive growth and achieve superior results.
        </p>
        <a
          href="#contact"
          className="btn-black self-start inline-flex items-center justify-center bg-black text-white font-inter text-base font-medium tracking-[-0.32px] rounded-full px-5 py-2.5 no-underline"
        >
          Contact us
        </a>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col gap-[14px]">
        <h3 className="font-inter text-[18px] font-medium tracking-[-0.72px] text-black m-0">Quick Links</h3>
        <ul className="flex flex-col gap-2 list-none m-0 p-0">
          {QUICK_LINKS.map((link) => (
            <li key={link}>
              <a href="#" className="font-inter text-base font-medium tracking-[-0.32px] text-black opacity-60 no-underline hover:opacity-100 transition-opacity">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* CMS Pages */}
      <div className="flex flex-col gap-[14px]">
        <h3 className="font-inter text-[18px] font-medium tracking-[-0.72px] text-black m-0">CMS Pages</h3>
        <ul className="flex flex-col gap-2 list-none m-0 p-0">
          {CMS_PAGES.map((page) => (
            <li key={page}>
              <a href="#" className="font-inter text-base font-medium tracking-[-0.32px] text-black opacity-60 no-underline hover:opacity-100 transition-opacity">
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Get in touch */}
      <div className="flex flex-col gap-[14px]">
        <h3 className="font-inter text-[18px] font-medium tracking-[-0.72px] text-black m-0">Get in touch</h3>
        <div className="flex flex-col gap-2">
          <a href="tel:+001234567890" className="font-inter text-base font-medium tracking-[-0.32px] text-black opacity-60 no-underline hover:opacity-100 transition-opacity">
            +001 234 567 890
          </a>
          <span className="font-inter text-base font-medium tracking-[-0.32px] text-black opacity-60">
            Doha, Qatar
          </span>
        </div>
      </div>
    </div>
  </footer>
  </section>
);

export default Footer;
