import { createFileRoute } from "@tanstack/react-router";
import { useWedding } from "@/lib/use-wedding";

import { SectionHeading } from "@/components/SectionHeading";
import { WeekendTimeline } from "@/components/WeekendTimeline";
import { QandA, RsvpCta } from "@/components/QandA";

export const Route = createFileRoute("/_gated/events")({
  head: () => ({
    meta: [
      { title: "The Weekend — Lalita & Ayush" },
      {
        name: "description",
        content:
          "Timeline of the wedding weekend: beach civil ceremony, garden reception, pool party and Sangeet — with dress code for every event.",
      },
      { property: "og:title", content: "The Weekend — Lalita & Ayush" },
      {
        property: "og:description",
        content:
          "Three days of ceremonies, dress codes and dancing at Avani Kalutara.",
      },
    ],
  }),
  component: Events,
});

function Events() {
  const { content } = useWedding();

  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-14 sm:py-28">
      <SectionHeading
        eyebrow="20 — 22 February 2027"
        title="The Weekend"
        intro="A beach ceremony, a garden dinner, an afternoon by the pool and a night of Bollywood glam. Here is how it all unfolds."
      />

      <div className="mt-12">
        <WeekendTimeline content={content} />
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="Good to know" title="Q&A" />
        <div className="mt-12">
          <QandA content={content} />
          <RsvpCta rsvpUrl={content.rsvpUrl} />
        </div>
      </div>
    </div>
  );
}
