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

  useEffect(() => {
    const stored = sessionStorage.getItem("leadInfo");
    if (stored) {
      setLead(JSON.parse(stored));
    }
  }, []);

  const handleBooking = () => {
    setBooked(true);
  };

  if (booked && lead) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-6 py-20 bg-surface-container-low relative">
          {/* Subtle radial glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl" />
          </div>
          <div className="w-full max-w-lg text-center relative z-10">
            <div className="w-20 h-20 bg-primary/8 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-foreground text-[2rem] md:text-[2.5rem] font-black mb-4 leading-[1.1]">
              Perfetto, {lead.name}!
            </h1>
            <p className="text-muted-foreground text-[15px] md:text-base mb-8 leading-[1.7]">
              Il tuo check-up legale preventivo è confermato. Riceverai un'email di conferma a <strong className="text-foreground">{lead.email}</strong> con tutti i dettagli.
            </p>
            <div className="bg-surface rounded-2xl p-7 text-left mb-8 shadow-ambient-md">
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
              className="inline-flex items-center gap-2 text-primary font-medium text-[14px] hover:underline"
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
      <main className="flex-1 bg-surface-container-low relative">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl" />
        </div>

        <div className="relative z-10 px-6 py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            <Link to="/optin" className="inline-flex items-center gap-2 text-[13px] text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Indietro
            </Link>

            <div className="text-center mb-12">
              <span className="text-primary/70 font-semibold text-[11px] uppercase tracking-label mb-4 block">
                Ultimo Step
              </span>
              <h1 className="text-foreground text-[2rem] md:text-[2.5rem] font-black mb-3 leading-[1.1]">
                Scegli quando fare il check-up
              </h1>
              <p className="text-muted-foreground text-[15px] md:text-base leading-[1.7] max-w-lg mx-auto">
                {lead ? `${lead.name}, seleziona` : "Seleziona"} il giorno e l'orario che preferisci per la tua consulenza preventiva di 30 minuti.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-8 md:p-12 mb-8 shadow-ambient-md">
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
                      className="flex items-center justify-center gap-2 p-4 rounded-xl bg-surface-container-low hover:ring-2 hover:ring-primary hover:shadow-ambient-md hover:-translate-y-0.5 transition-all text-[14px] font-medium text-foreground shadow-ambient"
                    >
                      <Clock className="w-4 h-4 text-primary" />
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-[13px] text-muted-foreground">
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

            <ChiSonoSection />
            <ProcessStepsSection />
            <TestimonialsBookingSection />
            <FAQBookingSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
