const projects = [
  {
    tag: "🏆 Best Technical",
    name: "Linaw",
    desc: "AI-powered reading companion that explains complex English terms in Philippine languages through localized understanding.",
    award: "UP Innovation Cup Cebu 2026",
    gradient: "from-[#38001e] to-[#280015]",
    border: "border-[oklch(0.65_0.28_350/35%)]",
    chipColor: "text-hot-pink",
  },
  {
    tag: "🔝 Top 5",
    name: "SHAKE",
    desc: "Privacy-first, fully offline pipeline converting ocean freight PDFs into structured JSON, Excel, and CSV data.",
    award: "Oltek Logistics Hackathon 2026",
    gradient: "from-[#251f48] to-[#1a1535]",
    border: "border-[oklch(0.55_0.2_280/30%)]",
    chipColor: "text-sky-accent",
  },
  {
    tag: "🥉 2nd Runner Up",
    name: "Token42",
    desc: "Next-gen dating platform solving the Trust Gap with Polkadot's verifiable identity and AI-powered matching in secure enclaves.",
    award: "Polkadot Solidity Hackathon 2026",
    gradient: "from-[#352b00] to-[#271f00]",
    border: "border-[oklch(0.85_0.18_90/30%)]",
    chipColor: "text-electric-yellow",
  },
  {
    tag: "🎮 Game Dev",
    name: "Wildcat's Den",
    desc: "Exploration game transforming CIT-U into a virtual playground for students to discover facilities, programs, and orgs.",
    award: "University Project",
    gradient: "from-[#0d2b1a] to-[#081f12]",
    border: "border-[oklch(0.7_0.18_150/30%)]",
    chipColor: "text-lime",
  },
  {
    tag: "📚 EdTech",
    name: "QuizMo",
    desc: "Intelligent JavaFX application for adaptive quizzing — analyzes student performance in real-time for personalized study recommendations.",
    award: "Academic Project",
    gradient: "from-[#38110d] to-[#2a0a07]",
    border: "border-[oklch(0.7_0.22_30/30%)]",
    chipColor: "text-[oklch(0.7_0.22_30)]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="px-10 mb-12 flex items-end justify-between flex-wrap gap-5 max-md:px-5">
        <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.9] text-cream">
          THE
          <br />
          <em className="not-italic text-hot-pink">LINEUP</em>
        </h2>
        <p className="text-[0.78rem] text-cream/40 max-w-[280px] leading-relaxed">
          Hackathon wins, passion projects, and things I built because I couldn't stop thinking about them.
        </p>
      </div>

      <div className="overflow-x-auto pb-10">
        <div className="flex gap-6 px-10 max-md:px-5" style={{ minWidth: "max-content" }}>
          {projects.map((p) => (
            <div
              key={p.name}
              className={`relative min-w-[300px] w-[300px] rounded-3xl bg-gradient-to-br ${p.gradient} border ${p.border} p-7 flex flex-col justify-between h-[420px] hover:-translate-y-3 hover:rotate-[-1deg] transition-transform duration-300 group`}
            >
              <div>
                <span className={`text-[0.62rem] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border border-current ${p.chipColor}`}>
                  {p.tag}
                </span>
                <h3 className="font-display text-4xl text-cream tracking-wide mt-6 mb-3 leading-none">
                  {p.name}
                </h3>
                <p className="text-[0.7rem] text-cream/45 leading-relaxed mb-4">
                  {p.desc}
                </p>
              </div>
              <div>
                <div className="text-[0.6rem] text-cream/30 tracking-[0.15em] uppercase mb-4">
                  {p.award}
                </div>
                <button className="bg-hot-pink text-primary-foreground px-5 py-2.5 rounded-full font-display text-base tracking-[0.1em] hover:scale-105 hover:bg-[oklch(0.6_0.3_350)] transition-transform">
                  VIEW →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
