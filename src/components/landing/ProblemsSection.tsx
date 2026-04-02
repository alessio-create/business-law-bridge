import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const points = [
  {
    number: "01",
    title: "Contratti su misura vs. modelli generici",
    text: "I modelli scaricati da internet lasciano scoperti punti critici. Un contratto personalizzato protegge ogni aspetto del tuo business. Un nostro cliente ha recuperato €45.000 grazie a clausole penali che abbiamo inserito nel suo contratto di fornitura.",
  },
  {
    number: "02",
    title: "Clausole chiare, zero contestazioni",
    text: "Quando ogni termine è preciso, si evitano interpretazioni ambigue, ritardi nei pagamenti e contenziosi inutili. Abbiamo riscritto un contratto di pagamento ambiguo, risolvendo una disputa che durava da mesi senza andare in tribunale.",
  },
  {
    number: "03",
    title: "Libertà di uscita garantita",
    text: "Clausole di recesso e penali ben calibrate ti danno il controllo: puoi chiudere rapporti svantaggiosi senza restare bloccato. Grazie a una clausola di recesso su misura, un imprenditore si è liberato in 30 giorni da un fornitore inadempiente.",
  },
  {
    number: "04",
    title: "Sempre in regola con le normative",
    text: "GDPR, codice civile, normative di settore: teniamo i tuoi contratti aggiornati così non devi preoccuparti di sanzioni. Abbiamo adeguato i contratti di un'azienda al GDPR prima di un'ispezione, evitando una sanzione potenziale da €20.000.",
  },
];

const ProblemsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 py-24 md:px-20 md:py-32 bg-surface-container-low">
      <div ref={ref} className="max-w-[1060px] mx-auto">
        <div className="text-center mb-16">
          <span
            className={`text-primary/70 font-semibold text-[11px] uppercase tracking-label mb-4 block transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Perché Affidarsi a un Esperto
          </span>
          <h2
            className={`text-foreground text-[1.625rem] md:text-[2.125rem] font-black text-balance leading-[1.12] max-w-lg mx-auto transition-all duration-700 ease-out delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Un contratto ben fatto è il miglior investimento per la tua impresa
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {points.map((p, i) => (
            <div
              key={p.title}
              className={`group bg-surface rounded-2xl p-7 md:p-8 shadow-ambient hover:shadow-ambient-md hover:-translate-y-0.5 transition-all duration-400 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${300 + i * 100}ms` : "0ms" }}
            >
              <div className="flex items-start gap-5">
                <span className="text-primary/15 text-[2.5rem] font-black leading-none select-none group-hover:text-primary/25 transition-colors duration-300">
                  {p.number}
                </span>
                <div className="flex flex-col gap-2 pt-1">
                  <h3 className="text-foreground text-[15px] font-bold leading-snug">{p.title}</h3>
                  <p className="text-muted-foreground text-[13px] leading-[1.75]">{p.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
