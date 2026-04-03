import { PhoneCall, FileText, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    icon: PhoneCall,
    num: "1",
    title: "Videochiamata preventiva",
    desc: "30 minuti per analizzare la tua situazione contrattuale e individuare le criticità.",
  },
  {
    icon: FileText,
    num: "2",
    title: "Preventivo scritto",
    desc: "Ricevi un preventivo chiaro e dettagliato, senza sorprese né obblighi.",
  },
  {
    icon: Shield,
    num: "3",
    title: "Contratti blindati",
    desc: "Se decidi di procedere, i tuoi contratti vengono riscritti o revisionati su misura.",
  },
];

const ProcessStepsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section ref={ref} className="px-6 py-16 md:px-20 md:py-20 bg-surface-container-low">
      <div className="max-w-[1060px] mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span
            className={`text-primary/70 font-semibold text-[11px] uppercase tracking-label mb-4 block transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Il Percorso
          </span>
          <h2
            className={`text-foreground text-[1.375rem] md:text-[2.125rem] font-black text-balance leading-[1.12] max-w-lg mx-auto transition-all duration-700 ease-out delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Cosa accadrà dopo la prenotazione
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`group bg-surface rounded-2xl p-6 md:p-8 shadow-ambient hover:shadow-ambient-md hover:-translate-y-0.5 transition-all duration-400 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${300 + i * 120}ms` : "0ms" }}
            >
              <div className="flex items-start gap-4 md:gap-5">
                <span className="text-primary/15 text-[2rem] md:text-[2.5rem] font-black leading-none select-none group-hover:text-primary/25 transition-colors duration-300">
                  {s.num}
                </span>
                <div className="flex flex-col gap-1.5 pt-1">
                  <h3 className="text-foreground text-[14px] md:text-[15px] font-bold leading-snug">{s.title}</h3>
                  <p className="text-muted-foreground text-[12px] md:text-[13px] leading-[1.75]">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessStepsSection;
