const stats = [
  { num: "5", label: "Projects" },
  { num: "3", label: "Hackathon Awards" },
  { num: "9+", label: "Languages" },
  { num: "∞", label: "Curiosity" },
];

export default function StatsStrip() {
  return (
    <div className="flex border-t border-b border-border px-10 max-md:px-5 max-md:overflow-x-auto">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`flex-1 text-center py-5 px-2.5 ${i < stats.length - 1 ? "border-r border-border" : ""} min-w-[80px]`}
        >
          <div className="font-display text-4xl text-hot-pink leading-none max-md:text-3xl">
            {s.num}
          </div>
          <div className="text-[0.62rem] text-cream/40 tracking-[0.15em] uppercase mt-1">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
