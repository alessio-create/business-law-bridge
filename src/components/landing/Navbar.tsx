import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between border-b border-border px-6 md:px-20 py-4 bg-card sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-black text-sm">AF</span>
        </div>
        <span className="text-foreground text-lg font-bold tracking-tight">Avv. Alberto Fazio</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#servizi" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">Servizi</a>
        <a href="#processo" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">Processo</a>
        <a href="#casi" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">Casi Studio</a>
        <a href="#faq" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">FAQ</a>
        <Link
          to="/quiz"
          className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-opacity"
        >
          Check-up Gratuito
        </Link>
      </nav>

      <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-card border-b border-border p-6 flex flex-col gap-4 md:hidden z-50">
          <a href="#servizi" className="text-foreground font-medium" onClick={() => setOpen(false)}>Servizi</a>
          <a href="#processo" className="text-foreground font-medium" onClick={() => setOpen(false)}>Processo</a>
          <a href="#casi" className="text-foreground font-medium" onClick={() => setOpen(false)}>Casi Studio</a>
          <a href="#faq" className="text-foreground font-medium" onClick={() => setOpen(false)}>FAQ</a>
          <Link to="/quiz" className="bg-primary text-primary-foreground rounded-lg h-12 flex items-center justify-center font-bold" onClick={() => setOpen(false)}>
            Check-up Gratuito
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
