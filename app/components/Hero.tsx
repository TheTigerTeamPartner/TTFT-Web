"use client";
import Image from "next/image";

/* ── Grid config ── */
const COLS = 26;
const ROWS = 55; // enough to cover tall screens (portrait mobile)

/* ── Glow tiles (col, row) on right portion ── */
const GLOW: Set<string> = new Set([
  // top-left area
  "2,1", "5,0",
  // top-right
  "21,0", "24,2",
  // mid-left
  "1,5", "4,7",
  // mid-center
  "10,3", "13,6",
  // mid-right
  "18,4", "22,7",
  // bottom-left
  "3,10", "6,11",
  // bottom-right
  "20,9", "23,11",
  // scattered extras
  "8,8", "15,2", "17,10",
]);
const BRIGHT: Set<string> = new Set([
  "5,0", "21,0", "10,3", "18,4", "3,10", "23,11",
]);

/* ── Vertical scan lines in column grooves ──
   COLS=18 → groove positions ≈ every (100/18)% ≈ 5.56%
   Each line: 2px wide, ~55px tall, travels top→bottom     */
const SCAN_LINES = [
  { delay: 0.0, dur: 5.5, col: 3  },
  { delay: 1.5, dur: 6.2, col: 8  },
  { delay: 0.8, dur: 5.0, col: 13 },
  { delay: 2.2, dur: 6.8, col: 19 },
  { delay: 1.0, dur: 5.8, col: 24 },
];

export default function Hero() {
  return (
    <section
      className="relative w-screen h-screen flex flex-col overflow-hidden"
      style={{ background: "#00030a" }}
    >

      {/* ══════════════════════════════
          TILE GRID — full background
      ══════════════════════════════ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, calc(100vw / ${COLS}))`,
          gridTemplateRows:    `repeat(${ROWS}, calc(100vw / ${COLS}))`,
          gap: "0px",
          padding: "0px",
          zIndex: 0,
        }}
      >
        {Array.from({ length: COLS * ROWS }).map((_, i) => {
          const col = i % COLS;
          const row = Math.floor(i / COLS);
          const key = `${col},${row}`;
          const bright = BRIGHT.has(key);
          const glow   = GLOW.has(key);

          return (
            <div
              key={i}
              style={{
                borderRadius: 3,
                border: bright
                  ? "1px solid rgba(90,140,255,0.22)"
                  : glow
                  ? "1px solid rgba(65,105,230,0.12)"
                  : "1px solid #0d0f13",
                background: bright
                  ? "linear-gradient(140deg,rgba(75,125,255,0.08) 0%,rgba(20,35,110,0.15) 100%)"
                  : glow
                  ? "linear-gradient(140deg,rgba(40,75,180,0.05) 0%,rgba(10,15,45,0.90) 100%)"
                  : "#010510",
                boxShadow: bright
                  ? "0 0 12px rgba(80,130,255,0.10),0 0 28px rgba(60,100,255,0.05)"
                  : glow
                  ? "none"
                  : "none",
              }}
            />
          );
        })}
      </div>



      {/* ══════════════════════════════
          SPOTLIGHT BEAM — top-left corner
      ══════════════════════════════ */}
      {/* outer glow — fat oval */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-30vh",
          left: "-60px",
          width: 340,
          height: "160vh",
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(16,26,80,0.85) 0%, rgba(16,26,80,0.30) 55%, transparent 80%)",
          transformOrigin: "50% 20%",
          filter: "blur(55px)",
          animation: "beamSway 7s ease-in-out infinite",
          zIndex: 2,
        }}
      />
      {/* inner core — thinner oval */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-25vh",
          left: "-20px",
          width: 180,
          height: "145vh",
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(16,26,80,0.60) 0%, rgba(16,26,80,0.18) 55%, transparent 78%)",
          transformOrigin: "50% 20%",
          filter: "blur(28px)",
          animation: "beamSway 7s ease-in-out 0.2s infinite",
          zIndex: 2,
        }}
      />

      {/* ══════════════════════════════
          SCAN LINES — vertical, in column grooves
      ══════════════════════════════ */}
      {SCAN_LINES.map((ln, i) => {
        /* groove centre = padding + col*stride - gap/2
           stride = (100vw - pad*2 - gap*(COLS-1)) / COLS + gap
           approximate with percentage: (ln.col / COLS * 100)%        */
        const leftPct = `calc(${(ln.col / COLS) * 100}% - 1px)`;
        return (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: leftPct,
              width: 2,
              height: 180,
              zIndex: 15,
              background:
                "linear-gradient(180deg, transparent 0%, rgba(51,109,250,0.08) 8%, rgba(51,109,250,0.5) 30%, rgba(51,109,250,0.85) 50%, rgba(51,109,250,0.5) 70%, rgba(51,109,250,0.08) 92%, transparent 100%)",
              boxShadow:
                "0 0 4px 2px rgba(51,109,250,0.3), 0 0 10px 4px rgba(51,109,250,0.12)",
              clipPath: "polygon(50% 0%, 100% 3%, 100% 97%, 50% 100%, 0% 97%, 0% 3%)",
              filter: "blur(0.5px)",
              animation: `scanLine${i} ${ln.dur}s ease-in-out ${ln.delay}s infinite`,
            }}
          />
        );
      })}

      {/* ══════════════════════════════
          CONTENT
      ══════════════════════════════ */}

      {/* Logo + company name */}
      <div className="absolute top-6 left-8" style={{ zIndex: 30 }}>
        <Image src="/logo.png" alt="TTFT" width={180} height={180} className="object-contain" priority />
      </div>

      {/* Hero text */}
      <div
        className="relative flex-1 flex flex-col items-center justify-center text-center px-10"
        style={{ zIndex: 30 }}
      >
        {/* Badge */}
        <div
          className="flex items-center gap-2 mb-9"
          style={{ opacity: 0, animation: "fadeUp 0.6s ease-out 0.1s forwards" }}
        >
          <span style={{ fontSize: 13 }}> </span>
          <span style={{ color: "rgba(255,255,255,0.48)", fontSize: 13, fontWeight: 500 }}>
            Welcome to the beta version
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(38px, 5.2vw, 66px)",
            fontWeight: 600,
            lineHeight: 1.06,
            marginBottom: 26,
            opacity: 0,
            animation: "fadeUp 0.7s ease-out 0.25s forwards",
            fontFamily: "var(--font-poppins), sans-serif",
          }}
        >
          <span style={{ color: "#fff" }}>Dominating the </span>
          <span style={{ color: "#F39204" }}>Future</span>
          <span style={{ color: "#fff" }}> of</span>
          <br />
          <span style={{ color: "#F39204" }}>Deep Tech.</span>
        </h1>

        {/* Body */}
        <p
          style={{
            color: "rgb(255, 255, 255)",
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.9,
            maxWidth: 500,
            opacity: 0,
            animation: "fadeUp 0.7s ease-out 0.4s forwards",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          We don&apos;t just innovate, we{" "}
          <span style={{ color: "#F39204" }}>re-engineer</span> urban connectivity.
          {" "}The Tiger Team delivers{" "}
          <span style={{ color: "#F39204" }}>high performance</span> AI and{" "}
          <span style={{ color: "#F39204" }}>Quantum algorithms</span> to conquer
          energy bottlenecks and industrial complexity.
        </p>
      </div>

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(8,10,22,0.65), transparent)", zIndex: 5 }}
      />

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes beamSway {
          0%,100% { transform: rotate(-30deg); opacity: 0.85; }
          50%     { transform: rotate(-40deg); opacity: 1; }
        }
        ${SCAN_LINES.map((_, i) => `
          @keyframes scanLine${i} {
            0%   { top: -60px;  opacity: 0; }
            8%   { opacity: 1; }
            88%  { opacity: 0.9; }
            100% { top: 100vh;  opacity: 0; }
          }
        `).join("")}
      `}</style>
    </section>
  );
}
