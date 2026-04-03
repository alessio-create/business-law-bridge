import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const faqs = [
  {
    q: "Come funziona il check-up preventivo?",
    a: "Sono 30 minuti dedicati ad analizzare i tuoi contratti e capire dove sei esposto. Nessun obbligo.",
  },
  {
    q: "Quanto costa redigere un contratto?",
    a: "Dipende dalla complessità, ma riceverai sempre un preventivo scritto prima di iniziare. Zero sorprese. Il preventivo è incluso nel check-up gratuito.",
  },
  {
    q: "Lavorate solo con aziende di Trento?",
    a: "No. Lavoriamo con imprese in tutta Italia, in presenza o da remoto. Lo studio è a Trento, ma operiamo ovunque.",
  },
  {
    q: "Che tipo di contratti trattate?",
    a: "Contratti di fornitura, appalto e subappalto, distribuzione e franchising, IT/SaaS, licensing, e revisione di contratti esistenti.",
  },
  {
    q: "In quanto tempo redigete un contratto?",
    a: "I tempi dipendono dalla complessità. Li concordiamo nel preventivo e li rispettiamo. Ricevi aggiornamenti periodici sullo stato di avanzamento.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="faq" className="px-6 py-24 md:px-20 md:py-32 bg-surface-container-low">
      <div ref={ref} className="max-w-[600px] mx-auto">
        <div className="text-center mb-14">
          <span
            className={`text-primary/70 font-semibold text-[11px] uppercase tracking-label mb-4 block transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Domande Frequenti
          </span>
          <h2
            className={`text-foreground text-[1.625rem] md:text-[2.125rem] font-black leading-[1.12] transition-all duration-700 ease-out delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Hai qualche dubbio?
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`px-7 py-5 rounded-2xl bg-surface cursor-pointer transition-all duration-400 ease-out ${
                openIndex === i ? "shadow-ambient-md" : "shadow-ambient hover:shadow-ambient-md"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: isVisible ? `${300 + i * 80}ms` : "0ms" }}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between py-1">
                <span className="font-bold text-foreground text-[16px] pr-4 leading-snug">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground/60 shrink-0 transition-transform duration-300 ease-out ${openIndex === i ? "rotate-180" : ""}`}
                />
              </div>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  openIndex === i ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-muted-foreground text-[15px] leading-[1.75] pb-1">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
