import { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  images: string[];
}

export default function Modal({ isOpen, onClose, title, images }: ModalProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    setCurrentIdx(0);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isOpen, images.length]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
      <div className="relative w-full max-w-5xl bg-foreground/5 border border-white/10 rounded-[2rem] p-6 shadow-[0_0_80px_oklch(0.65_0.28_350/25%)] animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 bg-black/40 hover:bg-black/80 text-cream w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-md transition-all text-xl border border-white/20"
        >
          ✕
        </button>
        {title && <h4 className="text-[1.2rem] font-display text-cream tracking-wide mb-4 pr-12">{title}</h4>}
        
        <div className="relative w-full flex-grow bg-black rounded-xl overflow-hidden flex items-center justify-center border border-white/5 min-h-[50vh]">
          {images.map((img, idx) => (
             <img
               key={idx}
               src={img}
               alt={title || "Modal Image"}
               className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ease-in-out mix-blend-lighten ${
                 idx === currentIdx ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
               }`}
             />
          ))}
          {/* Overlay gradient at bottom for aesthetics */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent z-40 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
