import { Header } from '@/components/Header';
import { HeroFounder } from '@/components/HeroFounder';
import { Footer } from '@/components/Footer';
import {
  AICompanyMap,
  BuildInPublicTimeline,
  CaseAndBlogPlaceholders,
  DemoSalesMachine,
  EmployeeDepartments,
  FinalCTA,
  FounderJourney,
  GSystemRoadmap,
  LeadMagnetForm,
  PricingSection,
} from '@/components/Sections';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroFounder />
      <DemoSalesMachine />
      <EmployeeDepartments />
      <AICompanyMap />
      <FounderJourney />
      <BuildInPublicTimeline />
      <GSystemRoadmap />
      <CaseAndBlogPlaceholders />
      <LeadMagnetForm />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
