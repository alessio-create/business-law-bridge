import { Link } from "react-router-dom";

const Navbar = () => (
  <header className="flex items-center justify-center px-6 md:px-20 py-4 bg-surface/80 backdrop-blur-xl sticky top-0 z-50 shadow-ambient">
    <Link to="/" className="flex items-center gap-3 group">
      <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-primary-lg group-hover:shadow-primary-xl transition-shadow duration-300">
        <span className="text-primary-foreground font-black text-sm">AF</span>
      </div>
      <span className="text-foreground text-lg font-extrabold tracking-tight">Avv. Alberto Fazio</span>
    </Link>
  </header>
);

export default Navbar;
