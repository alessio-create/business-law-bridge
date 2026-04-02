import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const points = [
  {
    title: "Contratti su misura vs. modelli generici",
    text: "I modelli scaricati da internet lasciano scoperti punti critici. Un contratto personalizzato protegge ogni aspetto del tuo business. Un nostro cliente ha recuperato €45.000 grazie a clausole penali che abbiamo inserito nel suo contratto di fornitura.",
  },
  {
    title: "Clausole chiare, zero contestazioni",
    text: "Quando ogni termine è preciso, si evitano interpretazioni ambigue, ritardi nei pagamenti e contenziosi inutili. Abbiamo riscritto un contratto di pagamento ambiguo, risolvendo una disputa che durava da mesi senza andare in tribunale.",
  },
  {
    title: "Libertà di uscita garantita",
    text: "Clausole di recesso e penali ben calibrate ti danno il controllo: puoi chiudere rapporti svantaggiosi senza restare bloccato. Grazie a una clausola di recesso su misura, un imprenditore si è liberato in 30 giorni da un fornitore inadempiente.",
  },
  {
    title: "Sempre in regola con le normative",
    text: "GDPR, codice civile, normative di settore: teniamo i tuoi contratti aggiornati così non devi preoccuparti di sanzioni. Abbiamo adeguato i contratti di un'azienda al GDPR prima di un'ispezione, evitando una sanzione potenziale da €20.000.",
  },
];

const ProblemsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 py-24 md:px-20 md:py-28 bg-surface-container-low">
      <div ref={ref} className="max-w-[680px] mx-auto">
        <span
          className={`text-primary font-semibold text-[11px] uppercase tracking-label mb-4 block text-center transition-all duration-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Perché Affidarsi a un Esperto
        </span>
        <h2
          className={`text-foreground text-[1.75rem] md:text-[2.25rem] font-black text-center text-balance mb-14 leading-tight transition-all duration-600 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Un contratto ben fatto è il miglior investimento per la tua impresa
        </h2>
        <div className="flex flex-col gap-12">
          {points.map((p, i) => (
            <article
              key={p.title}
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: isVisible ? `${300 + i * 120}ms` : "0ms" }}
            >
              <h3 className="text-foreground text-lg md:text-xl font-bold mb-2.5">{p.title}</h3>
              <p className="text-muted-foreground text-[15px] leading-[1.75]">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
