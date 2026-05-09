'use client';
import React from 'react';
import FAQ from './components/FAQSection';
import Footer from '../../components/common/Footer';

const propertyDetails = [
  { icon: '/images/bed-dark.svg', label: 'Bedroom', value: '3' },
  { icon: '/images/bath-dark.svg', label: 'Bathroom', value: '2' },
  { icon: '/images/area-dark.svg', label: 'Size', value: '3,800 sq.ft' },
  { icon: '/images/dot-dark.svg', label: 'Parking Lots', value: '2' },
  { icon: '/images/headset.svg', label: 'Built year', value: '2024' },
  { icon: '/images/plus.svg', label: 'Floors', value: '3' },
  { icon: '/images/img_1092509595.svg', label: 'Location', value: 'Dubai' },
];

const galleryImages = [
  '/images/img_component_1.svg',
  '/images/img_4033599021.svg',
  '/images/img_942143898.svg',
];

function PropertyCard() {
  return (
    <div className="bg-[#fffff2] rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {propertyDetails.map((d, i) => (
          <React.Fragment key={d.label}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={d.icon} alt={d.label} className="w-4 h-4" />
                <span className="font-['Inter',sans-serif] text-[14px] font-medium tracking-[-0.56px] leading-[16.8px] text-black">
                  {d.label}
                </span>
              </div>
              <span className="font-['Inter',sans-serif] text-[14px] font-medium tracking-[-0.56px] leading-[16.8px] text-black">
                {d.value}
              </span>
            </div>
            {i < propertyDetails.length - 1 && (
              <div className="h-px bg-black/10" />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="h-px bg-black/10 mt-2" />
      <button className="w-full bg-black text-white font-['Inter',sans-serif] text-base font-medium tracking-[-0.32px] rounded-full py-[14px] hover:bg-black/80 transition-colors duration-200 mt-1">
        Book A Property
      </button>
    </div>
  );
}

export default function PropertyDetails() {
  return (
    <div className="bg-[#f2f1e8] min-h-screen">
      <main>
        {/* ── HERO SECTION ── */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-[144px] pt-10 pb-0">
          {/* Go Back */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 mb-5 group"
            aria-label="Go back"
          >
            <img src="/images/img_div_framer_13hx11s_container.svg" alt="" className="w-[18px] h-[18px] group-hover:opacity-60 transition-opacity" />
            <span className="font-['Inter',sans-serif] text-base font-medium tracking-[-0.32px] text-black group-hover:opacity-60 transition-opacity">
              Go Back
            </span>
          </button>

          {/* Desktop: grid layout — left content + right card spanning rows */}
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_350px] lg:gap-x-8">
            {/* Left top: title, badge, description, price, agent */}
            <div className="flex flex-col gap-[18px] mb-5 lg:mb-0">
              {/* Title + badge */}
              <div className="flex items-baseline gap-4 flex-wrap">
                <h1 className="font-['Mona_Sans','DM_Sans',sans-serif] text-[48px] sm:text-[56px] font-medium tracking-[-2.24px] leading-[56px] text-black">
                  Palm residence
                </h1>
                <span className="font-['Inter',sans-serif] text-[14px] font-medium tracking-[-0.56px] text-black bg-[#fffff2] rounded-full px-3 py-1">
                  For Rent
                </span>
              </div>

              {/* Subtitle */}
              <p className="font-['Inter',sans-serif] text-[20px] font-medium tracking-[-0.8px] leading-8 text-[#5b5b5b] max-w-[650px]">
                Elegant city residence designed for premium living, strong rental demand, and long-term value growth.
              </p>

              {/* Price + agent */}
              <div className="flex items-center gap-4 flex-wrap mt-1">
                <div className="flex items-center gap-2">
                  <img src="/images/img_vector_black_900.svg" alt="Price" className="w-4 h-[10px]" />
                  <span className="font-['Inter',sans-serif] text-base font-medium tracking-[-0.32px] text-black">
                    $6,950,000.00
                  </span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                <div className="flex items-center gap-2">
                  <img
                    src="/images/img_social_link.svg"
                    alt="Sophia martinez"
                    className="w-[34px] h-[34px] rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-['Inter',sans-serif] text-base font-medium tracking-[-0.32px] text-black leading-tight">
                      Sophia martinez
                    </span>
                    <span className="font-['Inter',sans-serif] text-[12px] font-medium tracking-[-0.36px] leading-[14.4px] text-[#5b5b5b]">
                      Property Agent
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Property card — appears between hero text and image on mobile */}
            {/* Mobile: normal flow below text */}
            <div className="lg:hidden mb-6">
              <PropertyCard />
            </div>

            {/* Hero image (spans left column on desktop, row 2) */}
            <div className="lg:col-start-1 lg:row-start-2">
              <img
                src="/images/img_component_1.svg"
                alt="Palm Residence — a five-story modern brick building surrounded by lush greenery"
                className="w-full h-[350px] sm:h-[500px] lg:h-[650px] object-cover rounded-[20px]"
              />
            </div>

            {/* Desktop property card — spans rows 1 and 2 */}
            <div className="hidden lg:block lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-start lg:sticky lg:top-28">
              <PropertyCard />
            </div>
          </div>
        </section>

        {/* ── DESCRIPTION SECTION ── */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-[144px] py-14">
          <div className="max-w-[750px] flex flex-col gap-7">
            <p className="font-['Inter',sans-serif] text-base font-medium tracking-[-0.32px] leading-6 text-[#5b5b5b]">
              Palm Residence offers a refined urban lifestyle with balanced interiors, modern finishes, and excellent
              connectivity. Designed for professionals and families alike, this property delivers comfort, efficiency,
              and investment stability. Its strategic location supports daily convenience, strong rental appeal, and
              consistent long-term market performance across residential demand cycles.
            </p>

            <div>
              <h2 className="font-['Inter',sans-serif] text-[26px] font-medium tracking-[-1.04px] text-black mb-4">
                Urban comfort with style
              </h2>
              <p className="font-['Inter',sans-serif] text-base font-medium tracking-[-0.32px] leading-6 text-[#5b5b5b]">
                This residence blends smart layouts with contemporary aesthetics to enhance everyday living.
                Natural light, open circulation, and functional spaces create a calm yet productive environment.
                Nearby retail, dining, schools, and transport links add convenience, making this home suitable for
                modern lifestyles focused on accessibility, comfort, efficiency, and long-term satisfaction.
              </p>
            </div>

            <div>
              <h2 className="font-['Inter',sans-serif] text-[26px] font-medium tracking-[-1.04px] text-black mb-4">
                Designed for lasting value
              </h2>
              <p className="font-['Inter',sans-serif] text-base font-medium tracking-[-0.32px] leading-6 text-[#5b5b5b]">
                Built with quality materials and thoughtful planning, the property supports durability and low
                maintenance. Secure parking, efficient utilities, and adaptable interiors provide flexibility for tenants
                or owners. These features help protect asset value while supporting rental income potential, future
                resale opportunities, and sustained market relevance.
              </p>
            </div>

            {/* Previous / Next */}
            <div className="flex items-center justify-between mt-1">
              <button className="flex items-center gap-2 group hover:opacity-70 transition-opacity duration-200">
                <img src="/images/img_div_framer_13hx11s_container.svg" alt="" className="w-[10px] h-[10px]" />
                <span className="font-['Inter',sans-serif] text-base font-medium tracking-[-0.32px] text-black">
                  Previous
                </span>
              </button>
              <button className="flex items-center gap-2 group hover:opacity-70 transition-opacity duration-200">
                <span className="font-['Inter',sans-serif] text-base font-medium tracking-[-0.32px] text-black">
                  Next
                </span>
                <img src="/images/img_div_framer_1ulbx9a_container.svg" alt="" className="w-[10px] h-[10px]" />
              </button>
            </div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-[144px] pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-2xl aspect-[370/350]">
                <img
                  src={src}
                  alt={`Property view ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <FAQ />

        {/* ── CTA BANNER ── */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-[144px] pb-20">
          <div className="relative rounded-[24px] overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px]">
            {/* Background image */}
            <img
              src="/images/img_component_1.svg"
              alt="Find your perfect dream property"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end px-8 sm:px-12 pb-10 sm:pb-14 max-w-[650px]">
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/img_vector_8x10.svg" alt="" className="w-1.5 h-1.5" />
                <span className="font-['Inter',sans-serif] text-base font-medium tracking-[-0.32px] text-white">
                  Get started
                </span>
              </div>
              <h2 className="font-['Mona_Sans','DM_Sans',sans-serif] text-[36px] sm:text-[48px] font-medium tracking-[-1.92px] leading-[1.1] text-white mb-4">
                Find your perfect dream property easily
              </h2>
              <p className="font-['Inter',sans-serif] text-base font-medium tracking-[-0.32px] leading-6 text-white/80 mb-8 max-w-[480px]">
                We help you find your perfect dream property easily, guiding every step with expert support.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <button className="font-['Inter',sans-serif] text-base font-medium tracking-[-0.32px] text-white border border-white/50 rounded-full px-[18px] py-[10px] hover:bg-white/10 transition-colors duration-200">
                  Contact us
                </button>
                <button className="flex items-center gap-2 font-['Inter',sans-serif] text-base font-medium tracking-[-0.32px] text-white hover:opacity-70 transition-opacity duration-200">
                  Browse properties
                  <img src="/images/img_div_framer_jbkgu_mask_group.svg" alt="" className="w-[18px] h-[18px]" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <Footer />
      </main>
    </div>
  );
}
