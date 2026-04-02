import { AlertTriangle, FileWarning, ShieldAlert, XCircle } from "lucide-react";

const problems = [
  {
    icon: FileWarning,
    title: "Contratti copia-incolla",
    desc: "Modelli generici scaricati da internet non proteggono la tua impresa. Ogni clausola mancante è un rischio concreto.",
  },
  {
    icon: XCircle,
    title: "Clausole ambigue",
    desc: "Un contratto poco chiaro genera contestazioni, ritardi nei pagamenti e cause costose che potevi evitare.",
  },
  {
    icon: ShieldAlert,
    title: "Nessuna tutela su penali e recesso",
    desc: "Senza clausole di uscita ben scritte, resti bloccato in rapporti commerciali svantaggiosi.",
  },
  {
    icon: AlertTriangle,
    title: "Non conformità normativa",
    desc: "GDPR, codice civile, normative di settore: un contratto non aggiornato espone l'azienda a sanzioni.",
  },
];

const ProblemsSection = () => (
  <section className="px-6 py-20 md:px-20 bg-background">
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
          Perché Serve un Esperto
        </span>
        <h2 className="text-foreground text-3xl md:text-4xl font-black max-w-2xl mx-auto text-balance">
          Un contratto fatto male ti costa più dell'avvocato
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {problems.map((p) => (
          <div
            key={p.title}
            className="flex gap-5 rounded-2xl border border-border bg-card p-8 hover:border-destructive/40 transition-colors"
          >
            <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-destructive/10 text-destructive">
              <p.icon className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground text-lg font-bold">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
