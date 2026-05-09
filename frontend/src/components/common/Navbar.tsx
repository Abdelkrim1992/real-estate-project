'use client';

import React, { useState } from 'react';

const NAV_LINKS = [
  { label: 'About us', href: '#about-us' },
  { label: 'Properties', href: '#properties' },
  { label: 'Agents', href: '#contact' },
  { label: 'Services', href: '#services' },
  { label: 'Blogs', href: '#blogs' },
] as const;

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background-main">
      <div className="max-w-[1200px] mx-auto px-6">
        <nav className="flex items-center justify-between h-[84px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0" aria-label="Estatix home">
            <img
              src="/images/logo.svg"
              alt="Estatix logo mark"
              className="w-7 h-7"
            />
            <span
              className="font-mona-sans text-[28px] font-medium leading-[33.6px] tracking-[-0.28px] text-black"
              style={{ fontFamily: '"Mona Sans", "DM Sans", Inter, sans-serif' }}
            >
              Estatix
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-[32px]">
            <ul className="flex items-center gap-5 list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="nav-link font-inter text-base font-medium tracking-[-0.32px] text-black opacity-75 no-underline hover:opacity-100 transition-opacity"
                    style={{ opacity: link.label === 'Properties' ? 1 : undefined }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 border-l border-black/10 pl-8">
              <a
                href="/contact"
                className="btn-black inline-flex items-center justify-center bg-black text-white font-inter text-base font-medium tracking-[-0.32px] rounded-full px-[18px] py-[10px] no-underline hover:bg-black/80 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-black transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
            />
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="mobile-nav md:hidden bg-[#f2f1e8] border-t border-black/5 px-6 pb-6">
          <ul className="flex flex-col gap-4 mt-4 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-inter text-base font-medium tracking-[-0.32px] text-black opacity-75 no-underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-black/5">
            <a
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center font-inter text-base font-medium tracking-[-0.32px] text-black border border-black/10 rounded-full py-3"
            >
              Sign in
            </a>
            <a
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center bg-black text-white font-inter text-base font-medium tracking-[-0.32px] rounded-full py-3"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
