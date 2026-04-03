import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

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
      <main className="flex-1 flex items-center justify-center px-6 py-12 md:py-20 bg-surface-container-low">
        <div className="w-full max-w-2xl">
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span className="font-bold text-xs uppercase tracking-label">Domanda {step + 1} di {questions.length}</span>
              <span className="font-bold">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-surface-container rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-foreground text-2xl md:text-3xl font-black mb-2">{current.title}</h1>
            <p className="text-muted-foreground leading-relaxed">{current.subtitle}</p>
          </div>

          <div className="flex flex-col gap-3 mb-8">
            {current.options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => {
                  setSelected(opt.label);
                  // Auto-advance after selection
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
                className={`w-full text-left p-5 rounded-xl transition-all ${
                  selected === opt.label
                    ? "bg-primary/5 shadow-ambient-md ring-2 ring-primary"
                    : "bg-surface shadow-ambient hover:shadow-ambient-md"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground">{opt.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{opt.desc}</p>
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
              className="flex items-center gap-2 px-6 h-12 rounded-lg text-muted-foreground font-medium hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
              Indietro
            </button>
            <button
              onClick={handleNext}
              disabled={!selected}
              className="flex items-center gap-2 px-8 h-14 rounded-lg bg-primary text-primary-foreground font-bold shadow-primary-lg hover:scale-[1.02] transition-transform disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
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
