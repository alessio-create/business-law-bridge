import { AlertTriangle, FileWarning, ShieldAlert, XCircle } from "lucide-react";

const problems = [
  {
    icon: FileWarning,
    title: "Contratti su misura vs. modelli generici",
    explanation: "I modelli scaricati da internet lasciano scoperti punti critici. Un contratto personalizzato protegge ogni aspetto del tuo business.",
    cases: "Un nostro cliente ha recuperato €45.000 grazie a clausole penali che abbiamo inserito nel suo contratto di fornitura.",
  },
  {
    icon: XCircle,
    title: "Clausole chiare, zero contestazioni",
    explanation: "Quando ogni termine è preciso, si evitano interpretazioni ambigue, ritardi nei pagamenti e contenziosi inutili.",
    cases: "Abbiamo riscritto un contratto di pagamento ambiguo, risolvendo una disputa che durava da mesi senza andare in tribunale.",
  },
  {
    icon: ShieldAlert,
    title: "Libertà di uscita garantita",
    explanation: "Clausole di recesso e penali ben calibrate ti danno il controllo: puoi chiudere rapporti svantaggiosi senza restare bloccato.",
    cases: "Grazie a una clausola di recesso su misura, un imprenditore si è liberato in 30 giorni da un fornitore inadempiente.",
  },
  {
    icon: AlertTriangle,
    title: "Sempre in regola con le normative",
    explanation: "GDPR, codice civile, normative di settore: teniamo i tuoi contratti aggiornati così non devi preoccuparti di sanzioni.",
    cases: "Abbiamo adeguato i contratti di un'azienda al GDPR prima di un'ispezione, evitando una sanzione potenziale da €20.000.",
  },
];

const ProblemsSection = () => (
  <section className="px-6 py-20 md:px-20 bg-surface-container-low">
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary font-bold text-xs uppercase tracking-label mb-3 block">
          Perché Affidarsi a un Esperto
        </span>
        <h2 className="text-foreground text-3xl md:text-4xl font-black max-w-2xl mx-auto text-balance">
          Un contratto ben fatto è il miglior investimento per la tua impresa
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {problems.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl bg-surface p-8 shadow-ambient hover:shadow-ambient-md transition-shadow flex flex-col gap-5"
          >
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-primary/10">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-foreground text-lg font-bold">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.explanation}</p>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-xl px-5 py-4">
              <div className="flex items-start gap-2.5">
                <span className="shrink-0 text-[10px] font-bold uppercase tracking-label text-primary bg-primary/10 px-2 py-0.5 rounded-full mt-0.5">
                  Risultato
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.cases}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
