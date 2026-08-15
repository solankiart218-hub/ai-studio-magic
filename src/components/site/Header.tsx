import { useEffect, useState } from "react";
import { Camera, Menu, X, Instagram, Facebook, Youtube } from "lucide-react";

const links = [
  "Home",
  "Pre Wedding",
  "Wedding",
  "Portrait",
  "Events",
  "Commercial",
  "Fashion",
  "Baby Shoot",
  "Contact",
];

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
          <a
            href="#home"
            className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-background/60 text-gold shadow-[var(--shadow-gold)]"
            aria-label="Capture Lens Photography home"
          >
            <Camera className="size-5" />
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {links.map((l, i) => (
              <a
                key={l}
                href="#home"
                className={`rounded-full px-3 py-2 text-xs font-medium tracking-wide transition-all duration-300 hover:text-gold ${
                  i === 0
                    ? "border border-gold/40 bg-gold/10 text-gold"
                    : "text-foreground/80"
                }`}
              >
                {l}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <a
              href="#contact"
              className="shine hidden rounded-full px-5 py-2.5 text-xs font-semibold text-primary-foreground sm:block"
              style={{ background: "var(--gradient-gold)" }}
            >
              Book Now
            </a>
            <button
              onClick={() => setOpen(true)}
              className="flex size-10 items-center justify-center rounded-full border border-gold/30 text-gold lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Floating social rail */}
      <div className="fixed left-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {[Instagram, Facebook, Youtube].map((Icon, i) => (
          <a
            key={i}
            href="#home"
            aria-label="Social profile"
            className="glass flex size-10 items-center justify-center rounded-full text-gold transition-transform duration-300 hover:scale-110"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`glass-strong absolute right-0 top-0 h-full w-72 p-6 transition-transform duration-500 ${
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
            {links.map((l) => (
              <a
                key={l}
                href="#home"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-gold/10 hover:text-gold"
              >
                {l}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
