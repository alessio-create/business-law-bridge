import albertoFazio from "@/assets/alberto-fazio.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CheckCircle, Scale, Award, Clock } from "lucide-react";

const credentials = [
  { icon: Scale, label: "Cassazionista" },
  { icon: Award, label: "Iscritto all'Albo dal 1997" },
  { icon: CheckCircle, label: "+200 imprese assistite" },
  { icon: Clock, label: "28 anni di esperienza" },
];

const ChiSonoSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 py-24 md:px-20 md:py-32 bg-surface">
      <div ref={ref} className="max-w-[1060px] mx-auto">
        <div className="text-center mb-14">
          <span
            className={`text-primary/70 font-semibold text-[11px] uppercase tracking-label mb-4 block transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Il Tuo Avvocato
          </span>
          <h2
            className={`text-foreground text-[1.625rem] md:text-[2.125rem] font-black text-balance leading-[1.12] max-w-lg mx-auto transition-all duration-700 ease-out delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Chi ti seguirà personalmente
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-14 lg:gap-20 items-center">
          {/* Photo */}
          <div
            className={`w-full md:w-5/12 transition-all duration-800 ease-out delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.96]"
            }`}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-ambient-lg">
                <img
                  src={albertoFazio}
                  alt="Avv. Alberto Fazio — Cassazionista specializzato in contrattualistica d'impresa"
                  className="w-full aspect-[4/5] object-cover object-top"
                  width={400}
                  height={500}
                  loading="lazy"
                />
              </div>
              {/* Floating credential badge */}
              <div className="absolute -bottom-4 -right-4 md:-right-6 bg-surface rounded-xl shadow-ambient-md p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/8 rounded-full flex items-center justify-center">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground text-[13px] font-bold">Cassazionista</p>
                  <p className="text-muted-foreground text-[11px]">Abilitato in Cassazione</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-7/12 flex flex-col gap-6">
            <div
              className={`transition-all duration-700 ease-out delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <h3 className="text-foreground text-[1.375rem] md:text-[1.625rem] font-black mb-1">
                Avv. Alberto Fazio
              </h3>
              <p className="text-primary/70 font-semibold text-[13px]">
                Specializzato in contrattualistica d'impresa
              </p>
            </div>

            <p
              className={`text-muted-foreground text-[15px] leading-[1.8] transition-all duration-700 ease-out delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Assisto imprenditori e PMI nella redazione, revisione e negoziazione di contratti commerciali, di fornitura, appalto e distribuzione. Il mio approccio è pragmatico: contratti chiari, blindati e su misura per la tua realtà aziendale.
            </p>

            <p
              className={`text-muted-foreground text-[15px] leading-[1.8] transition-all duration-700 ease-out delay-[550ms] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Non faccio tutto: faccio una cosa sola e la faccio bene. Solo contrattualistica, solo per imprese che vogliono dormire tranquille.
            </p>

            {/* Credential grid */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {credentials.map((c, i) => (
                <div
                  key={c.label}
                  className={`flex items-center gap-3 bg-surface-container-low rounded-xl p-4 transition-all duration-600 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isVisible ? `${600 + i * 80}ms` : "0ms" }}
                >
                  <div className="p-1.5 bg-primary/8 rounded-lg">
                    <c.icon className="w-4 h-4 text-primary/70" />
                  </div>
                  <span className="text-foreground text-[13px] font-bold">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSonoSection;
