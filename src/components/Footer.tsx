export default function Footer() {
  return (
    <footer className="border-t border-border px-10 py-9 max-md:px-5">
      <div className="max-w-4xl mx-auto flex items-center justify-between flex-wrap gap-5 max-md:flex-col max-md:items-start max-md:gap-4">
        <div>
          <span className="font-display text-xl text-electric-yellow">FLORENZIOOO</span>
          <div className="text-[0.58rem] tracking-[0.2em] uppercase text-cream/30 mt-1">
            Portfolio
          </div>
        </div>
        <div className="flex gap-6 items-center flex-wrap text-[0.68rem] text-cream/35 tracking-[0.12em] uppercase">
          <a href="#projects" className="hover:text-cream transition-colors">Projects</a>
          <a href="#skills" className="hover:text-cream transition-colors">Skills</a>
          <a href="#contact" className="hover:text-cream transition-colors">Contact</a>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
