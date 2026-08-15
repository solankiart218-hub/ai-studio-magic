import { useState } from "react";
import {
  Heart,
  Gem,
  User,
  PartyPopper,
  Building2,
  Sparkles,
  Baby,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Play,
  Award,
  Camera,
  Users,
  Smile,
  Film,
  Video,
  HeartHandshake,
} from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import filmStill from "@/assets/film-still.jpg";

const categories = [
  { icon: Heart, title: "Pre Wedding", sub: "Stories of Love" },
  { icon: Gem, title: "Wedding", sub: "Made for each other" },
  { icon: User, title: "Portrait", sub: "Your best look" },
  { icon: PartyPopper, title: "Events", sub: "Memories Together" },
  { icon: Building2, title: "Commercial", sub: "For your brand" },
  { icon: Sparkles, title: "Fashion", sub: "Style & Elegance" },
  { icon: Baby, title: "Baby Shoot", sub: "Little Smiles" },
];

export function Categories() {
  return (
    <section className="relative mx-auto mt-16 max-w-7xl px-4 md:mt-24 md:px-8">
      <Reveal>
        <div className="glass relative rounded-[2rem] p-4">
          <div className="flex items-center gap-3">
            <button
              aria-label="Previous"
              className="glass hidden size-10 shrink-0 items-center justify-center rounded-full text-gold md:flex"
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {categories.map((c) => (
                <button
                  key={c.title}
                  className="glass tilt-3d group rounded-2xl px-2 py-4 text-center"
                >
                  <span className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold transition-transform duration-500 group-hover:rotate-12">
                    <c.icon className="size-5" />
                  </span>
                  <p className="text-xs font-semibold text-gold">{c.title}</p>
                  <p className="text-[10px] text-muted-foreground">{c.sub}</p>
                </button>
              ))}
            </div>
            <button
              aria-label="Next"
              className="glass hidden size-10 shrink-0 items-center justify-center rounded-full text-gold md:flex"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const filters = [
  "All",
  "Pre Wedding",
  "Wedding",
  "Portrait",
  "Events",
  "Commercial",
  "Fashion",
  "Baby Shoot",
];

const works = [
  { img: gallery1, tag: "Wedding", title: "Sacred Vows" },
  { img: gallery2, tag: "Pre Wedding", title: "Mountain Escape" },
  { img: gallery3, tag: "Portrait", title: "Golden Grace" },
  { img: gallery4, tag: "Events", title: "Royal Entry" },
  { img: gallery5, tag: "Baby Shoot", title: "Tiny Bloom" },
];

export function FeaturedWorks() {
  const [active, setActive] = useState("All");

  return (
    <section id="works" className="mx-auto mt-24 max-w-7xl px-4 md:px-8">
      <SectionTitle script="Portfolio" title="Our Featured Works" />

      <Reveal delay={80}>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                active === f
                  ? "text-primary-foreground"
                  : "glass text-foreground/75 hover:text-gold"
              }`}
              style={
                active === f ? { background: "var(--gradient-gold)" } : undefined
              }
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {works
          .filter((w) => active === "All" || w.tag === active)
          .map((w, i) => (
            <Reveal key={w.title} delay={i * 90}>
              <figure className="glass tilt-3d group relative overflow-hidden rounded-3xl p-1.5">
                <img
                  src={w.img}
                  alt={`${w.tag} photography – ${w.title}`}
                  loading="lazy"
                  width={700}
                  height={900}
                  className="h-64 w-full rounded-[1.4rem] object-cover transition-transform duration-700 group-hover:scale-110 md:h-80"
                />
                <figcaption className="absolute inset-x-1.5 bottom-1.5 rounded-b-[1.4rem] bg-gradient-to-t from-background/95 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-sm font-semibold text-gold">{w.title}</p>
                  <p className="text-[11px] text-muted-foreground">{w.tag}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-8 flex justify-center">
          <a
            href="#works"
            className="shine group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground"
            style={{ background: "var(--gradient-gold)" }}
          >
            View Full Gallery
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

const filmList = [
  { title: "Pre Wedding Film", time: "01:20 min", sub: "On Bill" },
  { title: "Wedding Highlights", time: "03:09 min", sub: "Cinematic" },
  { title: "Save The Date", time: "01:03 min", sub: "Teaser" },
];

export function FilmSection() {
  return (
    <section id="film" className="mx-auto mt-24 max-w-7xl px-4 md:px-8">
      <Reveal>
        <div className="glass grid gap-6 rounded-[2rem] p-4 md:p-6 lg:grid-cols-[1.15fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={filmStill}
              alt="Cinematic sunset silhouette of a couple"
              loading="lazy"
              width={1200}
              height={700}
              className="h-72 w-full object-cover md:h-full"
            />
            <div className="absolute inset-0 bg-background/30" />
            <button
              aria-label="Play film"
              className="absolute inset-0 m-auto flex size-16 items-center justify-center rounded-full border border-gold/50 bg-background/50 text-gold backdrop-blur-md transition-transform duration-300 hover:scale-110"
            >
              <Play className="size-6 fill-current" />
            </button>
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-full bg-background/60 px-4 py-2 text-[11px] text-muted-foreground backdrop-blur-md">
              <Play className="size-3 fill-gold text-gold" />
              <div className="h-1 flex-1 rounded-full bg-muted">
                <div
                  className="h-full w-1/3 rounded-full"
                  style={{ background: "var(--gradient-gold)" }}
                />
              </div>
              <span>00:38 / 02:20</span>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-gold">
                <Film className="size-3.5" /> Cinematic Film
              </p>
              <h3 className="mt-2 text-3xl font-semibold leading-tight">
                Turning Moments Into Timeless Stories
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Our films are more than just videos, they are emotions, memories
                and stories that last a lifetime.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[
                  { icon: Video, t: "4K Ultra HD", s: "Quality" },
                  { icon: Film, t: "Cinematic", s: "Storytelling" },
                  { icon: HeartHandshake, t: "Emotional", s: "Connection" },
                ].map((f) => (
                  <div key={f.t} className="glass rounded-2xl px-2 py-3">
                    <f.icon className="mx-auto size-4 text-gold" />
                    <p className="mt-1 text-[11px] font-semibold">{f.t}</p>
                    <p className="text-[10px] text-muted-foreground">{f.s}</p>
                  </div>
                ))}
              </div>
              <a
                href="#film"
                className="shine mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-gold)" }}
              >
                Watch Full Film <Play className="size-3 fill-current" />
              </a>
            </div>

            <div className="flex flex-col gap-3">
              {filmList.map((f) => (
                <div
                  key={f.title}
                  className="glass flex items-center gap-3 rounded-2xl p-2 transition-transform duration-300 hover:translate-x-1"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                    <Play className="size-3.5 fill-current" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold">{f.title}</p>
                    <p className="text-[10px] text-muted-foreground">
                      {f.time} · {f.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const stats = [
  { icon: Award, n: "10+", l: "Years Experience" },
  { icon: Camera, n: "850+", l: "Projects Completed" },
  { icon: Users, n: "2500+", l: "Happy Clients" },
  { icon: Gem, n: "25+", l: "Awards Won" },
  { icon: Smile, n: "100%", l: "Client Satisfaction" },
];

export function Stats() {
  return (
    <section className="mx-auto mt-16 max-w-7xl px-4 md:px-8">
      <Reveal>
        <div className="glass-strong grid grid-cols-2 gap-4 rounded-[2rem] p-6 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <div key={s.l} className="group text-center">
              <s.icon className="mx-auto size-5 text-gold transition-transform duration-500 group-hover:-translate-y-1" />
              <p className="mt-2 text-2xl font-semibold text-gold">{s.n}</p>
              <p className="text-[11px] text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
