export default function Marquee({ items, direction = "left", className = "" }) {
  const loop = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`flex w-max items-center gap-8 py-3 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {loop.map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-lg font-semibold uppercase tracking-wide text-ink-900/90"
          >
            {word}
            <span className="text-ink-900/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
