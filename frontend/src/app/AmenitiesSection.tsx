'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Amenity {
  icon: string;
  title: string;
  description: string;
}

const AmenitiesSection = () => {
  const amenities: Amenity[] = [
    {
      icon: '/images/img_nrlhkr0u0ruvgbh.png',
      title: 'Swimming pool',
      description: 'We offer a luxurious swimming pool designed for relaxation, fitness, and family enjoyment safely.'
    },
    {
      icon: '/images/img_xhss97soyf1ckah.png',
      title: 'Gym facility',
      description: 'State-of-the-art gym equipped with modern machines to support your active lifestyle daily efficiently.'
    },
    {
      icon: '/images/img_k3zgcrzpoxj5ql0.png',
      title: 'Kids playground',
      description: 'Safe and fun playground area for children, promoting outdoor activities and healthy playtime.'
    },
    {
      icon: '/images/img_bwczqxdbdxmois3xbxui7pmd8_png.png',
      title: 'Parking space',
      description: 'Secure and ample parking space available for residents and their visiting guests conveniently.'
    },
    {
      icon: '/images/img_3xdognaxpqqcbkc.png',
      title: 'Community lounge',
      description: 'Elegant community lounge providing a comfortable space to socialize, relax, and host gatherings.'
    },
    {
      icon: '/images/img_vkfclbzlrynzrn9.png',
      title: 'Garden area',
      description: 'Beautiful landscaped gardens designed for walking, relaxation, and enjoying nature within the property.'
    },
  ]

  const images = [
    '/images/img_single_story_house.png',
    '/images/img_aerial_view_of_a_370x330.png',
    '/images/img_a_modern_white_suv.png',
    '/images/img_coastal_luxury_home.png',
  ]

  return (
    <section className="w-full bg-background-main py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8 mb-8 md:mb-12">
          {/* Left Content */}
          <div className="flex flex-col gap-3 w-full lg:flex-1">
            <div className="flex flex-row items-center gap-2">
              <div className="w-[6px] h-[6px] bg-[#000000] rounded-[3px]" />
              <span className="text-sm md:text-[16px] font-medium leading-sm text-[#000000] font-['Inter']">
                Amenities
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-medium leading-[34px] sm:leading-[42px] md:leading-[48px] lg:leading-[52px] text-[#000000] font-['Mona_Sans']">
              Modern amenities for
              <br />
              comfortable lifestyles
            </h2>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[32%]">
            <p className="text-sm md:text-[16px] font-medium leading-md text-text-secondary font-['Inter']">
              We provide modern amenities designed to enhance
              <br className="hidden sm:block" />
              comfort, convenience, and living experiences.
            </p>
          </div>
        </div>

        {/* Automatic Moving Images Row */}
        <div className="relative w-full overflow-hidden mb-8 md:mb-12 py-4">
          <motion.div 
            className="flex flex-row gap-[18px] w-fit"
            animate={{
              x: [0, -1168], // Precise width of one set of images + gap
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* Double the images for seamless looping */}
            {[...images, ...images].map((image, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 rounded-[16px] overflow-hidden ${
                  index % images.length === 0 ? 'w-[290px]' : index % images.length === 3 ? 'w-[146px]' : 'w-[330px]'
                } h-[370px] shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <Image
                  src={image}
                  alt={`Amenity image ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col gap-[26px] bg-background-cream rounded-[14px] p-5"
            >
              <div className="w-fit bg-background-main rounded-[8px] p-[10px]">
                <Image
                  src={amenity.icon}
                  alt={amenity.title}
                  width={42}
                  height={42}
                  className="w-[38px] h-[38px] md:w-[42px] md:h-[42px]"
                />
              </div>
              <div className="flex flex-col gap-0">
                <h3 className="text-lg md:text-[22px] font-medium leading-xl text-[#000000] font-['Mona_Sans'] mb-1">
                  {amenity.title}
                </h3>
                <p className="text-sm md:text-[16px] font-medium leading-md text-text-secondary font-['Inter']">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AmenitiesSection