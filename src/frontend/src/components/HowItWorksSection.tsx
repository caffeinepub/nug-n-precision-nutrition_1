import { Cpu, Package, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Submit Your DNA",
    description:
      "Mail in a simple saliva sample to our certified lab partners. Our kit arrives at your door within days — no clinic visit required.",
    color: "oklch(0.72 0.18 168)",
    glow: "oklch(0.72 0.18 168 / 0.2)",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Decode Your Genome",
    description:
      "Our AI analyzes 500,000+ genetic markers related to nutrition and metabolism. Every variant mapped, every interaction modeled.",
    color: "oklch(0.68 0.2 190)",
    glow: "oklch(0.68 0.2 190 / 0.2)",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Live Your Plan",
    description:
      "Receive your personalized nutrition, supplement, and lifestyle blueprint. Updated continuously as science evolves.",
    color: "oklch(0.65 0.18 210)",
    glow: "oklch(0.65 0.18 210 / 0.2)",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="divider-glow mb-0" />

      {/* Gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.45 0.14 168 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-4"
            style={{
              background: "oklch(0.68 0.2 190 / 0.12)",
              border: "1px solid oklch(0.68 0.2 190 / 0.3)",
              color: "oklch(0.72 0.2 190)",
            }}
          >
            The Process
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 text-foreground">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Three steps from sample to personalized plan. Science-backed,
            precision-powered.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div
            className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-[calc(100%-8rem)] hidden lg:block"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.72 0.18 168 / 0.4), oklch(0.68 0.2 190 / 0.4), oklch(0.65 0.18 210 / 0.4))",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  <div
                    className="glass-strong rounded-2xl p-8 h-full relative overflow-hidden group hover:border-opacity-60 transition-all duration-300"
                    style={{
                      boxShadow: `0 4px 24px oklch(0.1 0.01 230 / 0.6), 0 0 1px ${step.glow}`,
                    }}
                  >
                    {/* Background glow on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{
                        background: `radial-gradient(ellipse 60% 50% at 50% 30%, ${step.glow} 0%, transparent 70%)`,
                      }}
                    />

                    {/* Step number */}
                    <div
                      className="font-mono text-5xl font-bold mb-6 opacity-20"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative z-10"
                      style={{
                        background: `${step.glow.replace("/ 0.2", "/ 0.15")}`,
                        border: `1px solid ${step.color.replace(")", " / 0.3)")}`,
                      }}
                    >
                      <Icon size={24} style={{ color: step.color }} />
                    </div>

                    {/* Content */}
                    <h3
                      className="font-display font-bold text-xl mb-3 relative z-10"
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="divider-glow mt-24" />
    </section>
  );
}
