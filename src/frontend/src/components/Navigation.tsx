import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  {
    label: "How It Works",
    href: "#how-it-works",
    ocid: "nav.how_it_works.link",
  },
  { label: "Features", href: "#features", ocid: "nav.features.link" },
  { label: "Science", href: "#science", ocid: "nav.science.link" },
  { label: "Pricing", href: "#pricing", ocid: "nav.pricing.link" },
  { label: "FAQ", href: "#faq", ocid: "nav.faq.link" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          data-ocid="nav.logo.link"
          className="flex items-center gap-2 group"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="font-display font-bold text-2xl tracking-tight gradient-text">
            NUGΞN
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={link.ocid}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            data-ocid="nav.join_waitlist.button"
            className="hidden md:flex font-semibold text-sm px-5"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.18 168), oklch(0.65 0.2 190))",
              color: "oklch(0.09 0.01 230)",
              border: "none",
              boxShadow: "0 0 20px oklch(0.72 0.18 168 / 0.3)",
            }}
            onClick={scrollToWaitlist}
          >
            Join Waitlist
          </Button>

          <button
            type="button"
            className="md:hidden text-foreground p-2 rounded-md hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid={link.ocid}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="mt-2 font-semibold"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.18 168), oklch(0.65 0.2 190))",
                  color: "oklch(0.09 0.01 230)",
                  border: "none",
                }}
                onClick={scrollToWaitlist}
              >
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
