import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-dna.dim_1400x800.jpg"
          alt="DNA helix visualization"
          className="w-full h-full object-cover object-center opacity-30"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.1 0.01 220 / 0.5) 0%, oklch(0.1 0.01 220 / 0.75) 50%, oklch(0.1 0.01 220) 100%)",
          }}
        />
      </div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-hero z-0 opacity-70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase"
            style={{
              background: "oklch(0.72 0.18 168 / 0.12)",
              border: "1px solid oklch(0.72 0.18 168 / 0.3)",
              color: "oklch(0.78 0.18 168)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse-glow"
              style={{ background: "oklch(0.72 0.18 168)" }}
            />
            Precision Nutrition · Powered by Your DNA
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6"
        >
          <span className="block text-foreground">Nutrition as</span>
          <span className="block gradient-text text-glow-emerald mt-1">
            Unique as
          </span>
          <span className="block text-foreground mt-1">Your DNA</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          NUGΞN uses your genetic profile to craft personalized diet and
          lifestyle plans — scientifically validated, precision-optimized.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            data-ocid="hero.join_waitlist.button"
            className="font-semibold text-base px-8 py-6 rounded-xl group transition-all duration-200"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.18 168), oklch(0.65 0.2 190))",
              color: "oklch(0.09 0.01 230)",
              border: "none",
              boxShadow:
                "0 0 30px oklch(0.72 0.18 168 / 0.35), 0 4px 20px oklch(0.1 0.01 230 / 0.5)",
            }}
            onClick={() =>
              document
                .getElementById("waitlist")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Join the Waitlist
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Button>

          <Button
            variant="outline"
            size="lg"
            data-ocid="hero.learn_more.button"
            className="font-semibold text-base px-8 py-6 rounded-xl transition-all duration-200"
            style={{
              background: "oklch(0.14 0.02 230 / 0.5)",
              border: "1px solid oklch(0.35 0.06 210 / 0.5)",
              color: "oklch(0.88 0.05 200)",
            }}
            onClick={() => scrollToSection("how-it-works")}
          >
            Learn How It Works
            <ChevronDown size={18} className="ml-2 opacity-70" />
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection("how-it-works")}
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
