import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TransparencySection from "@/components/landing/TransparencySection";
import CaseStudiesSection from "@/components/landing/CaseStudiesSection";
import ProcessSection from "@/components/landing/ProcessSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1">
      <HeroSection />
      <ServicesSection />
      <TransparencySection />
      <CaseStudiesSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
