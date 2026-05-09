'use client';
import Image from'next/image';
 import Link from'next/link';
 import Button from'@/components/ui/Button';

interface Property {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
}

const PropertiesSection = () => {
  const properties: Property[] = [
    {
      id: '1',
      title: 'Azure heights',
      description: 'Luxury waterfront apartment offering modern interiors, panoramic views, smart…',
      image: '/images/img_modern_two_story.png',
      badge: 'For Sale',
      bedrooms: '4',
      bathrooms: '3',
      area: '4,200 sq.ft'
    },
    {
      id: '2',
      title: 'Lakeside manor',
      description: 'Elegant lakeside home offering privacy, spacious interiors, and tranquil residential…',
      image: '/images/img_modern_house_at.png',
      badge: 'For Sale',
      bedrooms: '5',
      bathrooms: '4',
      area: '7,100 sq.ft'
    },
    {
      id: '3',
      title: 'Palm residence',
      description: 'Elegant city residence designed for premium living, strong rental demand, and…',
      image: '/images/img_five_story_modern.png',
      badge: 'For Rent',
      bedrooms: '3',
      bathrooms: '2',
      area: '3,800 sq.ft'
    },
    {
      id: '4',
      title: 'Crestview villa',
      description: 'Spacious luxury villa offering privacy, premium finishes, and exceptional comfort',
      image: '/images/img_modern_house_with.png',
      badge: 'For Sale',
      bedrooms: '5',
      bathrooms: '5',
      area: '6,200 sq.ft'
    },
    {
      id: '5',
      title: 'Harbor point',
      description: 'Modern coastal apartment combining scenic views, efficient layouts, and lifestyle-',
      image: '/images/img_modern_white_three_story.png',
      badge: 'For Rent',
      bedrooms: '3',
      bathrooms: '3',
      area: '3,600 sq.ft'
    },
    {
      id: '6',
      title: 'Summit court',
      description: 'High-end residential property offering strong investment returns and sophisticated',
      image: '/images/img_a_modern_two_story.png',
      badge: 'For Sale',
      bedrooms: '4',
      bathrooms: '4',
      area: '4,900 sq.ft'
    },
  ]

  return (
    <section id="properties" className="w-full bg-background-main py-8 md:py-12 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
          {/* Left Content */}
          <div className="flex flex-col gap-3 w-full lg:flex-1">
            <div className="flex flex-row items-center gap-2">
              <div className="w-[6px] h-[6px] bg-[#000000] rounded-[3px]" />
              <span className="text-sm md:text-[16px] font-medium leading-sm text-[#000000] font-['Inter']">
                Properties
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-medium leading-[34px] sm:leading-[42px] md:leading-[48px] lg:leading-[52px] text-[#000000] font-['Mona_Sans']">
              Premium properties
              <br />
              for smart real buyers
            </h2>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-5 w-full lg:w-[32%]">
            <p className="text-sm md:text-[16px] font-medium leading-md text-text-secondary font-['Inter']">
              We present top properties helping buyers find,
              <br className="hidden sm:block" />
              explore, and secure their dream homes easily.
            </p>
            <Link href="/propresties" className="flex flex-row items-center gap-[16px] group w-fit">
              <span className="text-sm md:text-[16px] font-medium leading-sm text-[#000000] font-['Inter'] group-hover:opacity-70 transition-opacity">
                View all properties
              </span>
              <Image
                src="/images/img_div_framer_jbkgu_mask_group_black_900.svg"
                alt="Arrow"
                width={18}
                height={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {properties.map((property) => (
            <Link
              key={property.id}
              href="/propretrie-details"
              className="group relative w-full aspect-[370/450] rounded-[16px] overflow-hidden block"
            >
              {/* Property Image */}
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Badge */}
              <div className="absolute top-[22px] right-[26px] z-10">
                <span className="inline-block px-[14px] py-1 bg-background-cream text-[#000000] rounded-[14px] text-xs md:text-sm font-medium leading-xs font-['Inter']">
                  {property.badge}
                </span>
              </div>

              {/* Property Details Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(180deg,#00000000_0%,#000000_100%)] p-[22px] flex flex-col gap-[14px] shadow-[0px_4px_30px_#888888ff]">
                {/* Title and Description */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-[20px] sm:text-[24px] md:text-[26px] font-medium leading-xl text-[#ffffff] font-['Inter'] group-hover:opacity-90 transition-opacity">
                    {property.title}
                  </h3>
                  <p className="text-sm md:text-[16px] font-medium leading-md text-[#ffffff] font-['Inter'] line-clamp-2">
                    {property.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-[#ffffff33]" />

                {/* Property Features */}
                <div className="flex flex-row items-center gap-2">
                  <Button
                    text={property.bedrooms}
                    text_font_size="text-xs md:text-sm"
                    text_color="text-[#ffffff]"
                    fill_background_color="bg-transparent"
                    border_border="1px solid #ffffff3f"
                    border_border_radius="rounded-[14px]"
                    padding="4px 30px 4px 46px"
                    className="relative"
                    effect_box_shadow=""
                    layout_width="auto"
                    margin=""
                    position="relative"
                    layout_gap="4px"
                    variant="primary"
                    size="small"
                    onClick={() => {}}
                  >
                    <Image
                      src="/images/bed-white.svg"
                      alt="Bedrooms"
                      width={16}
                      height={16}
                      className="absolute left-2"
                    />
                    {property.bedrooms}
                  </Button>
                  <Button
                    text={property.bathrooms}
                    text_font_size="text-xs md:text-sm"
                    text_color="text-[#ffffff]"
                    fill_background_color="bg-transparent"
                    border_border="1px solid #ffffff3f"
                    border_border_radius="rounded-[14px]"
                    padding="4px 30px 4px 46px"
                    className="relative"
                    effect_box_shadow=""
                    layout_width="auto"
                    margin=""
                    position="relative"
                    layout_gap="4px"
                    variant="primary"
                    size="small"
                    onClick={() => {}}
                  >
                    <Image
                      src="/images/bath-white.svg"
                      alt="Bathrooms"
                      width={16}
                      height={16}
                      className="absolute left-2"
                    />
                    {property.bathrooms}
                  </Button>
                  <Button
                    text={property.area}
                    text_font_size="text-xs md:text-sm"
                    text_color="text-[#ffffff]"
                    fill_background_color="bg-transparent"
                    border_border="1px solid #ffffff3f"
                    border_border_radius="rounded-[14px]"
                    padding="4px 8px 4px 28px"
                    layout_gap="4px"
                    className="relative"
                    effect_box_shadow=""
                    layout_width="auto"
                    margin=""
                    position="relative"
                    variant="primary"
                    size="small"
                    onClick={() => {}}
                  >
                    <Image
                      src="/images/area-white.svg"
                      alt="Area"
                      width={16}
                      height={16}
                      className="absolute left-2"
                    />
                    {property.area}
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PropertiesSection