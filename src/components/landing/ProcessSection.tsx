const steps = [
  {
    num: "1",
    title: "Check-up Preventivo",
    desc: "30 minuti per analizzare la tua situazione legale. Ti diciamo subito se e come possiamo aiutarti.",
  },
  {
    num: "2",
    title: "Preventivo Scritto",
    desc: "Ricevi un preventivo dettagliato con costi certi. Decidi tu, senza pressioni.",
  },
  {
    num: "3",
    title: "Azione Mirata",
    desc: "Attiviamo la strategia concordata. Report periodici e comunicazione costante.",
  },
];

const ProcessSection = () => (
  <section id="processo" className="px-6 py-20 md:px-20 bg-surface-container-low">
    <div className="max-w-[1200px] mx-auto text-center">
      <span className="text-primary font-bold text-xs uppercase tracking-label mb-3 block">Come Lavoriamo</span>
      <h2 className="text-foreground text-3xl md:text-4xl font-black mb-16">Il nostro processo in 3 step</h2>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-primary/15 z-0" />
        {steps.map((s) => (
          <div key={s.num} className="relative z-10 flex flex-col items-center gap-6">
            {/* Circular indicator with 4px halo */}
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-primary-lg ring-4 ring-surface-container-low">
              {s.num}
            </div>
            <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
