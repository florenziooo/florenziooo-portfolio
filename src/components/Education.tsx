import { useState } from "react";
import Modal from "./ui/Modal";

import devfest2 from "./images/devfest2.png";
import gitgud from "./images/gitgud.png";
import buildwithai from "./images/buildwithai.png";
import infosession from "./images/infosession.jpeg";
import ccert from "./images/c_codechum.png";
import javaoop from "./images/oop_codechum.png";
import python from "./images/python_sololearn.png";

const educationImages: Record<string, string[]> = {
  "DevFest Cebu 2024 — Google Developer Groups": [devfest2],
  "Git Gud: Mastering GitHub & Version Control": [gitgud],
  "Build with AI: Gemini for Developers": [buildwithai],
  "Infosession '26: Project Aurora — GDG": [infosession],
  "C Programming Certification": [ccert],
  "Java OOP Certification": [javaoop],
  "Python Certification": [python],
};

export default function Education() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <section className="py-20 px-10 max-md:px-5">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Education */}
        <div>
          <div className="text-[0.68rem] tracking-[0.25em] uppercase text-hot-pink mb-4">
            Education
          </div>
          <h3 className="font-display text-[clamp(2.5rem,4.5vw,4rem)] leading-[0.92] text-cream mb-5">
            WHAT AM I EXPLORING
            <br />
            <span className="text-electric-yellow">RIGHT NOW?</span>
          </h3>
          <div className="text-[0.8rem] text-cream/50 leading-relaxed space-y-4 mb-8">
            <p>
              I began my academic journey at the Bato School of Fisheries, where I consistently achieved honors and served as Vice President of the Supreme Student Government and Editor-in-Chief of The Bato Angler.
            </p>
            <p>
              Today, I am pursuing a Bachelor of Science in Computer Science at Cebu Institute of Technology – University. Through courses I am currently exploring such as Intro to Blockchain, Intelligent Systems, and Software Engineering, I continue developing the analytical thinking and technical foundations needed to design efficient and reliable systems.
              <br /><br />Click the images below to know more! vv
            </p>
          </div>
          <ul className="flex flex-col gap-3.5">
            {[
              "DevFest Cebu 2024 — Google Developer Groups",
              "Git Gud: Mastering GitHub & Version Control",
              "Build with AI: Gemini for Developers",
              "Infosession '26: Project Aurora — GDG",
            ].map((s) => (
              <li
                key={s}
                onClick={() => setActiveModal(s)}
                className="flex items-center gap-3.5 text-[0.76rem] text-electric-yellow/80 group cursor-pointer w-fit animate-pulse hover:animate-none transition-all duration-300 ease-out"
              >
                <span className="w-2 h-2 rounded-full bg-lime shrink-0 group-hover:animate-ping" />
                <span className="group-hover:text-electric-yellow group-hover:-translate-y-0.5 group-hover:rotate-1 transition-all duration-300 ease-out">{s}</span>
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
              {
                cert: "C Programming Certification",
                org: "CodeChum"
              },
              {
                cert: "Java OOP Certification",
                org: "CodeChum"
              },
              {
                cert: "Python Certification",
                org: "Sololearn"
              },
            ].map((c) => (
              <div
                key={c.cert}
                onClick={() => setActiveModal(c.cert)}
                className="bg-surface border border-border rounded-2xl p-5 hover:bg-[oklch(0.24_0.02_280)] transition-colors cursor-pointer"
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
      {/* Modal */}
      <Modal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        title={activeModal || undefined}
        images={activeModal ? educationImages[activeModal] || [] : []}
      />
    </section>
  );
}
