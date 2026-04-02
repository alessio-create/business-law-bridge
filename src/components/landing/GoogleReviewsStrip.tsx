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

const ReviewCard = ({ name, text }: { name: string; text: string }) => (
  <div className="flex flex-col gap-2 bg-surface rounded-xl px-5 py-4 shadow-ambient min-w-[280px] max-w-[320px] shrink-0">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
        <span className="text-primary font-bold text-xs">{name.charAt(0)}</span>
      </div>
      <div>
        <p className="text-foreground text-sm font-semibold">{name}</p>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-3 h-3 fill-gold text-gold" />
          ))}
        </div>
      </div>
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
  </div>
);

const GoogleReviewsStrip = () => (
  <section className="bg-surface-container-low overflow-hidden py-6">
    <div className="flex animate-ticker gap-5 hover:[animation-play-state:paused]">
      {[...reviews, ...reviews].map((r, i) => (
        <ReviewCard key={i} name={r.name} text={r.text} />
      ))}
    </div>
  </section>
);

export default GoogleReviewsStrip;
