export default function Ticker() {
  const words = [
    { text: "GIL", color: "text-hot-pink" },
    { text: "FLORENZ", color: "text-electric-yellow" },
    { text: "SASTRE", color: "text-cream/25" },
    { text: "✦", color: "text-hot-pink/50" },
    { text: "DEVELOPER", color: "text-hot-pink" },
    { text: "HACKATHON", color: "text-electric-yellow" },
    { text: "WINNER", color: "text-cream/25" },
    { text: "✦", color: "text-hot-pink/50" },
    { text: "CS", color: "text-hot-pink" },
    { text: "STUDENT", color: "text-electric-yellow" },
    { text: "CIT-U", color: "text-cream/25" },
    { text: "✦", color: "text-hot-pink/50" },
  ];

  const renderWords = () =>
    words.map((w, i) => (
      <span
        key={i}
        className={`font-display text-2xl tracking-[0.18em] pr-7 whitespace-nowrap ${w.color}`}
      >
        {w.text}
      </span>
    ));

  return (
    <div className="sticky top-0 z-50 overflow-hidden whitespace-nowrap border-b border-border bg-background">
      <div className="inline-flex items-center py-3 animate-ticker">
        {renderWords()}
        {renderWords()}
      </div>
    </div>
  );
}
