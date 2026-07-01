export function SkeletonBar({ width = "100%", height = 12, className = "" }: { width?: string | number; height?: number; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        width,
        height,
        borderRadius: 4,
        background: "linear-gradient(90deg, rgba(132,204,22,0.04) 25%, rgba(132,204,22,0.10) 50%, rgba(132,204,22,0.04) 75%)",
        backgroundSize: "200% 100%",
        animation: "pp-skeleton 1.6s ease-in-out infinite",
      }}
    />
  );
}

export function SectionSkeleton() {
  return (
    <section
      role="status"
      aria-label="Loading..."
      style={{
        padding: "5rem 1.5rem",
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <SkeletonBar width="40%" height={14} />
      <SkeletonBar width="60%" height={40} />
      <SkeletonBar width="80%" height={16} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem", marginTop: "1rem" }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.75rem", padding: "1.5rem", borderRadius: 12, border: "1px solid rgba(132,204,22,0.08)" }}>
            <SkeletonBar width="60%" height={14} />
            <SkeletonBar width="100%" height={10} />
            <SkeletonBar width="85%" height={10} />
            <SkeletonBar width="90%" height={10} />
          </div>
        ))}
      </div>
    </section>
  );
}
