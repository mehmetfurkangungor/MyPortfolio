import { AboutSection } from "./portfolio/AboutSection";
import { ContactSection } from "./portfolio/ContactSection";
import { EquipmentSection } from "./portfolio/EquipmentSection";
import { ExperienceTimeline } from "./portfolio/ExperienceTimeline";
import { Header } from "./portfolio/Header";
import { HeroSection } from "./portfolio/HeroSection";
import {
  AiAndBusinessSection,
  DocumentarySection,
  SocialKnowledgeSection,
  WorkTypesSection,
} from "./portfolio/KnowledgeSections";
import { PortfolioGrid } from "./portfolio/PortfolioGrid";
import { ServicesSection } from "./portfolio/ServicesSection";

export default function PortfolioSite() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050506] text-zinc-100">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioGrid />
      <ExperienceTimeline />
      <EquipmentSection />
      <SocialKnowledgeSection />
      <AiAndBusinessSection />
      <DocumentarySection />
      <WorkTypesSection />
      <ContactSection />
    </main>
  );
}
