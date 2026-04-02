import { Building2, Briefcase, Store } from "lucide-react";

const profiles = [
  {
    icon: Building2,
    title: "PMI e Aziende Strutturate",
    desc: "Hai fornitori, clienti e collaboratori? I tuoi contratti devono proteggere ogni rapporto commerciale, dalla fornitura alla distribuzione.",
  },
  {
    icon: Briefcase,
    title: "Startup e Imprese Tech",
    desc: "Contratti SaaS, licensing, NDA, accordi con investitori. Servono clausole su misura per il tuo modello di business digitale.",
  },
  {
    icon: Store,
    title: "Imprenditori e Liberi Professionisti",
    desc: "Lavori con pochi clienti ma di valore? Un contratto ben scritto ti evita contestazioni, mancati pagamenti e cause inutili.",
  },
];

const QualificationSection = () => (
  <section className="px-6 py-20 md:px-20 bg-surface">
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary font-bold text-xs uppercase tracking-label mb-3 block">
          Per Chi è
        </span>
        <h2 className="text-foreground text-3xl md:text-4xl font-black max-w-2xl mx-auto text-balance">
          Questo servizio è per te se…
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {profiles.map((p) => (
          <div
            key={p.title}
            className="bg-surface-container-low rounded-2xl p-8 flex flex-col gap-5 shadow-ambient hover:shadow-ambient-md transition-shadow"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10">
              <p.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-foreground text-lg font-bold">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default QualificationSection;
