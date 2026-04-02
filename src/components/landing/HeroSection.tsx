import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";
import heroImage from "@/assets/hero-lawyer.jpg";

const HeroSection = () => (
  <section className="relative bg-surface overflow-hidden">
    <div className="px-6 py-20 md:px-20 md:py-28">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text — asymmetric left */}
        <div className="flex flex-col gap-8 z-10">
          <div className="flex flex-col gap-5">
            <span className="text-primary font-bold tracking-label uppercase text-xs">
              Avvocato d'Impresa — Contrattualistica
            </span>
            <h1 className="text-foreground text-4xl md:text-[3.75rem] font-black leading-[1.08] text-balance">
              I tuoi contratti ti proteggono <em className="not-italic text-navy-light">davvero</em>?
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg">
              Contratti chiari, blindati, su misura per la tua impresa. Preventivo scritto prima di iniziare. Sempre.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/quiz"
              className="flex items-center gap-2 rounded-lg h-14 px-8 bg-primary text-primary-foreground text-base font-bold shadow-primary-lg hover:scale-[1.02] transition-transform"
            >
              Check-up Legale Gratuito
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/quiz"
              className="flex items-center gap-2 rounded-lg h-14 px-8 bg-primary text-primary-foreground text-base font-bold shadow-primary-lg hover:scale-[1.02] transition-transform"
            >
              Check-up Legale Gratuito
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Image — overlapping right */}
        <div className="relative">
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-primary-xl">
            <img
              src={heroImage}
              alt="Avvocato Alberto Fazio nello studio legale"
              className="w-full h-full object-cover"
              width={1024}
              height={1024}
            />
          </div>
          {/* Floating badge with glass effect */}
          <div className="absolute -bottom-6 -left-6 bg-surface/90 backdrop-blur-xl p-5 rounded-xl shadow-ambient-md hidden md:flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Trasparenza Radicale</p>
              <p className="text-xl font-bold text-foreground">Preventivo scritto garantito</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Diagonal cut */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-12 md:h-20">
        <polygon fill="hsl(var(--surface-container-low))" points="0,80 1200,80 1200,0" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
