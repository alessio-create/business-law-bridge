import { Star } from "lucide-react";

const reviews = [
  "Professionale e disponibile, ha risolto il mio problema contrattuale in tempi record.",
  "Finalmente un avvocato che parla chiaro. Preventivo rispettato alla lettera.",
  "Ha blindato i contratti della mia azienda. Mi sento molto più tranquillo ora.",
  "Esperienza e competenza ai massimi livelli. Lo consiglio a tutti gli imprenditori.",
  "Preciso, trasparente e sempre reperibile. Il miglior investimento per la mia impresa.",
];

const GoogleReviewsStrip = () => (
  <section className="bg-surface-container-low overflow-hidden py-4">
    <div className="flex animate-ticker gap-8">
      {[...reviews, ...reviews].map((review, i) => (
        <div
          key={i}
          className="flex items-center gap-3 bg-surface rounded-full px-5 py-2.5 shadow-ambient whitespace-nowrap shrink-0"
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-3.5 h-3.5 fill-gold text-gold" />
            ))}
          </div>
          <p className="text-foreground text-sm font-medium">{review}</p>
        </div>
      ))}
    </div>
  </section>
);

export default GoogleReviewsStrip;
