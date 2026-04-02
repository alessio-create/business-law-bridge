const Footer = () => (
  <footer className="px-6 py-10 md:px-20 bg-surface-container">
    <div className="max-w-[1060px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted-foreground/70">
      <span>© {new Date().getFullYear()} Studio Legale Avv. Alberto Fazio — P.IVA 00000000000</span>
      <div className="flex gap-5">
        <a href="#" className="hover:text-foreground transition-colors duration-300">Privacy Policy</a>
        <a href="#" className="hover:text-foreground transition-colors duration-300">Cookie Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
