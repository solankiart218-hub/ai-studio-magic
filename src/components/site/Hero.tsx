import { ArrowRight, Play, Star } from "lucide-react";
import heroCouple from "@/assets/hero-couple.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32">
      {/* ambient 3d glows */}
      <div className="pointer-events-none absolute -left-32 top-24 size-[26rem] rounded-full bg-gold/10 blur-[110px] animate-glow" />
      <div className="pointer-events-none absolute -right-24 top-1/3 size-[22rem] rounded-full bg-gold-deep/20 blur-[120px] animate-glow" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-10 md:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative z-10">
          <p className="font-script text-3xl text-gold animate-fade-in">
            We Capture
          </p>
          <h1 className="mt-1 text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            <span className="block animate-fade-in">TIMELESS</span>
            <span className="block text-gold animate-fade-in [animation-delay:150ms]">
              MEMORIES
            </span>
          </h1>
          <p className="mt-3 font-script text-2xl text-gold/90">
            With Love &amp; Creativity
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            We don't just take pictures, we create timeless memories that you'll
            cherish forever — cinematic, candid and crafted with heart.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#works"
              className="shine group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-gold)" }}
            >
              View Portfolio
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#film"
              className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-gold transition-transform duration-300 hover:scale-105"
            >
              Watch Showreel
              <Play className="size-3.5 fill-current" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[gallery1, heroCouple, gallery1, heroCouple].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Happy client"
                  loading="lazy"
                  width={44}
                  height={44}
                  className="size-11 rounded-full border-2 border-gold/50 object-cover"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-gold">500+ Happy Clients</p>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <Star className="size-3 fill-gold text-gold" />
                Trusted by thousands of couples
              </p>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -m-6 rounded-full border border-gold/30 animate-spin-slow" />
          <div className="pointer-events-none absolute inset-6 rounded-full bg-gold/15 blur-3xl animate-glow" />
          <div className="glass-strong tilt-3d relative overflow-hidden rounded-[2.5rem] p-2">
            <img
              src={heroCouple}
              alt="Bride and groom sharing a golden hour moment"
              width={1200}
              height={1408}
              className="h-[26rem] w-full rounded-[2rem] object-cover md:h-[34rem]"
            />
            <div className="absolute inset-2 rounded-[2rem] bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>

          {/* floating player card */}
          <div className="glass-strong float-slow absolute -bottom-8 left-0 flex w-[19rem] items-center gap-3 rounded-2xl p-3 sm:left-6">
            <div className="relative size-14 shrink-0 overflow-hidden rounded-xl">
              <img
                src={gallery1}
                alt="Wedding film preview"
                loading="lazy"
                width={112}
                height={112}
                className="size-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-background/50">
                <Play className="size-4 fill-gold text-gold" />
              </span>
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Best Moments</p>
              <p className="text-xs text-muted-foreground">Wedding Story</p>
              <div className="mt-2 h-1 rounded-full bg-muted">
                <div
                  className="h-full w-2/5 rounded-full"
                  style={{ background: "var(--gradient-gold)" }}
                />
              </div>
            </div>
            <span className="self-start text-[10px] text-gold">02:45</span>
          </div>

          {/* slide markers */}
          <div className="absolute -right-1 top-1/3 hidden flex-col gap-2 text-[10px] text-gold/70 md:flex">
            {["01", "02", "03", "04"].map((n, i) => (
              <span key={n} className={i === 0 ? "text-gold" : ""}>
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
