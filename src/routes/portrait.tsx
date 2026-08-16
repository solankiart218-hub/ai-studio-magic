import { createFileRoute } from "@tanstack/react-router";
import { User, Lightbulb, Wand2 } from "lucide-react";
import { ServicePage, galleryPool } from "@/components/site/ServicePage";
import gallery3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/portrait")({
  head: () => ({
    meta: [
      { title: "Portrait Photography | Capture Lens Photography" },
      {
        name: "description",
        content:
          "Studio and outdoor portrait photography with expert lighting, direction and retouching that shows your best self.",
      },
      { property: "og:title", content: "Portrait Photography | Capture Lens" },
      {
        property: "og:description",
        content:
          "Expertly lit portraits with natural direction and premium retouching.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ServicePage
      content={{
        script: "Your Best Look",
        title: "Portrait Photography",
        intro:
          "A great portrait is a conversation. We light you beautifully, direct you gently and deliver images that feel powerful, warm and unmistakably yours.",
        cover: gallery3,
        price: "₹7,999",
        highlights: [
          { icon: Lightbulb, t: "Studio Lighting", d: "Sculpted light setups designed for your features and mood." },
          { icon: User, t: "Gentle Direction", d: "Posing guidance so you never wonder what to do with your hands." },
          { icon: Wand2, t: "Premium Retouch", d: "Natural, skin-true retouching on every delivered frame." },
        ],
        includes: [
          "2 Hour Session",
          "Studio or Outdoor",
          "40 Edited Photos",
          "Makeup Coordination",
          "Print Ready Files",
          "Online Gallery",
        ],
        gallery: galleryPool.slice(0, 6),
      }}
    />
  ),
});
