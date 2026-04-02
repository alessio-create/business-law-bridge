import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import GoogleReviewsStrip from "@/components/landing/GoogleReviewsStrip";
import ProblemsSection from "@/components/landing/ProblemsSection";
import ValuesSection from "@/components/landing/ValuesSection";

import FAQSection from "@/components/landing/FAQSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1">
      <HeroSection />
      <GoogleReviewsStrip />
      <ValuesSection />
      <ProblemsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Index;
