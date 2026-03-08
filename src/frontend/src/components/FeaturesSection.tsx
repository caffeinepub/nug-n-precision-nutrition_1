import {
  Activity,
  Dna,
  FlaskConical,
  RefreshCw,
  ShieldCheck,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Dna,
    title: "Nutrigenomics Engine",
    description:
      "Deep analysis of gene-nutrient interactions. Our proprietary model maps how your unique genome responds to specific foods, vitamins, and macros.",
    color: "oklch(0.72 0.18 168)",
    bg: "oklch(0.72 0.18 168 / 0.08)",
    border: "oklch(0.72 0.18 168 / 0.2)",
  },
  {
    icon: UtensilsCrossed,
    title: "Personalized Meal Plans",
    description:
      "Curated weekly menus tailored to your genetic metabolism, food sensitivities, and wellness goals. Not one-size-fits-all — uniquely yours.",
    color: "oklch(0.68 0.2 190)",
    bg: "oklch(0.68 0.2 190 / 0.08)",
    border: "oklch(0.68 0.2 190 / 0.2)",
  },
  {
    icon: ShieldCheck,
    title: "Disease Risk Prevention",
    description:
      "Identify genetic predispositions before they manifest. NUGΞN's prevention protocols lower risk for diet-related conditions like T2D and CVD.",
    color: "oklch(0.65 0.18 210)",
    bg: "oklch(0.65 0.18 210 / 0.08)",
    border: "oklch(0.65 0.18 210 / 0.2)",
  },
  {
    icon: Activity,
    title: "Real-Time Health Tracking",
    description:
      "Sync wearables and lab results. Your plan adapts to your actual biomarkers — not static assumptions — in real time.",
    color: "oklch(0.7 0.18 168)",
    bg: "oklch(0.7 0.18 168 / 0.08)",
    border: "oklch(0.7 0.18 168 / 0.2)",
  },
  {
    icon: FlaskConical,
    title: "Lab-Grade Accuracy",
    description:
      "12 certified partner labs worldwide. Clinical-grade sequencing accuracy validated by independent third-party auditors in every report.",
    color: "oklch(0.68 0.2 190)",
    bg: "oklch(0.68 0.2 190 / 0.08)",
    border: "oklch(0.68 0.2 190 / 0.2)",
  },
  {
    icon: RefreshCw,
    title: "Continuous Plan Updates",
    description:
      "As new nutrigenomics research is published, your plan is automatically refined. You stay current with the science without lifting a finger.",
    color: "oklch(0.65 0.18 210)",
    bg: "oklch(0.65 0.18 210 / 0.08)",
    border: "oklch(0.65 0.18 210 / 0.2)",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 50%, oklch(0.45 0.14 200 / 0.06) 0%, transparent 65%)",
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
              background: "oklch(0.72 0.18 168 / 0.12)",
              border: "1px solid oklch(0.72 0.18 168 / 0.3)",
              color: "oklch(0.78 0.18 168)",
            }}
          >
            Platform Features
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">
            Everything Your <span className="gradient-text">Biology Needs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A complete precision health stack — from sequencing to ongoing
            optimization.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <div
                  className="group rounded-2xl p-6 h-full transition-all duration-300 cursor-default relative overflow-hidden"
                  style={{
                    background: "oklch(0.14 0.02 230 / 0.7)",
                    border: `1px solid ${feature.border}`,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Hover gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `radial-gradient(ellipse 70% 60% at 20% 20%, ${feature.bg} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 relative z-10"
                    style={{
                      background: feature.bg,
                      border: `1px solid ${feature.border}`,
                    }}
                  >
                    <Icon size={20} style={{ color: feature.color }} />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display font-semibold text-base mb-2 relative z-10"
                    style={{ color: feature.color }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="divider-glow mt-24" />
    </section>
  );
}
