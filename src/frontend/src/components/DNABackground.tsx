export default function DNABackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Radial glow spots */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.5 0.18 168 / 0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-0 w-[600px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.55 0.18 200 / 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.5 0.15 260 / 0.07) 0%, transparent 70%)",
        }}
      />

      {/* SVG DNA helix decorations */}
      <svg
        role="img"
        aria-label="DNA helix decoration"
        className="absolute right-0 top-20 opacity-10 w-48 h-screen"
        viewBox="0 0 100 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>DNA helix decoration</title>
        {/* DNA strand 1 */}
        <path
          d="M 20 0 Q 80 50 20 100 Q 80 150 20 200 Q 80 250 20 300 Q 80 350 20 400 Q 80 450 20 500 Q 80 550 20 600 Q 80 650 20 700 Q 80 750 20 800"
          stroke="oklch(0.72 0.18 168)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 4"
        />
        {/* DNA strand 2 */}
        <path
          d="M 80 0 Q 20 50 80 100 Q 20 150 80 200 Q 20 250 80 300 Q 20 350 80 400 Q 20 450 80 500 Q 20 550 80 600 Q 20 650 80 700 Q 20 750 80 800"
          stroke="oklch(0.68 0.2 190)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 4"
        />
        {/* Base pairs */}
        {([50, 150, 250, 350, 450, 550, 650, 750] as const).map((y) => (
          <line
            key={y}
            x1="20"
            y1={y}
            x2="80"
            y2={y}
            stroke="oklch(0.72 0.18 168 / 0.6)"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      <svg
        role="img"
        aria-label="DNA helix decoration"
        className="absolute left-0 bottom-20 opacity-10 w-48 h-screen"
        viewBox="0 0 100 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>DNA helix decoration</title>
        <path
          d="M 20 0 Q 80 50 20 100 Q 80 150 20 200 Q 80 250 20 300 Q 80 350 20 400 Q 80 450 20 500 Q 80 550 20 600 Q 80 650 20 700 Q 80 750 20 800"
          stroke="oklch(0.6 0.18 280)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 4"
        />
        <path
          d="M 80 0 Q 20 50 80 100 Q 20 150 80 200 Q 20 250 80 300 Q 20 350 80 400 Q 20 450 80 500 Q 20 550 80 600 Q 20 650 80 700 Q 20 750 80 800"
          stroke="oklch(0.65 0.15 200)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 4"
        />
        {([50, 150, 250, 350, 450, 550, 650, 750] as const).map((y) => (
          <line
            key={y}
            x1="20"
            y1={y}
            x2="80"
            y2={y}
            stroke="oklch(0.6 0.18 280 / 0.6)"
            strokeWidth="1.5"
          />
        ))}
      </svg>
    </div>
  );
}
