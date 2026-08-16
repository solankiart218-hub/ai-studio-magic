import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Camera, Menu, X } from "lucide-react";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Pre Wedding", to: "/pre-wedding" },
  { label: "Wedding", to: "/wedding" },
  { label: "Portrait", to: "/portrait" },
  { label: "Events", to: "/events" },
  { label: "Commercial", to: "/commercial" },
  { label: "Fashion", to: "/fashion" },
  { label: "Baby Shoot", to: "/baby-shoot" },
  { label: "About Us", to: "/about" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
        <div
          className={`mx-auto flex max-w-7xl items-center gap-3 rounded-full px-3 py-2 transition-all duration-500 ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <Link
            to="/"
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-background/60 text-gold shadow-[var(--shadow-gold)] md:size-12"
            aria-label="Capture Lens Photography home"
          >
            <Camera className="size-5" />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-0.5 xl:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{
                  className: "border-gold/40 bg-gold/10 text-gold",
                }}
                inactiveProps={{ className: "border-transparent text-foreground/80" }}
                className="rounded-full border px-3 py-2 text-xs font-medium tracking-wide transition-all duration-300 hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Link
              to="/about"
              hash="enquiry"
              className="shine hidden rounded-full px-5 py-2.5 text-xs font-semibold text-primary-foreground sm:block"
              style={{ background: "var(--gradient-gold)" }}
            >
              Book Now
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="flex size-10 items-center justify-center rounded-full border border-gold/30 text-gold xl:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 xl:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`glass-strong absolute right-0 top-0 h-full w-72 max-w-[85vw] overflow-y-auto p-6 transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setOpen(false)}
            className="mb-8 ml-auto flex size-9 items-center justify-center rounded-full border border-gold/30 text-gold"
            aria-label="Close menu"
          >
            <X className="size-4" />
          </button>
          <nav className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-gold/10 text-gold" }}
                className="rounded-lg px-3 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-gold/10 hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/about"
              hash="enquiry"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full px-5 py-2.5 text-center text-xs font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-gold)" }}
            >
              Book Now
            </Link>
          </nav>
        </aside>
      </div>
    </>
  );
}
