'use client';

import React from 'react';
import HeroSection from './components/HeroSection';
import PropertyGrid from './components/PropertyGrid';
import FAQSection from './components/FAQSection';
import CTABanner from './components/CTABanner';
import Footer from '../../components/common/Footer';

const PropertiesPage: React.FC = () => (
  <div className="bg-background-main min-h-screen font-inter">
    <main>
      <HeroSection />
      <PropertyGrid />
      <FAQSection />
      <CTABanner />
    </main>
    <Footer />
  </div>
);

export default PropertiesPage;
