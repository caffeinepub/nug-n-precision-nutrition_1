import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import DNABackground from "./components/DNABackground";
import DataPolicyPage from "./components/DataPolicyPage";
import FAQSection from "./components/FAQSection";
import FeaturesSection from "./components/FeaturesSection";
import FooterSection from "./components/FooterSection";
import GDPRBanner from "./components/GDPRBanner";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Navigation from "./components/Navigation";
import PricingSection from "./components/PricingSection";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import ScienceSection from "./components/ScienceSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WaitlistSection from "./components/WaitlistSection";

function getRoute(): string {
  const hash = window.location.hash;
  // Strip leading `#` or `#/`
  const path = hash.replace(/^#\/?/, "/").replace(/^\/\//, "/");
  return path || "/";
}

export default function App() {
  const [route, setRoute] = useState<string>(getRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderContent = () => {
    switch (route) {
      case "/privacy-policy":
        return <PrivacyPolicyPage />;
      case "/data-policy":
        return <DataPolicyPage />;
      default:
        return (
          <>
            <HeroSection />
            <HowItWorksSection />
            <FeaturesSection />
            <ScienceSection />
            <TestimonialsSection />
            <PricingSection />
            <FAQSection />
            <WaitlistSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <DNABackground />
      <Navigation />
      <main>{renderContent()}</main>
      <FooterSection />
      <GDPRBanner />
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
