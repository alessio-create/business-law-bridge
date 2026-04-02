import { Star } from "lucide-react";

const reviews = [
  { name: "Marco R.", text: "Ha blindato tutti i contratti della mia azienda. Ora dormo tranquillo." },
  { name: "Sara M.", text: "Professionale, chiaro e disponibile. Preventivo rispettato al centesimo." },
  { name: "Luca B.", text: "Finalmente un avvocato che parla la lingua degli imprenditori." },
  { name: "Giulia T.", text: "Ha trovato 3 clausole rischiose che il mio vecchio legale aveva ignorato." },
  { name: "Andrea P.", text: "Tempi rispettati e comunicazione costante. Il top." },
  { name: "Francesca D.", text: "Mi ha evitato una causa da 80.000€ con una revisione contrattuale." },
  { name: "Roberto C.", text: "Competente, preciso e sempre reperibile. Lo consiglio a tutti." },
  { name: "Elena V.", text: "28 anni di esperienza si sentono. Contratti impeccabili." },
  { name: "Davide L.", text: "Check-up gratuito utilissimo. Ho capito subito dove ero esposto." },
  { name: "Chiara F.", text: "Zero sorprese sui costi. Trasparenza totale dall'inizio alla fine." },
];

const GoogleReviewsStrip = () => (
  <section className="bg-surface-container-low overflow-hidden py-3.5">
    <div className="flex animate-ticker gap-10 hover:[animation-play-state:paused]">
      {[...reviews, ...reviews].map((r, i) => (
        <div key={i} className="flex items-center gap-3 shrink-0">
          <div className="w-6 h-6 rounded-full bg-primary/8 flex items-center justify-center">
            <span className="text-primary font-semibold text-[9px]">{r.name.charAt(0)}</span>
          </div>
          <span className="text-foreground text-[13px] font-semibold whitespace-nowrap">{r.name}</span>
          <div className="flex gap-px">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-2.5 h-2.5 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-muted-foreground text-[13px] whitespace-nowrap">{r.text}</span>
          <span className="text-muted-foreground/30 text-[13px]">·</span>
        </div>
      ))}
    </div>
  </section>
);

export default GoogleReviewsStrip;
