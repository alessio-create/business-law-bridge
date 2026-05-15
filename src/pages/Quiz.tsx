import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";

interface QuizAnswer {
  question: number;
  answer: string;
}

const questions = [
  {
    title: "Di che tipo di contratto hai bisogno?",
    subtitle: "Seleziona l'area più vicina alla tua situazione.",
    options: [
      { label: "Contratti di fornitura", desc: "Acquisti, materie prime, rapporti con fornitori" },
      { label: "Contratti di appalto / subappalto", desc: "Lavori, servizi, costruzioni" },
      { label: "Contratti commerciali e distribuzione", desc: "Partnership, franchising, agenti, distributori" },
      { label: "Contratti IT / SaaS / licenza", desc: "Software, servizi digitali, proprietà intellettuale" },
      { label: "Revisione contratti esistenti", desc: "Voglio far controllare contratti che ho già in uso" },
    ],
  },
  {
    title: "Quanti dipendenti ha la tua azienda?",
    subtitle: "Ci aiuta a calibrare la complessità del tuo caso.",
    options: [
      { label: "1-5 dipendenti", desc: "Micro impresa" },
      { label: "6-15 dipendenti", desc: "Piccola impresa" },
      { label: "16-50 dipendenti", desc: "Media impresa" },
      { label: "Oltre 50 dipendenti", desc: "Impresa strutturata" },
    ],
  },
  {
    title: "Quanto è urgente la tua situazione?",
    subtitle: "Così organizziamo le priorità.",
    options: [
      { label: "Urgente", desc: "Ho una scadenza imminente o devo firmare a breve" },
      { label: "Entro 30 giorni", desc: "Non è urgentissimo ma vorrei muovermi presto" },
      { label: "Sto valutando", desc: "Voglio informarmi prima di prendere decisioni" },
    ],
  },
  {
    title: "Hai già un avvocato di riferimento?",
    subtitle: "Non c'è risposta sbagliata — ci aiuta a capire il contesto.",
    options: [
      { label: "No, non ho un avvocato", desc: "Cerco un nuovo riferimento legale per la mia impresa" },
      { label: "Sì, ma non sono soddisfatto", desc: "Vorrei valutare un cambio" },
      { label: "Sì, cerco un secondo parere", desc: "Voglio confrontare l'opinione del mio avvocato" },
    ],
  },
];

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const handleNext = () => {
    if (!selected) return;
    const newAnswers = [...answers.filter(a => a.question !== step), { question: step, answer: selected }];
    setAnswers(newAnswers);
    setSelected(null);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      sessionStorage.setItem("quizAnswers", JSON.stringify(newAnswers));
      navigate("/optin");
    }
  };

  const handleBack = () => {
    if (step > 0) {
      const prevAnswer = answers.find(a => a.question === step - 1);
      setSelected(prevAnswer?.answer || null);
      setStep(step - 1);
    }
  };

  const current = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-12 md:py-20 bg-surface-container-low relative">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl" />
        </div>

        <div className="w-full max-w-2xl relative z-10">
          <div className="mb-8">
            <div className="flex justify-between text-muted-foreground mb-2">
              <span className="font-semibold text-[11px] uppercase tracking-label">Domanda {step + 1} di {questions.length}</span>
              <span className="font-bold text-[13px]">{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-foreground text-[1.625rem] md:text-[2.125rem] font-black mb-2 leading-[1.12]">{current.title}</h1>
            <p className="text-muted-foreground text-[15px] leading-[1.7]">{current.subtitle}</p>
          </div>

          <div className="flex flex-col gap-3 mb-8">
            {current.options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => {
                  setSelected(opt.label);
                  const newAnswers = [...answers.filter(a => a.question !== step), { question: step, answer: opt.label }];
                  setAnswers(newAnswers);
                  setTimeout(() => {
                    if (step < questions.length - 1) {
                      setSelected(null);
                      setStep(prev => prev + 1);
                    } else {
                      sessionStorage.setItem("quizAnswers", JSON.stringify(newAnswers));
                      navigate("/optin");
                    }
                  }, 400);
                }}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 ${
                  selected === opt.label
                    ? "bg-primary/5 shadow-ambient-md ring-2 ring-primary"
                    : "bg-surface shadow-ambient hover:shadow-ambient-md hover:-translate-y-0.5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground text-[15px]">{opt.label}</p>
                    <p className="text-[13px] text-muted-foreground mt-1 leading-[1.7]">{opt.desc}</p>
                  </div>
                  {selected === opt.label && (
                    <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={handleBack}
              disabled={step === 0}
              className="flex items-center gap-2 px-6 h-12 rounded-lg text-muted-foreground font-medium text-[14px] hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
              Indietro
            </button>
            <button
              onClick={handleNext}
              disabled={!selected}
              className="flex items-center gap-2 px-8 h-[52px] rounded-xl bg-primary text-primary-foreground text-[15px] font-bold shadow-primary-lg hover:shadow-primary-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {step === questions.length - 1 ? "Continua" : "Avanti"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;
