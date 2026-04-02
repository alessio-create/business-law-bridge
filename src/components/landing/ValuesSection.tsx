import { CheckCircle } from "lucide-react";
import valuesIllustration from "@/assets/values-illustration.png";

const values = [
  {
    title: "Preventivo scritto garantito",
    desc: "Sai esattamente quanto spenderai prima di firmare qualsiasi incarico. Zero sorprese.",
  },
  {
    title: "Trasparenza totale",
    desc: "Se qualcosa cambia, ti avvisiamo subito e concordiamo insieme il da farsi.",
  },
  {
    title: "Tempi certi",
    desc: "Ti diciamo subito quanto ci vorrà. Report periodici in linguaggio chiaro, non legalese.",
  },
];

const ValuesSection = () => (
  <section className="px-6 py-20 md:px-20 bg-surface">
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <span className="text-primary font-bold text-xs uppercase tracking-label">
            Le Nostre Promesse
          </span>
          <h2 className="text-foreground text-3xl md:text-4xl font-black">
            Cosa ottieni dal Check-up Gratuito
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            30 minuti per analizzare i tuoi contratti e capire dove sei esposto. Ricevi un piano d'azione chiaro, senza impegno.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-3">
                <div className="p-1.5 bg-primary/10 rounded-full mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-sm">{v.title}</h4>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-foreground font-bold text-base mt-2 italic">
            I tuoi contratti sono davvero a prova di causa?
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={valuesIllustration}
            alt="Imprenditore con contratto sicuro e futuro protetto"
            className="w-full max-w-2xl"
            loading="lazy"
            width={1024}
            height={1024}
          />
        </div>
      </div>
    </div>
  </section>
);

export default ValuesSection;
