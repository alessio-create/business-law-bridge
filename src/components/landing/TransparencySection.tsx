import { CheckCircle, Eye } from "lucide-react";

const TransparencySection = () => (
  <section className="px-6 py-20 md:px-20 bg-card">
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-foreground text-3xl md:text-4xl font-black">
            Trasparenza Radicale: la nostra promessa
          </h2>
          <p className="text-muted-foreground text-lg">
            Nessun avvocato ti dirà quanto costa prima di iniziare. Noi sì. Sempre.
            Preventivo scritto, dettagliato, prima di ogni incarico.
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="text-foreground font-bold">Preventivo scritto garantito</h4>
                <p className="text-muted-foreground text-sm">Sai esattamente quanto spenderai prima di firmare qualsiasi incarico.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="text-foreground font-bold">Nessun costo nascosto</h4>
                <p className="text-muted-foreground text-sm">Se qualcosa cambia, ti avvisiamo subito e concordiamo insieme il da farsi.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="text-foreground font-bold">Report periodici</h4>
                <p className="text-muted-foreground text-sm">Aggiornamenti regolari sullo stato delle tue pratiche, in linguaggio chiaro.</p>
              </div>
            </div>
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

export default TransparencySection;
