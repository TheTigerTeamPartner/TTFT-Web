"use client";
import Image from "next/image";

/* ── Grid config ── */
const COLS = 26;
const ROWS = 13;

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
  { delay: 0.0, dur: 3.8, col: 2  },
  { delay: 1.2, dur: 4.5, col: 5  },
  { delay: 0.5, dur: 3.2, col: 8  },
  { delay: 2.1, dur: 4.8, col: 10 },
  { delay: 0.8, dur: 3.5, col: 12 },
  { delay: 1.6, dur: 4.2, col: 14 },
  { delay: 0.3, dur: 3.9, col: 16 },
  { delay: 2.4, dur: 4.0, col: 6  },
];

export default function Hero() {
  return (
    <section
      className="relative w-screen h-screen flex flex-col overflow-hidden"
      style={{ background: "#060810" }}
    >

      {/* ══════════════════════════════
          TILE GRID — full background
      ══════════════════════════════ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows:    `repeat(${ROWS}, 1fr)`,
          gap: "1px",
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
                  ? "1px solid rgba(90,140,255,0.55)"
                  : glow
                  ? "1px solid rgba(65,105,230,0.30)"
                  : "1px solid rgba(255,255,255,0.028)",
                background: bright
                  ? "linear-gradient(140deg,rgba(75,125,255,0.22) 0%,rgba(20,35,110,0.30) 100%)"
                  : glow
                  ? "linear-gradient(140deg,rgba(40,75,180,0.12) 0%,rgba(10,15,45,0.90) 100%)"
                  : "linear-gradient(140deg,rgba(255,255,255,0.012) 0%,rgba(0,0,0,0.12) 100%)",
                boxShadow: bright
                  ? "0 0 24px rgba(80,130,255,0.28),0 0 55px rgba(60,100,255,0.12),inset 0 1px 0 rgba(140,180,255,0.18)"
                  : glow
                  ? "0 0 10px rgba(60,100,220,0.12)"
                  : "none",
              }}
            />
          );
        })}
      </div>

      {/* ── Radial glow over right tiles ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: 0, top: 0, bottom: 0, width: "52%",
          background: "radial-gradient(ellipse 80% 60% at 72% 44%, rgba(50,95,255,0.16) 0%, transparent 68%)",
          zIndex: 1,
        }}
      />

      {/* ── Spotlight from top-left ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0, left: 0, width: "65vw", height: "65vh",
          background: "conic-gradient(from 14deg at 3% 2%, transparent 0deg, rgba(140,185,255,0.05) 7deg, rgba(170,210,255,0.13) 14deg, rgba(140,185,255,0.05) 21deg, transparent 27deg)",
          zIndex: 2,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0, left: 0, width: "40vw", height: "40vh",
          background: "radial-gradient(ellipse 30% 40% at 4% 3%, rgba(160,200,255,0.13) 0%, transparent 70%)",
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
              height: 55,
              zIndex: 15,
              borderRadius: 2,
              background:
                "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.75) 30%, white 50%, rgba(255,255,255,0.75) 70%, transparent 100%)",
              boxShadow:
                "0 0 6px 3px rgba(255,255,255,0.30), 0 0 14px 5px rgba(180,215,255,0.15)",
              animation: `scanLine${i} ${ln.dur}s linear ${ln.delay}s infinite`,
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
          <span style={{ fontSize: 13 }}>✨</span>
          <span style={{ color: "rgba(255,255,255,0.48)", fontSize: 13, fontWeight: 500 }}>
            Welcome to the beta version
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(38px, 5.2vw, 66px)",
            fontWeight: 900,
            lineHeight: 1.06,
            marginBottom: 26,
            opacity: 0,
            animation: "fadeUp 0.7s ease-out 0.25s forwards",
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
            color: "rgba(255,255,255,0.38)",
            fontSize: 14,
            lineHeight: 1.9,
            maxWidth: 500,
            opacity: 0,
            animation: "fadeUp 0.7s ease-out 0.4s forwards",
          }}
        >
          We don&apos;t just innovate, we{" "}
          <span style={{ color: "rgba(255,255,255,0.65)" }}>re-engineer urban connectivity</span>.
          {" "}The Tiger Team delivers{" "}
          <span style={{ color: "rgba(255,255,255,0.65)" }}>high performance AI</span> and{" "}
          <span style={{ color: "rgba(255,255,255,0.65)" }}>quantum algorithms</span> to conquer
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
