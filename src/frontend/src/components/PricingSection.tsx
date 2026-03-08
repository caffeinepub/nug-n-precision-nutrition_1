import { Check, Zap } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Starter",
    price: "$149",
    billing: "one-time",
    tagline: "Begin your genetic journey",
    features: [
      "DNA Collection Kit",
      "Complete Genome Analysis",
      "Basic Nutrition Report",
      "500K+ Marker Scan",
      "Email Support",
    ],
    ocid: "pricing.starter.button",
    color: "oklch(0.72 0.18 168)",
    bg: "oklch(0.72 0.18 168 / 0.06)",
    border: "oklch(0.72 0.18 168 / 0.25)",
    featured: false,
  },
  {
    name: "Premium",
    price: "$299",
    billing: "per year",
    tagline: "The complete precision platform",
    features: [
      "Everything in Starter",
      "Full Personalized Plan",
      "Monthly Plan Updates",
      "Mobile App Access",
      "Real-Time Health Tracking",
      "Priority Support",
    ],
    ocid: "pricing.premium.button",
    color: "oklch(0.68 0.2 190)",
    bg: "oklch(0.68 0.2 190 / 0.1)",
    border: "oklch(0.68 0.2 190 / 0.5)",
    featured: true,
  },
  {
    name: "Elite",
    price: "$599",
    billing: "per year",
    tagline: "White-glove health transformation",
    features: [
      "Everything in Premium",
      "1-on-1 Nutritionist Sessions",
      "Quarterly Lab Testing",
      "Supplement Protocol",
      "Disease Risk Deep-Dive",
      "Dedicated Health Coach",
    ],
    ocid: "pricing.elite.button",
    color: "oklch(0.65 0.18 210)",
    bg: "oklch(0.65 0.18 210 / 0.06)",
    border: "oklch(0.65 0.18 210 / 0.25)",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.42 0.14 200 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-4"
            style={{
              background: "oklch(0.68 0.2 190 / 0.12)",
              border: "1px solid oklch(0.68 0.2 190 / 0.3)",
              color: "oklch(0.72 0.2 190)",
            }}
          >
            Simple Pricing
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">
            Invest in Your{" "}
            <span className="gradient-text">Genetic Blueprint</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            One-time sequencing. Lifetime insights. Choose the plan that fits
            your wellness journey.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative ${plan.featured ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 z-10"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.18 168), oklch(0.65 0.2 190))",
                    color: "oklch(0.09 0.01 230)",
                  }}
                >
                  <Zap size={12} />
                  Most Popular
                </div>
              )}

              <div
                className="rounded-2xl p-7 h-full flex flex-col relative overflow-hidden"
                style={{
                  background: plan.featured
                    ? "oklch(0.16 0.025 230 / 0.9)"
                    : "oklch(0.13 0.02 230 / 0.7)",
                  border: `1px solid ${plan.border}`,
                  backdropFilter: "blur(16px)",
                  boxShadow: plan.featured
                    ? `0 0 40px ${plan.bg}, 0 8px 32px oklch(0.08 0.01 230 / 0.6)`
                    : "0 4px 20px oklch(0.08 0.01 230 / 0.4)",
                }}
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${plan.bg} 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Plan name */}
                  <div
                    className="font-display font-bold text-sm uppercase tracking-widest mb-1"
                    style={{ color: plan.color }}
                  >
                    {plan.name}
                  </div>

                  <p className="text-muted-foreground text-xs mb-5">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="font-display font-bold text-5xl text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm ml-2">
                      {plan.billing}
                    </span>
                  </div>

                  {/* Divider */}
                  <div
                    className="h-px mb-6"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${plan.border}, transparent)`,
                    }}
                  />

                  {/* Features */}
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-foreground/80"
                      >
                        <Check
                          size={14}
                          style={{ color: plan.color, flexShrink: 0 }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="divider-glow mt-24" />
    </section>
  );
}
