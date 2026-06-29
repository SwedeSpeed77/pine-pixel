import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IndustriesTicker from "@/components/IndustriesTicker";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IndustriesTicker />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <PricingSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
