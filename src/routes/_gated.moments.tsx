import { createFileRoute } from "@tanstack/react-router";

import { PhotoGallery } from "@/components/PhotoGallery";
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

function Moments() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:py-28">
      <SectionHeading
        eyebrow="The Album"
        title="Moments Together"
        intro="Countless flights, adventures, new cities and memories we'll treasure forever. Tap any picture to see it full size."
      />

      <div className="mt-12 sm:mt-14">
        <PhotoGallery />
      </div>
    </div>
  );
}
