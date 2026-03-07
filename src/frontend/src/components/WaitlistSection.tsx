import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddWaitlistEntry, useGetWaitlistCount } from "@/hooks/useQueries";
import { useQueryClient } from "@tanstack/react-query";
import { CheckCircle2, Loader2, Users } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function WaitlistSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const queryClient = useQueryClient();
  const { data: waitlistCount } = useGetWaitlistCount();
  const { mutate: addToWaitlist, isPending } = useAddWaitlistEntry();

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) newErrors.name = "Please enter your name.";
    if (!email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    addToWaitlist(
      { name: name.trim(), email: email.trim() },
      {
        onSuccess: () => {
          setSubmitted(true);
          queryClient.invalidateQueries({ queryKey: ["waitlistCount"] });
          toast.success("You're on the list! We'll be in touch soon.");
        },
        onError: () => {
          toast.error("Something went wrong. Please try again.");
        },
      },
    );
  };

  const displayCount =
    waitlistCount !== undefined ? Number(waitlistCount) : null;

  return (
    <section id="waitlist" className="relative py-24 lg:py-32">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.45 0.15 168 / 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-4"
            style={{
              background: "oklch(0.72 0.18 168 / 0.12)",
              border: "1px solid oklch(0.72 0.18 168 / 0.3)",
              color: "oklch(0.78 0.18 168)",
            }}
          >
            Early Access
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">
            Be Among the First to{" "}
            <span className="gradient-text">Know Your Blueprint</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of early adopters getting exclusive access to NUGΞN.
            Be first when we launch.
          </p>

          {/* Waitlist count */}
          {displayCount !== null && displayCount > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full"
              style={{
                background: "oklch(0.72 0.18 168 / 0.1)",
                border: "1px solid oklch(0.72 0.18 168 / 0.25)",
              }}
            >
              <Users size={14} style={{ color: "oklch(0.78 0.18 168)" }} />
              <span
                className="text-sm font-medium"
                style={{ color: "oklch(0.78 0.18 168)" }}
              >
                {displayCount.toLocaleString()} people already on the waitlist
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div
            className="rounded-2xl p-8 sm:p-10 relative overflow-hidden"
            style={{
              background: "oklch(0.14 0.02 230 / 0.85)",
              border: "1px solid oklch(0.35 0.08 200 / 0.4)",
              backdropFilter: "blur(24px)",
              boxShadow:
                "0 0 60px oklch(0.55 0.15 168 / 0.12), 0 8px 40px oklch(0.08 0.01 230 / 0.6)",
            }}
          >
            {/* Inner glow */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 40% at 50% 0%, oklch(0.55 0.15 168 / 0.08) 0%, transparent 70%)",
              }}
            />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  data-ocid="waitlist.success_state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-6 relative z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
                    style={{
                      background: "oklch(0.72 0.18 168 / 0.15)",
                      border: "1px solid oklch(0.72 0.18 168 / 0.4)",
                    }}
                  >
                    <CheckCircle2
                      size={32}
                      style={{ color: "oklch(0.78 0.18 168)" }}
                    />
                  </motion.div>
                  <h3 className="font-display font-bold text-2xl mb-2 text-foreground">
                    You're on the List!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Thank you,{" "}
                    <strong className="text-foreground">{name}</strong>. We'll
                    notify you at{" "}
                    <strong className="text-foreground">{email}</strong> when
                    NUGΞN launches.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 relative z-10"
                  noValidate
                >
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="waitlist-name"
                      className="text-sm font-medium text-foreground/80"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="waitlist-name"
                      type="text"
                      placeholder="Jane Smith"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name)
                          setErrors((p) => ({ ...p, name: undefined }));
                      }}
                      data-ocid="waitlist.name.input"
                      className="rounded-xl h-12 text-sm transition-all duration-200"
                      style={{
                        background: "oklch(0.11 0.015 230 / 0.8)",
                        border: errors.name
                          ? "1px solid oklch(0.6 0.22 28)"
                          : "1px solid oklch(0.28 0.04 240 / 0.7)",
                        color: "oklch(0.96 0.01 220)",
                      }}
                      autoComplete="name"
                      disabled={isPending}
                    />
                    {errors.name && (
                      <p
                        className="text-xs"
                        style={{ color: "oklch(0.7 0.2 28)" }}
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="waitlist-email"
                      className="text-sm font-medium text-foreground/80"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="waitlist-email"
                      type="email"
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email)
                          setErrors((p) => ({ ...p, email: undefined }));
                      }}
                      data-ocid="waitlist.email.input"
                      className="rounded-xl h-12 text-sm transition-all duration-200"
                      style={{
                        background: "oklch(0.11 0.015 230 / 0.8)",
                        border: errors.email
                          ? "1px solid oklch(0.6 0.22 28)"
                          : "1px solid oklch(0.28 0.04 240 / 0.7)",
                        color: "oklch(0.96 0.01 220)",
                      }}
                      autoComplete="email"
                      disabled={isPending}
                    />
                    {errors.email && (
                      <p
                        className="text-xs"
                        style={{ color: "oklch(0.7 0.2 28)" }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full h-12 font-semibold rounded-xl text-base transition-all duration-200"
                    data-ocid="waitlist.submit_button"
                    disabled={isPending}
                    style={
                      isPending
                        ? {
                            background: "oklch(0.55 0.12 168 / 0.5)",
                            color: "oklch(0.7 0.1 168)",
                            border: "none",
                          }
                        : {
                            background:
                              "linear-gradient(135deg, oklch(0.72 0.18 168), oklch(0.65 0.2 190))",
                            color: "oklch(0.09 0.01 230)",
                            border: "none",
                            boxShadow:
                              "0 0 25px oklch(0.68 0.18 168 / 0.3), 0 4px 16px oklch(0.1 0.01 230 / 0.4)",
                          }
                    }
                  >
                    {isPending ? (
                      <span
                        data-ocid="waitlist.loading_state"
                        className="flex items-center gap-2"
                      >
                        <Loader2 size={18} className="animate-spin" />
                        Joining...
                      </span>
                    ) : (
                      "Join the Waitlist"
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    No spam. We'll only contact you about your NUGΞN access.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
