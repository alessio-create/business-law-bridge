import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const Navbar = () => (
  <header className="flex items-center justify-center px-6 md:px-20 py-4 bg-surface/80 backdrop-blur-xl sticky top-0 z-50 shadow-ambient">
    <Link to="/" className="flex flex-col items-center gap-1 group">
      <img src={logoIcon} alt="Logo" className="w-11 h-11 object-contain" />
      <span className="text-foreground text-xs font-extrabold tracking-tight">Avv. Alberto Fazio</span>
    </Link>
  </header>
);

export default Navbar;
