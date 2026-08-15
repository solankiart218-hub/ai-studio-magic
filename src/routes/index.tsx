import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  Categories,
  FeaturedWorks,
  FilmSection,
  Stats,
} from "@/components/site/Showcase";
import { WhyChooseUs, Pricing, Blog } from "@/components/site/Offer";
import {
  InstagramFeed,
  Testimonials,
  CtaBanner,
  Footer,
} from "@/components/site/Social";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Capture Lens Photography | Timeless Wedding Memories" },
      {
        name: "description",
        content:
          "Luxury wedding, pre-wedding, portrait and baby photography studio creating cinematic films and timeless memories with love and creativity.",
      },
      {
        property: "og:title",
        content: "Capture Lens Photography | Timeless Wedding Memories",
      },
      {
        property: "og:description",
        content:
          "Cinematic wedding photography and films — pre-wedding, portrait, events, fashion and baby shoots crafted with heart.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedWorks />
        <FilmSection />
        <Stats />
        <WhyChooseUs />
        <Pricing />
        <Blog />
        <InstagramFeed />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
