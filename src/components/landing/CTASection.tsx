import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="px-6 py-16 md:px-20 md:py-20 bg-surface">
      <div
        ref={ref}
        className={`max-w-[920px] mx-auto rounded-[1.5rem] bg-primary p-10 md:p-16 lg:p-20 text-center text-primary-foreground relative overflow-hidden shadow-primary-xl transition-all duration-800 ease-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
        }`}
      >
        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-foreground/[0.04] rounded-full -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary-foreground/[0.04] rounded-full -ml-30 -mb-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary-foreground/[0.02] rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-[1.625rem] md:text-[2.5rem] font-black max-w-md leading-[1.1] text-balance">
            I tuoi contratti ti proteggono? Scoprilo oggi.
          </h2>
          <p className="text-[15px] md:text-base opacity-70 max-w-sm leading-[1.7]">
            30 minuti per analizzare i tuoi accordi commerciali e capire dove sei esposto. Preventivo scritto incluso.
          </p>
          <Link
            to="/quiz"
            className="group flex items-center gap-2.5 justify-center rounded-xl h-[52px] px-9 bg-primary-foreground text-primary text-[15px] font-black shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 mt-2"
          >
            Inizia il Check-up
            <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-0.5 transition-transform duration-300" />
          </Link>
          <div className="flex items-center justify-center gap-1.5 mt-4 text-primary-foreground/60 text-[13px]">
            <div className="flex gap-px">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3 h-3 fill-gold text-gold" />
              ))}
            </div>
            <span>4.9/5 — 47 recensioni</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
