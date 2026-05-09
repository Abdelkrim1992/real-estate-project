
import HeroSection from './HeroSection';
import IntroSection from './IntroSection';
import StatsSection from './StatsSection';
import PropertiesSection from './PropertiesSection';
import HowItWorksSection from './HowItWorksSection';
import AmenitiesSection from './AmenitiesSection';
import ServicesSection from './ServicesSection';
import Footer from '../components/common/Footer';
import FAQSection from '@/components/properties/components/FAQSection';
import CTABanner from '@/components/properties/components/CTABanner';

import { ScrollReveal } from '@/components/common/ScrollReveal';

export default function Home() {
  return (
    <>
      <main className='bg-background-main'>
        <HeroSection />
        <ScrollReveal>
          <IntroSection />
        </ScrollReveal>
        <ScrollReveal>
          <StatsSection />
        </ScrollReveal>
        <ScrollReveal>
          <PropertiesSection />
        </ScrollReveal>
        <ScrollReveal>
          <AmenitiesSection />
        </ScrollReveal>
        <ScrollReveal>
          <ServicesSection />
        </ScrollReveal>
        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>
        <ScrollReveal>
          <CTABanner />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
