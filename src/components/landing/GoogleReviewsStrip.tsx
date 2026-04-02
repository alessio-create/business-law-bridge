import { Star } from "lucide-react";

const GoogleReviewsStrip = () => (
  <section className="px-6 py-8 md:px-20 bg-background">
    <div className="max-w-[1200px] mx-auto flex justify-center">
      <div className="flex items-center gap-4 bg-card border border-border rounded-2xl px-8 py-5 shadow-sm">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-5 h-5 fill-gold text-gold" />
          ))}
        </div>
        <div>
          <p className="font-bold text-foreground text-sm">4.9/5 su Google</p>
          <p className="text-muted-foreground text-xs">47 recensioni verificate</p>
        </div>
      </div>
    </div>
  </section>
);

export default GoogleReviewsStrip;
