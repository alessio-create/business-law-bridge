import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";
import heroImage from "@/assets/hero-lawyer.jpg";

const HeroSection = () => (
  <section className="relative px-6 py-16 md:px-20 md:py-24 bg-card overflow-hidden">
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-8 z-10">
        <div className="flex flex-col gap-4">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">
            Studio Legale d'Impresa — Trento
          </span>
          <h1 className="text-foreground text-4xl md:text-[3.5rem] font-black leading-[1.1] tracking-tight text-balance">
            Il tuo avvocato d'impresa ti dice quanto costa <em className="not-italic text-navy-light">prima</em> di iniziare. Sempre.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg">
            Contrattualistica, recupero crediti e crisi d'impresa per PMI del Nord-Est. Preventivi scritti, zero sorprese.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-primary" />
            <span>Cassazionista — 28+ anni di esperienza</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/quiz"
            className="flex items-center gap-2 rounded-lg h-14 px-8 bg-primary text-primary-foreground text-base font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
          >
            Check-up Legale Gratuito
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="#casi"
            className="flex items-center justify-center rounded-lg h-14 px-8 border-2 border-primary text-primary text-base font-bold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Casi Studio
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={heroImage}
            alt="Avvocato Alberto Fazio nello studio legale"
            className="w-full h-full object-cover"
            width={1024}
            height={1024}
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-card p-5 rounded-xl shadow-xl border border-border hidden md:flex items-center gap-4">
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
  </section>
);

export default HeroSection;
