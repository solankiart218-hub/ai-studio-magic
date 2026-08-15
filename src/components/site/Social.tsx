import { useState } from "react";
import {
  Instagram,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Camera,
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Youtube,
  Twitter,
  Send,
  MessageCircle,
} from "lucide-react";
import { Reveal, SectionTitle } from "./Reveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import heroCouple from "@/assets/hero-couple.jpg";
import ctaBanner from "@/assets/cta-banner.jpg";

const feed = [gallery2, gallery4, gallery3, gallery1, gallery5, heroCouple];

export function InstagramFeed() {
  return (
    <section className="mt-24">
      <SectionTitle script="@capturelens" title="Follow Us On Instagram" />
      <div className="relative mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 px-4">
          {[...feed, ...feed].map((img, i) => (
            <div
              key={i}
              className="glass tilt-3d relative size-44 shrink-0 overflow-hidden rounded-3xl p-1.5 md:size-52"
            >
              <img
                src={img}
                alt="Instagram post from our studio"
                loading="lazy"
                width={700}
                height={900}
                className="size-full rounded-[1.3rem] object-cover"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        <a
          href="#home"
          className="glass-strong absolute left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center transition-transform duration-500 hover:scale-110"
        >
          <span className="font-script text-lg text-gold">Follow</span>
          <span className="text-xs font-semibold">Us</span>
          <Instagram className="mt-1 size-4 text-gold" />
        </a>
      </div>
    </section>
  );
}

const reviews = [
  {
    name: "Riya & Karan",
    img: gallery1,
    text: "The photos are beyond beautiful! They captured every emotion so perfectly. We couldn't have asked for more.",
  },
  {
    name: "Pooja & Rahul",
    img: gallery3,
    text: "Professional team, creative ideas and amazing results. Highly recommended for your special day!",
  },
  {
    name: "Aman Verma",
    img: gallery4,
    text: "Their attention to detail and creativity is just outstanding. Our event was captured so perfectly.",
  },
];

export function Testimonials() {
  const [page, setPage] = useState(0);
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 md:px-8">
      <SectionTitle script="Reviews" title="Our Clients Say" />
      <div className="mt-10 flex items-center gap-3">
        <button
          onClick={() => setPage((p) => (p + 2) % 3)}
          aria-label="Previous review"
          className="glass hidden size-11 shrink-0 items-center justify-center rounded-full text-gold md:flex"
        >
          <ChevronLeft className="size-4" />
        </button>
        <div className="grid flex-1 gap-4 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <div className="glass tilt-3d relative h-full rounded-3xl p-5">
                <Quote className="absolute right-4 top-4 size-6 text-gold/40" />
                <div className="flex items-center gap-3">
                  <img
                    src={r.img}
                    alt={r.name}
                    loading="lazy"
                    width={48}
                    height={48}
                    className="size-11 rounded-full border border-gold/40 object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">{r.name}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="size-3 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  {r.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <button
          onClick={() => setPage((p) => (p + 1) % 3)}
          aria-label="Next review"
          className="glass hidden size-11 shrink-0 items-center justify-center rounded-full text-gold md:flex"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {[0, 1, 2].map((d) => (
          <span
            key={d}
            className={`size-2 rounded-full transition-all ${
              page === d ? "w-6 bg-gold" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section id="contact" className="mx-auto mt-24 max-w-7xl px-4 md:px-8">
      <Reveal>
        <div className="glass-strong relative overflow-hidden rounded-[2.5rem]">
          <img
            src={ctaBanner}
            alt="Photographer with a golden camera lens"
            loading="lazy"
            width={1600}
            height={608}
            className="absolute inset-0 size-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
          <div className="relative px-6 py-16 text-center md:px-16">
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Let's Capture Your <br />
              <span className="text-gold">Beautiful</span> Moments
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Book your session today and let's create magic together.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="shine flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-gold)" }}
              >
                Book Your Session <ArrowRight className="size-4" />
              </a>
              <a
                href="#contact"
                className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-gold transition-transform duration-300 hover:scale-105"
              >
                Contact Us <Send className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const quickLinks = [
  "Home",
  "Pre Wedding",
  "Wedding",
  "Portrait",
  "Events",
  "Commercial",
  "Baby Shoot",
  "Contact",
];
const services = [
  "Pre Wedding",
  "Wedding",
  "Portrait",
  "Events",
  "Commercial",
  "Fashion",
  "Baby Shoot",
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gold/15 bg-surface/40 pt-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-10 md:grid-cols-4 md:px-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex size-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
              <Camera className="size-6" />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-gold">
                Capture Lens
              </p>
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground">
                PHOTOGRAPHY
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
            We are a team of passionate photographers who love to capture real
            emotions and turn them into beautiful memories.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Youtube, Twitter, Globe].map((Icon, i) => (
              <a
                key={i}
                href="#home"
                aria-label="Social link"
                className="glass flex size-9 items-center justify-center rounded-xl text-gold transition-transform duration-300 hover:-translate-y-1"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href="#home" className="transition-colors hover:text-gold">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gold">Services</h3>
          <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
            {services.map((l) => (
              <li key={l}>
                <a href="#home" className="transition-colors hover:text-gold">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gold">Contact Info</h3>
          <ul className="mt-4 space-y-3 text-xs text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="size-4 shrink-0 text-gold" />
              123 Photography Street, Your City, Country 0001
            </li>
            <li className="flex gap-2">
              <Phone className="size-4 shrink-0 text-gold" /> +91 98765 43210
            </li>
            <li className="flex gap-2">
              <Mail className="size-4 shrink-0 text-gold" /> info@example.com
            </li>
          </ul>
          <h3 className="mt-6 text-sm font-semibold text-gold">Newsletter</h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="glass mt-3 flex items-center gap-2 rounded-full p-1.5"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              aria-label="Email address"
              className="w-full bg-transparent px-3 text-xs outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex size-8 shrink-0 items-center justify-center rounded-full text-primary-foreground"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Send className="size-3.5" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gold/10 py-5 text-center text-[11px] text-muted-foreground">
        © 2026 Capture Lens Photography. All Rights Reserved.
      </div>

      <a
        href="#contact"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full text-primary-foreground shadow-[var(--shadow-gold)] transition-transform duration-300 hover:scale-110"
        style={{ background: "var(--gradient-gold)" }}
      >
        <MessageCircle className="size-5" />
      </a>
    </footer>
  );
}
