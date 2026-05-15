import SEO from "@/components/SEO";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import GoogleReviewsStrip from "@/components/landing/GoogleReviewsStrip";
import ProblemsSection from "@/components/landing/ProblemsSection";
import ValuesSection from "@/components/landing/ValuesSection";
import USPTicker from "@/components/landing/USPTicker";

import FAQSection from "@/components/landing/FAQSection";
import QualificationSection from "@/components/landing/QualificationSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="flex flex-col min-h-screen">
    <SEO
      title="Avv. Alberto Fazio - Contratti su misura per la tua impresa"
      description="Proteggi la tua impresa con contratti blindati. L'Avv. Alberto Fazio offre 28 anni di esperienza in contrattualistica aziendale. Prenota un check-up legale."
      path="/"
    />
    <Navbar />
    <main className="flex-1">
      <HeroSection />
      <GoogleReviewsStrip />
      <ValuesSection />
      <USPTicker />
      <ProblemsSection />
      <QualificationSection />
      <FAQSection />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
