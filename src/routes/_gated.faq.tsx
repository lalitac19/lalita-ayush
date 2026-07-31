import { createFileRoute } from "@tanstack/react-router";
import { useWedding } from "@/lib/use-wedding";

import { SectionHeading } from "@/components/SectionHeading";
import { QandA, RsvpCta } from "@/components/QandA";

export const Route = createFileRoute("/_gated/faq")({
  head: () => ({
    meta: [
      { title: "Q&A — Lalita & Ayush" },
      {
        name: "description",
        content:
          "Answers to your questions about the wedding: children, dress code, gifts, transport and who to contact.",
      },
      { property: "og:title", content: "Q&A — Lalita & Ayush" },
      {
        property: "og:description",
        content: "Kids, gifts, transport and who to call — all the details.",
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  const { content } = useWedding();

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:py-28">
      <SectionHeading
        eyebrow="Good to know"
        title="Q&A"
        intro="And if we've missed anything at all, just message us."
      />

      <div className="mt-14">
        <QandA content={content} />
        <RsvpCta rsvpUrl={content.rsvpUrl} />
      </div>
    </div>
  );
}
