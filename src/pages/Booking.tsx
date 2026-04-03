import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeft, Calendar, Clock, Video } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ChiSonoSection from "@/components/booking/ChiSonoSection";
import ProcessStepsSection from "@/components/booking/ProcessStepsSection";
import TestimonialsBookingSection from "@/components/booking/TestimonialsBookingSection";
import FAQBookingSection from "@/components/booking/FAQBookingSection";

interface LeadInfo {
  name: string;
  email: string;
  company: string;
}

const Booking = () => {
  const [lead, setLead] = useState<LeadInfo | null>(null);
  const [booked, setBooked] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("leadInfo");
    if (stored) {
      setLead(JSON.parse(stored));
    }
    const t = setTimeout(() => setHeroLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  const handleBooking = () => {
    setBooked(true);
  };

  if (booked && lead) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-6 py-20 bg-surface relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl" />
          </div>
          <div className="w-full max-w-lg text-center relative z-10">
            <div className="w-20 h-20 bg-primary/8 rounded-full flex items-center justify-center mx-auto mb-8 animate-fade-in-up">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-foreground text-[2rem] md:text-[2.5rem] font-black mb-4 leading-[1.1] animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              Perfetto, {lead.name}!
            </h1>
            <p className="text-muted-foreground text-[15px] md:text-base mb-8 leading-[1.7] animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              Il tuo check-up legale preventivo è confermato. Riceverai un'email di conferma a <strong className="text-foreground">{lead.email}</strong> con tutti i dettagli.
            </p>
            <div className="bg-surface-container-low rounded-2xl p-7 text-left mb-8 shadow-ambient-md animate-fade-in-up" style={{ animationDelay: "450ms" }}>
              <h3 className="font-bold text-foreground mb-4 text-[11px] uppercase tracking-label">Come prepararti al check-up</h3>
              <ul className="flex flex-col gap-3 text-[13px] text-muted-foreground leading-[1.75]">
                {[
                  "Prepara i contratti che vorresti far revisionare",
                  "Annota le clausole che ti preoccupano o non capisci",
                  "Prepara le domande che vorresti fare all'avvocato",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="p-1 bg-primary/8 rounded-full mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary font-medium text-[14px] hover:underline animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
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
      <main className="flex-1">
        {/* Hero / Calendar section */}
        <section className="bg-surface relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl" />
          </div>

          <div className="relative px-6 py-20 md:px-20 md:py-28">
            <div className="max-w-[700px] mx-auto">
              <Link
                to="/optin"
                className={`inline-flex items-center gap-2 text-[13px] text-muted-foreground hover:text-foreground mb-8 transition-all duration-500 ease-out ${
                  heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Indietro
              </Link>

              <div className="text-center mb-12">
                <span
                  className={`text-primary/70 font-semibold text-[11px] uppercase tracking-label mb-4 block transition-all duration-700 ease-out delay-100 ${
                    heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  Ultimo Step
                </span>
                <h1
                  className={`text-foreground text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-black mb-4 leading-[1.08] text-balance transition-all duration-800 ease-out delay-200 ${
                    heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  Scegli quando fare il check-up
                </h1>
                <p
                  className={`text-muted-foreground text-[15px] md:text-base leading-[1.7] max-w-[520px] mx-auto transition-all duration-700 ease-out delay-[350ms] ${
                    heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                >
                  {lead ? `${lead.name}, seleziona` : "Seleziona"} il giorno e l'orario che preferisci per la tua consulenza preventiva di 30 minuti.
                </p>
              </div>

              <div
                className={`bg-surface-container-low rounded-2xl p-8 md:p-12 mb-8 shadow-ambient-md transition-all duration-800 ease-out delay-[450ms] ${
                  heroLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98]"
                }`}
              >
                <div className="flex flex-col items-center gap-6 text-center">
                  <div className="w-16 h-16 bg-primary/8 rounded-full flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-foreground text-xl font-bold mb-2">Calendario appuntamenti</h2>
                    <p className="text-muted-foreground text-[13px] max-w-md leading-[1.75]">
                      Qui verrà integrato il calendario Cal.com per scegliere direttamente lo slot disponibile.
                    </p>
                  </div>

                  <div className="w-full max-w-md grid grid-cols-2 gap-3 mt-4">
                    {["Lun 10:00", "Mar 14:00", "Mer 11:00", "Gio 16:00", "Ven 09:00", "Ven 15:00"].map((slot) => (
                      <button
                        key={slot}
                        onClick={handleBooking}
                        className="flex items-center justify-center gap-2 p-4 rounded-xl bg-surface hover:ring-2 hover:ring-primary hover:shadow-ambient-md hover:-translate-y-0.5 transition-all duration-300 text-[14px] font-medium text-foreground shadow-ambient"
                      >
                        <Clock className="w-4 h-4 text-primary" />
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={`flex flex-wrap justify-center gap-6 text-[13px] text-muted-foreground transition-all duration-700 ease-out delay-[600ms] ${
                  heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-primary" />
                  Videochiamata o in studio
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Durata: 30 minuti
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  100% preventivo
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Each section handles its own bg and padding */}
        <ChiSonoSection />
        <ProcessStepsSection />
        <TestimonialsBookingSection />
        <FAQBookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
