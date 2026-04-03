import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeft, Calendar, Clock, Video, Star, ChevronDown, Shield, FileText, PhoneCall } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

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
        <main className="flex-1 flex items-center justify-center px-6 py-20 bg-surface-container-low">
          <div className="w-full max-w-lg text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-foreground text-3xl font-black mb-4">Perfetto, {lead.name}!</h1>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Il tuo check-up legale gratuito è confermato. Riceverai un'email di conferma a <strong className="text-foreground">{lead.email}</strong> con tutti i dettagli.
            </p>
            <div className="bg-surface rounded-2xl p-6 text-left mb-8 shadow-ambient">
              <h3 className="font-bold text-foreground mb-4 text-xs uppercase tracking-label">Come prepararti al check-up</h3>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-primary/10 rounded-full mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  </div>
                  Prepara i contratti che vorresti far revisionare
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-primary/10 rounded-full mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  </div>
                  Annota le clausole che ti preoccupano o non capisci
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 bg-primary/10 rounded-full mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  </div>
                  Prepara le domande che vorresti fare all'avvocato
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
      <main className="flex-1 px-6 py-12 md:py-20 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <Link to="/optin" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="w-4 h-4" />
            Indietro
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-foreground text-3xl font-black mb-3">
              Scegli quando fare il check-up
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {lead ? `${lead.name}, seleziona` : "Seleziona"} il giorno e l'orario che preferisci per la tua consulenza gratuita di 30 minuti.
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-8 md:p-12 mb-8 shadow-ambient-md">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-foreground text-xl font-bold mb-2">Calendario appuntamenti</h2>
                <p className="text-muted-foreground text-sm max-w-md">
                  Qui verrà integrato il calendario Cal.com per scegliere direttamente lo slot disponibile.
                </p>
              </div>

              <div className="w-full max-w-md grid grid-cols-2 gap-3 mt-4">
                {["Lun 10:00", "Mar 14:00", "Mer 11:00", "Gio 16:00", "Ven 09:00", "Ven 15:00"].map((slot) => (
                  <button
                    key={slot}
                    onClick={handleBooking}
                    className="flex items-center justify-center gap-2 p-4 rounded-xl bg-surface-container-low hover:ring-2 hover:ring-primary hover:shadow-ambient-md transition-all text-sm font-medium text-foreground shadow-ambient"
                  >
                    <Clock className="w-4 h-4 text-primary" />
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
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
              100% gratuito
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
