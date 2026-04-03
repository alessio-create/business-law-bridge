import { PhoneCall, FileText, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    icon: PhoneCall,
    step: "Step 1",
    title: "Videochiamata preventiva",
    desc: "30 minuti per analizzare la tua situazione contrattuale e individuare le criticità.",
  },
  {
    icon: FileText,
    step: "Step 2",
    title: "Preventivo scritto",
    desc: "Ricevi un preventivo chiaro e dettagliato, senza sorprese né obblighi.",
  },
  {
    icon: Shield,
    step: "Step 3",
    title: "Contratti blindati",
    desc: "Se decidi di procedere, i tuoi contratti vengono riscritti o revisionati su misura.",
  },
];

const ProcessStepsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="mt-16 mb-16">
      <span
        className={`text-primary/70 font-semibold text-[11px] uppercase tracking-label mb-4 block text-center transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Il Percorso
      </span>
      <h2
        className={`text-foreground text-[1.625rem] md:text-[2.125rem] font-black text-center mb-8 transition-all duration-700 ease-out delay-150 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Cosa accadrà dopo
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {steps.map((s, i) => (
          <div
            key={s.step}
            className={`bg-surface rounded-2xl p-7 shadow-ambient hover:shadow-ambient-md hover:-translate-y-0.5 transition-all duration-400 text-center ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? `${300 + i * 100}ms` : "0ms" }}
          >
            <div className="w-12 h-12 bg-primary/8 rounded-full flex items-center justify-center mx-auto mb-4">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="text-[11px] font-bold text-primary mb-2 uppercase tracking-label">{s.step}</div>
            <h3 className="font-bold text-foreground text-[15px] mb-2">{s.title}</h3>
            <p className="text-[13px] text-muted-foreground leading-[1.75]">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessStepsSection;
