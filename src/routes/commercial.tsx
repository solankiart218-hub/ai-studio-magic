import { createFileRoute } from "@tanstack/react-router";
import { Building2, Package, TrendingUp } from "lucide-react";
import { ServicePage, galleryPool } from "@/components/site/ServicePage";
import ctaBanner from "@/assets/cta-banner.jpg";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Photography | Capture Lens Photography" },
      {
        name: "description",
        content:
          "Product, brand and campaign photography built to sell — clean studio setups, styled sets and conversion-ready visuals.",
      },
      { property: "og:title", content: "Commercial Photography | Capture Lens" },
      {
        property: "og:description",
        content:
          "Product and brand photography designed to make your business look premium.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ServicePage
      content={{
        script: "For Your Brand",
        title: "Commercial Photography",
        intro:
          "Visuals that sell. We shoot products, spaces and teams with the polish of a national campaign, delivering assets ready for your website, catalogue and social feeds.",
        cover: ctaBanner,
        price: "₹19,999",
        highlights: [
          { icon: Package, t: "Product Sets", d: "Clean studio and lifestyle setups tuned to your brand palette." },
          { icon: Building2, t: "Brand & Team", d: "Office, interiors and founder portraits with a premium feel." },
          { icon: TrendingUp, t: "Campaign Ready", d: "Cropped and exported for every platform you publish on." },
        ],
        includes: [
          "Full Day Studio",
          "Styling & Props",
          "150 Edited Images",
          "Lifestyle + White BG",
          "Social Media Crops",
          "Commercial Usage Rights",
        ],
        gallery: galleryPool.slice(0, 6),
      }}
    />
  ),
});
