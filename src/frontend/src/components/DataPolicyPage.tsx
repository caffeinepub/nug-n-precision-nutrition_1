import { ArrowLeft, Database } from "lucide-react";
import { motion } from "motion/react";

const CONTACT = {
  company: "NUGΞN",
  contact: "Dt. Radhika Rastogi",
  phone: "+91-9205255765",
};

export default function DataPolicyPage() {
  return (
    <div
      className="min-h-screen pt-24 pb-16 relative"
      style={{ background: "oklch(0.1 0.015 230)" }}
    >
      {/* Mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 80% 15%, oklch(0.45 0.16 200 / 0.07) 0%, transparent 60%), radial-gradient(ellipse 55% 45% at 20% 75%, oklch(0.48 0.14 168 / 0.06) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-3xl">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="#/"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors hover:text-foreground"
            style={{ color: "oklch(0.58 0.04 220)" }}
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "oklch(0.68 0.2 190 / 0.1)",
                border: "1px solid oklch(0.68 0.2 190 / 0.3)",
              }}
            >
              <Database size={20} style={{ color: "oklch(0.68 0.2 190)" }} />
            </div>
            <div
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "oklch(0.68 0.2 190)" }}
            >
              Genetic & Health Data · GDPR Compliant
            </div>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-4 gradient-text">
            Data Policy
          </h1>
          <p className="text-muted-foreground text-sm">
            Last revised: March 2026 · Effective immediately
          </p>
          <div className="mt-4 divider-glow" />
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-muted-foreground leading-relaxed mb-10"
        >
          This Data Policy describes in detail how NUGΞN collects, stores,
          processes, and protects genetic and health data. Because genetic data
          is a Special Category of personal data under GDPR Article 9, we hold
          it to the highest standard of care. This policy should be read
          alongside our Privacy Policy.
        </motion.p>

        {/* Sections */}
        <div className="space-y-6">
          {/* 1. Types of Data */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "oklch(0.13 0.02 232 / 0.7)",
              border: "1px solid oklch(0.28 0.04 240 / 0.5)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h2
              className="font-display font-bold text-xl mb-4"
              style={{ color: "oklch(0.88 0.05 200)" }}
            >
              1. Types of Data We Handle
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              We handle the following categories of sensitive health and genetic
              data:
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  icon: "🧬",
                  title: "Genetic Profiles",
                  desc: "DNA data including SNPs (single nucleotide polymorphisms) relevant to nutrition, metabolism, vitamin absorption, and disease risk.",
                },
                {
                  icon: "📊",
                  title: "Health Metrics",
                  desc: "Self-reported data such as BMI, blood markers, existing conditions, medications, and family health history.",
                },
                {
                  icon: "🥗",
                  title: "Dietary Preferences",
                  desc: "Food preferences, dietary restrictions, allergies, intolerances, and eating patterns used to personalise recommendations.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-4"
                  style={{
                    background: "oklch(0.14 0.02 230 / 0.5)",
                    border: "1px solid oklch(0.28 0.04 240 / 0.4)",
                  }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-sm text-foreground mb-1.5">
                    {item.title}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 2. Processing & Storage */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "oklch(0.13 0.02 232 / 0.7)",
              border: "1px solid oklch(0.28 0.04 240 / 0.5)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h2
              className="font-display font-bold text-xl mb-4"
              style={{ color: "oklch(0.88 0.05 200)" }}
            >
              2. How Genetic Data Is Processed & Stored
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Genetic data received from accredited laboratory partners is
                processed through our proprietary nutrigenomics algorithm to
                generate your personalised nutrition plan. The processing
                pipeline is:
              </p>
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                {[
                  "Raw DNA File",
                  "→",
                  "Encrypted Upload",
                  "→",
                  "SNP Extraction",
                  "→",
                  "Algorithmic Analysis",
                  "→",
                  "Personalised Plan",
                ].map((step) => (
                  <div
                    key={step}
                    className={
                      step === "→"
                        ? "text-muted-foreground hidden sm:block"
                        : "flex-1 text-center rounded-lg px-3 py-2 text-xs font-medium text-foreground"
                    }
                    style={
                      step !== "→"
                        ? {
                            background: "oklch(0.16 0.025 235 / 0.7)",
                            border: "1px solid oklch(0.28 0.04 240 / 0.5)",
                          }
                        : undefined
                    }
                  >
                    {step}
                  </div>
                ))}
              </div>
              <ul className="space-y-2">
                {[
                  "Raw genetic files are stored in isolated, encrypted vaults — separate from your identity data.",
                  "Processed genetic insights (SNP interpretations) are stored independently from raw file data.",
                  "Our systems never cross-reference your genetic data with third-party databases without explicit consent.",
                  "Genetic data is never used for purposes other than those you consented to at collection.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5"
                      style={{ background: "oklch(0.68 0.2 190)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* 3. Security & Encryption */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "oklch(0.13 0.02 232 / 0.7)",
              border: "1px solid oklch(0.28 0.04 240 / 0.5)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h2
              className="font-display font-bold text-xl mb-4"
              style={{ color: "oklch(0.88 0.05 200)" }}
            >
              3. Security & Encryption Measures
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: "🔐",
                  title: "AES-256 Encryption at Rest",
                  desc: "All stored data, including genetic files and health metrics, is encrypted using AES-256.",
                },
                {
                  icon: "🔒",
                  title: "TLS 1.3 in Transit",
                  desc: "All data transmitted between your device and our servers is protected by TLS 1.3 encryption.",
                },
                {
                  icon: "🏛️",
                  title: "Data Isolation",
                  desc: "Genetic vaults are network-isolated from other application infrastructure and cannot be accessed via normal application APIs.",
                },
                {
                  icon: "👤",
                  title: "Role-Based Access",
                  desc: "Strict role-based access controls ensure only authorised personnel can access genetic data, with full audit logging.",
                },
                {
                  icon: "🔍",
                  title: "Regular Audits",
                  desc: "Security audits and penetration tests are conducted at least annually by independent third parties.",
                },
                {
                  icon: "📋",
                  title: "Incident Response",
                  desc: "In the event of a data breach, we will notify affected users and relevant supervisory authorities within 72 hours as required by GDPR.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg p-4"
                  style={{
                    background: "oklch(0.14 0.02 230 / 0.5)",
                    border: "1px solid oklch(0.28 0.04 240 / 0.4)",
                  }}
                >
                  <div className="text-xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-sm text-foreground mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 4. No Sale of Data */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "oklch(0.13 0.02 232 / 0.7)",
              border: "1px solid oklch(0.28 0.04 240 / 0.5)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h2
              className="font-display font-bold text-xl mb-4"
              style={{ color: "oklch(0.88 0.05 200)" }}
            >
              4. No Sale of Personal Data
            </h2>
            <div
              className="rounded-xl p-5 flex gap-4 items-start"
              style={{
                background: "oklch(0.72 0.18 168 / 0.06)",
                border: "1px solid oklch(0.72 0.18 168 / 0.25)",
              }}
            >
              <span className="text-2xl flex-shrink-0">🚫</span>
              <div>
                <p
                  className="font-bold text-base mb-1"
                  style={{ color: "oklch(0.78 0.18 168)" }}
                >
                  We will never sell your genetic or health data.
                </p>
                <p className="text-sm text-muted-foreground">
                  Your DNA and health information are yours. NUGΞN does not
                  sell, rent, or trade your personal data to data brokers,
                  pharmaceutical companies, insurers, employers, or any
                  commercial third party. This commitment is unconditional and
                  permanent.
                </p>
              </div>
            </div>
          </motion.section>

          {/* 5. Anonymisation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "oklch(0.13 0.02 232 / 0.7)",
              border: "1px solid oklch(0.28 0.04 240 / 0.5)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h2
              className="font-display font-bold text-xl mb-4"
              style={{ color: "oklch(0.88 0.05 200)" }}
            >
              5. Data Anonymisation Practices
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Where we use data for platform improvement and quality assurance,
              we apply rigorous anonymisation techniques:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Pseudonymisation: Identifiers are replaced with tokens so that genetic insights cannot be directly linked to an individual without a separate key.",
                "Aggregation: Usage analytics are always reported at the population level, never at the individual level.",
                "k-Anonymity: Any dataset used for internal analysis contains at least k=50 individuals to prevent re-identification.",
                "Data minimisation: We collect only what is strictly necessary for each processing purpose.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5"
                    style={{ background: "oklch(0.72 0.18 168)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* 6. Research Use */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "oklch(0.13 0.02 232 / 0.7)",
              border: "1px solid oklch(0.28 0.04 240 / 0.5)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h2
              className="font-display font-bold text-xl mb-4"
              style={{ color: "oklch(0.88 0.05 200)" }}
            >
              6. Research Use of Data
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              NUGΞN is committed to advancing nutrigenomics research for the
              public good. However:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div
                className="rounded-lg p-4"
                style={{
                  background: "oklch(0.72 0.18 168 / 0.06)",
                  border: "1px solid oklch(0.72 0.18 168 / 0.2)",
                }}
              >
                <div
                  className="font-semibold text-sm mb-2"
                  style={{ color: "oklch(0.78 0.18 168)" }}
                >
                  ✓ What We May Do
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {[
                    "Use fully anonymised, aggregated data to improve our algorithms.",
                    "Publish population-level findings in scientific literature.",
                    "Collaborate with academic researchers using anonymised datasets.",
                  ].map((item) => (
                    <li key={item} className="flex gap-1.5">
                      <span className="flex-shrink-0 text-xs">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-lg p-4"
                style={{
                  background: "oklch(0.6 0.22 28 / 0.06)",
                  border: "1px solid oklch(0.6 0.22 28 / 0.2)",
                }}
              >
                <div
                  className="font-semibold text-sm mb-2"
                  style={{ color: "oklch(0.7 0.2 30)" }}
                >
                  ✗ What We Will Never Do
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {[
                    "Use your identifiable genetic data for research without explicit separate consent.",
                    "Share identified data with pharmaceutical, insurance, or biotech companies.",
                    "Include your data in any external research without your knowledge.",
                  ].map((item) => (
                    <li key={item} className="flex gap-1.5">
                      <span className="flex-shrink-0 text-xs">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 7. User Controls */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "oklch(0.13 0.02 232 / 0.7)",
              border: "1px solid oklch(0.28 0.04 240 / 0.5)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h2
              className="font-display font-bold text-xl mb-4"
              style={{ color: "oklch(0.88 0.05 200)" }}
            >
              7. User Controls & Data Dashboard (Coming Soon)
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              We are building a comprehensive user data dashboard that will
              allow you to:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: "📥",
                  title: "Download Your Data",
                  desc: "Export all your data in a portable format (JSON, CSV) at any time.",
                },
                {
                  icon: "🗑️",
                  title: "Delete Your Data",
                  desc: "Permanently delete your account and all associated data, including raw genetic files.",
                },
                {
                  icon: "⚙️",
                  title: "Manage Consents",
                  desc: "Granularly control which data processing activities you consent to.",
                },
                {
                  icon: "📋",
                  title: "View Data Log",
                  desc: "See an audit trail of who has accessed your data and when.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg p-4 flex gap-3"
                  style={{
                    background: "oklch(0.14 0.02 230 / 0.5)",
                    border: "1px solid oklch(0.28 0.04 240 / 0.4)",
                  }}
                >
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-0.5">
                      {item.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Until the dashboard launches, all data requests can be made
              directly by contacting {CONTACT.contact} at {CONTACT.phone}.
            </p>
          </motion.section>

          {/* 8. GDPR Compliance */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "oklch(0.13 0.02 232 / 0.7)",
              border: "1px solid oklch(0.28 0.04 240 / 0.5)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h2
              className="font-display font-bold text-xl mb-4"
              style={{ color: "oklch(0.88 0.05 200)" }}
            >
              8. GDPR Compliance Statement
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                NUGΞN is designed to be GDPR-compliant from the ground up. Our
                core compliance commitments include:
              </p>
              <div
                className="overflow-x-auto rounded-xl"
                style={{ border: "1px solid oklch(0.28 0.04 240 / 0.4)" }}
              >
                <table className="w-full text-xs">
                  <thead>
                    <tr
                      style={{
                        background: "oklch(0.16 0.025 235 / 0.7)",
                        borderBottom: "1px solid oklch(0.28 0.04 240 / 0.4)",
                      }}
                    >
                      <th className="text-left px-4 py-3 font-semibold text-foreground">
                        Requirement
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">
                        Our Approach
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Lawful Basis",
                        "Explicit consent for genetic data; contract for service delivery",
                        "✓ Implemented",
                      ],
                      [
                        "Data Minimisation",
                        "Collect only what is necessary for stated purposes",
                        "✓ Implemented",
                      ],
                      [
                        "Purpose Limitation",
                        "Data used only for consented purposes",
                        "✓ Implemented",
                      ],
                      [
                        "Storage Limitation",
                        "Defined retention periods per data type",
                        "✓ Implemented",
                      ],
                      [
                        "Data Subject Rights",
                        "Rights exercisable via direct contact",
                        "✓ Implemented",
                      ],
                      [
                        "Data Protection by Design",
                        "Privacy-first architecture, encryption by default",
                        "✓ Implemented",
                      ],
                      [
                        "Breach Notification",
                        "72-hour notification protocol in place",
                        "✓ Implemented",
                      ],
                      [
                        "User Data Dashboard",
                        "Granular consent & portability controls",
                        "⏳ Coming Soon",
                      ],
                    ].map(([req, approach, status], idx) => (
                      <tr
                        key={req}
                        style={{
                          background:
                            idx % 2 === 0
                              ? "oklch(0.13 0.018 230 / 0.4)"
                              : "transparent",
                          borderBottom: "1px solid oklch(0.22 0.03 235 / 0.3)",
                        }}
                      >
                        <td className="px-4 py-3 text-foreground font-medium">
                          {req}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {approach}
                        </td>
                        <td
                          className="px-4 py-3 font-semibold"
                          style={{
                            color: status.startsWith("✓")
                              ? "oklch(0.72 0.18 168)"
                              : "oklch(0.68 0.2 190)",
                          }}
                        >
                          {status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.section>

          {/* 9. Contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: "oklch(0.13 0.02 232 / 0.7)",
              border: "1px solid oklch(0.28 0.04 240 / 0.5)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h2
              className="font-display font-bold text-xl mb-4"
              style={{ color: "oklch(0.88 0.05 200)" }}
            >
              9. Contact Us
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              For any queries relating to this Data Policy, to exercise your
              data rights, or to raise a concern about how we handle your
              genetic or health data, please contact:
            </p>
            <div
              className="rounded-xl p-5 space-y-2"
              style={{
                background: "oklch(0.68 0.2 190 / 0.06)",
                border: "1px solid oklch(0.68 0.2 190 / 0.25)",
              }}
            >
              <p
                className="font-bold text-base"
                style={{ color: "oklch(0.78 0.2 190)" }}
              >
                {CONTACT.company}
              </p>
              <p className="text-sm text-foreground font-medium">
                {CONTACT.contact}
              </p>
              <p className="text-sm">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "oklch(0.68 0.2 190)" }}
                >
                  📞 {CONTACT.phone}
                </a>
              </p>
            </div>
          </motion.section>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-muted-foreground">
            This Data Policy is part of our commitment to responsible,
            transparent data stewardship. It is reviewed and updated at least
            annually.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
