"use client";

const ROW1 = [
  "Coffee Shops", "Bakeries", "Lawn Services", "Dispensaries", "Bounce House Rentals",
  "Auto Shops", "Restaurants", "Hair Salons", "Contractors", "Photographers",
];

const ROW2 = [
  "Pet Groomers", "Retail Stores", "Gyms & Fitness", "Plumbers", "Wedding Venues",
  "Tattoo Studios", "Yoga Studios", "Food Trucks", "Roofers", "Electricians",
];

function TickerRow({
  items,
  reverse = false,
  speed = 38,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
      <div
        className="flex gap-3 whitespace-nowrap"
        style={{
          animation: `${reverse ? "ticker-reverse" : "ticker"} ${speed}s linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-medium tracking-wide flex-shrink-0"
            style={{
              background: i % 3 === 0
                ? "rgba(132,204,22,0.08)"
                : "rgba(232,242,232,0.04)",
              border: i % 3 === 0
                ? "1px solid rgba(132,204,22,0.2)"
                : "1px solid rgba(232,242,232,0.06)",
              color: i % 3 === 0
                ? "#84CC16"
                : "rgba(232,242,232,0.5)",
            }}
          >
            <span aria-hidden="true" style={{ opacity: 0.6 }}>◾</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function IndustriesTicker() {
  return (
    <section
      className="py-10 overflow-hidden"
      style={{
        borderTop:    "1px solid rgba(132,204,22,0.08)",
        borderBottom: "1px solid rgba(132,204,22,0.08)",
        background:   "rgba(11,24,16,0.6)",
      }}
      aria-label="Industries we serve"
    >
      <div className="mb-3">
        <TickerRow items={ROW1} speed={36} />
      </div>
      <TickerRow items={ROW2} reverse speed={42} />
    </section>
  );
}
