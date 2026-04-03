import { Star, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    quote: "Contratti rivisti in tempi record. Professionale, chiaro e sempre disponibile.",
    author: "Marco T.",
    role: "CEO, azienda manifatturiera",
  },
  {
    quote: "Ha blindato tutti i nostri accordi di distribuzione. Zero sorprese da 3 anni.",
    author: "Laura S.",
    role: "Direttrice commerciale, settore food",
  },
];

const TestimonialsBookingSection = () => {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section ref={ref} className="px-6 py-16 md:px-20 md:py-20 bg-surface">
      <div className="max-w-[1060px] mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <span
            className={`text-primary/70 font-semibold text-[11px] uppercase tracking-label mb-4 block transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Risultati Reali
          </span>
          <h2
            className={`text-foreground text-[1.375rem] md:text-[2.125rem] font-black text-balance leading-[1.12] max-w-lg mx-auto transition-all duration-700 ease-out delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Cosa dicono i clienti
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-surface-container-low rounded-2xl p-6 md:p-8 shadow-ambient hover:shadow-ambient-md hover:-translate-y-0.5 transition-all duration-400 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${300 + i * 120}ms` : "0ms" }}
            >
              <div className="flex gap-px mb-4">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-foreground text-[14px] md:text-[15px] font-medium leading-[1.7] mb-5">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="text-foreground text-[13px] font-bold">{t.author}</p>
                <p className="text-muted-foreground text-[11px] md:text-[12px]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-6 md:mt-8 flex items-center justify-center gap-3 transition-all duration-700 ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Shield className="w-4 h-4 text-primary/70 shrink-0" />
          <p className="text-[12px] md:text-[13px] text-muted-foreground">
            <strong className="text-foreground">+200 imprese</strong> assistite in contrattualistica negli ultimi 5 anni
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBookingSection;
