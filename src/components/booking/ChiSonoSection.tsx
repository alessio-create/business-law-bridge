import heroImage from "@/assets/hero-lawyer.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ChiSonoSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="mt-16 mb-16">
      <span
        className={`text-primary/70 font-semibold text-[11px] uppercase tracking-label mb-4 block text-center transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Il Tuo Avvocato
      </span>
      <h2
        className={`text-foreground text-[1.625rem] md:text-[2.125rem] font-black text-center mb-8 transition-all duration-700 ease-out delay-150 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Chi sono
      </h2>
      <div
        className={`bg-surface rounded-2xl p-8 shadow-ambient-md flex flex-col md:flex-row gap-8 items-center transition-all duration-700 ease-out delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 shadow-ambient">
          <img
            src={heroImage}
            alt="Avv. Alberto Fazio"
            className="w-full h-full object-cover"
            width={112}
            height={112}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div>
            <h3 className="text-foreground text-xl font-bold">Avv. Alberto Fazio</h3>
            <p className="text-[13px] text-primary font-medium">Cassazionista · 28 anni di esperienza</p>
          </div>
          <p className="text-[13px] text-muted-foreground leading-[1.75]">
            Specializzato in contrattualistica d'impresa, assisto imprenditori e PMI nella redazione, revisione e negoziazione di contratti commerciali, di fornitura, appalto e distribuzione. Il mio approccio è pragmatico: contratti chiari, blindati e su misura per la tua realtà.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="text-[11px] font-bold bg-primary/8 text-primary px-3 py-1.5 rounded-full">+200 imprese assistite</span>
            <span className="text-[11px] font-bold bg-primary/8 text-primary px-3 py-1.5 rounded-full">Iscritto all'Albo dal 1997</span>
            <span className="text-[11px] font-bold bg-primary/8 text-primary px-3 py-1.5 rounded-full">Abilitato in Cassazione</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSonoSection;
