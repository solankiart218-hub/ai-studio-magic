import { createFileRoute } from "@tanstack/react-router";
import { Heart, MapPin, Sparkles } from "lucide-react";
import { ServicePage, galleryPool } from "@/components/site/ServicePage";
import gallery2 from "@/assets/gallery-2.jpg";

export const Route = createFileRoute("/pre-wedding")({
  head: () => ({
    meta: [
      { title: "Pre Wedding Photography | Capture Lens Photography" },
      {
        name: "description",
        content:
          "Romantic pre wedding photoshoots at dreamy locations — cinematic storytelling, styled concepts and beautifully edited photos.",
      },
      { property: "og:title", content: "Pre Wedding Photography | Capture Lens" },
      {
        property: "og:description",
        content:
          "Romantic pre wedding shoots with cinematic storytelling and stunning locations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ServicePage
      content={{
        script: "Stories of Love",
        title: "Pre Wedding Photography",
        intro:
          "Before the big day, let's tell your love story. From misty mountains to heritage streets, we design a shoot that feels completely like you — playful, romantic and endlessly cinematic.",
        cover: gallery2,
        price: "₹14,999",
        highlights: [
          { icon: MapPin, t: "Dream Locations", d: "Handpicked spots across India scouted for the perfect light." },
          { icon: Sparkles, t: "Styled Concepts", d: "Mood boards, outfit guidance and props tailored to your theme." },
          { icon: Heart, t: "Candid Emotion", d: "Real laughter, real glances — never stiff, always natural." },
        ],
        includes: [
          "1 Day Photoshoot",
          "2 Outfit Changes",
          "100+ Edited Photos",
          "Location Scouting",
          "Online Gallery",
          "Teaser Reel",
        ],
        gallery: galleryPool.slice(0, 6),
      }}
    />
  ),
});
