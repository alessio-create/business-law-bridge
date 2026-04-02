import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Quanto costa il check-up legale?",
    a: "Il check-up iniziale di 30 minuti è completamente gratuito e senza impegno. Serve a capire se i tuoi contratti ti proteggono davvero.",
  },
  {
    q: "Lavorate solo con aziende di Trento?",
    a: "Abbiamo sede a Trento ma assistiamo imprese in tutto il Nord-Est: Trentino-Alto Adige, Veneto e Friuli. Per il contenzioso in Cassazione operiamo su tutto il territorio nazionale.",
  },
  {
    q: "Come funziona il preventivo scritto?",
    a: "Dopo il check-up, ricevi un documento con l'analisi dei tuoi contratti, la strategia proposta, i costi dettagliati e i tempi stimati. Nessuna sorpresa.",
  },
  {
    q: "Posso cambiare avvocato in corso d'opera?",
    a: "Assolutamente sì. Se hai già un avvocato, possiamo subentrare in qualsiasi momento. Analizzeremo lo stato della pratica e ti diremo come procedere.",
  },
  {
    q: "Che tipo di contratti gestite?",
    a: "Contratti di fornitura, appalto, distribuzione, partnership, SaaS, licenza, franchising, subappalto e qualsiasi accordo commerciale tra imprese.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-20 md:px-20 bg-background">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-foreground text-3xl font-black text-center mb-12">Domande Frequenti</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-border bg-card cursor-pointer transition-all hover:border-primary"
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
