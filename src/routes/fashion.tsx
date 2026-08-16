import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Shirt, Camera } from "lucide-react";
import { ServicePage, galleryPool } from "@/components/site/ServicePage";
import gallery3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/fashion")({
  head: () => ({
    meta: [
      { title: "Fashion Photography | Capture Lens Photography" },
      {
        name: "description",
        content:
          "Editorial fashion photography — lookbooks, designer campaigns and portfolio shoots with bold styling and dramatic light.",
      },
      { property: "og:title", content: "Fashion Photography | Capture Lens" },
      {
        property: "og:description",
        content:
          "Editorial lookbooks and designer campaigns with bold styling and dramatic light.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ServicePage
      content={{
        script: "Style & Elegance",
        title: "Fashion Photography",
        intro:
          "Editorial energy with couture polish. Lookbooks, designer campaigns and model portfolios shot with dramatic light, considered styling and a strong point of view.",
        cover: gallery3,
        price: "₹24,999",
        highlights: [
          { icon: Shirt, t: "Lookbooks", d: "Full collection coverage with consistent styling and grading." },
          { icon: Sparkles, t: "Creative Direction", d: "Concept, set design and mood built with your team." },
          { icon: Camera, t: "Portfolio Shoots", d: "Model portfolios crafted to open the right doors." },
        ],
        includes: [
          "Full Day Shoot",
          "Creative Direction",
          "80 Retouched Images",
          "Studio or Location",
          "Hair & Makeup Coordination",
          "Print & Digital Files",
        ],
        gallery: galleryPool.slice(0, 6),
      }}
    />
  ),
});
