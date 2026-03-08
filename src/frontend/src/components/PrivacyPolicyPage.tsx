import { ArrowLeft, Shield } from "lucide-react";
import { motion } from "motion/react";

const CONTACT = {
  company: "NUGΞN",
  contact: "Dt. Radhika Rastogi",
  phone: "+91-9205255765",
};

const sections = [
  {
    id: "data-controller",
    title: "1. Data Controller",
    content: (
      <div className="space-y-3">
        <p>The data controller responsible for your personal data is:</p>
        <div
          className="rounded-xl p-5 space-y-1.5"
          style={{
            background: "oklch(0.14 0.02 230 / 0.7)",
            border: "1px solid oklch(0.72 0.18 168 / 0.25)",
          }}
        >
          <p
            className="font-semibold"
            style={{ color: "oklch(0.78 0.18 168)" }}
          >
            {CONTACT.company}
          </p>
          <p className="text-muted-foreground">{CONTACT.contact}</p>
          <p className="text-muted-foreground">
            Phone:{" "}
            <a
              href={`tel:${CONTACT.phone}`}
              className="hover:text-foreground transition-colors underline underline-offset-2"
              style={{ color: "oklch(0.72 0.18 168)" }}
            >
              {CONTACT.phone}
            </a>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "data-collected",
    title: "2. What Data We Collect",
    content: (
      <div className="space-y-4">
        <p>
          We collect the following categories of personal data when you use our
          platform or interact with our services:
        </p>
        <ul className="space-y-2 list-none">
          {[
            {
              label: "Identity Data",
              detail: "Full name, date of birth, gender.",
            },
            {
              label: "Contact Data",
              detail: "Email address, phone number, postal address.",
            },
            {
              label: "Genetic Data",
              detail:
                "DNA profile, genetic markers relevant to nutrition and metabolism — collected only when you explicitly upload or link a genetic test.",
            },
            {
              label: "Health & Lifestyle Data",
              detail:
                "Dietary preferences, health goals, activity levels, self-reported medical conditions.",
            },
            {
              label: "Usage Data",
              detail:
                "Pages visited, features used, interaction timestamps, device type and browser.",
            },
            {
              label: "Communication Data",
              detail:
                "Records of any correspondence you send us, including support requests.",
            },
          ].map((item) => (
            <li
              key={item.label}
              className="flex gap-3 rounded-lg px-4 py-3"
              style={{
                background: "oklch(0.14 0.02 230 / 0.5)",
                border: "1px solid oklch(0.28 0.04 240 / 0.4)",
              }}
            >
              <span
                className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "oklch(0.72 0.18 168)", marginTop: "6px" }}
              />
              <span>
                <strong className="text-foreground">{item.label}: </strong>
                <span className="text-muted-foreground">{item.detail}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="text-sm" style={{ color: "oklch(0.68 0.2 190)" }}>
          <strong>Note:</strong> Genetic data is classified as a Special
          Category of personal data under GDPR Article 9. We process it only on
          the basis of your explicit consent.
        </p>
      </div>
    ),
  },
  {
    id: "purpose",
    title: "3. Purpose of Data Collection",
    content: (
      <div className="space-y-3">
        <p>We process your personal data for the following purposes:</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: "🧬",
              title: "Personalised Nutrition",
              desc: "To generate DNA-informed diet and lifestyle recommendations.",
            },
            {
              icon: "📧",
              title: "Communications",
              desc: "To send waitlist updates, newsletters (with consent), and service notifications.",
            },
            {
              icon: "🔬",
              title: "Research & Improvement",
              desc: "To improve our algorithms and services using anonymised, aggregated data.",
            },
            {
              icon: "⚖️",
              title: "Legal Compliance",
              desc: "To comply with applicable laws, regulations, and legal obligations.",
            },
            {
              icon: "🛡️",
              title: "Security",
              desc: "To detect fraud, abuse, and protect the integrity of our platform.",
            },
            {
              icon: "📊",
              title: "Analytics",
              desc: "To understand usage patterns and improve user experience (with consent).",
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
              <div className="font-semibold text-foreground text-sm mb-1">
                {item.title}
              </div>
              <div className="text-muted-foreground text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "legal-basis",
    title: "4. Legal Basis for Processing",
    content: (
      <div className="space-y-3">
        <p>
          We rely on the following legal bases under GDPR Article 6 (and Article
          9 for special categories):
        </p>
        <div className="space-y-3">
          {[
            {
              basis: "Consent (Art. 6(1)(a) & Art. 9(2)(a))",
              detail:
                "You have given clear, informed consent to process your data — especially your genetic data and for marketing communications. You may withdraw consent at any time.",
            },
            {
              basis: "Contract Performance (Art. 6(1)(b))",
              detail:
                "Processing is necessary to provide you with the personalised nutrition service you have requested.",
            },
            {
              basis: "Legitimate Interests (Art. 6(1)(f))",
              detail:
                "We process certain usage and analytics data based on our legitimate interest in improving our platform and preventing fraud, where this does not override your rights.",
            },
            {
              basis: "Legal Obligation (Art. 6(1)(c))",
              detail:
                "We may process data to comply with applicable laws, including tax and regulatory obligations.",
            },
          ].map((item) => (
            <div
              key={item.basis}
              className="rounded-lg p-4"
              style={{
                background: "oklch(0.14 0.02 230 / 0.5)",
                border: "1px solid oklch(0.28 0.04 240 / 0.4)",
              }}
            >
              <div
                className="font-semibold text-sm mb-1"
                style={{ color: "oklch(0.72 0.18 168)" }}
              >
                {item.basis}
              </div>
              <div className="text-muted-foreground text-sm">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "retention",
    title: "5. Data Retention",
    content: (
      <div className="space-y-3">
        <p>
          We retain your personal data only for as long as necessary for the
          purposes outlined in this policy, or as required by law.
        </p>
        <div
          className="overflow-x-auto rounded-xl"
          style={{ border: "1px solid oklch(0.28 0.04 240 / 0.4)" }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr
                style={{
                  background: "oklch(0.16 0.025 235 / 0.7)",
                  borderBottom: "1px solid oklch(0.28 0.04 240 / 0.4)",
                }}
              >
                <th className="text-left px-4 py-3 font-semibold text-foreground">
                  Data Type
                </th>
                <th className="text-left px-4 py-3 font-semibold text-foreground">
                  Retention Period
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Account / Identity Data",
                  "Duration of account + 3 years after closure",
                ],
                [
                  "Genetic Data",
                  "Until withdrawal of consent or account deletion",
                ],
                ["Health & Lifestyle Data", "Duration of account + 1 year"],
                ["Usage / Analytics Data", "13 months (rolling)"],
                ["Communication Records", "3 years from last contact"],
                [
                  "Legal / Compliance Records",
                  "As required by applicable law (typically 7 years)",
                ],
              ].map(([type, period], idx) => (
                <tr
                  key={type}
                  style={{
                    background:
                      idx % 2 === 0
                        ? "oklch(0.13 0.018 230 / 0.4)"
                        : "transparent",
                    borderBottom: "1px solid oklch(0.22 0.03 235 / 0.3)",
                  }}
                >
                  <td className="px-4 py-3 text-foreground">{type}</td>
                  <td className="px-4 py-3 text-muted-foreground">{period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "gdpr-rights",
    title: "6. Your GDPR Rights",
    content: (
      <div className="space-y-4">
        <p>
          Under the General Data Protection Regulation (GDPR), you have the
          following rights regarding your personal data:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              right: "Right of Access",
              article: "Art. 15",
              desc: "Request a copy of the personal data we hold about you.",
            },
            {
              right: "Right to Rectification",
              article: "Art. 16",
              desc: "Request correction of inaccurate or incomplete data.",
            },
            {
              right: "Right to Erasure",
              article: "Art. 17",
              desc: '"Right to be forgotten" — request deletion of your personal data in certain circumstances.',
            },
            {
              right: "Right to Restrict Processing",
              article: "Art. 18",
              desc: "Request that we limit how we use your data while a dispute is resolved.",
            },
            {
              right: "Right to Data Portability",
              article: "Art. 20",
              desc: "Receive your data in a structured, machine-readable format and transfer it elsewhere.",
            },
            {
              right: "Right to Object",
              article: "Art. 21",
              desc: "Object to processing based on legitimate interests or for direct marketing.",
            },
            {
              right: "Withdraw Consent",
              article: "Art. 7(3)",
              desc: "Withdraw consent at any time without affecting the lawfulness of prior processing.",
            },
            {
              right: "Right to Lodge a Complaint",
              article: "Art. 77",
              desc: "Lodge a complaint with your local supervisory authority if you believe your rights have been violated.",
            },
          ].map((item) => (
            <div
              key={item.right}
              className="rounded-lg p-4"
              style={{
                background: "oklch(0.14 0.02 230 / 0.5)",
                border: "1px solid oklch(0.28 0.04 240 / 0.4)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="font-semibold text-sm"
                  style={{ color: "oklch(0.78 0.18 168)" }}
                >
                  {item.right}
                </span>
                <span
                  className="text-xs px-1.5 py-0.5 rounded font-mono"
                  style={{
                    background: "oklch(0.72 0.18 168 / 0.12)",
                    color: "oklch(0.72 0.18 168)",
                  }}
                >
                  {item.article}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div
          className="rounded-xl p-4"
          style={{
            background: "oklch(0.68 0.2 190 / 0.07)",
            border: "1px solid oklch(0.68 0.2 190 / 0.25)",
          }}
        >
          <p className="text-sm" style={{ color: "oklch(0.78 0.15 195)" }}>
            <strong>Response Time:</strong> We will respond to all verified
            rights requests within <strong>30 days</strong> of receipt, as
            required by GDPR Article 12.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "exercise-rights",
    title: "7. How to Exercise Your Rights",
    content: (
      <div className="space-y-3">
        <p>
          To exercise any of your GDPR rights, or to raise a privacy concern,
          please contact our Data Controller directly:
        </p>
        <div
          className="rounded-xl p-5 space-y-3"
          style={{
            background: "oklch(0.72 0.18 168 / 0.06)",
            border: "1px solid oklch(0.72 0.18 168 / 0.3)",
          }}
        >
          <p
            className="font-bold text-lg"
            style={{ color: "oklch(0.78 0.18 168)" }}
          >
            {CONTACT.company}
          </p>
          <div className="space-y-1.5 text-sm">
            <p className="text-foreground font-medium">{CONTACT.contact}</p>
            <p className="text-muted-foreground">
              📞{" "}
              <a
                href={`tel:${CONTACT.phone}`}
                className="hover:text-foreground transition-colors underline underline-offset-2"
                style={{ color: "oklch(0.72 0.18 168)" }}
              >
                {CONTACT.phone}
              </a>
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Please include your full name, the nature of your request, and any
          relevant account details. We may request proof of identity to protect
          against unauthorised access.
        </p>
      </div>
    ),
  },
  {
    id: "third-party",
    title: "8. Third-Party Sharing",
    content: (
      <div className="space-y-3">
        <p>
          We do not sell your personal data to any third party. We may share
          your data in the following limited circumstances:
        </p>
        <ul className="space-y-2">
          {[
            "Accredited genetic testing laboratories (only with your explicit consent, for the purpose of genetic analysis).",
            "Cloud infrastructure providers for secure data hosting and processing, under strict data processing agreements.",
            "Analytics service providers, where data is anonymised or pseudonymised.",
            "Legal and regulatory authorities where required by law or court order.",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm text-muted-foreground">
              <span
                className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5"
                style={{ background: "oklch(0.72 0.18 168)" }}
              />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">
          All third-party data processors are bound by GDPR-compliant data
          processing agreements and are prohibited from using your data for any
          purpose beyond what is strictly necessary.
        </p>
      </div>
    ),
  },
  {
    id: "security",
    title: "9. Data Security",
    content: (
      <div className="space-y-3">
        <p>
          We implement appropriate technical and organisational measures to
          protect your personal data against unauthorised access, alteration,
          disclosure, or destruction:
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              icon: "🔐",
              title: "Encryption at Rest",
              desc: "AES-256 encryption for all stored data, including genetic profiles.",
            },
            {
              icon: "🔒",
              title: "Encryption in Transit",
              desc: "TLS 1.3 for all data transmitted between your device and our servers.",
            },
            {
              icon: "🧱",
              title: "Access Controls",
              desc: "Role-based access control; genetic data accessible only to authorised personnel.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg p-4 text-center"
              style={{
                background: "oklch(0.14 0.02 230 / 0.5)",
                border: "1px solid oklch(0.28 0.04 240 / 0.4)",
              }}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="font-semibold text-sm text-foreground mb-1">
                {item.title}
              </div>
              <div className="text-xs text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "cookies",
    title: "10. Cookies & Tracking",
    content: (
      <div className="space-y-3">
        <p>
          We use cookies and similar technologies to operate and improve our
          platform. The types of cookies we use:
        </p>
        <div className="space-y-2">
          {[
            {
              type: "Essential Cookies",
              required: true,
              desc: "Required for the platform to function (session management, security). Cannot be disabled.",
            },
            {
              type: "Analytics Cookies",
              required: false,
              desc: "Help us understand how users interact with our platform. Used only with your consent.",
            },
            {
              type: "Marketing Cookies",
              required: false,
              desc: "Used to deliver relevant content and measure the effectiveness of campaigns. Used only with your consent.",
            },
          ].map((cookie) => (
            <div
              key={cookie.type}
              className="flex gap-3 items-start rounded-lg px-4 py-3"
              style={{
                background: "oklch(0.14 0.02 230 / 0.5)",
                border: "1px solid oklch(0.28 0.04 240 / 0.4)",
              }}
            >
              <span
                className="text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0 mt-0.5"
                style={
                  cookie.required
                    ? {
                        background: "oklch(0.72 0.18 168 / 0.15)",
                        color: "oklch(0.72 0.18 168)",
                      }
                    : {
                        background: "oklch(0.68 0.2 190 / 0.12)",
                        color: "oklch(0.68 0.2 190)",
                      }
                }
              >
                {cookie.required ? "Required" : "Optional"}
              </span>
              <div>
                <div className="font-semibold text-sm text-foreground mb-0.5">
                  {cookie.type}
                </div>
                <div className="text-xs text-muted-foreground">
                  {cookie.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          You can manage your cookie preferences at any time via our consent
          banner or your browser settings.
        </p>
      </div>
    ),
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    content: (
      <div className="space-y-3">
        <p>
          We may update this Privacy Policy from time to time. When we make
          material changes, we will:
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {[
            'Update the "Last Revised" date at the top of this page.',
            "Notify you by email (if you are a registered user).",
            "Display a prominent notice on our website for a period of at least 30 days.",
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
        <p className="text-sm text-muted-foreground">
          Your continued use of NUGΞN after any changes to this Privacy Policy
          constitutes your acceptance of the updated policy.
        </p>
      </div>
    ),
  },
];

export default function PrivacyPolicyPage() {
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
              "radial-gradient(ellipse 70% 50% at 15% 20%, oklch(0.45 0.14 168 / 0.06) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 70%, oklch(0.5 0.16 200 / 0.05) 0%, transparent 55%)",
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
                background: "oklch(0.72 0.18 168 / 0.12)",
                border: "1px solid oklch(0.72 0.18 168 / 0.3)",
              }}
            >
              <Shield size={20} style={{ color: "oklch(0.72 0.18 168)" }} />
            </div>
            <div
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "oklch(0.72 0.18 168)" }}
            >
              Legal · GDPR Compliant
            </div>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-4 gradient-text">
            Privacy Policy
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
          NUGΞN ("we", "us", "our") is committed to protecting your privacy.
          This Privacy Policy explains what personal data we collect, why we
          collect it, how we use and protect it, and your rights as a data
          subject under the General Data Protection Regulation (GDPR) and
          applicable Indian data protection law.
        </motion.p>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * idx }}
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
                {section.title}
              </h2>
              <div className="text-sm leading-relaxed text-muted-foreground prose-invert">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 rounded-2xl p-6 text-center"
          style={{
            background: "oklch(0.14 0.02 230 / 0.6)",
            border: "1px solid oklch(0.72 0.18 168 / 0.2)",
          }}
        >
          <p className="text-muted-foreground text-sm mb-2">
            Questions about this Privacy Policy?
          </p>
          <p className="font-semibold text-foreground">
            {CONTACT.company} · {CONTACT.contact}
          </p>
          <a
            href={`tel:${CONTACT.phone}`}
            className="text-sm transition-colors hover:opacity-80"
            style={{ color: "oklch(0.72 0.18 168)" }}
          >
            {CONTACT.phone}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
