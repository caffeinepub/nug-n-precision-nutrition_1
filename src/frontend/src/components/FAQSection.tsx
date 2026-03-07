import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGetAllFAQs } from "@/hooks/useQueries";
import { motion } from "motion/react";

const fallbackFAQs = [
  {
    question: "How do I submit my DNA sample?",
    answer:
      "We mail you a saliva collection kit directly to your door. Simply follow the step-by-step instructions included in the kit and mail it back using the prepaid shipping label. The process takes under 5 minutes.",
  },
  {
    question: "How long does the analysis take?",
    answer:
      "Results are typically ready within 3–4 weeks of our lab receiving your sample. You'll receive an email notification as soon as your personalized plan is ready in your dashboard.",
  },
  {
    question: "Is my genetic data secure?",
    answer:
      "Your data is encrypted end-to-end and stored on decentralized infrastructure. We comply with HIPAA and GDPR regulations. We never sell, share, or monetize your genetic data. You retain full ownership and can request deletion at any time.",
  },
  {
    question: "Can NUGΞN help with specific health conditions?",
    answer:
      "Our plans are optimized for general wellness, metabolic health, and disease prevention — not medical treatment. While many users see improvement in diet-related conditions, NUGΞN is not a medical service. Please consult your physician for specific health conditions.",
  },
  {
    question: "What if I'm already on a diet?",
    answer:
      "NUGΞN complements any existing diet by adding genetic precision to your choices. Whether you're keto, vegan, or following a Mediterranean diet, we refine your approach based on how your unique genome responds to nutrients.",
  },
];

const ocids = [
  "faq.item.1",
  "faq.item.2",
  "faq.item.3",
  "faq.item.4",
  "faq.item.5",
];

export default function FAQSection() {
  const { data: backendFAQs } = useGetAllFAQs();

  const faqs =
    backendFAQs && backendFAQs.length > 0
      ? backendFAQs.slice(0, 5)
      : fallbackFAQs;

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, oklch(0.42 0.14 168 / 0.06) 0%, transparent 65%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-4"
            style={{
              background: "oklch(0.72 0.18 168 / 0.12)",
              border: "1px solid oklch(0.72 0.18 168 / 0.3)",
              color: "oklch(0.78 0.18 168)",
            }}
          >
            Questions Answered
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about NUGΞN's process, privacy, and
            science.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                data-ocid={ocids[index]}
                className="rounded-xl overflow-hidden border-0"
                style={{
                  background: "oklch(0.14 0.02 230 / 0.7)",
                  border: "1px solid oklch(0.28 0.04 240 / 0.5)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <AccordionTrigger
                  className="px-6 py-4 text-left font-medium text-foreground hover:text-primary hover:no-underline transition-colors data-[state=open]:text-primary"
                  style={
                    {
                      "--tw-text-opacity": "1",
                    } as React.CSSProperties
                  }
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>

      <div className="divider-glow mt-24" />
    </section>
  );
}
