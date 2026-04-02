import { AlertTriangle, FileWarning, ShieldAlert, XCircle } from "lucide-react";

const problems = [
  {
    icon: FileWarning,
    title: "Contratti copia-incolla",
    explanation: "Modelli generici scaricati da internet non proteggono la tua impresa. Ogni clausola mancante è un rischio concreto.",
    cases: "Un nostro cliente ha perso €45.000 in una causa perché il suo contratto di fornitura non prevedeva penali per ritardi.",
  },
  {
    icon: XCircle,
    title: "Clausole ambigue",
    explanation: "Un contratto poco chiaro genera contestazioni, ritardi nei pagamenti e cause costose che potevi evitare.",
    cases: "Abbiamo assistito un'impresa trascinata in tribunale per 2 anni a causa di una clausola di pagamento interpretabile in due modi diversi.",
  },
  {
    icon: ShieldAlert,
    title: "Nessuna tutela su penali e recesso",
    explanation: "Senza clausole di uscita ben scritte, resti bloccato in rapporti commerciali svantaggiosi.",
    cases: "Un imprenditore è rimasto vincolato 3 anni a un fornitore inadempiente perché il contratto non prevedeva una clausola di recesso.",
  },
  {
    icon: AlertTriangle,
    title: "Non conformità normativa",
    explanation: "GDPR, codice civile, normative di settore: un contratto non aggiornato espone l'azienda a sanzioni.",
    cases: "Un'azienda ha ricevuto una multa da €20.000 dal Garante Privacy per un contratto con i fornitori non conforme al GDPR.",
  },
];

const ProblemsSection = () => (
  <section className="px-6 py-20 md:px-20 bg-surface-container-low">
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary font-bold text-xs uppercase tracking-label mb-3 block">
          Perché Serve un Esperto
        </span>
        <h2 className="text-foreground text-3xl md:text-4xl font-black max-w-2xl mx-auto text-balance">
          Un contratto fatto male ti costa più dell'avvocato
        </h2>
      </div>
      <div className="flex flex-col gap-6">
        {problems.map((p) => (
          <div
            key={p.title}
            className="flex flex-col md:flex-row gap-6 rounded-2xl bg-surface p-8 shadow-ambient hover:shadow-ambient-md transition-shadow"
          >
            {/* Left: problem explanation */}
            <div className="flex gap-5 md:w-1/2">
              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <p.icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-foreground text-lg font-bold">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.explanation}</p>
              </div>
            </div>
            {/* Right: real case */}
            <div className="md:w-1/2 md:border-l md:border-border md:pl-6 flex items-start gap-3">
              <span className="shrink-0 mt-0.5 text-xs font-bold uppercase tracking-label text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                Caso reale
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed italic">{p.cases}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
