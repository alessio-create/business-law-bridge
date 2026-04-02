import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Il check-up è davvero gratuito?",
    a: "Sì, 100%. Sono 30 minuti dedicati ad analizzare i tuoi contratti e capire dove sei esposto. Nessun costo, nessun obbligo.",
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

  return (
    <section id="faq" className="px-6 py-20 md:px-20 bg-surface">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-label mb-3 block">
            Domande Frequenti
          </span>
          <h2 className="text-foreground text-3xl md:text-4xl font-black">
            Hai qualche dubbio?
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`px-8 py-5 rounded-2xl bg-surface-container-low cursor-pointer transition-shadow ${
                openIndex === i ? "shadow-ambient-md" : "shadow-ambient"
              }`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </div>
              {openIndex === i && (
                <p className="mt-4 text-muted-foreground leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
