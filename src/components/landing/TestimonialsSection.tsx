import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marco B.",
    role: "CEO — Azienda Metalmeccanica, Rovereto",
    text: "Finalmente un avvocato che ti dice subito quanto costa. I nostri contratti con i fornitori sono blindati, dormiamo sonni tranquilli.",
  },
  {
    name: "Laura S.",
    role: "CFO — Software House, Bolzano",
    text: "Contratti SaaS internazionali conformi al GDPR in tempi record. Professionali, chiari, zero legalese inutile.",
  },
  {
    name: "Giovanni T.",
    role: "Titolare — Impresa Edile, Trento",
    text: "Ci ha rivisto tutti i contratti di subappalto. Ha trovato clausole che ci avrebbero fatto perdere migliaia di euro. Consigliatissimo.",
  },
];

const TestimonialsSection = () => (
  <section className="px-6 py-20 md:px-20 bg-surface-container-low">
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary font-bold text-xs uppercase tracking-label mb-3 block">
          Cosa Dicono i Clienti
        </span>
        <h2 className="text-foreground text-3xl md:text-4xl font-black">
          Imprenditori come te si fidano di noi
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-surface rounded-2xl p-8 flex flex-col gap-6 shadow-ambient hover:shadow-ambient-md transition-shadow">
            <Quote className="w-8 h-8 text-primary/20" />
            <p className="text-foreground leading-relaxed flex-1">"{t.text}"</p>
            <div className="flex gap-0.5 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <div>
              <p className="text-foreground font-bold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
