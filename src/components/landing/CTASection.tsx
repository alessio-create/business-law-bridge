import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="px-6 py-16 md:px-20 bg-surface">
      <div
        ref={ref}
        className={`max-w-[1000px] mx-auto rounded-3xl bg-primary p-10 md:p-20 text-center text-primary-foreground relative overflow-hidden shadow-primary-xl transition-all duration-700 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
        }`}
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-foreground/5 rounded-full -mr-36 -mt-36" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary-foreground/5 rounded-full -ml-28 -mb-28" />
        <div className="relative z-10 flex flex-col items-center gap-7">
          <h2 className="text-[1.75rem] md:text-[2.75rem] font-black max-w-xl leading-[1.1] text-balance">
            I tuoi contratti ti proteggono? Scoprilo gratis.
          </h2>
          <p className="text-base md:text-lg opacity-80 max-w-md leading-relaxed">
            30 minuti per analizzare i tuoi accordi commerciali e capire dove sei esposto. Preventivo scritto incluso.
          </p>
          <Link
            to="/quiz"
            className="group flex items-center gap-2.5 min-w-[220px] justify-center rounded-xl h-14 px-10 bg-primary-foreground text-primary text-base font-black shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            Inizia il Check-up
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
