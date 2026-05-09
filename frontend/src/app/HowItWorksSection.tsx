'use client';
import { useState } from 'react';

interface StepContent {
  label: string;
  title: string;
  description: string;
}

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: StepContent[] = [
    {
      label: 'Step 01',
      title: 'Explore listings',
      description:
        'We help you browse and explore a wide range of premium properties tailored to your lifestyle, preferences, and budget, providing detailed information and high-quality visuals for confident decision-making.',
    },
    {
      label: 'Step 02',
      title: 'Schedule a visit',
      description:
        'Connect with our certified agents who guide you through property visits, answer your questions, and help you evaluate each property based on your specific needs, priorities, and long-term goals.',
    },
    {
      label: 'Step 03',
      title: 'Close the deal',
      description:
        'Our expert team handles all the paperwork, negotiations, and financial coordination to ensure a seamless and secure transaction from initial offer to final handover with full peace of mind.',
    },
  ];

  return (
    <section className="w-full bg-background-main py-8 md:py-12 lg:py-20">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
          {/* Left Content */}
          <div className="flex flex-col gap-3 w-full lg:flex-1">
            <div className="flex flex-row items-center gap-2">
              <div className="w-[6px] h-[6px] bg-[#000000] rounded-[3px]" />
              <span className="text-sm md:text-[16px] font-medium leading-sm text-[#000000] font-['Inter']">
                How it works
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-medium leading-[34px] sm:leading-[42px] md:leading-[48px] lg:leading-[52px] text-[#000000] font-['Mona_Sans']">
              Find and buy your
              <br />
              properties without hassle
            </h2>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[32%]">
            <p className="text-sm md:text-[16px] font-medium leading-md text-text-secondary font-['Inter']">
              We guide you through each step helping
              <br className="hidden sm:block" />
              you find and buy your properties easily.
            </p>
          </div>
        </div>

        {/* Steps Content */}
        <div
          className="relative w-full rounded-[20px] overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[600px] p-6 sm:p-8 md:p-12 lg:p-8"
          style={{
            backgroundImage:
              "url('/images/img_a_serene_sunset_over_a_tranquil_lake_with_a_cozy_white_house_in_the_foreground_mountains_and_fluffy_clouds_enhance_the_peaceful_warm_scene.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="relative z-10 flex flex-col gap-[52px] sm:gap-[72px] md:gap-[92px] lg:gap-[104px] max-w-[800px]">
            {/* Step Tabs */}
            <div className="flex flex-row flex-wrap gap-1 sm:gap-2">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`px-4 py-2 text-sm md:text-[16px] font-medium leading-sm font-['Inter'] transition-all duration-200 rounded-md ${
                    activeStep === index
                      ? 'text-[#000000] opacity-100 underline underline-offset-4'
                      : 'text-[#000000] opacity-50 hover:opacity-75'
                  }`}
                  aria-pressed={activeStep === index}
                >
                  {step.label}
                </button>
              ))}
            </div>

            {/* Step Content */}
            <div
              key={activeStep}
              className="flex flex-col gap-[14px] bg-background-cream rounded-[20px] p-6 sm:p-7 md:p-[28px] animate-fade-in"
            >
              <h3 className="text-[22px] sm:text-[26px] md:text-[30px] font-medium leading-[32px] sm:leading-[38px] md:leading-[43px] text-[#000000] font-['Mona_Sans']">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm md:text-[16px] font-medium leading-md text-text-secondary font-['Inter']">
                {steps[activeStep].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
