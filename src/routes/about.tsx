import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  Camera,
  Users,
  Smile,
  Heart,
  MapPin,
  Phone,
  Mail,
  Send,
  Sparkles,
  Film,
} from "lucide-react";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import heroCouple from "@/assets/hero-couple.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import ctaBanner from "@/assets/cta-banner.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Capture Lens Photography Studio" },
      {
        name: "description",
        content:
          "Meet the Capture Lens team — a decade of wedding, portrait and cinematic photography, 2500+ happy clients and 25+ awards. Get in touch to book your date.",
      },
      { property: "og:title", content: "About Capture Lens Photography" },
      {
        property: "og:description",
        content:
          "A decade of cinematic wedding and portrait photography. Meet the team and book your date.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { icon: Award, n: "10+", l: "Years Experience" },
  { icon: Camera, n: "850+", l: "Projects Completed" },
  { icon: Users, n: "2500+", l: "Happy Clients" },
  { icon: Smile, n: "100%", l: "Client Satisfaction" },
];

const values = [
  {
    icon: Heart,
    t: "Emotion First",
    d: "We chase the real moments — the tears, the belly laughs, the quiet glances between the chaos.",
  },
  {
    icon: Sparkles,
    t: "Crafted Detail",
    d: "Every frame is hand-graded. No batch presets, no shortcuts, no filler images in your gallery.",
  },
  {
    icon: Film,
    t: "Cinematic Eye",
    d: "We light and frame like filmmakers, so your photos feel like stills from your own movie.",
  },
];

const team = [
  { img: ctaBanner, name: "Arjun Mehta", role: "Founder & Lead Photographer" },
  { img: gallery3, name: "Nisha Rao", role: "Portrait & Fashion Lead" },
  { img: gallery4, name: "Vikram Shah", role: "Cinematographer" },
];

function AboutPage() {
  return (
    <div className="pb-8">
      <section className="relative overflow-hidden px-4 pt-28 md:px-8 md:pt-36">
        <div className="pointer-events-none absolute -right-24 top-20 size-80 rounded-full bg-gold/10 blur-[110px] animate-glow" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="font-script text-3xl text-gold">Our Story</p>
            <h1 className="mt-1 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              About <span className="text-gold">Capture Lens</span>
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <span className="gold-line w-20" />
              <span className="size-1.5 rotate-45 bg-gold" />
            </div>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
              What started in 2015 as one photographer with a borrowed camera is
              now a studio of ten storytellers. We've travelled to 60+ cities,
              shot over 850 celebrations and still get goosebumps every single
              time a couple sees their film for the first time.
            </p>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
              We believe photographs are not decoration — they're the way your
              family will remember today, fifty years from now. That belief
              shapes every frame we deliver.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-strong tilt-3d overflow-hidden rounded-[2rem] p-2">
              <img
                src={heroCouple}
                alt="Capture Lens studio work"
                width={1200}
                height={1408}
                className="h-80 w-full rounded-[1.6rem] object-cover md:h-[28rem]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="glass-strong grid grid-cols-2 gap-4 rounded-[2rem] p-6 lg:grid-cols-4">
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

      <section className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <SectionTitle script="What Drives Us" title="Our Values" />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 100}>
              <div className="glass tilt-3d h-full rounded-3xl p-6">
                <span className="flex size-12 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-gold">
                  <v.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{v.t}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {v.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
        <SectionTitle script="The People" title="Meet Our Team" />
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <figure className="glass tilt-3d group overflow-hidden rounded-3xl p-1.5">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  width={700}
                  height={900}
                  className="h-64 w-full rounded-[1.4rem] object-cover transition-transform duration-700 group-hover:scale-105 sm:h-72"
                />
                <figcaption className="px-4 py-4 text-center">
                  <p className="text-sm font-semibold text-gold">{m.name}</p>
                  <p className="text-[11px] text-muted-foreground">{m.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="enquiry" className="mx-auto mt-20 max-w-7xl scroll-mt-28 px-4 md:px-8">
        <SectionTitle script="Say Hello" title="Get In Touch" />
        <Reveal delay={80}>
          <div className="glass-strong mt-8 grid gap-8 rounded-[2rem] p-6 md:p-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Let's plan something beautiful
              </h3>
              <p className="text-sm text-muted-foreground">
                Tell us your date, city and the kind of shoot you're dreaming
                of. We reply to every enquiry within 24 hours.
              </p>
              <ul className="space-y-3 text-xs text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="size-4 shrink-0 text-gold" />
                  123 Photography Street, Your City, Country 0001
                </li>
                <li className="flex gap-3">
                  <Phone className="size-4 shrink-0 text-gold" /> +91 98765 43210
                </li>
                <li className="flex gap-3">
                  <Mail className="size-4 shrink-0 text-gold" /> info@example.com
                </li>
              </ul>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid gap-3 sm:grid-cols-2"
            >
              <input
                required
                placeholder="Your name"
                aria-label="Your name"
                className="glass rounded-2xl px-4 py-3 text-xs outline-none placeholder:text-muted-foreground focus:border-gold/50"
              />
              <input
                required
                type="tel"
                placeholder="Phone number"
                aria-label="Phone number"
                className="glass rounded-2xl px-4 py-3 text-xs outline-none placeholder:text-muted-foreground focus:border-gold/50"
              />
              <input
                required
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="glass rounded-2xl px-4 py-3 text-xs outline-none placeholder:text-muted-foreground focus:border-gold/50 sm:col-span-2"
              />
              <textarea
                rows={4}
                placeholder="Tell us about your shoot"
                aria-label="Message"
                className="glass rounded-2xl px-4 py-3 text-xs outline-none placeholder:text-muted-foreground focus:border-gold/50 sm:col-span-2"
              />
              <button
                type="submit"
                className="shine flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground sm:col-span-2"
                style={{ background: "var(--gradient-gold)" }}
              >
                Send Enquiry <Send className="size-4" />
              </button>
            </form>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
