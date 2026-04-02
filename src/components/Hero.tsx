import { useState } from "react";
import profile4 from "./images/profile4.png";
import parangal1 from "./images/parangal1.png";
import Modal from "./ui/Modal";

const heroImages: Record<string, string[]> = {
  "Top 1 Parangal Awardee 2023": [parangal1],
};

export default function Hero() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <section className="relative min-h-[80vh] flex items-center px-15 py-12 overflow-hidden max-md:px-5 max-md:py-8">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />
      {/* Blobs */}
      <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.65_0.28_350/25%)_0%,transparent_70%)] pointer-events-none animate-blob" />
      <div className="absolute -bottom-12 left-24 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.15_220/15%)_0%,transparent_70%)] pointer-events-none animate-blob-reverse" />

      <div className="relative z-10 max-w-3xl">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 bg-electric-yellow/12 border border-electric-yellow rounded-full px-4 py-1.5 mb-5">
          <span className="w-1.5 h-1.5 bg-electric-yellow rounded-full animate-blink" />
          <span className="text-[0.72rem] text-electric-yellow tracking-[0.2em] uppercase">
            Open to opportunities • Cebu, PH
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-[clamp(4.5rem,9vw,9rem)] leading-[0.88] tracking-tight">
          <span className="text-cream">GIL</span>{" "}
          <span className="text-hot-pink">FLORENZ</span>
          <br />
          <span className="text-electric-yellow">SASTRE</span>
        </h1>

        <p className="text-[1rem] text-cream/50 leading-relaxed max-w-lg mt-4 mb-6">
          BS Computer Science student at CIT-U—aspiring to contribute in fields of AI, blockchain, and software design.
        </p>

        {/* Skill pills */}
        <div className="flex flex-wrap gap-2 mb-7">
          {["BSCS", "DOST-SEI Scholar", "Top 1 Parangal Awardee 2023"].map((s) => {
            const isClickable = s.includes("Parangal");
            return (
              <span
                key={s}
                onClick={() => isClickable ? setActiveModal(s) : undefined}
                className={`text-[0.8rem] tracking-[0.08em] px-3 py-1.5 rounded-full border uppercase transition-all duration-300 ${
                  isClickable 
                    ? "border-cream/50 text-cream/50 cursor-pointer animate-pulse hover:animate-none hover:border-electric-yellow hover:text-electric-yellow hover:-translate-y-0.5 hover:rotate-1" 
                    : "border-cream/15 text-cream/45 hover:border-hot-pink hover:text-hot-pink"
                }`}
              >
                {s}
              </span>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3.5 mb-7">
          <a
            href="#projects"
            className="font-display text-xl tracking-[0.15em] bg-hot-pink text-primary-foreground px-8 py-3.5 rounded-full hover:shadow-[0_0_40px_oklch(0.65_0.28_350/50%)] hover:-translate-y-0.5 hover:scale-[1.03] transition-all"
          >
            View Projects ↓
          </a>
          <a
            href="#contact"
            className="font-display text-xl tracking-[0.15em] border-[1.5px] border-cream/25 text-cream px-8 py-3.5 rounded-full hover:border-electric-yellow hover:text-electric-yellow transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Mini stats */}
        <div className="flex flex-wrap gap-3">
          {[
            { val: "3×", label: "Hackathon\nWins" },
            { val: "5+", label: "Projects\nBuilt" },
            { val: "9+", label: "Languages\nKnown" },
          ].map((s) => (
            <div
              key={s.val}
              className="flex items-center gap-2 bg-foreground/5 border border-foreground/10 rounded-lg px-3.5 py-2"
            >
              <span className="font-display text-lg text-lime leading-none tracking-wide">
                {s.val}
              </span>
              <span className="text-[0.6rem] text-cream/40 tracking-[0.12em] uppercase whitespace-pre leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Image (Bottom Right) */}
      <div className="absolute right-10 bottom-0 h-full hidden lg:block z-0 pointer-events-none">
        <img
          src={profile4}
          alt="Gil Florenz Profile"
          className="h-full w-auto object-contain object-bottom drop-shadow-[0_0_80px_oklch(0.65_0.28_350/25%)] opacity-90"
        />
      </div>

      {/* Modal */}
      <Modal 
        isOpen={!!activeModal} 
        onClose={() => setActiveModal(null)} 
        title={activeModal || undefined}
        images={activeModal ? heroImages[activeModal] || [] : []}
      />
    </section>
  );
}
