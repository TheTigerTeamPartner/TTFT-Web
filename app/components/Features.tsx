const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Real-Time TTFT Tracking",
    description:
      "Monitor Time To First Token across every request, model, and region in real time. Spot regressions before users do.",
    badge: "Core",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "P50/P95/P99 Analytics",
    description:
      "Percentile breakdowns reveal hidden latency spikes. Go beyond averages to understand the real user experience.",
    badge: "Analytics",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Smart Alerting",
    description:
      "Get notified via Slack, PagerDuty, or webhook when latency exceeds your SLA thresholds — before customers complain.",
    badge: "Alerts",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "One-Line SDK",
    description:
      "Drop in a single import and start capturing metrics instantly. Works with OpenAI, Anthropic, Cohere, and any OpenAI-compatible API.",
    badge: "SDK",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Multi-Model Benchmarks",
    description:
      "Compare TTFT across GPT-4o, Claude 3.5, Llama 3, Gemini, and more — side by side — to pick the right model for your latency budget.",
    badge: "Compare",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "SOC 2 Compliant",
    description:
      "Enterprise-grade security with data encryption in transit and at rest. Your prompts and responses never leave your VPC.",
    badge: "Security",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#4F6EF7] text-sm font-semibold tracking-widest uppercase mb-3">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Everything you need to{" "}
            <span className="text-gradient">ship fast AI</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            From real-time dashboards to intelligent alerting — TTFT gives your team
            complete visibility into AI inference performance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="card-glass rounded-2xl p-6 transition-all duration-300 group cursor-default"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#4F6EF7]/10 border border-[#4F6EF7]/20 flex items-center justify-center text-[#4F6EF7] mb-5 group-hover:bg-[#4F6EF7]/20 transition-colors">
                {feature.icon}
              </div>

              {/* Badge */}
              <span className="inline-block text-xs font-mono text-[#7B9BFF] bg-[#4F6EF7]/10 px-2 py-0.5 rounded mb-3">
                {feature.badge}
              </span>

              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
