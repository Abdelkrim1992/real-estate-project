'use client';
import Image from'next/image';

interface StatCard {
  icon: string;
  value: string;
  label: string;
}

interface ImageCard {
  src: string;
  alt: string;
}

const StatsSection = () => {
  const stats: StatCard[] = [
    { icon: '/images/bed-dark.svg', value: '636+', label: 'Properties sold' },
    { icon: '/images/headset.svg', value: '106+', label: 'Expert agents' },
    { icon: '/images/area-dark.svg', value: '111+', label: 'Cities covered' },
    { icon: '/images/dot-dark.svg', value: '1485+', label: 'Happy clients' },
  ]

  const images: ImageCard[] = [
    { src: '/images/img_aerial_view_of_a.png', alt: 'Aerial view property' },
    { src: '/images/img_futuristic_white.png', alt: 'Futuristic white architecture' },
  ]

  return (
    <section className="w-full bg-background-main py-8 md:py-12 lg:py-20">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-[18px]">
          {/* Stat Card 1 */}
          <div className="flex flex-col gap-[84px] sm:gap-[104px] md:gap-[128px] lg:gap-[148px] bg-background-cream rounded-[14px] p-5 w-full">
            <Image
              src={stats[0].icon}
              alt={stats[0].label}
              width={22}
              height={22}
              className="w-[20px] h-[20px] md:w-[22px] md:h-[22px]"
            />
            <div className="flex flex-col gap-0">
              <div className="flex flex-row items-center">
                <span className="text-[32px] sm:text-[38px] md:text-[44px] font-medium leading-[46px] sm:leading-[54px] md:leading-[63px] text-[#000000] font-['Mona_Sans']">
                  {stats[0].value}
                </span>
              </div>
              <span className="text-sm md:text-[16px] font-medium leading-sm text-text-secondary font-['Inter'] -mt-1">
                {stats[0].label}
              </span>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="flex flex-col gap-[84px] sm:gap-[104px] md:gap-[128px] lg:gap-[148px] bg-background-cream rounded-[14px] p-5 w-full">
            <Image
              src={stats[1].icon}
              alt={stats[1].label}
              width={22}
              height={22}
              className="w-[20px] h-[20px] md:w-[22px] md:h-[22px]"
            />
            <div className="flex flex-col gap-0">
              <div className="flex flex-row items-center">
                <span className="text-[32px] sm:text-[38px] md:text-[44px] font-medium leading-[46px] sm:leading-[54px] md:leading-[63px] text-[#000000] font-['Mona_Sans']">
                  {stats[1].value}
                </span>
              </div>
              <span className="text-sm md:text-[16px] font-medium leading-sm text-text-secondary font-['Inter'] -mt-1">
                {stats[1].label}
              </span>
            </div>
          </div>

          {/* Image 1 */}
          <div className="relative w-full aspect-[500/400] rounded-[14px] overflow-hidden">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="relative w-full aspect-[500/400] rounded-[14px] overflow-hidden">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover"
            />
          </div>

          {/* Stat Card 3 */}
          <div className="flex flex-col gap-[84px] sm:gap-[104px] md:gap-[128px] lg:gap-[148px] bg-background-cream rounded-[14px] p-5 w-full">
            <Image
              src={stats[2].icon}
              alt={stats[2].label}
              width={22}
              height={22}
              className="w-[20px] h-[20px] md:w-[22px] md:h-[22px]"
            />
            <div className="flex flex-col gap-0">
              <div className="flex flex-row items-center">
                <span className="text-[32px] sm:text-[38px] md:text-[44px] font-medium leading-[46px] sm:leading-[54px] md:leading-[63px] text-[#000000] font-['Mona_Sans']">
                  {stats[2].value}
                </span>
              </div>
              <span className="text-sm md:text-[16px] font-medium leading-sm text-text-secondary font-['Inter'] -mt-1">
                {stats[2].label}
              </span>
            </div>
          </div>

          {/* Stat Card 4 */}
          <div className="flex flex-col gap-[84px] sm:gap-[104px] md:gap-[128px] lg:gap-[148px] bg-background-cream rounded-[14px] p-5 w-full">
            <Image
              src={stats[3].icon}
              alt={stats[3].label}
              width={22}
              height={22}
              className="w-[20px] h-[20px] md:w-[22px] md:h-[22px]"
            />
            <div className="flex flex-col gap-0">
              <div className="flex flex-row items-center">
                <span className="text-[32px] sm:text-[38px] md:text-[44px] font-medium leading-[46px] sm:leading-[54px] md:leading-[63px] text-[#000000] font-['Mona_Sans']">
                  {stats[3].value}
                </span>
              </div>
              <span className="text-sm md:text-[16px] font-medium leading-sm text-text-secondary font-['Inter'] -mt-1">
                {stats[3].label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection