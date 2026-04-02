import { Clock, Scale, Lock, FileCheck, Shield, BadgeCheck } from "lucide-react";

const usps = [
  { icon: Clock, text: "Risposta entro 24 ore" },
  { icon: Scale, text: "Specializzati in contrattualistica" },
  { icon: Lock, text: "Consulenza riservata e protetta" },
  { icon: FileCheck, text: "Preventivo scritto garantito" },
  { icon: Shield, text: "Cassazionista — 28+ anni di esperienza" },
  { icon: BadgeCheck, text: "47 recensioni a 5 stelle su Google" },
];

const USPTicker = () => (
  <section className="bg-surface overflow-hidden py-4">
    <div className="flex animate-ticker-reverse gap-10 hover:[animation-play-state:paused]">
      {[...usps, ...usps].map((u, i) => (
        <div key={i} className="flex items-center gap-2 shrink-0">
          <u.icon className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground text-sm font-medium whitespace-nowrap">{u.text}</span>
        </div>
      ))}
    </div>
  </section>
);

export default USPTicker;
