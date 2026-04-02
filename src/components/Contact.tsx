export default function Contact() {
  return (
    <section id="contact" className="px-10 py-10 max-md:px-5">
      <div className="bg-hot-pink rounded-3xl p-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative overflow-hidden max-md:p-7">
        {/* BG emoji */}
        <div className="absolute -right-10 -top-16 text-[18rem] opacity-[0.07] pointer-events-none leading-none select-none">
          🚀
        </div>

        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 bg-black/25 rounded-full px-3.5 py-1 text-[0.68rem] tracking-[0.18em] uppercase text-primary-foreground/90 mb-3.5">
            Let's connect
          </span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.2rem)] leading-[0.9] text-primary-foreground tracking-wide mb-6">
            GET IN TOUCH.
          </h2>
          <div className="flex items-center gap-3">
            {/* <div className="flex">
              {["S", "G", "F", "J"].map((letter, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-primary-foreground/80 flex items-center justify-center text-[0.72rem] font-bold text-primary-foreground ${i > 0 ? "-ml-2" : ""}`}
                  style={{
                    background: ["oklch(0.55 0.25 350)", "oklch(0.45 0.2 280)", "oklch(0.55 0.15 170)", "oklch(0.6 0.15 70)"][i],
                  }}
                >
                  {letter}
                </div>
              ))}
            </div> */}
            <div className="text-[0.72rem] text-primary-foreground/90 leading-snug">
              <strong className="block text-[0.8rem]">Ready to collaborate</strong>
              Open for projects & opportunities
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-5">
          <div className="flex flex-col gap-2.5">
            {[
              { icon: "📧", text: "frezkieflorenz@gmail.com" },
              { icon: "📱", text: "+63 996 075 5229" },
              { icon: "🎓", text: "CIT-U — BS Computer Science" },
            ].map((p) => (
              <div key={p.text} className="flex items-center gap-2.5 text-[0.74rem] text-black/75">
                <span className="w-7 h-7 shrink-0 bg-black/12 rounded-full flex items-center justify-center text-[1.2rem]">
                  {p.icon}
                </span>
                {p.text}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a
              href="mailto:frezkieflorenz@gmail.com"
              className="flex-1 min-w-[180px] px-5 py-3.5 bg-background text-electric-yellow rounded-full font-display text-base tracking-[0.15em] text-center hover:-translate-y-0.5 transition-transform"
            >
              EMAIL ME ↗
            </a>
            <a
              href="https://github.com/florenziooo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-black/18 text-primary-foreground rounded-full font-display text-base tracking-[0.15em] hover:-translate-y-0.5 transition-transform"
            >
              GITHUB ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
