import { Toaster } from "@/components/ui/sonner";
import DNABackground from "./components/DNABackground";
import FAQSection from "./components/FAQSection";
import FeaturesSection from "./components/FeaturesSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Navigation from "./components/Navigation";
import PricingSection from "./components/PricingSection";
import ScienceSection from "./components/ScienceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WaitlistSection from "./components/WaitlistSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <DNABackground />
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ScienceSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <WaitlistSection />
      </main>
      <FooterSection />
      <Toaster
        toastOptions={{
          style: {
            background: "oklch(0.16 0.025 235)",
            color: "oklch(0.96 0.01 220)",
            border: "1px solid oklch(0.28 0.04 240)",
          },
        }}
      />
    </div>
  );
}
