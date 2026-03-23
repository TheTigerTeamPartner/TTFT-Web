const stats = [
  { value: "48ms", label: "Median TTFT", sub: "across all supported models" },
  { value: "99.9%", label: "Uptime SLA", sub: "enterprise guarantee" },
  { value: "2.4×", label: "Faster Inference", sub: "vs. unoptimized baseline" },
  { value: "150M+", label: "Tokens Tracked", sub: "per day across all users" },
];

const comparisons = [
  { model: "GPT-4o", ttft: 45, color: "#4F6EF7" },
  { model: "Claude 3.5 Sonnet", ttft: 52, color: "#7B9BFF" },
  { model: "Llama 3 70B", ttft: 78, color: "#9BB5FF" },
  { model: "Gemini 1.5 Pro", ttft: 95, color: "#B8CBFF" },
  { model: "Mistral Large", ttft: 110, color: "#D0DCFF" },
];

const maxTTFT = Math.max(...comparisons.map((c) => c.ttft));

export default function Performance() {
  return (
    <section id="performance" className="py-24 bg-[#191D33]/60 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#4F6EF7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#4F6EF7] text-sm font-semibold tracking-widest uppercase mb-3">
            Performance
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Numbers that <span className="text-gradient">speak for themselves</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Real benchmarks from production workloads. No marketing fluff — just latency data.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 card-glass rounded-2xl">
              <p className="text-4xl md:text-5xl font-black text-gradient mb-2">{stat.value}</p>
              <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
              <p className="text-gray-500 text-xs">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Model Comparison */}
        <div className="card-glass rounded-2xl p-8">
          <h3 className="text-white font-bold text-xl mb-2">Model TTFT Comparison</h3>
          <p className="text-gray-400 text-sm mb-8">Measured on identical prompts, averaged over 10,000 requests</p>

          <div className="space-y-5">
            {comparisons.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-gray-300 text-sm font-medium w-40 shrink-0">{item.model}</span>
                <div className="flex-1 bg-[#0F1222] rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${(item.ttft / maxTTFT) * 100}%`,
                      background: `linear-gradient(90deg, ${item.color}, ${item.color}99)`,
                    }}
                  />
                </div>
                <span className="text-sm font-mono font-semibold text-white w-16 text-right">
                  {item.ttft}ms
                </span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-xs mt-6">
            * Lower is better. Measurements taken from US-East region, March 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
