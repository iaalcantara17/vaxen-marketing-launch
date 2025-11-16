import { FloatingHeader } from "@/components/FloatingHeader";
import { HeroSection } from "@/components/HeroSection";
import { StatementSection } from "@/components/StatementSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { AboutSection } from "@/components/AboutSection";
import { CalendlySection } from "@/components/CalendlySection";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingHeader />
      <HeroSection />
      <SectionDivider variant="gradient" />
      <StatementSection />
      <SectionDivider variant="curve" />
      <FeaturesSection />
      <SectionDivider variant="diagonal" />
      <UseCasesSection />
      <SectionDivider variant="gradient" />
      <AboutSection />
      <SectionDivider variant="curve" />
      <CalendlySection />
      <Footer />
    </div>
  );
};

export default Index;
