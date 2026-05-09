'use client';
interface IntroSectionProps {}

const IntroSection = ({}: IntroSectionProps) => {
  return (
    <section id="about-us" className="w-full bg-background-main py-8 md:py-12 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center w-full">
          {/* Badge Section */}
          <div className="flex flex-row items-center gap-2 w-full lg:w-[34%]">
            <div className="w-[6px] h-[6px] bg-[#000000] rounded-[3px] flex-shrink-0" />
            <span className="text-sm md:text-[16px] font-medium leading-sm text-[#000000] font-['Inter']">
              Introduction
            </span>
          </div>

          {/* Description */}
          <p className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[28px] sm:leading-[36px] md:leading-[40px] lg:leading-[44px] text-[#000000] font-['Mona_Sans'] w-full lg:flex-1">
            We provide modern real estate solutions helping
            agencies showcase properties attract buyers and
            close deals efficiently with trusted strategies innovative
            design seamless user experiences and exceptional
            client support across all platforms.
          </p>
        </div>
      </div>
    </section>
  )
}

export default IntroSection