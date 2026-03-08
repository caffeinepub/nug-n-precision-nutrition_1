import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "nugxn_gdpr_consent";

interface ConsentState {
  analytics: boolean;
  marketing: boolean;
  accepted: boolean;
}

function loadConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

function saveConsent(consent: ConsentState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // storage unavailable
  }
}

export default function GDPRBanner() {
  const [visible, setVisible] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    const stored = loadConsent();
    if (!stored) {
      // Slight delay so the page loads before the banner appears
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const acceptAll = () => {
    saveConsent({ analytics: true, marketing: true, accepted: true });
    setVisible(false);
  };

  const savePreferences = () => {
    saveConsent({ analytics, marketing, accepted: true });
    setPrefsOpen(false);
    setVisible(false);
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            data-ocid="gdpr.banner"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
          >
            <div
              className="max-w-4xl mx-auto rounded-2xl p-5 sm:p-6"
              style={{
                background: "oklch(0.14 0.02 232 / 0.92)",
                border: "1px solid oklch(0.28 0.04 240 / 0.6)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                boxShadow:
                  "0 -4px 40px oklch(0.1 0.01 230 / 0.6), 0 0 0 1px oklch(0.72 0.18 168 / 0.08)",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px rounded-full opacity-50"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(0.72 0.18 168 / 0.6), oklch(0.68 0.2 190 / 0.6), transparent)",
                }}
              />

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="text-xs font-semibold tracking-wider uppercase"
                      style={{ color: "oklch(0.72 0.18 168)" }}
                    >
                      🍪 Cookie & Privacy Notice
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We use cookies to personalise your experience and improve
                    our platform. Read our{" "}
                    <a
                      href="#/privacy-policy"
                      className="underline underline-offset-2 hover:text-foreground transition-colors"
                      style={{ color: "oklch(0.72 0.18 168)" }}
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="#/data-policy"
                      className="underline underline-offset-2 hover:text-foreground transition-colors"
                      style={{ color: "oklch(0.68 0.2 190)" }}
                    >
                      Data Policy
                    </a>
                    .
                  </p>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    data-ocid="gdpr.manage_button"
                    className="text-sm font-medium"
                    style={{
                      background: "oklch(0.16 0.025 235 / 0.5)",
                      border: "1px solid oklch(0.35 0.06 210 / 0.4)",
                      color: "oklch(0.78 0.05 220)",
                    }}
                    onClick={() => setPrefsOpen(true)}
                  >
                    Manage Preferences
                  </Button>
                  <Button
                    size="sm"
                    data-ocid="gdpr.accept_button"
                    className="text-sm font-semibold"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.72 0.18 168), oklch(0.65 0.2 190))",
                      color: "oklch(0.09 0.01 230)",
                      border: "none",
                      boxShadow: "0 0 15px oklch(0.72 0.18 168 / 0.3)",
                    }}
                    onClick={acceptAll}
                  >
                    Accept All
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences Dialog */}
      <Dialog open={prefsOpen} onOpenChange={setPrefsOpen}>
        <DialogContent
          data-ocid="gdpr.dialog"
          className="max-w-md"
          style={{
            background: "oklch(0.14 0.02 232)",
            border: "1px solid oklch(0.28 0.04 240 / 0.6)",
          }}
        >
          <DialogHeader>
            <DialogTitle
              className="font-display font-bold text-xl"
              style={{ color: "oklch(0.88 0.05 200)" }}
            >
              Cookie Preferences
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <p className="text-sm text-muted-foreground">
              Choose which cookies you want to allow. Essential cookies cannot
              be disabled as they are required for the platform to function.
            </p>

            {/* Essential — always on */}
            <div
              className="flex items-center justify-between rounded-xl px-4 py-3"
              style={{
                background: "oklch(0.16 0.025 235 / 0.5)",
                border: "1px solid oklch(0.28 0.04 240 / 0.4)",
              }}
            >
              <div>
                <div className="text-sm font-semibold text-foreground mb-0.5">
                  Essential
                </div>
                <div className="text-xs text-muted-foreground">
                  Required for security and basic functionality
                </div>
              </div>
              <Switch
                checked
                disabled
                className="opacity-50"
                aria-label="Essential cookies (always on)"
              />
            </div>

            {/* Analytics */}
            <div
              className="flex items-center justify-between rounded-xl px-4 py-3"
              style={{
                background: "oklch(0.16 0.025 235 / 0.5)",
                border: "1px solid oklch(0.28 0.04 240 / 0.4)",
              }}
            >
              <div>
                <Label
                  htmlFor="analytics-switch"
                  className="text-sm font-semibold text-foreground mb-0.5 block cursor-pointer"
                >
                  Analytics
                </Label>
                <div className="text-xs text-muted-foreground">
                  Helps us understand usage and improve the platform
                </div>
              </div>
              <Switch
                id="analytics-switch"
                checked={analytics}
                onCheckedChange={setAnalytics}
                aria-label="Analytics cookies"
              />
            </div>

            {/* Marketing */}
            <div
              className="flex items-center justify-between rounded-xl px-4 py-3"
              style={{
                background: "oklch(0.16 0.025 235 / 0.5)",
                border: "1px solid oklch(0.28 0.04 240 / 0.4)",
              }}
            >
              <div>
                <Label
                  htmlFor="marketing-switch"
                  className="text-sm font-semibold text-foreground mb-0.5 block cursor-pointer"
                >
                  Marketing
                </Label>
                <div className="text-xs text-muted-foreground">
                  Relevant communications and campaign measurement
                </div>
              </div>
              <Switch
                id="marketing-switch"
                checked={marketing}
                onCheckedChange={setMarketing}
                aria-label="Marketing cookies"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              className="flex-1"
              data-ocid="gdpr.close_button"
              style={{
                background: "oklch(0.16 0.025 235 / 0.5)",
                border: "1px solid oklch(0.35 0.06 210 / 0.4)",
                color: "oklch(0.78 0.05 220)",
              }}
              onClick={() => setPrefsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 font-semibold"
              data-ocid="gdpr.save_button"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.72 0.18 168), oklch(0.65 0.2 190))",
                color: "oklch(0.09 0.01 230)",
                border: "none",
              }}
              onClick={savePreferences}
            >
              Save Preferences
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
