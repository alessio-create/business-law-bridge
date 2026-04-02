import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import valuesIllustration from "@/assets/values-illustration.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const values = [
  {
    title: "Preventivo scritto garantito",
    desc: "Sai esattamente quanto spenderai prima di firmare qualsiasi incarico. Zero sorprese.",
  },
  {
    title: "Trasparenza totale",
    desc: "Se qualcosa cambia, ti avvisiamo subito e concordiamo insieme il da farsi.",
  },
  {
    title: "Tempi certi",
    desc: "Ti diciamo subito quanto ci vorrà. Report periodici in linguaggio chiaro, non legalese.",
  },
];

const ValuesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 py-24 md:px-20 md:py-28 bg-surface">
      <div ref={ref} className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row gap-14 lg:gap-20 items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <span
              className={`text-primary font-semibold text-[11px] uppercase tracking-label transition-all duration-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Le Nostre Promesse
            </span>
            <h2
              className={`text-foreground text-[1.75rem] md:text-[2.25rem] font-black leading-tight transition-all duration-600 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Cosa ottieni dal Check-up Gratuito
            </h2>
            <p
              className={`text-muted-foreground text-base md:text-lg leading-relaxed transition-all duration-600 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              30 minuti per analizzare i tuoi contratti e capire dove sei esposto. Ricevi un piano d'azione chiaro, senza impegno.
            </p>
            <div className="flex flex-col gap-4 mt-3">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isVisible ? `${300 + i * 100}ms` : "0ms" }}
                >
                  <div className="p-1.5 bg-primary/10 rounded-full mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold text-sm">{v.title}</h4>
                    <p className="text-muted-foreground text-[13px] leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p
              className={`text-foreground font-bold text-base mt-5 italic transition-all duration-600 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              I tuoi contratti sono davvero a prova di causa?
            </p>
            <div
              className={`flex flex-wrap gap-3 mt-1 transition-all duration-600 delay-[800ms] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                to="/quiz"
                className="group inline-flex items-center gap-2 rounded-xl h-12 px-6 bg-primary text-primary-foreground text-sm font-bold shadow-primary-lg hover:scale-[1.04] hover:shadow-primary-xl active:scale-[0.98] transition-all duration-200"
              >
                No, voglio verificare
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/quiz"
                className="inline-flex items-center gap-2 rounded-xl h-12 px-6 bg-surface-container-low text-foreground text-sm font-bold shadow-ambient hover:shadow-ambient-md hover:scale-[1.04] active:scale-[0.98] hover:bg-surface-container transition-all duration-200"
              >
                Sì, ma voglio essere sicuro
              </Link>
            </div>
          </div>
          <div
            className={`w-full md:w-1/2 flex items-center justify-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <img
              src={valuesIllustration}
              alt="Imprenditore con contratto sicuro e futuro protetto"
              className="w-full max-w-2xl"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
