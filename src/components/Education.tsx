export default function Education() {
  return (
    <section className="py-20 px-10 max-md:px-5">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Education */}
        <div>
          <div className="text-[0.68rem] tracking-[0.25em] uppercase text-hot-pink mb-4">
            Education
          </div>
          <h3 className="font-display text-[clamp(2.5rem,4.5vw,4rem)] leading-[0.92] text-cream mb-5">
            LEARN.
            <br />
            BUILD.
            <br />
            <span className="text-electric-yellow">REPEAT.</span>
          </h3>
          <div className="text-[0.8rem] text-cream/50 leading-relaxed space-y-4 mb-8">
            <p>
              I began my academic journey at the Bato School of Fisheries, where I consistently achieved honors and served as Vice President of the Supreme Student Government and Editor-in-Chief of The Bato Angler.
            </p>
            <p>
              Today, I am pursuing a Bachelor of Science in Computer Science at Cebu Institute of Technology – University. Through courses such as Data Structures and Algorithms, Object-Oriented Programming, Design Analysis, and Automata Theory, I continue developing the analytical thinking and technical foundations needed to design efficient and reliable systems.
            </p>
          </div>
          <ul className="flex flex-col gap-3.5">
            {[
              "DevFest Cebu 2024 — Google Developer Groups",
              "Git Gud: Mastering GitHub & Version Control",
              "Build with AI: Gemini for Developers",
              "Infosession '26: Project Aurora — GDG",
            ].map((s) => (
              <li key={s} className="flex items-center gap-3.5 text-[0.76rem] text-cream/60">
                <span className="w-2 h-2 rounded-full bg-lime shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <div className="text-[0.68rem] tracking-[0.25em] uppercase text-electric-yellow mb-4">
            Certifications
          </div>
          <div className="flex flex-col gap-4">
            {[
              { cert: "C Programming Certification", org: "CodeChum" },
              { cert: "Java OOP Certification", org: "CodeChum" },
              { cert: "Python Certification", org: "Sololearn" },
            ].map((c) => (
              <div
                key={c.cert}
                className="bg-surface border border-border rounded-2xl p-5 hover:bg-[oklch(0.24_0.02_280)] transition-colors"
              >
                <div className="font-display text-xl text-cream tracking-wide">
                  {c.cert}
                </div>
                <div className="text-[0.65rem] text-cream/35 tracking-[0.12em] uppercase mt-1">
                  {c.org}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
