import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import heroImage from "@/assets/hero-lawyer.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [showSecondBubble, setShowSecondBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPercent >= 0.3 && !visible) {
        setVisible(true);
        setTimeout(() => setShowBubble(true), 1500);
        setTimeout(() => setShowSecondBubble(true), 4500);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

  return (
    <section className="bg-surface relative">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl" />
      </div>

      <div className="relative px-6 py-28 md:px-20 md:py-36">
        <div className="max-w-[700px] mx-auto flex flex-col items-center text-center gap-8">
          <span
            className={`text-primary/80 font-semibold tracking-label uppercase text-[11px] transition-all duration-700 ease-out ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Avvocato d'Impresa — Contrattualistica
          </span>
          <h1
            className={`text-foreground text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] font-black leading-[1.05] text-balance transition-all duration-800 ease-out delay-200 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            I tuoi contratti ti proteggono{" "}
            <em className="not-italic text-navy-light">davvero</em>?
          </h1>
          <p
            className={`text-muted-foreground text-[17px] md:text-lg leading-[1.7] max-w-[520px] transition-all duration-700 ease-out delay-[400ms] ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Contratti chiari, blindati, su misura per la tua impresa. Preventivo scritto prima di iniziare. Sempre.
          </p>
          <div
            className={`transition-all duration-700 ease-out delay-[550ms] ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              to="/quiz"
              className="group inline-flex items-center gap-2.5 rounded-xl h-[52px] px-8 bg-primary text-primary-foreground text-[15px] font-bold shadow-primary-lg hover:shadow-primary-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Check-up Legale Gratuito
              <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating avatar */}
      {visible && !dismissed && (
        <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 animate-fade-in">
          <div className="relative">
            {/* First bubble - lawyer presentation */}
            <div
              className={`absolute bottom-full right-0 mb-3 w-72 bg-surface/95 backdrop-blur-xl rounded-2xl shadow-ambient-lg p-5 transition-all duration-500 ease-out ${
                showBubble && !showSecondBubble ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <button
                onClick={() => setDismissed(true)}
                className="absolute top-3 right-3 p-1 rounded-full hover:bg-muted/50 transition-colors"
                aria-label="Chiudi"
              >
                <X className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
              <p className="text-foreground text-[13px] leading-relaxed pr-5">
                Sono l'Avv. <strong>Alberto Fazio</strong>, Cassazionista con{" "}
                <strong>28 anni di esperienza</strong> in contrattualistica. 👋
              </p>
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-surface/95 rotate-45" />
            </div>

            {/* Second bubble - question with answers */}
            <div
              className={`absolute bottom-full right-0 mb-3 w-72 bg-surface/95 backdrop-blur-xl rounded-2xl shadow-ambient-lg p-5 transition-all duration-500 ease-out ${
                showSecondBubble ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <button
                onClick={() => setDismissed(true)}
                className="absolute top-3 right-3 p-1 rounded-full hover:bg-muted/50 transition-colors"
                aria-label="Chiudi"
              >
                <X className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
              <p className="text-foreground text-[14px] font-bold leading-snug pr-5">
                I tuoi contratti sono davvero a prova di causa?
              </p>
              <div className="flex gap-2 mt-3">
                <Link
                  to="/quiz"
                  className="flex-1 text-center rounded-lg py-2 bg-primary text-primary-foreground text-[13px] font-bold hover:opacity-90 transition-opacity"
                >
                  Sì ✅
                </Link>
                <Link
                  to="/quiz"
                  className="flex-1 text-center rounded-lg py-2 bg-destructive/10 text-destructive text-[13px] font-bold hover:bg-destructive/15 transition-colors"
                >
                  No ❌
                </Link>
              </div>
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-surface/95 rotate-45" />
            </div>
            <Link
              to="/quiz"
              className="block w-[60px] h-[60px] rounded-full overflow-hidden shadow-primary-xl ring-[3px] ring-primary/15 cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <img src={heroImage} alt="Avv. Alberto Fazio" className="w-full h-full object-cover" width={60} height={60} />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
