import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  target: string;
  label: string;
  color: string;
}

function StatCounter({ target, label, color }: StatCounterProps) {
  const [displayed, setDisplayed] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          // Extract numeric and suffix parts
          const match = target.match(/^([\d,]+)(.*)$/);
          if (!match) {
            setDisplayed(target);
            return;
          }
          const numStr = match[1].replace(/,/g, "");
          const suffix = match[2];
          const num = Number.parseInt(numStr, 10);
          const duration = 1500;
          const start = Date.now();

          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            const current = Math.round(eased * num);
            setDisplayed(current.toLocaleString() + suffix);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-2"
        style={{ color }}
      >
        {displayed}
      </div>
      <div className="text-muted-foreground text-sm tracking-wide">{label}</div>
    </div>
  );
}

const stats = [
  {
    target: "500,000+",
    label: "Genetic Markers Analyzed",
    color: "oklch(0.78 0.2 168)",
  },
  {
    target: "97%",
    label: "Plan Adherence Rate",
    color: "oklch(0.72 0.2 190)",
  },
  {
    target: "50+",
    label: "Published Studies",
    color: "oklch(0.7 0.18 210)",
  },
  {
    target: "12",
    label: "Partner Labs Worldwide",
    color: "oklch(0.75 0.18 168)",
  },
];

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

        {/* Stats grid */}
        <div
          className="relative rounded-3xl p-12 lg:p-16 mb-16 overflow-hidden"
          style={{
            background: "oklch(0.13 0.02 230 / 0.8)",
            border: "1px solid oklch(0.28 0.04 240 / 0.5)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Inner glow */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 30%, oklch(0.55 0.15 168 / 0.08) 0%, transparent 70%)",
            }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <StatCounter
                  target={stat.target}
                  label={stat.label}
                  color={stat.color}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {[
            {
              title: "ISO/IEC 17025 Certified",
              desc: "All partner labs hold international accreditation for technical competence in testing.",
              color: "oklch(0.72 0.18 168)",
            },
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
