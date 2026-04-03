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

          {/* Chi sono */}
          <div className="mt-16 mb-16">
            <h2 className="text-foreground text-2xl font-black text-center mb-8">Chi sono</h2>
            <div className="bg-surface rounded-2xl p-8 shadow-ambient-md flex flex-col md:flex-row gap-8 items-center">
              <div className="w-28 h-28 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary text-4xl font-black">AF</span>
              </div>
              <div className="flex flex-col gap-4 text-center md:text-left">
                <div>
                  <h3 className="text-foreground text-xl font-bold">Avv. Alberto Fazio</h3>
                  <p className="text-sm text-primary font-medium">Cassazionista · 28 anni di esperienza</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Specializzato in contrattualistica d'impresa, assisto imprenditori e PMI nella redazione, revisione e negoziazione di contratti commerciali, di fornitura, appalto e distribuzione. Il mio approccio è pragmatico: contratti chiari, blindati e su misura per la tua realtà.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1.5 rounded-full">+200 imprese assistite</span>
                  <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1.5 rounded-full">Iscritto all'Albo dal 1997</span>
                  <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1.5 rounded-full">Abilitato in Cassazione</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 mb-16">
            <h2 className="text-foreground text-2xl font-black text-center mb-8">Cosa accadrà dopo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface rounded-2xl p-6 shadow-ambient text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneCall className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xs font-bold text-primary mb-2 uppercase tracking-label">Step 1</div>
                <h3 className="font-bold text-foreground mb-2">Videochiamata gratuita</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  30 minuti per analizzare la tua situazione contrattuale e individuare le criticità.
                </p>
              </div>
              <div className="bg-surface rounded-2xl p-6 shadow-ambient text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xs font-bold text-primary mb-2 uppercase tracking-label">Step 2</div>
                <h3 className="font-bold text-foreground mb-2">Preventivo scritto</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ricevi un preventivo chiaro e dettagliato, senza sorprese né obblighi.
                </p>
              </div>
              <div className="bg-surface rounded-2xl p-6 shadow-ambient text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xs font-bold text-primary mb-2 uppercase tracking-label">Step 3</div>
                <h3 className="font-bold text-foreground mb-2">Contratti blindati</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Se decidi di procedere, i tuoi contratti vengono riscritti o revisionati su misura.
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mb-16">
            <h2 className="text-foreground text-2xl font-black text-center mb-8">Cosa dicono i clienti</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface rounded-2xl p-6 shadow-ambient">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground italic leading-relaxed mb-3">
                  "Contratti rivisti in tempi record. Professionale, chiaro e sempre disponibile."
                </blockquote>
                <p className="text-xs font-bold text-foreground">— Marco T., CEO, azienda manifatturiera</p>
              </div>
              <div className="bg-surface rounded-2xl p-6 shadow-ambient">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground italic leading-relaxed mb-3">
                  "Ha blindato tutti i nostri accordi di distribuzione. Zero sorprese da 3 anni."
                </blockquote>
                <p className="text-xs font-bold text-foreground">— Laura S., Direttrice commerciale, settore food</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <h2 className="text-foreground text-2xl font-black text-center mb-8">Domande frequenti</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="1" className="bg-surface rounded-xl shadow-ambient mb-3 px-6">
                <AccordionTrigger className="text-foreground font-bold text-sm hover:no-underline">
                  Il check-up è davvero gratuito?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  Sì, 100%. La videochiamata di 30 minuti è senza costi e senza impegno. Serve a capire la tua situazione e valutare se possiamo aiutarti.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="2" className="bg-surface rounded-xl shadow-ambient mb-3 px-6">
                <AccordionTrigger className="text-foreground font-bold text-sm hover:no-underline">
                  Quanto costa il servizio dopo il check-up?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  Riceverai un preventivo scritto e dettagliato dopo la consulenza. Nessun obbligo: decidi con calma se procedere.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="3" className="bg-surface rounded-xl shadow-ambient mb-3 px-6">
                <AccordionTrigger className="text-foreground font-bold text-sm hover:no-underline">
                  Come si svolge la videochiamata?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  Riceverai un link per la videochiamata via email. Puoi partecipare da computer o smartphone, senza installare nulla.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="4" className="bg-surface rounded-xl shadow-ambient mb-3 px-6">
                <AccordionTrigger className="text-foreground font-bold text-sm hover:no-underline">
                  Devo preparare qualcosa prima della chiamata?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  Idealmente sì: tieni a portata di mano i contratti che vuoi far revisionare e le domande che vuoi porre. Ma non è obbligatorio.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
