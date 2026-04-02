import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="px-6 py-12 md:px-20 mb-12">
    <div className="max-w-[1200px] mx-auto rounded-3xl bg-primary p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden shadow-primary-xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full -ml-24 -mb-24" />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-5xl font-black max-w-2xl leading-tight text-balance">
          I tuoi contratti ti proteggono? Scoprilo gratis.
        </h2>
        <p className="text-lg opacity-80 max-w-xl leading-relaxed">
          30 minuti per analizzare i tuoi accordi commerciali e capire dove sei esposto. Preventivo scritto incluso.
        </p>
        <Link
          to="/quiz"
          className="flex items-center gap-2 min-w-[240px] justify-center rounded-lg h-14 px-10 bg-primary-foreground text-primary text-lg font-black shadow-2xl hover:scale-[1.02] transition-transform"
        >
          Inizia il Check-up
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </section>
);

export default CTASection;
