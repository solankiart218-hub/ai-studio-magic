import { createFileRoute } from "@tanstack/react-router";
import { PartyPopper, Clock, Users } from "lucide-react";
import { ServicePage, galleryPool } from "@/components/site/ServicePage";
import gallery4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Event Photography | Capture Lens Photography" },
      {
        name: "description",
        content:
          "Birthdays, receptions, corporate nights and festivals covered with fast turnaround and beautifully candid storytelling.",
      },
      { property: "og:title", content: "Event Photography | Capture Lens" },
      {
        property: "og:description",
        content:
          "Candid event coverage with fast delivery for parties, receptions and corporate nights.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ServicePage
      content={{
        script: "Memories Together",
        title: "Event Photography",
        intro:
          "Birthdays, receptions, anniversaries and corporate evenings — we blend into the crowd and come back with the moments everyone will be talking about tomorrow.",
        cover: gallery4,
        price: "₹11,999",
        highlights: [
          { icon: PartyPopper, t: "Every Celebration", d: "From intimate house parties to grand banquet nights." },
          { icon: Clock, t: "48h Preview", d: "A curated sneak peek delivered within two days." },
          { icon: Users, t: "Crowd Candids", d: "Guests, decor details and stage moments, all covered." },
        ],
        includes: [
          "6 Hour Coverage",
          "2 Photographers",
          "200 Edited Photos",
          "Event Highlight Reel",
          "Same Day Teaser",
          "Online Gallery",
        ],
        gallery: galleryPool.slice(0, 6),
      }}
    />
  ),
});
