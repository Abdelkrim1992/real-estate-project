

import React from 'react';
import { Property } from '../data';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => (
  <article
    className="relative flex h-[450px] cursor-pointer flex-col justify-end overflow-hidden rounded-2xl transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)]"
  >
    {/* Image */}
    <img src={property.image} alt={property.name} className="absolute inset-0 w-full h-full object-cover" />

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_42.88%,rgba(0,0,0,1)_100%)]" aria-hidden="true" />

    {/* Badge */}
    <span className="absolute top-4 right-4 font-inter text-sm font-medium tracking-[-0.56px] leading-[16.8px] text-black bg-[#fffff2] rounded-full px-3 py-[5px] z-10">
      {property.type}
    </span>

    {/* Content */}
    <div className="relative z-10 p-[22px] flex flex-col gap-[14px]">
      <div className="flex flex-col gap-1.5">
        <h3 className="font-inter text-[26px] font-medium tracking-[-1.04px] text-white m-0 leading-tight">
          {property.name}
        </h3>
        <p className="font-inter text-base font-medium leading-6 tracking-[-0.32px] text-white/80 m-0 line-clamp-2">
          {property.description}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-white/20" />

      {/* Stats */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-white/25 px-[10px] py-1 font-inter text-sm font-medium leading-[16.8px] tracking-[-0.56px] text-white">
          <img src="/images/bed-white.svg" alt="beds" className="w-[15px] h-[11px]" />
          {property.beds}
        </span>
        <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-white/25 px-[10px] py-1 font-inter text-sm font-medium leading-[16.8px] tracking-[-0.56px] text-white">
          <img src="/images/bath-white.svg" alt="baths" className="w-[15px] h-3" />
          {property.baths}
        </span>
        <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-white/25 px-[10px] py-1 font-inter text-sm font-medium leading-[16.8px] tracking-[-0.56px] text-white">
          <img src="/images/area-white.svg" alt="area" className="w-[11px] h-[11px]" />
          {property.area}
        </span>
      </div>
    </div>
  </article>
);

export default PropertyCard;
