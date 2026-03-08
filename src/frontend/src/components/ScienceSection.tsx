import { motion } from "motion/react";

export default function ScienceSection() {
  return (
    <section id="science" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.4 0.12 168 / 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
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
              background: "oklch(0.65 0.18 210 / 0.12)",
              border: "1px solid oklch(0.65 0.18 210 / 0.3)",
              color: "oklch(0.7 0.18 210)",
            }}
          >
            Trust & Verification
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">
            Built on{" "}
            <span className="gradient-text">Peer-Reviewed Science</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every recommendation NUGΞN makes is grounded in published,
            peer-reviewed nutrigenomics research. No pseudoscience. No
            guesswork. Pure validated biology.
          </p>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto"
        >
          {[
            {
              title: "Decentralized Data Security",
              desc: "Your genetic data is encrypted and stored on secure decentralized infrastructure. We never sell your data.",
              color: "oklch(0.68 0.2 190)",
            },
            {
              title: "Independent Validation",
              desc: "Our recommendations are cross-validated by independent researchers and clinical nutritionists.",
              color: "oklch(0.65 0.18 210)",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: "oklch(0.14 0.02 230 / 0.6)",
                border: `1px solid ${item.color.replace(")", " / 0.2)")}`,
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full mb-4 animate-pulse-glow"
                style={{ background: item.color }}
              />
              <h3
                className="font-display font-semibold text-sm mb-2"
                style={{ color: item.color }}
              >
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="divider-glow mt-24" />
    </section>
  );
}
