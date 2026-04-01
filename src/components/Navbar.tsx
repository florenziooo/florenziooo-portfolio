export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-15 py-5 relative z-10 max-md:px-5 max-md:py-4">
      <a href="#" className="font-display text-2xl text-electric-yellow tracking-wide">
        FLORENZIOOO
      </a>
      <ul className="flex items-center gap-8 list-none max-md:gap-4">
        <li className="max-md:hidden">
          <a href="#projects" className="font-display text-xl tracking-[0.15em] text-cream hover:text-hot-pink transition-colors">
            Projects
          </a>
        </li>
        <li className="max-md:hidden">
          <a href="#skills" className="font-display text-xl tracking-[0.15em] text-cream hover:text-hot-pink transition-colors">
            Skills
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="font-display text-lg tracking-[0.15em] bg-hot-pink text-primary-foreground px-5 py-2 rounded-full hover:bg-electric-yellow hover:text-background transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
