const plans = [
  {
    name: "Starter",
    price: "Free",
    sub: "Forever free",
    description: "Perfect for solo developers exploring AI performance.",
    features: [
      "1M tokens tracked / month",
      "Real-time TTFT dashboard",
      "7-day data retention",
      "2 monitored models",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    sub: "per month",
    description: "For teams shipping production AI features.",
    features: [
      "100M tokens tracked / month",
      "P50/P95/P99 analytics",
      "90-day data retention",
      "Unlimited models",
      "Slack & PagerDuty alerts",
      "API access",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    sub: "contact us",
    description: "For organizations with scale and compliance requirements.",
    features: [
      "Unlimited tokens",
      "1-year data retention",
      "On-premise / VPC deployment",
      "SOC 2 & HIPAA compliant",
      "SSO / SAML",
      "Dedicated Slack channel",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#4F6EF7] text-sm font-semibold tracking-widest uppercase mb-3">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Simple, <span className="text-gradient">transparent</span> pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Start for free. Scale when you need to. No hidden fees.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 relative transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-[#4F6EF7]/20 to-[#252B4A]/60 border-2 border-[#4F6EF7] glow-accent"
                  : "card-glass"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#4F6EF7] to-[#7B9BFF] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-black text-white">{plan.price}</span>
                <span className="text-gray-400 text-sm ml-2">{plan.sub}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-5 h-5 text-[#4F6EF7] shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.highlighted
                    ? "btn-primary text-white"
                    : "border border-[#252B4A] text-gray-300 hover:border-[#4F6EF7]/50 hover:text-white hover:bg-[#252B4A]/40"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
