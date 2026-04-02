const Footer = () => (
  <footer className="px-6 py-8 md:px-20 bg-surface-container-low">
    <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
      <span>© {new Date().getFullYear()} Studio Legale Avv. Alberto Fazio — P.IVA 00000000000</span>
      <div className="flex gap-4">
        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
