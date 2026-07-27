import { createFileRoute } from "@tanstack/react-router";
import { useWedding } from "@/lib/use-wedding";

import receptionImg from "@/assets/reception.jpg";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/_gated/getting-there")({
  head: () => ({
    meta: [
      { title: "Getting There — Lalita & Ayush" },
      {
        name: "description",
        content:
          "Flights to Colombo, transfers to Avani Kalutara, visas and everything you need to plan your trip to Sri Lanka.",
      },
      { property: "og:title", content: "Getting There — Lalita & Ayush" },
      {
        property: "og:description",
        content: "How to reach Avani Kalutara Resort on Sri Lanka's west coast.",
      },
    ],
  }),
  component: GettingThere,
});

function GettingThere() {
  const { content } = useWedding();

  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-14 sm:py-28">
      <SectionHeading
        eyebrow="Travel"
        title={content.travel.heading}
        intro={content.travel.body}
      />

      <img
        src={receptionImg}
        alt="Garden reception under string lights"
        loading="lazy"
        width={1200}
        height={900}
        className="mt-14 h-52 w-full rounded-sm object-cover sm:h-72 sm:h-96"
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {content.travel.points.map((p) => (
          <div key={p.title} className="surface-card rounded-sm p-6 sm:p-8">
            <h3 className="font-display text-2xl">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="surface-card mt-8 rounded-sm p-6 sm:p-9 text-center">
        <p className="eyebrow">The Venue</p>
        <h3 className="mt-3 font-display text-3xl">{content.venue.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{content.venue.location}</p>
        <a
          href={content.venue.url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block rounded-sm bg-primary px-8 py-3.5 text-[0.7rem] tracking-[0.3em] text-primary-foreground uppercase transition hover:opacity-90"
        >
          Visit the Resort
        </a>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Any travel questions at all — WhatsApp{" "}
          {content.contacts.map((c, i) => (
            <span key={c.name}>
              {i > 0 ? " or " : ""}
              <a
                href={`https://wa.me/${c.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="text-accent underline underline-offset-4"
              >
                {c.name}
              </a>
            </span>
          ))}
          .
        </p>
      </div>
    </div>
  );
}
