import { Factory, Monitor, HardHat, Star } from "lucide-react";

const cases = [
  {
    icon: Factory,
    sector: "Manifatturiero",
    title: "Recupero crediti da €180K per azienda metalmeccanica",
    result: "Credito recuperato al 92% in 45 giorni tramite fase stragiudiziale.",
    rating: 5,
  },
  {
    icon: Monitor,
    sector: "IT & Software",
    title: "Contrattualistica SaaS per software house di Bolzano",
    result: "Contratti internazionali conformi GDPR, riduzione contenziosi del 70%.",
    rating: 5,
  },
  {
    icon: HardHat,
    sector: "Edilizia",
    title: "Gestione crisi d'impresa per impresa edile",
    result: "Composizione negoziata conclusa con successo, continuità aziendale garantita.",
    rating: 5,
  },
];

const CaseStudiesSection = () => (
  <section id="casi" className="px-6 py-20 md:px-20 bg-background">
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">Casi Studio</span>
        <h2 className="text-foreground text-3xl md:text-4xl font-black">Risultati concreti per imprese come la tua</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((c) => (
          <div key={c.title} className="bg-card rounded-2xl border border-border p-8 flex flex-col gap-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">{c.sector}</span>
            </div>
            <h3 className="text-foreground font-bold text-lg leading-snug">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.result}</p>
            <div className="flex gap-1 mt-auto">
              {Array.from({ length: c.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <div className="bg-card border border-border rounded-2xl px-8 py-5 flex items-center gap-6">
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}
          </div>
          <div>
            <p className="font-bold text-foreground">4.9/5 su Google</p>
            <p className="text-muted-foreground text-sm">Basato su 47 recensioni verificate</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;
