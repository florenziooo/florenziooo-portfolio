export default function Ticker() {
  const words = [
    { text: "florenziooo", color: "text-hot-pink" },
    { text: "gilflorenz.sastre@cit.edu", color: "text-electric-yellow" },
    { text: "frezkieflorenz@gmail.com", color: "text-cream/25" },
    { text: "✦", color: "text-hot-pink/50" },
    { text: "+63 966 075 5229", color: "text-hot-pink" },
    { text: "florenziooo", color: "text-electric-yellow" },
    { text: "gilflorenz.sastre@cit.edu", color: "text-cream/25" },
    { text: "✦", color: "text-hot-pink/50" },
    { text: "frezkieflorenz@gmail.com", color: "text-hot-pink" },
    { text: "+63 966 075 5229", color: "text-electric-yellow" },
    { text: "florenziooo", color: "text-cream/25" },
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
