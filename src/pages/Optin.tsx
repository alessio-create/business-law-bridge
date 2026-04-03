import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Mail, User, Building2, Star, Shield, AlertTriangle } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

interface QuizAnswer {
  question: number;
  answer: string;
}

const Optin = () => {
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = sessionStorage.getItem("quizAnswers");
    if (stored) {
      setAnswers(JSON.parse(stored));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem("leadInfo", JSON.stringify({ name, email, company }));
    navigate("/prenota");
  };

  const mainNeed = answers.find(a => a.question === 0)?.answer || "Contrattualistica";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 px-6 py-12 md:py-20 bg-surface-container-low">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <div>
              <Link to="/quiz" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
                <ArrowLeft className="w-4 h-4" />
                Modifica risposte
              </Link>
              <h1 className="text-foreground text-3xl font-black mb-3">
                Ottimo! Dicci chi sei.
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Lascia i tuoi dati per accedere alla prenotazione del check-up gratuito di 30 minuti.
              </p>
            </div>

            {answers.length > 0 && (
              <div className="bg-surface rounded-2xl p-6 shadow-ambient">
                <h3 className="font-bold text-foreground mb-4 text-xs uppercase tracking-label">Le tue risposte</h3>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tipo contratto</span>
                    <span className="font-medium text-foreground">{mainNeed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dimensione</span>
                    <span className="font-medium text-foreground">{answers.find(a => a.question === 1)?.answer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Urgenza</span>
                    <span className="font-medium text-foreground">{answers.find(a => a.question === 2)?.answer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avvocato attuale</span>
                    <span className="font-medium text-foreground">{answers.find(a => a.question === 3)?.answer}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="p-1 bg-primary/10 rounded-full">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                </div>
                Consulenza gratuita di 30 minuti
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 bg-primary/10 rounded-full">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                </div>
                Preventivo scritto incluso
              </div>
              <div className="flex items-center gap-3">
                <div className="p-1 bg-primary/10 rounded-full">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                </div>
                Nessun impegno o obbligo
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-surface rounded-2xl p-6 shadow-ambient">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground">4.9/5</span>
                <span className="text-xs text-muted-foreground">su Google</span>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
                    "Contratti rivisti in tempi record. Professionale, chiaro e sempre disponibile."
                  </blockquote>
                  <p className="text-xs font-bold text-foreground mt-2">— Marco T., CEO, azienda manifatturiera</p>
                </div>
                <div>
                  <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
                    "Ha blindato tutti i nostri accordi di distribuzione. Zero sorprese da 3 anni."
                  </blockquote>
                  <p className="text-xs font-bold text-foreground mt-2">— Laura S., Direttrice commerciale, settore food</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-muted/20 flex items-center gap-3">
                <Shield className="w-4 h-4 text-primary shrink-0" />
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">+200 imprese</strong> assistite in contrattualistica negli ultimi 5 anni
                </p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-surface rounded-2xl p-8 flex flex-col gap-6 shadow-ambient-md">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-foreground">Nome e Cognome *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Mario Rossi"
                    className="w-full h-12 pl-11 pr-4 rounded-lg bg-surface-container-low text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-foreground">Email aziendale *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="mario@azienda.it"
                    className="w-full h-12 pl-11 pr-4 rounded-lg bg-surface-container-low text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-foreground">Nome Azienda</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    maxLength={100}
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    placeholder="Azienda S.r.l."
                    className="w-full h-12 pl-11 pr-4 rounded-lg bg-surface-container-low text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full h-14 rounded-lg bg-primary text-primary-foreground text-base font-bold shadow-primary-lg hover:scale-[1.02] transition-transform"
              >
                Vai alla prenotazione
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Inviando il form accetti la nostra{" "}
                <a href="#" className="underline">Privacy Policy</a>.
                I tuoi dati non saranno condivisi con terzi.
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Optin;
