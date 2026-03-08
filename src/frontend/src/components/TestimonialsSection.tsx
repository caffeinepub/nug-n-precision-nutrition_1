import { useGetAllTestimonials } from "@/hooks/useQueries";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

const fallbackTestimonials = [
  {
    name: "Sarah M.",
    quote:
      "I lost 18 lbs in 3 months following my NUGΞN plan. It finally made sense why certain foods never worked for me.",
  },
  {
    name: "James K.",
    quote:
      "My energy levels transformed after switching to my DNA-based diet. This isn't guesswork — it's science.",
  },
  {
    name: "Dr. Priya R.",
    quote:
      "As a physician, I recommend NUGΞN to my patients. The research behind it is solid and the results speak for themselves.",
  },
];

const ocids = [
  "testimonial.item.1",
  "testimonial.item.2",
  "testimonial.item.3",
];

export default function TestimonialsSection() {
  const { data: backendTestimonials } = useGetAllTestimonials();

  const testimonials =
    backendTestimonials && backendTestimonials.length > 0
      ? backendTestimonials.slice(0, 3)
      : fallbackTestimonials;

  const avatarColors = [
    {
      bg: "oklch(0.72 0.18 168 / 0.15)",
      text: "oklch(0.78 0.18 168)",
      border: "oklch(0.72 0.18 168 / 0.3)",
    },
    {
      bg: "oklch(0.68 0.2 190 / 0.15)",
      text: "oklch(0.72 0.2 190)",
      border: "oklch(0.68 0.2 190 / 0.3)",
    },
    {
      bg: "oklch(0.65 0.18 210 / 0.15)",
      text: "oklch(0.7 0.18 210)",
      border: "oklch(0.65 0.18 210 / 0.3)",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, oklch(0.45 0.14 190 / 0.07) 0%, transparent 65%)",
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
            Real Results
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">
            What Our <span className="gradient-text">Early Users</span> Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From everyday people to medical professionals — the results speak
            for themselves.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const colors = avatarColors[index % avatarColors.length];
            return (
              <motion.div
                key={testimonial.name}
                data-ocid={ocids[index]}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div
                  className="relative rounded-2xl p-7 h-full flex flex-col overflow-hidden group"
                  style={{
                    background: "oklch(0.14 0.02 230 / 0.7)",
                    border: "1px solid oklch(0.28 0.04 240 / 0.5)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `radial-gradient(ellipse 60% 50% at 30% 30%, ${colors.bg} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Quote icon */}
                  <div className="relative z-10 mb-5">
                    <Quote
                      size={28}
                      style={{ color: colors.text }}
                      className="opacity-60"
                    />
                  </div>

                  {/* Quote text */}
                  <p className="text-foreground text-base leading-relaxed flex-1 relative z-10 mb-6">
                    "{testimonial.quote}"
                  </p>

                  {/* Verified badge */}
                  <div className="flex items-center gap-2 relative z-10">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: colors.text }}
                    />
                    <span className="text-xs text-muted-foreground">
                      Verified NUGΞN User
                    </span>
                  </div>
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
