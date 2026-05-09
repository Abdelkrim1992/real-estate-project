'use client';
import Image from'next/image';

interface Service {
  image: string;
  title: string;
  description: string;
  span: 'single' | 'double';
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      image: '/images/img_a_man_and_a_woman.png',
      title: 'Property buying',
      description: 'We help clients find and buy their dream homes easily with clear guidance and full support.',
      span: 'single'
    },
    {
      image: '/images/img_modern_two_story_360x566.png',
      title: 'Property selling',
      description: 'We assist homeowners to sell their properties quickly, safely, and at the best possible price.',
      span: 'single'
    },
    {
      image: '/images/img_woman_in_a_beige.png',
      title: 'Property management',
      description: 'We manage properties efficiently, handling tenants, maintenance, and all day-to-day tasks professionally.',
      span: 'double'
    },
  ]

  return (
    <section id="services" className="w-full bg-background-main py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8 mb-8 md:mb-12">
          {/* Left Content */}
          <div className="flex flex-col gap-3 w-full lg:flex-1">
            <div className="flex flex-row items-center gap-2">
              <div className="w-[6px] h-[6px] bg-[#000000] rounded-[3px]" />
              <span className="text-sm md:text-[16px] font-medium leading-sm text-[#000000] font-['Inter']">
                Services
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-medium leading-[34px] sm:leading-[42px] md:leading-[48px] lg:leading-[52px] text-[#000000] font-['Mona_Sans']">
              Reliable support for
              <br />
              buying and selling
            </h2>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[32%]">
            <p className="text-sm md:text-[16px] font-medium leading-md text-text-secondary font-['Inter']">
              We provide expert real estate services helping
              <br className="hidden sm:block" />
              clients buy, sell, and manage properties efficiently.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Left Column - Two services stacked */}
          <div className="flex flex-col gap-5 w-full lg:w-1/2">
            {services.slice(0, 2).map((service, index) => (
              <div
                key={index}
                className="relative w-full aspect-[566/360] rounded-[16px] overflow-hidden group"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-background-cream m-[14px] rounded-[14px] p-[14px]">
                  <h3 className="text-[20px] sm:text-[24px] md:text-[26px] font-medium leading-xl text-[#000000] font-['Inter'] mb-[10px]">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-[16px] font-medium leading-md text-text-secondary font-['Inter']">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Single large service */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[566/740] rounded-[16px] overflow-hidden group">
              <Image
                src={services[2].image}
                alt={services[2].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-background-cream m-[14px] rounded-[14px] p-[14px]">
                <h3 className="text-[20px] sm:text-[24px] md:text-[26px] font-medium leading-xl text-[#000000] font-['Inter'] mb-[10px]">
                  {services[2].title}
                </h3>
                <p className="text-sm md:text-[16px] font-medium leading-md text-text-secondary font-['Inter']">
                  {services[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection