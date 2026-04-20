import { Copy, MapPin, Globe, Github, Linkedin, Facebook, Download, Send, Mail, Briefcase } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="px-10 py-10 max-md:px-5">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        
        {/* GET IN TOUCH HEADER */}
        <div data-aos="fade-up" data-aos-duration="1350" className="mb-6">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.2rem)] leading-[0.9] text-primary-foreground tracking-wide mb-4 uppercase">
            Get in <span className="text-hot-pink">Touch</span>
          </h2>
          <p className="text-[0.85rem] text-cream/50 max-w-lg leading-relaxed">
            I'm always eager to help bring bold ideas to life. Whether you want to discuss an exciting new project, explore technical collaborations, or simply say hello, my inbox is open!
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Contact */}
          <div data-aos="fade-up" data-aos-duration="1450" className="bg-foreground/5 border border-foreground/10 rounded-3xl p-7 flex flex-col gap-6">
            <div className="flex items-center gap-3 text-cream/90 font-medium">
              <span className="w-10 h-10 rounded-xl bg-hot-pink/20 text-hot-pink flex items-center justify-center">
                <Mail size={18} />
              </span>
              Contact
            </div>
            <div className="flex flex-col gap-6 mt-2">
              <div>
                <div className="text-[0.6rem] text-cream/40 uppercase tracking-widest mb-2">EMAIL</div>
                <div 
                  className="flex items-center justify-between group cursor-pointer" 
                  onClick={() => navigator.clipboard.writeText('florenziooo23@gmail.com')}
                >
                  <span className="text-[0.85rem] text-cream/90">florenziooo23@gmail.com</span>
                  <Copy size={14} className="text-cream/30 group-hover:text-cream/90 transition-colors" />
                </div>
              </div>
              <div className="h-[1px] w-full bg-foreground/10" />
              <div>
                <div className="text-[0.6rem] text-cream/40 uppercase tracking-widest mb-2">PHONE</div>
                <div 
                  className="flex items-center justify-between group cursor-pointer" 
                  onClick={() => navigator.clipboard.writeText('+63 996 075 5229')}
                >
                  <span className="text-[0.85rem] text-cream/90">+63 996 075 5229</span>
                  <Copy size={14} className="text-cream/30 group-hover:text-cream/90 transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Open to Work */}
          <div data-aos="fade-up" data-aos-duration="1550" className="bg-foreground/5 border border-foreground/10 rounded-3xl p-7 flex flex-col gap-5 md:col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 text-cream/90 font-medium">
              <span className="w-10 h-10 rounded-xl bg-hot-pink/20 text-hot-pink flex items-center justify-center">
                <Briefcase size={18} />
              </span>
              Open to Work
            </div>
            <div className="flex flex-wrap gap-2 text-[0.7rem] text-cream/60">
              {["Software Engineer", "System Software Developer", "R&D Computing Professional", "Applications Software Developer", "Computer Programmer"].map(tag => (
                <span key={tag} className="border border-foreground/10 rounded-full px-4 py-1.5 bg-foreground/5">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-[0.8rem] text-cream/50 leading-relaxed mt-2">
              Seeking opportunities where I can contribute my technical skills and creative problem-solving abilities to impactful projects. I'm open to any kind of work where I can learn and grow.
            </p>
          </div>

          {/* Card 3: Location */}
          <div data-aos="fade-up" data-aos-duration="1650" className="bg-foreground/5 border border-foreground/10 rounded-3xl p-7 flex flex-col items-center justify-center text-center gap-4">
            <span className="w-12 h-12 rounded-full bg-hot-pink/20 text-hot-pink flex items-center justify-center -mt-2">
              <MapPin size={20} />
            </span>
            <div>
              <div className="text-cream/90 font-medium mb-1">Cebu City</div>
              <div className="text-[0.65rem] text-cream/40 px-2 leading-tight">
                Talisay City, Cebu, Philippines
              </div>
            </div>
          </div>

          {/* Card 4: Social Links */}
          <div data-aos="fade-up" data-aos-duration="1450" className="bg-foreground/5 border border-foreground/10 rounded-3xl p-7 flex flex-col gap-5 lg:col-span-2">
            <div className="flex items-center gap-3 text-cream/90 font-medium">
              <span className="w-10 h-10 rounded-xl bg-hot-pink/20 text-hot-pink flex items-center justify-center">
                <Globe size={18} />
              </span>
              Social Links
            </div>
            <div className="grid grid-cols-3 gap-3 h-full">
              <a href="https://github.com/florenziooo" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-2 bg-foreground/5 hover:bg-foreground/10 transition-colors rounded-2xl p-4 text-[0.7rem] text-cream/70">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://linkedin.com/in/gil-florenz-sastre-528007400/" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-2 bg-foreground/5 hover:bg-foreground/10 transition-colors rounded-2xl p-4 text-[0.7rem] text-cream/70">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="https://facebook.com/florenzio.23/" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-2 bg-foreground/5 hover:bg-foreground/10 transition-colors rounded-2xl p-4 text-[0.7rem] text-cream/70">
                <Facebook size={20} />
                Facebook
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM BANNER */}
        <div data-aos="fade-up" data-aos-duration="1550" className="mt-4 bg-gradient-to-r from-background to-[oklch(0.65_0.28_350/20%)] border border-foreground/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 h-full relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-display text-cream/90 tracking-wide mb-2">Ready to work together?</h3>
            <p className="text-[0.8rem] text-cream/50 max-w-md">
              Ready to create something impactful? I'm actively seeking fresh challenges and roles where I can contribute. Drop me a message, or explore my resume to learn more about my background.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 relative z-10">
            <a href="/florenziooo-portfolio/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-hot-pink text-primary-foreground rounded-full text-[0.7rem] font-bold tracking-widest uppercase hover:scale-105 transition-transform">
              RESUME <Download size={14} />
            </a>
            <a href="mailto:florenziooo23@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-foreground/5 border border-foreground/10 hover:border-foreground/20 text-cream rounded-full text-[0.7rem] font-bold tracking-widest uppercase transition-colors">
              EMAIL ME <Mail size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
