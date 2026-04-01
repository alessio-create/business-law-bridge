import { useState, useEffect } from "react";
import { CheckCircle, ArrowLeft, Calendar, Mail, User, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

interface QuizAnswer {
  question: number;
  answer: string;
}

const Booking = () => {
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("quizAnswers");
    if (stored) {
      setAnswers(JSON.parse(stored));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to a backend
    setSubmitted(true);
  };

  const mainNeed = answers.find(a => a.question === 0)?.answer || "Check-up Legale";
  const urgency = answers.find(a => a.question === 2)?.answer || "";

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-6 py-20 bg-background">
          <div className="w-full max-w-lg text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-foreground text-3xl font-black mb-4">Perfetto, {name}!</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Abbiamo ricevuto la tua richiesta per un check-up su <strong className="text-foreground">{mainNeed}</strong>.
              Ti contatteremo entro 24 ore lavorative per fissare la tua consulenza gratuita di 30 minuti.
            </p>
            <div className="bg-card border border-border rounded-2xl p-6 text-left mb-8">
              <h3 className="font-bold text-foreground mb-4">Come prepararti al check-up:</h3>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  Prepara una breve descrizione della tua situazione
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  Raccogli i documenti rilevanti (contratti, fatture, corrispondenza)
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  Annota le domande che vorresti fare all'avvocato
                </li>
              </ul>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna alla home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 px-6 py-12 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Summary & Info */}
          <div className="flex flex-col gap-8">
            <div>
              <Link to="/quiz" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
                <ArrowLeft className="w-4 h-4" />
                Modifica risposte
              </Link>
              <h1 className="text-foreground text-3xl font-black mb-3">
                Ultimo step: prenota il tuo check-up gratuito
              </h1>
              <p className="text-muted-foreground text-lg">
                Compila il form e ti contatteremo per fissare una consulenza di 30 minuti, senza impegno.
              </p>
            </div>

            {answers.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-widest">Le tue risposte</h3>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Esigenza</span>
                    <span className="font-medium text-foreground">{mainNeed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dimensione</span>
                    <span className="font-medium text-foreground">{answers.find(a => a.question === 1)?.answer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Urgenza</span>
                    <span className="font-medium text-foreground">{urgency}</span>
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
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                Consulenza gratuita di 30 minuti
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                Preventivo scritto incluso
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                Nessun impegno o obbligo
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">Nome e Cognome *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Mario Rossi"
                    className="w-full h-12 pl-11 pr-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">Email aziendale *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="mario@azienda.it"
                    className="w-full h-12 pl-11 pr-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">Nome Azienda</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    placeholder="Azienda S.r.l."
                    className="w-full h-12 pl-11 pr-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full h-14 rounded-lg bg-primary text-primary-foreground text-base font-bold hover:opacity-90 transition-opacity"
              >
                <Calendar className="w-5 h-5" />
                Prenota il Check-up Gratuito
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

export default Booking;
