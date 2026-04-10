import devfest2 from "./images/devfest2.png";
import gitgud from "./images/gitgud.png";
import buildwithai from "./images/buildwithai.png";
import infosession from "./images/infosession.jpeg";
import ccert from "./images/c_codechum.png";
import javaoop from "./images/oop_codechum.png";
import python from "./images/python_sololearn.png";

const exploredItems = [
  {
    title: "DevFest Cebu 2024",
    org: "Google Developer Groups",
    desc: "Explored advancements in web technologies and AI integration at the premier developer conference.",
    tags: ["CONFERENCE", "AI"],
    image: devfest2,
  },
  {
    title: "Git Gud: GitHub Mastery",
    org: "Tech Workshop",
    desc: "Advanced hands-on workshop focusing on version control, CI/CD pipelines, and collaborative workflows.",
    tags: ["GIT", "VERSION CONTROL"],
    image: gitgud,
  },
  {
    title: "Build with AI: Gemini",
    org: "Google For Developers",
    desc: "Deep dive into leveraging Gemini's capabilities for developing next-generation AI-powered solutions.",
    tags: ["GEMINI", "LLM"],
    image: buildwithai,
  },
  {
    title: "Infosession '26: Aurora",
    org: "GDG",
    desc: "Participated in an exclusive info session uncovering the architectural planning for Project Aurora.",
    tags: ["TECH TALK", "GDG"],
    image: infosession,
  },
];

const certItems = [
  {
    title: "C Programming",
    org: "CodeChum",
    desc: "Fundamental understanding of memory management, pointers, and data structures.",
    tags: ["C", "POINTERS"],
    image: ccert,
  },
  {
    title: "Java OOP",
    org: "CodeChum",
    desc: "Proficiency in Object-Oriented design patterns, inheritance, and polymorphism.",
    tags: ["JAVA", "OOP"],
    image: javaoop,
  },
  {
    title: "Python",
    org: "Sololearn",
    desc: "Comprehensive certification on Python syntax, data manipulation, and modern scripting.",
    tags: ["PYTHON", "SCRIPTING"],
    image: python,
  },
];

export default function Education() {
  return (
    <section className="py-20 px-10 max-md:px-5">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <div data-aos="fade-up" data-aos-duration="1350" className="text-[0.68rem] tracking-[0.25em] uppercase text-hot-pink mb-4">
              Education
            </div>
            <h3 data-aos="fade-up" data-aos-duration="1450" className="font-display text-[clamp(2.5rem,4.5vw,4rem)] leading-[0.92] text-cream">
              WHAT AM I EXPLORING
              <br />
              <span className="text-electric-yellow">RIGHT NOW?</span>
            </h3>
          </div>
          <div data-aos="fade-left" data-aos-duration="1550" className="text-[0.85rem] text-cream/50 leading-relaxed space-y-4">
            <p>
              I began my academic journey at the Bato School of Fisheries, where I consistently achieved honors and served as Vice President of the Supreme Student Government and Editor-in-Chief of The Bato Angler.
            </p>
            <p>
              Today, I am pursuing a Bachelor of Science in Computer Science at Cebu Institute of Technology – University. Through courses I am currently exploring such as Intro to Blockchain, Intelligent Systems, and Software Engineering, I continue developing the analytical thinking and technical foundations needed to design efficient and reliable systems.
            </p>
          </div>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {exploredItems.map((item, i) => (
            <div key={i} data-aos="fade-up" data-aos-duration={1350 + i * 100} className="bg-foreground/5 border border-foreground/10 rounded-3xl overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-40 relative bg-black/40">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h4 className="font-display text-xl text-cream leading-tight mb-2">{item.title}</h4>
                  <p className="text-[0.7rem] text-cream/50 leading-relaxed line-clamp-3">{item.desc}</p>
                </div>
                <div>
                  <div className="text-[0.6rem] text-electric-yellow/90 tracking-widest uppercase mb-3 font-bold">{item.org}</div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(t => (
                      <span key={t} className="text-[0.55rem] tracking-wider uppercase px-2.5 py-1 rounded-full bg-foreground/10 text-cream/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Row */}
        <div>
          <div data-aos="fade-up" data-aos-duration="1350" className="text-[0.68rem] tracking-[0.25em] uppercase text-electric-yellow mb-6">
            Certifications
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {certItems.map((item, i) => (
              <div key={i} data-aos="fade-up" data-aos-duration={1450 + i * 100} className="bg-foreground/5 border border-foreground/10 rounded-3xl overflow-hidden flex flex-col sm:flex-row xl:flex-col group hover:-translate-y-1 transition-transform duration-300">
                <div className="h-32 sm:h-auto xl:h-60 sm:w-32 xl:w-full relative bg-black/40 shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5 flex flex-col justify-between flex-1 gap-2">
                  <div>
                    <h4 className="font-display text-lg text-cream leading-tight mb-1">{item.title}</h4>
                    <p className="text-[0.65rem] text-cream/50 leading-relaxed line-clamp-2">{item.desc}</p>
                  </div>
                  <div className="mt-2">
                     <div className="text-[0.6rem] text-lime/90 tracking-widest uppercase mb-2 font-bold">{item.org}</div>
                     <div className="flex flex-wrap gap-2">
                      {item.tags.map(t => (
                        <span key={t} className="text-[0.55rem] tracking-wider uppercase px-2 py-0.5 rounded-full bg-foreground/10 text-cream/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
