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

const ProblemsSection = () => (
  <section className="px-6 py-20 md:px-20 bg-surface-container-low">
    <div className="max-w-[720px] mx-auto">
      <span className="text-primary font-bold text-xs uppercase tracking-label mb-4 block text-center">
        Perché Affidarsi a un Esperto
      </span>
      <h2 className="text-foreground text-3xl md:text-4xl font-black text-center text-balance mb-12">
        Un contratto ben fatto è il miglior investimento per la tua impresa
      </h2>
      <div className="flex flex-col gap-10">
        {points.map((p) => (
          <article key={p.title}>
            <h3 className="text-foreground text-xl font-bold mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-base leading-relaxed">{p.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
