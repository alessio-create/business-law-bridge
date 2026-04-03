import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const faqs = [
  {
    q: "La consulenza è davvero preventiva?",
    a: "Sì, 100%. La videochiamata di 30 minuti è senza impegno. Serve a capire la tua situazione e valutare se possiamo aiutarti.",
  },
  {
    q: "Quanto costa il servizio dopo il check-up?",
    a: "Riceverai un preventivo scritto e dettagliato dopo la consulenza. Nessun obbligo: decidi con calma se procedere.",
  },
  {
    q: "Come si svolge la videochiamata?",
    a: "Riceverai un link per la videochiamata via email. Puoi partecipare da computer o smartphone, senza installare nulla.",
  },
  {
    q: "Devo preparare qualcosa prima della chiamata?",
    a: "Idealmente sì: tieni a portata di mano i contratti che vuoi far revisionare e le domande che vuoi porre. Ma non è obbligatorio.",
  },
];

const FAQBookingSection = () => {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section ref={ref} className="px-6 py-16 md:px-20 md:py-20 bg-surface-container-low">
      <div className="max-w-[700px] mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span
            className={`text-primary/70 font-semibold text-[11px] uppercase tracking-label mb-4 block transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Hai Domande?
          </span>
          <h2
            className={`text-foreground text-[1.375rem] md:text-[2.125rem] font-black text-balance leading-[1.12] transition-all duration-700 ease-out delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Domande frequenti
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={String(i)}
              className={`bg-surface rounded-xl shadow-ambient mb-3 px-4 md:px-6 hover:shadow-ambient-md transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? `${300 + i * 80}ms` : "0ms" }}
            >
              <AccordionTrigger className="text-foreground font-bold text-[13px] md:text-[14px] hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[12px] md:text-[13px] leading-[1.75]">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQBookingSection;
