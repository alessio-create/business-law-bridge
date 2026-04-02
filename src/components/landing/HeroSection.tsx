import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import heroImage from "@/assets/hero-lawyer.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-surface">
      <div className="px-6 py-20 md:px-20 md:py-28">
        <div className="max-w-[800px] mx-auto flex flex-col items-center text-center gap-8">
          <span className="text-primary font-bold tracking-label uppercase text-xs">
            Avvocato d'Impresa — Contrattualistica
          </span>
          <h1 className="text-foreground text-4xl md:text-[3.75rem] font-black leading-[1.08] text-balance">
            I tuoi contratti ti proteggono <em className="not-italic text-navy-light">davvero</em>?
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl">
            Contratti chiari, blindati, su misura per la tua impresa. Preventivo scritto prima di iniziare. Sempre.
          </p>
          <Link
            to="/quiz"
            className="flex items-center gap-2 rounded-lg h-14 px-8 bg-primary text-primary-foreground text-base font-bold shadow-primary-lg hover:scale-[1.02] transition-transform"
          >
            Check-up Legale Gratuito
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Floating avatar circle */}
      {!dismissed && (
        <div className="hidden lg:block fixed bottom-8 right-8 z-50">
          <div className="relative">
            <div
              className={`absolute bottom-full right-0 mb-3 w-72 bg-surface rounded-2xl shadow-ambient-md p-4 transition-all duration-500 ${
                showBubble
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <button
                onClick={() => setDismissed(true)}
                className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted/50 transition-colors"
                aria-label="Chiudi"
              >
                <X className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
              <p className="text-foreground text-sm leading-relaxed pr-5">
                Sono l'Avv. <strong>Alberto Fazio</strong>, Cassazionista con{" "}
                <strong>28 anni di esperienza</strong> in contrattualistica. Inizia con il Check-Up Legale! 👋
              </p>
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-surface rotate-45 shadow-sm" />
            </div>

            <div className="w-16 h-16 rounded-full overflow-hidden shadow-primary-xl ring-4 ring-primary/20 cursor-pointer hover:scale-105 transition-transform">
              <img
                src={heroImage}
                alt="Avv. Alberto Fazio"
                className="w-full h-full object-cover"
                width={64}
                height={64}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
