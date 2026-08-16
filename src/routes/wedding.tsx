import { createFileRoute } from "@tanstack/react-router";
import { Gem, Film, Album } from "lucide-react";
import { ServicePage, galleryPool } from "@/components/site/ServicePage";
import gallery1 from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/wedding")({
  head: () => ({
    meta: [
      { title: "Wedding Photography | Capture Lens Photography" },
      {
        name: "description",
        content:
          "Full wedding day coverage with candid photography, cinematic films and luxury albums that keep every emotion alive.",
      },
      { property: "og:title", content: "Wedding Photography | Capture Lens" },
      {
        property: "og:description",
        content:
          "Candid wedding photography, cinematic films and luxury albums for your big day.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ServicePage
      content={{
        script: "Made For Each Other",
        title: "Wedding Photography",
        intro:
          "From the first haldi laugh to the last farewell tear, our team moves quietly through your day capturing every ritual, every glance and every celebration in rich, timeless frames.",
        cover: gallery1,
        price: "₹39,999",
        highlights: [
          { icon: Gem, t: "Full Day Coverage", d: "Two photographers and a cinematographer across every ceremony." },
          { icon: Film, t: "Cinematic Film", d: "A 4K highlight film scored and colour graded like a movie." },
          { icon: Album, t: "Luxury Album", d: "Hand-bound premium album designed page by page." },
        ],
        includes: [
          "2 Day Coverage",
          "Candid Photography",
          "500+ Edited Photos",
          "Cinematic Highlights",
          "Premium Photo Album",
          "Drone Coverage",
        ],
        gallery: galleryPool.slice(0, 6),
      }}
    />
  ),
});
