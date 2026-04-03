import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    quote: "Contratti rivisti in tempi record. Professionale, chiaro e sempre disponibile.",
    author: "Marco T., CEO, azienda manifatturiera",
  },
  {
    quote: "Ha blindato tutti i nostri accordi di distribuzione. Zero sorprese da 3 anni.",
    author: "Laura S., Direttrice commerciale, settore food",
  },
];

const TestimonialsBookingSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="mb-16">
      <span
        className={`text-primary/70 font-semibold text-[11px] uppercase tracking-label mb-4 block text-center transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Social Proof
      </span>
      <h2
        className={`text-foreground text-[1.625rem] md:text-[2.125rem] font-black text-center mb-8 transition-all duration-700 ease-out delay-150 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Cosa dicono i clienti
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`bg-surface rounded-2xl p-7 shadow-ambient hover:shadow-ambient-md hover:-translate-y-0.5 transition-all duration-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? `${300 + i * 100}ms` : "0ms" }}
          >
            <div className="flex mb-3 gap-px">
              {[1, 2, 3, 4, 5].map(s => (
                <Star key={s} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="text-[13px] text-muted-foreground italic leading-[1.75] mb-3">
              "{t.quote}"
            </blockquote>
            <p className="text-[12px] font-bold text-foreground">— {t.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsBookingSection;
