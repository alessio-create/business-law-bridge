import { FileText, TrendingUp, AlertTriangle, Scale } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Contrattualistica",
    description: "Contratti su misura per la tua impresa: forniture, appalti, partnership. Chiari, blindati, senza sorprese.",
  },
  {
    icon: TrendingUp,
    title: "Recupero Crediti",
    description: "Dalle diffide stragiudiziali ai decreti ingiuntivi. Recuperiamo i tuoi crediti con rapidità e trasparenza.",
  },
  {
    icon: AlertTriangle,
    title: "Crisi d'Impresa",
    description: "Composizione negoziata, concordati e ristrutturazioni. Interveniamo prima che sia troppo tardi.",
  },
  {
    icon: Scale,
    title: "Contenzioso Commerciale",
    description: "Difendiamo i tuoi interessi in tribunale con strategia e determinazione. Dal primo grado alla Cassazione.",
  },
];

const ServicesSection = () => (
  <section id="servizi" className="px-6 py-20 md:px-20 bg-background">
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">I Nostri Servizi</span>
        <h2 className="text-foreground text-3xl md:text-4xl font-black">Come proteggiamo la tua impresa</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 hover:border-primary transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground text-xl font-bold">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
