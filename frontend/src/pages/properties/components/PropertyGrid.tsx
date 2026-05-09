import React from 'react';
import { properties } from '../data';
import PropertyCard from './PropertyCard';

const PropertyGrid: React.FC = () => (
  <section className="max-w-[1200px] mx-auto px-6 pt-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  </section>
);

export default PropertyGrid;
