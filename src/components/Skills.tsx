const categories = [
  {
    num: "01 —",
    name: "Languages",
    desc: "C, C++, C#, Java, Kotlin, Python, JavaScript, TypeScript, PHP",
    color: "bg-hot-pink",
  },
  {
    num: "02 —",
    name: "Web & Mobile",
    desc: "HTML, CSS, XML, Tailwind, Vite, Django, Spring Boot, Android Studio",
    color: "bg-electric-yellow",
  },
  {
    num: "03 —",
    name: "Databases",
    desc: "MySQL — schema design, queries, optimization",
    color: "bg-lime",
  },
  {
    num: "04 —",
    name: "Design & Collab",
    desc: "Figma, Canva, Notion — from wireframes to shipped products",
    color: "bg-sky-accent",
  },
  {
    num: "05 —",
    name: "Dev Tools",
    desc: "VS Code, IntelliJ, CLion, PyCharm, Git, GitHub, Postman",
    color: "bg-hot-pink",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-10 max-md:px-5 relative">
      {/* Background watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20vw] text-foreground/[0.02] whitespace-nowrap pointer-events-none tracking-wider">
        STACK
      </div>

      <div className="px-0 mb-12 flex items-end justify-between flex-wrap gap-5">
        <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.9] text-cream">
          ONLY THE
          <br />
          <em className="not-italic text-hot-pink">FRESHEST</em>
        </h2>
        <p className="text-[0.78rem] text-cream/40 max-w-[280px] leading-relaxed">
          Tools and technologies I use to build things that actually work.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-16">
        {categories.map((c) => (
          <div
            key={c.name}
            className="bg-surface p-7 relative overflow-hidden group hover:bg-[oklch(0.24_0.02_280)] transition-colors"
          >
            <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full ${c.color} transition-all duration-500`} />
            <div className="font-display text-sm tracking-[0.2em] text-cream/20 mb-2">
              {c.num}
            </div>
            <div className="font-display text-3xl text-cream tracking-wide leading-none mb-3">
              {c.name}
            </div>
            <div className="text-[0.7rem] text-cream/35 leading-relaxed">
              {c.desc}
            </div>
          </div>
        ))}
        <div className="bg-surface p-7 flex flex-col justify-center items-center text-center group hover:bg-[oklch(0.24_0.02_280)] transition-colors">
          <div className="font-display text-3xl text-cream leading-none mb-2">
            And it's
            <br />
            damn
            <br />
            good 🔥
          </div>
          <a href="#projects" className="text-[0.7rem] text-hot-pink tracking-wide mt-2 hover:underline">
            See the projects →
          </a>
        </div>
      </div>
    </section>
  );
}
