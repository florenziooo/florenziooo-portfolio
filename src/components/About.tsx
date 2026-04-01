export default function About() {
  return (
    <section id="about" className="py-20 px-10 max-md:px-5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,oklch(0.65_0.28_350/5%)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto flex flex-col gap-20 relative z-10">
        
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] text-cream">
            THE
            <br />
            <em className="not-italic text-electric-yellow">STORY</em>
          </h2>
          <div className="space-y-6 text-[0.85rem] text-cream/70 leading-relaxed mt-2">
            <p className="text-[1.05rem] text-cream/90 font-medium">
              My name is Gil Florenz J. Sastre, a Computer Science student at the Cebu Institute of Technology – University from Bato, Leyte. I often describe myself as a singerist, scholar, and a work in progress.
            </p>
            <p className="pl-5 border-l-2 border-hot-pink/50">
              <span className="italic text-cream/80 block mb-2">“Whatever you do, work at it with all your heart, as working for the Lord, not for men.”</span>
              <span className="text-[0.7rem] text-hot-pink tracking-[0.1em] uppercase block mb-3">— Colossians 3:23</span>
            </p>
          </div>
        </div>

        {/* Detailed Sections in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {/* Box 1 */}
          <div className="group">
            <div className="text-[1rem] tracking-[0.25em] uppercase text-lime mb-5 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-lime/40 group-hover:w-12 transition-all duration-300"></span>
              Early Life & Interest
            </div>
            <p className="text-[0.85rem] text-cream/50 leading-relaxed font-sans">
              Growing up in Bato, Leyte, I was surrounded by people who worked hard to make things function despite limited resources. That environment taught me resilience and creativity in solving problems.
              <br/><br/>
              My curiosity about technology began with simple questions about how software works behind the screen. Over time, exploring digital tools and experimenting with systems turned that curiosity into a genuine passion for programming and problem-solving.
            </p>
          </div>

          {/* Box 2 */}
          <div className="group bg-gradient-to-br from-surface to-background p-6 -m-6 rounded-2xl border border-transparent hover:border-hot-pink/10 transition-colors">
            <div className="text-[1rem] tracking-[0.25em] uppercase text-hot-pink mb-5 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-hot-pink/40 group-hover:w-12 transition-all duration-300"></span>
              Professional Dev
            </div>
            <p className="text-[0.85rem] text-cream/50 leading-relaxed font-sans">
              As Commissioner-at-Large of the Commission on Elections – CIT-U, I help streamline permit processes and support transparent student elections. Previously, as Head Secretary, I worked on digitizing archives and improving communication systems.
              <br/><br/>
              I also contributed to the Publicity and Media Committee of the DOST Scholars’ Association – CIT-U, where I combined creativity and technical skills to craft content and strengthen engagement through storytelling.
            </p>
          </div>

          {/* Box 3 */}
          <div className="group bg-gradient-to-br from-surface to-background p-6 -m-6 rounded-2xl border border-transparent hover:border-electric-yellow/10 transition-colors">
            <div className="text-[1rem] tracking-[0.25em] uppercase text-electric-yellow mb-5 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-electric-yellow/40 group-hover:w-12 transition-all duration-300"></span>
              Personal Philosophy
            </div>
            <p className="text-[0.85rem] text-cream/50 leading-relaxed font-sans">
              I believe that every task—no matter how small—deserves sincerity and effort. My goal is not merely to meet expectations, but to work wholeheartedly and with integrity.
              <br/><br/>
              Challenges and setbacks are part of growth. They remind me to remain patient, disciplined, and committed to excellence as I continue developing both my character and my craft.
            </p>
          </div>

          {/* Box 4 */}
          <div className="group">
            <div className="text-[1rem] tracking-[0.25em] uppercase text-[#60A5FA] mb-5 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#60A5FA]/40 group-hover:w-12 transition-all duration-300"></span>
              Future Goals
            </div>
            <p className="text-[0.85rem] text-cream/50 leading-relaxed font-sans">
              I aspire to become a software engineer specializing in system design and development. My goal is to build technology that addresses real-world challenges, particularly in education and community development.
              <br/><br/>
              Beyond technical growth, I hope to remain grounded in service, leadership, and faith, continually striving to use my skills in ways that create meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
