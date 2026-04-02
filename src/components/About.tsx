const ABOUT_SECTIONS = [
  {
    title: "Early Life & Interest",
    colorClass: "text-lime",
    lineClass: "bg-lime/40",
    content: (
      <>
        Growing up in Bato, Leyte, I was surrounded by people who worked hard to make things function despite limited resources. That environment taught me resilience and creativity in solving problems.
        <br/><br/>
         Yes, I was another young victim of that "You are a hacker, you should learn IT!" just for unlocking my family's password HAHAHAHHA! But over time, exploring digital tools and experimenting with systems turned that curiosity into a genuine passion for programming and problem-solving.
      </>
    )
  },
  {
    title: "Personal Philosophy",
    colorClass: "text-electric-yellow",
    lineClass: "bg-electric-yellow/40",
    content: (
      <>
        I believe that every task—no matter how small—deserves sincerity and effort. My goal is not merely to meet expectations, but to work wholeheartedly and with integrity.
        <br/><br/>
        Challenges and setbacks are part of growth. They remind me to remain patient, disciplined, and committed to excellence as I continue developing both my character and my craft.
      </>
    )
  },
  {
    title: "Future Goals",
    colorClass: "text-[#60A5FA]",
    lineClass: "bg-[#60A5FA]/40",
    content: (
      <>
        I aspire to become a software engineer specializing in system design and development. My goal is to build technology that addresses real-world challenges, particularly in education and community development.
        <br/><br/>
        I would also wanted to develop projects that ACTUALLY SELLS. Not just for the sake of having a project or pristine architecture, but something that can be used by people and has an emotional value attached to it. 
      </>
    )
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-10 max-md:px-5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,oklch(0.65_0.28_350/5%)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto flex flex-col gap-20 relative z-10">
        
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] text-cream">
            ABOUT
            <br />
            <em className="not-italic text-electric-yellow">ME</em>
          </h2>
          <div className="space-y-6 text-[0.85rem] text-cream/70 leading-relaxed mt-2">
            <p className="text-[1.05rem] text-cream/90 font-medium">
              Hello! I'm Gil, a Computer Science student at the Cebu Institute of Technology – University from Bato, Leyte. I often describe myself as a work in progress :)). I also like to sing tho.
            </p>
            <p className="pl-5 border-l-2 border-hot-pink/50">
              <span className="italic text-cream/80 block mb-2">“Whatever you do, work at it with all your heart, as working for the Lord, not for men.”</span>
              <span className="text-[0.7rem] text-hot-pink tracking-[0.1em] uppercase block mb-3">— Colossians 3:23</span>
            </p>
          </div>
        </div>

        {/* Detailed Sections in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16 mt-4">
          {ABOUT_SECTIONS.map((section, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className={`text-[1rem] tracking-[0.25em] uppercase ${section.colorClass} mb-5 flex items-center gap-3`}>
                <span className={`w-8 h-[1px] ${section.lineClass} group-hover:w-12 transition-all duration-300`}></span>
                {section.title}
              </div>
              <p className="text-[0.85rem] text-cream/50 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
