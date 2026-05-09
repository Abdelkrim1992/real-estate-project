
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

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <IntroSection />
        <StatsSection />
        <PropertiesSection />
        {/* <HowItWorksSection /> */}
        <AmenitiesSection />
        <ServicesSection />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
