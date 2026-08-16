import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Star } from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import heroCouple from "@/assets/hero-couple.jpg";

export const galleryPool = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  heroCouple,
];

export type ServiceContent = {
  script: string;
  title: string;
  intro: string;
  cover: string;
  highlights: { icon: LucideIcon; t: string; d: string }[];
  includes: string[];
  price: string;
  gallery: string[];
};

export function ServicePage({ content }: { content: ServiceContent }) {
  return (
    <div className="pb-8">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-28 md:px-8 md:pt-36">
        <div className="pointer-events-none absolute -left-24 top-16 size-80 rounded-full bg-gold/10 blur-[110px] animate-glow" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="font-script text-3xl text-gold">{content.script}</p>
            <h1 className="mt-1 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              {content.title}
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <span className="gold-line w-20" />
              <span className="size-1.5 rotate-45 bg-gold" />
            </div>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
              {content.intro}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/about"
                hash="enquiry"
                className="shine group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-gold)" }}
              >
                Book This Shoot
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/"
                className="glass rounded-full px-6 py-3 text-sm font-semibold text-gold transition-transform duration-300 hover:scale-105"
              >
                Back To Home
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-strong tilt-3d relative overflow-hidden rounded-[2rem] p-2">
              <img
                src={content.cover}
                alt={content.title}
                width={700}
                height={900}
                className="h-72 w-full rounded-[1.6rem] object-cover sm:h-96 md:h-[28rem]"
              />
              <div className="absolute inset-2 rounded-[1.6rem] bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="glass absolute bottom-5 left-5 rounded-2xl px-4 py-2">
                <p className="flex items-center gap-1 text-xs font-semibold text-gold">
                  <Star className="size-3 fill-gold" /> Starting {content.price}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {content.highlights.map((h, i) => (
            <Reveal key={h.t} delay={i * 100}>
              <div className="glass tilt-3d h-full rounded-3xl p-6">
                <span className="flex size-12 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-gold">
                  <h.icon className="size-5" />
                </span>
                <h2 className="mt-4 text-lg font-semibold">{h.t}</h2>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {h.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <SectionTitle script="Gallery" title="Moments We Captured" />
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {content.gallery.map((g, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="glass tilt-3d group overflow-hidden rounded-3xl p-1.5">
                <img
                  src={g}
                  alt={`${content.title} sample ${i + 1}`}
                  loading="lazy"
                  width={700}
                  height={900}
                  className="h-52 w-full rounded-[1.4rem] object-cover transition-transform duration-700 group-hover:scale-110 sm:h-72"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Includes */}
      <section className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="glass-strong grid gap-8 rounded-[2rem] p-6 md:p-10 lg:grid-cols-2">
            <div>
              <p className="font-script text-2xl text-gold">What's Included</p>
              <h2 className="mt-1 text-3xl font-semibold">
                Everything You Need, Beautifully Done
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Every package is tailored to your story. Tell us your vision and
                we'll craft the perfect plan for your day.
              </p>
              <Link
                to="/about"
                hash="enquiry"
                className="shine mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-gold)" }}
              >
                Get A Quote <ArrowRight className="size-4" />
              </Link>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {content.includes.map((f) => (
                <li
                  key={f}
                  className="glass flex items-center gap-2 rounded-2xl px-4 py-3 text-xs text-muted-foreground"
                >
                  <Check className="size-4 shrink-0 text-gold" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
