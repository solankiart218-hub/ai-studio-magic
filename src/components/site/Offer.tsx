import {
  MessageCircle,
  CalendarCheck,
  Camera,
  Wand2,
  PackageCheck,
  Check,
  ArrowRight,
} from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const steps = [
  { icon: MessageCircle, n: "01", t: "Discussion", d: "We listen to your story and understand your expectations." },
  { icon: CalendarCheck, n: "02", t: "Planning", d: "We plan every detail to make your session perfect." },
  { icon: Camera, n: "03", t: "Photoshoot", d: "Our creative team captures your best moments beautifully." },
  { icon: Wand2, n: "04", t: "Editing", d: "We edit each photo with perfection and creativity." },
  { icon: PackageCheck, n: "05", t: "Delivery", d: "Your timeless memories delivered, ready to cherish forever." },
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_2fr]">
        <Reveal>
          <p className="font-script text-3xl text-gold">Why Choose Us</p>
          <h2 className="mt-1 text-4xl font-semibold leading-tight">
            Because Your Memories Deserve The Best
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            We combine creativity, passion and the latest technology to deliver
            photographs that speak from the heart.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="glass tilt-3d h-full rounded-3xl px-4 py-6 text-center">
                <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                  <s.icon className="size-5" />
                </span>
                <p className="mt-3 text-lg font-semibold text-gold">{s.n}</p>
                <p className="text-sm font-semibold">{s.t}</p>
                <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const packages = [
  {
    name: "Silver Package",
    sub: "Pre Wedding",
    price: "₹14,999",
    features: ["1 Day Photoshoot", "1 Location", "100 Edited Photos", "Online Gallery"],
  },
  {
    name: "Gold Package",
    sub: "Wedding",
    price: "₹39,999",
    featured: true,
    features: ["2 Day Coverage", "Candid Photography", "500 Edited Photos", "Photo Album"],
  },
  {
    name: "Platinum Package",
    sub: "Premium Wedding",
    price: "₹69,999",
    features: ["3 Day Coverage", "Cinematic Video", "1000 Edited Photos", "Premium Album"],
  },
  {
    name: "Diamond Package",
    sub: "All In One",
    price: "₹99,999",
    features: ["Pre Wedding + Wedding", "Cinematic Film", "1500+ Edited Photos", "Luxury Album"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto mt-24 max-w-7xl px-4 md:px-8">
      <SectionTitle script="Packages" title="Our Pricing Packages" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <div
              className={`tilt-3d relative h-full rounded-3xl p-6 text-center ${
                p.featured ? "glass-strong -translate-y-2" : "glass"
              }`}
            >
              {p.featured && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-semibold text-primary-foreground"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-xs text-gold">{p.sub}</p>
              <div className="gold-line my-4" />
              <ul className="space-y-2 text-left text-xs text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="size-3.5 shrink-0 text-gold" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-3xl font-semibold text-gold">{p.price}</p>
              <a
                href="#contact"
                className="shine mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-gold)" }}
              >
                Choose Plan <ArrowRight className="size-3.5" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const posts = [
  { img: gallery2, d: "12", m: "May", t: "Best Pre Wedding Shoot Locations in India", c: "Tips & Ideas" },
  { img: gallery4, d: "25", m: "May", t: "How to Plan Your Dream Wedding Shoot", c: "Wedding Tips" },
  { img: gallery1, d: "05", m: "Jun", t: "Top 10 Candid Moments You Must Capture", c: "Photography" },
  { img: gallery3, d: "18", m: "Jun", t: "What to Wear for Your Pre Wedding Shoot", c: "Fashion & Style" },
  { img: gallery5, d: "28", m: "Jun", t: "How We Create Cinematic Wedding Films", c: "Behind The Scenes" },
];

export function Blog() {
  return (
    <section id="blog" className="mx-auto mt-24 max-w-7xl px-4 md:px-8">
      <SectionTitle script="Journal" title="Latest From Our Blog" />
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {posts.map((p, i) => (
          <Reveal key={p.t} delay={i * 80}>
            <article className="glass tilt-3d group relative h-64 overflow-hidden rounded-3xl">
              <img
                src={p.img}
                alt={p.t}
                loading="lazy"
                width={700}
                height={900}
                className="size-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <span className="glass absolute left-3 top-3 rounded-xl px-2.5 py-1 text-center">
                <span className="block text-sm font-semibold text-gold">{p.d}</span>
                <span className="block text-[9px] text-muted-foreground">{p.m}</span>
              </span>
              <div className="absolute inset-x-4 bottom-4">
                <h3 className="text-sm font-semibold leading-snug">{p.t}</h3>
                <p className="mt-1 text-[10px] text-gold">{p.c}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={100}>
        <div className="mt-8 flex justify-center">
          <a
            href="#blog"
            className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-gold transition-transform duration-300 hover:scale-105"
          >
            Explore All Blogs <ArrowRight className="size-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
