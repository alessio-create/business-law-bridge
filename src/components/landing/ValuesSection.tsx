import { CheckCircle, FileText, Eye, Clock } from "lucide-react";

const values = [
  {
    icon: FileText,
    title: "Preventivo scritto garantito",
    desc: "Sai esattamente quanto spenderai prima di firmare qualsiasi incarico. Zero sorprese.",
  },
  {
    icon: Eye,
    title: "Trasparenza totale",
    desc: "Se qualcosa cambia, ti avvisiamo subito e concordiamo insieme il da farsi.",
  },
  {
    icon: Clock,
    title: "Tempi certi",
    desc: "Ti diciamo subito quanto ci vorrà. Report periodici in linguaggio chiaro, non legalese.",
  },
];

const ValuesSection = () => (
  <section className="px-6 py-20 md:px-20 bg-card">
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">
            Le Nostre Promesse
          </span>
          <h2 className="text-foreground text-3xl md:text-4xl font-black">
            Cosa ottieni dal Check-up Gratuito
          </h2>
          <p className="text-muted-foreground text-lg">
            30 minuti per analizzare i tuoi contratti e capire dove sei esposto. Ricevi un piano d'azione chiaro, senza impegno.
          </p>
          <div className="flex flex-col gap-5 mt-4">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="text-foreground font-bold">{v.title}</h4>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary p-8 rounded-2xl text-primary-foreground flex flex-col gap-4">
              <span className="text-4xl font-black">28+</span>
              <p className="text-sm opacity-80 uppercase font-bold">Anni di esperienza</p>
            </div>
            <div className="bg-secondary p-8 rounded-2xl flex flex-col gap-4">
              <span className="text-4xl font-black text-primary">100%</span>
              <p className="text-sm text-muted-foreground uppercase font-bold">Preventivi scritti</p>
            </div>
            <div className="col-span-2 bg-secondary p-8 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-foreground font-bold text-lg">Cassazionista</p>
                <p className="text-muted-foreground text-sm">Abilitato al patrocinio in Corte di Cassazione</p>
              </div>
              <Eye className="w-10 h-10 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ValuesSection;
