const Footer = () => (
  <footer className="bg-secondary px-6 py-12 md:px-20 border-t border-border">
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-black text-[10px]">AF</span>
          </div>
          <span className="text-base font-bold text-foreground">Avv. Alberto Fazio</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Studio Legale d'Impresa. Contrattualistica, recupero crediti e crisi d'impresa per PMI del Nord-Est.
        </p>
      </div>
      <div>
        <h6 className="font-bold mb-4 uppercase text-xs tracking-widest text-primary">Servizi</h6>
        <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
          <li>Contrattualistica</li>
          <li>Recupero Crediti</li>
          <li>Crisi d'Impresa</li>
          <li>Contenzioso Commerciale</li>
        </ul>
      </div>
      <div>
        <h6 className="font-bold mb-4 uppercase text-xs tracking-widest text-primary">Studio</h6>
        <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
          <li>Chi Siamo</li>
          <li>Casi Studio</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h6 className="font-bold mb-4 uppercase text-xs tracking-widest text-primary">Contatti</h6>
        <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
          <li>Via Roma 123, Trento (TN)</li>
          <li>+39 0461 000 000</li>
          <li>info@avvfazio.it</li>
        </ul>
      </div>
    </div>
    <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Studio Legale Avv. Alberto Fazio — P.IVA 00000000000 — Tutti i diritti riservati.
    </div>
  </footer>
);

export default Footer;
