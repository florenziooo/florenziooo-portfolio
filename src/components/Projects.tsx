import { useState, useEffect } from "react";
import wildcatsDenLogo from "./logos/den_logo.png";
import shakeLogo from "./logos/shake_logo.png";
import linawLogo from "./logos/linaw_logo.png";
import token42Logo from "./logos/token42_logo.png";
import quizmoLogo from "./logos/quizmo_logo.png";

import UPAwarding from "./images/UP_awarding.jpg";
import UPCert from "./images/UP_cert.jpg";
import shakeAwarding from "./images/shake_awarding.jpg";
import shakeCert from "./images/shake_cert.jpg";
import shakeTop5 from "./images/shake_top5.jpg";
import polkadotAwarding from "./images/polkadot_awarding.jpeg";
import polkadotCert from "./images/polkadot_cert.jpeg";

const projectImages: Record<string, string[]> = {
  Linaw: [UPAwarding, UPCert],
  SHAKE: [shakeAwarding, shakeCert, shakeTop5],
  Token42: [polkadotAwarding, polkadotCert],
};

const projects = [
  {
    tag: "Best Technical Execution",
    name: "Linaw",
    desc: "AI-powered reading companion that explains complex English terms in Philippine languages through localized understanding.",
    award: "UP Innovation Cup Cebu 2026",
    gradient: "from-[#352b00] to-[#271f00]",
    border: "border-[oklch(0.85_0.18_90/30%)]",
    chipColor: "text-electric-yellow",
    logo: linawLogo,
    opacity: 30,
    github: "https://github.com/florenziooo/Linaw",
  },
  {
    tag: "Top 5",
    name: "SHAKE",
    desc: "Privacy-first, fully offline pipeline converting ocean freight PDFs into structured JSON, Excel, and CSV data.",
    award: "Oltek Logistics Hackathon 2026",
    gradient: "from-[#251f48] to-[#1a1535]",
    border: "border-[oklch(0.55_0.2_280/30%)]",
    chipColor: "text-sky-accent",
    logo: shakeLogo,
    opacity: 20,
    github: "https://github.com/florenziooo/SHAKE",
  },
  {
    tag: "2nd Runner Up",
    name: "Token42",
    desc: "Next-gen dating platform solving the Trust Gap with Polkadot's verifiable identity and AI-powered matching in secure enclaves.",
    award: "Polkadot Solidity Hackathon 2026",
    gradient: "from-[#38001e] to-[#280015]",
    border: "border-[oklch(0.65_0.28_350/35%)]",
    chipColor: "text-hot-pink",
    logo: token42Logo,
    opacity: 20,
    github: "https://github.com/florenziooo/Token42",
  },
  {
    tag: "Game Dev",
    name: "Wildcat's Den",
    desc: "Exploration game transforming CIT-U into a virtual playground for students to discover facilities, programs, and orgs.",
    award: "OOP Capstone 1",
    gradient: "from-[#0d2b1a] to-[#081f12]",
    border: "border-[oklch(0.7_0.18_150/30%)]",
    chipColor: "text-lime",
    logo: wildcatsDenLogo,
    opacity: 10,
    github: "https://github.com/florenziooo/Wildcats-Den",
  },
  {
    tag: "EdTech",
    name: "QuizMo",
    desc: "Intelligent JavaFX application for adaptive quizzing — analyzes student performance in real-time for personalized study recommendations.",
    award: "OOP Capstone 2",
    gradient: "from-[#38110d] to-[#2a0a07]",
    border: "border-[oklch(0.7_0.22_30/30%)]",
    chipColor: "text-[oklch(0.7_0.22_30)]",
    logo: quizmoLogo,
    opacity: 30,
    github: "https://github.com/florenziooo/QuizMo",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    if (!selectedProject || !projectImages[selectedProject]) return;
    
    // Pick a random image initially or just start from 0
    const randomInitial = Math.floor(Math.random() * projectImages[selectedProject].length);
    setCurrentImageIdx(randomInitial);
    
    const interval = setInterval(() => {
      setCurrentImageIdx(Math.floor(Math.random() * projectImages[selectedProject].length));
    }, 4000);
    return () => clearInterval(interval);
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 px-5">
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
              className={`relative min-w-[300px] w-[300px] rounded-3xl bg-gradient-to-br ${p.gradient} border ${p.border} p-7 flex flex-col justify-between h-[420px] hover:-translate-y-3 hover:rotate-[-1deg] transition-transform duration-300 group overflow-hidden`}
            >
              {/* Background Logo Placeholder */}
              <img 
                src={p.logo} 
                alt="Project background logo" 
                className={`absolute inset-0 w-full h-full object-cover opacity-${p.opacity} pointer-events-none mix-blend-overlay select-none`}
              />
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <span className={`text-[0.62rem] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border border-current ${p.chipColor}`}>
                    {p.tag}
                  </span>
                  <h3 className="font-display text-4xl text-cream tracking-wide mt-6 mb-3 leading-none">
                    {p.name}
                  </h3>
                  <p className="text-[0.75rem] text-cream/45 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                </div>
                <div>
                  <div className="text-[0.75rem] text-cream/70 tracking-[0.15em] uppercase mb-4">
                    {p.award}
                  </div>
                  <div className="flex gap-3">
                    {projectImages[p.name] && (
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedProject(p.name);
                        }}
                        className="bg-hot-pink text-primary-foreground px-5 py-2.5 rounded-xl cursor-pointer font-display text-base tracking-[0.1em] hover:scale-105 hover:bg-[oklch(0.6_0.3_350)] transition-transform flex-1 text-center"
                      >
                        VIEW →
                      </button>
                    )}
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="border-[1.5px] border-cream/25 text-cream px-4 py-2.5 rounded-xl font-display tracking-[0.12em] text-sm hover:border-electric-yellow hover:text-electric-yellow transition-colors flex items-center justify-center flex-shrink-0"
                    >
                      GITHUB ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Slideshow */}
      {selectedProject && projectImages[selectedProject] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
          <div className="relative w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-[0_0_80px_oklch(0.65_0.28_350/25%)] border border-white/10 h-[70vh] max-h-[800px] flex">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 z-50 bg-black/40 hover:bg-black/80 text-cream w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-md transition-all text-xl border border-white/20"
            >
              ✕
            </button>
            <div className="relative w-full h-full bg-black flex items-center justify-center">
              {projectImages[selectedProject].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${selectedProject} screenshot`}
                  className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ease-in-out ${
                    idx === currentImageIdx ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
                  }`}
                />
              ))}
            </div>
            {/* Overlay gradient at bottom for aesthetics */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent z-40 pointer-events-none" />
          </div>
        </div>
      )}
    </section>
  );
}
