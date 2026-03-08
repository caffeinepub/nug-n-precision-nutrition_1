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
          {/* 2-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
            {/* Brand column */}
            <div>
              <div className="mb-3">
                <span
                  className="font-display font-bold text-2xl tracking-tight"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.72 0.18 168), oklch(0.65 0.2 190))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  NUGΞN
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Precision nutrition powered by your DNA. Scientifically
                validated, uniquely yours.
              </p>
              {/* Decorative dots */}
              <div className="flex gap-1.5">
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

            {/* Legal column */}
            <div>
              <h4
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "oklch(0.72 0.18 168)" }}
              >
                Legal
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#/privacy-policy"
                    data-ocid="footer.privacy_link"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#/data-policy"
                    data-ocid="footer.data_policy_link"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Data Policy
                  </a>
                </li>
                <li>
                  <span className="text-xs text-muted-foreground opacity-60">
                    GDPR Compliant
                  </span>
                </li>
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
