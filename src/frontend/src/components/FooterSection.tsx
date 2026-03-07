const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Science", href: "#science" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="relative border-t"
      style={{ borderColor: "oklch(0.22 0.03 235 / 0.5)" }}
    >
      {/* Top divider glow */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.72 0.18 168 / 0.4), oklch(0.68 0.2 190 / 0.4), transparent)",
        }}
      />

      <div className="relative" style={{ background: "oklch(0.1 0.015 230)" }}>
        <div className="container mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="mb-3">
                <span className="font-display font-bold text-3xl tracking-tight gradient-text">
                  NUGΞN
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Precision nutrition powered by your DNA. Scientifically
                validated, uniquely yours.
              </p>

              {/* Decorative dots */}
              <div className="flex gap-1.5 mt-5">
                {(
                  [
                    { color: "oklch(0.72 0.18 168)", delay: "0s" },
                    { color: "oklch(0.68 0.2 190)", delay: "0.5s" },
                    { color: "oklch(0.65 0.18 210)", delay: "1s" },
                  ] as const
                ).map(({ color, delay }) => (
                  <div
                    key={color}
                    className="w-2 h-2 rounded-full animate-pulse-glow"
                    style={{ background: color, animationDelay: delay }}
                  />
                ))}
              </div>
            </div>

            {/* Nav links */}
            <div>
              <h4
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "oklch(0.72 0.18 168)" }}
              >
                Platform
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal / Contact */}
            <div>
              <h4
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "oklch(0.68 0.2 190)" }}
              >
                Legal
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Data Security",
                  "Contact Us",
                ].map((item) => (
                  <li key={item}>
                    <span className="text-sm text-muted-foreground cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground"
            style={{ borderTop: "1px solid oklch(0.22 0.03 235 / 0.4)" }}
          >
            <span>© {currentYear} NUGΞN. All rights reserved.</span>
            <span>
              Built with{" "}
              <span style={{ color: "oklch(0.72 0.18 168)" }} aria-hidden>
                ♥
              </span>{" "}
              using{" "}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline underline-offset-2"
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
