import { useState } from "react";
import Modal from "./ui/Modal";
import { Github } from "lucide-react";
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
    desc: "An innovative AI platform designed to help students grasp complex concepts in the languages they naturally think in, bridging the comprehension gap in education, personally, visually, and intimately.",
    award: "UP Innovation Cup Cebu 2026",
    gradient: "from-[#352b00] to-[#271f00]",
    border: "border-[oklch(0.85_0.18_90/30%)]",
    chipColor: "text-electric-yellow",
    logo: linawLogo,
    opacity: 30,
    github: "https://github.com/GReturn/Linaw",
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
    opacity: 20,
    github: "https://github.com/GReturn/Shake",
  },
  {
    tag: "2nd Runner Up",
    name: "Token42",
    desc: "Next-gen dating platform solving the Trust Gap with Polkadot's verifiable soulbound identity and AI-powered matching. This is my exploration in the web3 space as I have a course in the curriculum.",
    award: "Polkadot Solidity Hackathon 2026",
    gradient: "from-[#38001e] to-[#280015]",
    border: "border-[oklch(0.65_0.28_350/35%)]",
    chipColor: "text-hot-pink",
    logo: token42Logo,
    opacity: 20,
    github: "https://github.com/GReturn/Project-Token42",
  },
  {
    tag: "Game Dev",
    name: "Wildcat's Den",
    desc: "Exploration game transforming CIT-U into a virtual playground for students to discover facilities, programs, and orgs. This was done with love and curiosity as we explored the world of game development.",
    award: "OOP Capstone 1",
    gradient: "from-[#0d2b1a] to-[#081f12]",
    border: "border-[oklch(0.7_0.18_150/30%)]",
    chipColor: "text-lime",
    logo: wildcatsDenLogo,
    opacity: 10,
    github: "https://github.com/florenziooo/CAPSTONE-libgdx",
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
    github: "https://github.com/Keloyys/CCP",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

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
          {projects.map((p) => (
            <div
              key={p.name}
              data-aos="fade-up"
              data-aos-duration="1550"
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
                      className="border-[1.5px] border-cream/25 text-cream px-4 py-2.5 rounded-xl transition-colors flex items-center justify-center flex-shrink-0 hover:border-electric-yellow hover:text-electric-yellow"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Slideshow */}
      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        title={selectedProject || undefined}
        images={selectedProject && projectImages[selectedProject] ? projectImages[selectedProject] : []}
      />
    </section>
  );
}
