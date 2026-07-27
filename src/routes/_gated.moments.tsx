import { createFileRoute } from "@tanstack/react-router";

import { Monogram } from "@/components/Monogram";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/_gated/moments")({
  head: () => ({
    meta: [
      { title: "Moments Together — Lalita & Ayush" },
      {
        name: "description",
        content:
          "A picture album of Lalita and Ayush — flights, adventures, new cities and memories along the way.",
      },
      { property: "og:title", content: "Moments Together — Lalita & Ayush" },
      {
        property: "og:description",
        content: "Countless flights, adventures and memories we'll treasure forever.",
      },
    ],
  }),
  component: Moments,
});

const captions = [
  "The first meeting — Dubai, Valentine's Day",
  "Somewhere between time zones",
  "Dessert deliveries, 3,500 miles apart",
  "New cities",
  "The yes",
  "Us",
  "Adventures",
  "Home, wherever that is",
  "To Sri Lanka",
];

function Moments() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:py-28">
      <SectionHeading
        eyebrow="The Album"
        title="Moments Together"
        intro="Countless flights, adventures, new cities and memories we'll treasure forever. A few of our favourites are on their way here."
      />

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {captions.map((caption, i) => (
          <figure
            key={caption}
            className={`surface-card group relative flex flex-col items-center justify-center overflow-hidden rounded-sm bg-secondary ${
              i % 5 === 0 ? "aspect-3/4" : "aspect-square"
            }`}
          >
            <Monogram className="h-10 w-auto opacity-25 transition group-hover:opacity-40" />
            <figcaption className="mt-4 px-5 text-center text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Photographs coming soon — we're still arguing over which ones make the cut.
      </p>
    </div>
  );
}
