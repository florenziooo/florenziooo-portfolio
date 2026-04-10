import { Github } from "lucide-react";
import wildcatsDenLogo from "./logos/den_logo.png";
import shakeLogo from "./logos/shake_logo.png";
import linawLogo from "./logos/linaw_logo.png";
import token42Logo from "./logos/token42_logo.png";
import quizmoLogo from "./logos/quizmo_logo.png";

import UPAwarding from "./images/UP_awarding.png";
import UPCert from "./images/UP_cert.jpg";
import shakeAwarding from "./images/shake_awarding.png";
import shakeCert from "./images/shake_cert.jpg";
import shakeTop5 from "./images/shake_top5.jpg";
import polkadotAwarding from "./images/polkadot_awarding.png";
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
    desc: "An innovative AI platform designed to help students grasp complex concepts in the languages they naturally think in, bridging the comprehension gap in education, personally, visually, and intimately.",
    award: "UP Innovation Cup Cebu 2026",
    gradient: "from-[#352b00] to-[#271f00]",
    border: "border-[oklch(0.85_0.18_90/30%)]",
    chipColor: "text-electric-yellow",
    logo: linawLogo,
    github: "https://github.com/GReturn/Linaw",
    tags: ["AI/ML", "MODAL", "PYTHON"],
  },
  {
    tag: "Top 5",
    name: "SHAKE",
    desc: "Privacy-first, fully offline pipeline converting ocean freight PDF contracts into structured JSON, Excel, and CSV data.",
    award: "Oltek Logistics Hackathon 2026",
    gradient: "from-[#251f48] to-[#1a1535]",
    border: "border-[oklch(0.55_0.2_280/30%)]",
    chipColor: "text-sky-accent",
    logo: shakeLogo,
    github: "https://github.com/GReturn/Shake",
    tags: ["PYTHON", "FLASK", "PDF PARSING"],
  },
  {
    tag: "2nd Runner Up",
    name: "Token42",
    desc: "Next-gen dating platform solving the Trust Gap with Polkadot's verifiable soulbound identity and AI-powered matching. This is my exploration in the web3 space.",
    award: "Polkadot Solidity Hackathon 2026",
    gradient: "from-[#38001e] to-[#280015]",
    border: "border-[oklch(0.65_0.28_350/35%)]",
    chipColor: "text-hot-pink",
    logo: token42Logo,
    github: "https://github.com/GReturn/Project-Token42",
    tags: ["SOLIDITY", "XMTP", "WEB3"],
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
    github: "https://github.com/florenziooo/CAPSTONE-libgdx",
    tags: ["JAVA", "LIBGDX"],
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
    github: "https://github.com/Keloyys/CCP",
    tags: ["JAVA", "JAVAFX"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-5">
      <div className="px-10 mb-12 flex items-end justify-between flex-wrap gap-5 max-md:px-5">
        <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.9] text-cream">
          THE
          <em className="not-italic text-hot-pink"> LINEUP</em>
        </h2>
        <p className="text-[0.78rem] text-cream/40 max-w-[280px] leading-relaxed">
          Things I built either out of school, hackathons or just pure curiosity :))
        </p>
      </div>

      <div className="overflow-x-auto pb-10">
        <div className="flex gap-6 px-10 max-md:px-5" style={{ minWidth: "max-content" }}>
          {projects.map((p) => {
            const hasImage = projectImages[p.name] && projectImages[p.name].length > 0;
            return (
              <div
                key={p.name}
                data-aos="fade-up"
                data-aos-duration="1550"
                className={`relative w-[340px] flex-shrink-0 rounded-3xl bg-gradient-to-br ${p.gradient} border ${p.border} flex flex-col hover:-translate-y-3 hover:rotate-[-1deg] transition-transform duration-300 group overflow-hidden h-162`}
              >
                {/* Photo Header */}
                <div className="h-75 w-full relative shrink-0 bg-black/20 border-b border-white/5">
                  {hasImage ? (
                    <img 
                      src={projectImages[p.name][0]} 
                      alt={p.name} 
                      className="w-full h-full opacity-50 object-cover group-hover:opacity-80 transition-opacity"
                    />
                  ) : (
                    <img 
                      src={p.logo} 
                      alt="Project placeholder" 
                      className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none mix-blend-overlay select-none"
                    />
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className={`inline-block mb-4 text-[0.62rem] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border bg-black/50 backdrop-blur-sm border-current ${p.chipColor}`}>
                      {p.tag}
                    </span>
                    <h3 className="font-display text-3xl text-cream tracking-wide mb-2 leading-none">
                      {p.name}
                    </h3>
                    <p className="text-[0.75rem] text-cream/50 leading-relaxed max-h-[80px] overflow-hidden line-clamp-4">
                      {p.desc}
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    <div className="text-[0.7rem] font-bold text-electric-yellow/90 tracking-[0.1em] uppercase mb-2">
                      {p.award}
                    </div>
                    {/* Tags Below Awards */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[0.6rem] tracking-widest uppercase px-2.5 py-1.5 rounded-full bg-foreground/10 text-cream/60">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <a 
                        href={p.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="border-[1.5px] border-cream/25 text-cream/80 w-full py-2.5 rounded-xl transition-colors flex items-center justify-center hover:border-electric-yellow hover:text-electric-yellow gap-2 font-display text-sm tracking-widest bg-black/20"
                      >
                        <Github size={18} /> GITHUB
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
