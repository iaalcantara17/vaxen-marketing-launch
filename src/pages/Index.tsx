import { FloatingHeader } from "@/components/FloatingHeader";
import { HeroSection } from "@/components/HeroSection";
import { StatementSection } from "@/components/StatementSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { AboutSection } from "@/components/AboutSection";
import { CalendlySection } from "@/components/CalendlySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingHeader />
      <HeroSection />
      <StatementSection />
      <FeaturesSection />
      <UseCasesSection />
      <AboutSection />
      <CalendlySection />
      <Footer />
    </div>
  );
};

export default Index;
