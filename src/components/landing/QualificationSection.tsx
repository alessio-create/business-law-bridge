import { Building2, Briefcase, Store } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const profiles = [
  {
    icon: Building2,
    title: "PMI e Aziende Strutturate",
    desc: "Hai fornitori, clienti e collaboratori? I tuoi contratti devono proteggere ogni rapporto commerciale, dalla fornitura alla distribuzione.",
  },
  {
    icon: Briefcase,
    title: "Startup e Imprese Tech",
    desc: "Contratti SaaS, licensing, NDA, accordi con investitori. Servono clausole su misura per il tuo modello di business digitale.",
  },
  {
    icon: Store,
    title: "Imprenditori e Liberi Professionisti",
    desc: "Lavori con pochi clienti ma di valore? Un contratto ben scritto ti evita contestazioni, mancati pagamenti e cause inutili.",
  },
];

const QualificationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 py-24 md:px-20 md:py-28 bg-surface">
      <div ref={ref} className="max-w-[1100px] mx-auto">
        <div className="text-center mb-14">
          <span
            className={`text-primary font-semibold text-[11px] uppercase tracking-label mb-4 block transition-all duration-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Per Chi è
          </span>
          <h2
            className={`text-foreground text-[1.75rem] md:text-[2.25rem] font-black max-w-xl mx-auto text-balance leading-tight transition-all duration-600 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Questo servizio è per te se…
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <div
              key={p.title}
              className={`bg-surface-container-low rounded-2xl p-7 md:p-8 flex flex-col gap-4 shadow-ambient hover:shadow-ambient-md transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${300 + i * 120}ms` : "0ms" }}
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary/10">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-foreground text-base font-bold">{p.title}</h3>
              <p className="text-muted-foreground text-[13px] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
