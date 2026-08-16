import { createFileRoute } from "@tanstack/react-router";
import { Baby, Smile, ShieldCheck } from "lucide-react";
import { ServicePage, galleryPool } from "@/components/site/ServicePage";
import gallery5 from "@/assets/gallery-5.jpg";

export const Route = createFileRoute("/baby-shoot")({
  head: () => ({
    meta: [
      { title: "Baby & Newborn Photography | Capture Lens Photography" },
      {
        name: "description",
        content:
          "Gentle newborn, baby and maternity photoshoots in a warm, safe studio with soft props and adorable themed setups.",
      },
      { property: "og:title", content: "Baby Photography | Capture Lens" },
      {
        property: "og:description",
        content:
          "Safe, gentle newborn and baby photoshoots with warm themed setups.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ServicePage
      content={{
        script: "Little Smiles",
        title: "Baby & Newborn Shoots",
        intro:
          "Those tiny fingers change every week. Our warm, unhurried studio sessions capture your little one exactly as they are today — sleepy, giggly and impossibly small.",
        cover: gallery5,
        price: "₹9,999",
        highlights: [
          { icon: ShieldCheck, t: "Safe & Gentle", d: "Sanitised props, warm studio and trained newborn handling." },
          { icon: Baby, t: "Themed Setups", d: "Soft pastel, floral and festive sets to choose from." },
          { icon: Smile, t: "Family Frames", d: "Parents and siblings included at no extra cost." },
        ],
        includes: [
          "3 Hour Relaxed Session",
          "5 Themed Setups",
          "50 Edited Photos",
          "Props & Outfits",
          "Family Portraits",
          "Keepsake Prints",
        ],
        gallery: galleryPool.slice(0, 6),
      }}
    />
  ),
});
