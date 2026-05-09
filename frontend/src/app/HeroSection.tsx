'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Feature {
  icon: React.ReactNode;
  text: string;
}

const SmartListingsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] flex-shrink-0">
    <rect x="2" y="2" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5"/>
    <rect x="10" y="2" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5"/>
    <rect x="2" y="10" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5"/>
    <rect x="10" y="10" width="6" height="6" rx="1" stroke="white" strokeWidth="1.5"/>
  </svg>
);

const FastPerformanceIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] flex-shrink-0">
    <path d="M9 2L11.2 7.2L17 8L12.8 12L14 18L9 15.2L4 18L5.2 12L1 8L6.8 7.2L9 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const ModernDesignIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] flex-shrink-0">
    <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.5"/>
    <path d="M9 5V9L12 11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const EasyCustomizationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] flex-shrink-0">
    <line x1="2" y1="4.5" x2="16" y2="4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="11" cy="4.5" r="2" fill="#000000" stroke="white" strokeWidth="1.5"/>
    <line x1="2" y1="9" x2="16" y2="9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="6" cy="9" r="2" fill="#000000" stroke="white" strokeWidth="1.5"/>
    <line x1="2" y1="13.5" x2="16" y2="13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="13" cy="13.5" r="2" fill="#000000" stroke="white" strokeWidth="1.5"/>
  </svg>
);

const HeroSection = () => {
  const features: Feature[] = [
    { icon: <SmartListingsIcon />, text: 'Smart listings' },
    { icon: <FastPerformanceIcon />, text: 'Fast performance' },
    { icon: <ModernDesignIcon />, text: 'Modern design' },
    { icon: <EasyCustomizationIcon />, text: 'Easy customization' },
  ];

  return (
    <section
      id="top"
      className="w-full relative overflow-hidden min-h-[100svh] flex flex-col"
      style={{
        backgroundImage:
          "url('/images/img_grand_stone_building_with_glowing_windows_under_a_deep_blue_twilight_dramatic_lighting_casts_a_mysterious_elegant_ambiance_surrounded_by_shadowy_trees.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(317deg,#00000000_0%,#00000033_100%)]" />

      <div className="relative z-10 w-full flex-1 flex flex-col max-w-[1200px] mx-auto px-6 pt-10 py-8 md:py-12 lg:py-16">
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-[18px] w-full md:w-3/4 lg:w-[44%] mt-auto mb-20 md:mb-32 lg:mb-40 flex-1 justify-end"
        >
          {/* Badge */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-[6px] h-[6px] bg-white rounded-[3px] flex-shrink-0" />
            <span className="text-sm md:text-[16px] font-medium leading-sm text-white font-['Inter']">
              Top Rated - Real Estate Agency
            </span>
          </div>

          {/* Heading and Description */}
          <div className="flex flex-col gap-[14px]">
            <h1 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-medium leading-[38px] sm:leading-[48px] md:leading-[52px] lg:leading-[56px] text-white font-['Mona_Sans']">
              A modern way to
              <br />
              sell properties faster
            </h1>
            <p className="text-base sm:text-lg md:text-[20px] font-medium leading-md sm:leading-lg md:leading-xl text-white font-['Inter']">
              We help real estate agencies showcase listings
              <br className="hidden sm:block" />
              attract buyers and close deals faster online
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-[18px] py-[10px] bg-[#ffffff19] text-white rounded-[22px] border border-[#ffffff3f] hover:bg-[#ffffff33] transition-all duration-200 active:scale-95 text-sm md:text-[16px] font-medium leading-sm font-['Inter'] backdrop-blur-sm"
            >
              Contact us
            </Link>
            <Link href="/services" className="flex flex-row items-center gap-[16px] group">
              <span className="text-sm md:text-[16px] font-medium leading-sm text-white font-['Inter'] group-hover:opacity-80 transition-opacity">
                What we do
              </span>
              <Image
                src="/images/img_div_framer_jbkgu_mask_group.svg"
                alt="Arrow icon"
                width={18}
                height={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </motion.div>

        {/* Features Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap md:flex-nowrap gap-[10px] md:gap-[20px] lg:gap-[40px] items-start"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex flex-row items-center gap-2 w-full sm:w-auto">
              {feature.icon}
              <span className="text-sm md:text-[16px] font-medium leading-sm text-white font-['Inter']">
                {feature.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
