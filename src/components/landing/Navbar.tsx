import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Navbar = () => (
  <header className="flex items-center justify-between px-6 md:px-20 py-5 bg-surface sticky top-0 z-50 shadow-ambient">
    <Link to="/" className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-primary-lg">
        <span className="text-primary-foreground font-black text-sm">AF</span>
      </div>
      <span className="text-foreground text-lg font-extrabold tracking-tight">Avv. Alberto Fazio</span>
    </Link>

    <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
      <span className="flex items-center gap-1.5">
        <MapPin className="w-3.5 h-3.5 text-primary" />
        Trento
      </span>
      <a href="mailto:info@avvfazio.it" className="flex items-center gap-1.5 hover:text-primary transition-colors">
        <Mail className="w-3.5 h-3.5 text-primary" />
        info@avvfazio.it
      </a>
    </div>
  </header>
);

export default Navbar;
