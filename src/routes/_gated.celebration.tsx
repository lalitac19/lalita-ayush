import { createFileRoute, Link } from "@tanstack/react-router";
import { useWedding } from "@/lib/use-wedding";

import ceremonyImg from "@/assets/ceremony.jpg";
import { Countdown } from "@/components/Countdown";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/_gated/celebration")({
  head: () => ({
    meta: [
      { title: "The Celebration — Lalita & Ayush" },
      {
        name: "description",
        content:
          "Everything you need for Lalita & Ayush's wedding weekend at Avani Kalutara, Sri Lanka, 20–22 February 2027.",
      },
      { property: "og:title", content: "The Celebration — Lalita & Ayush" },
      {
        property: "og:description",
        content: "Three days of celebration on the west coast of Sri Lanka.",
      },
    ],
  }),
  component: Celebration,
});

const cards = [
  {
    to: "/our-story",
    label: "Our Story",
    text: "Miles apart, meant to be — how a swipe right became a wedding.",
  },
  {
    to: "/events",
    label: "The Weekend",
    text: "Timeline, ceremonies and what to wear for each event.",
  },
  {
    to: "/getting-there",
    label: "Getting There",
    text: "Flights, transfers and everything about the resort.",
  },
  {
    to: "/sri-lanka",
    label: "About Sri Lanka",
    text: "Where to go, eat, swim and dance while you're on the island.",
  },
  {
    to: "/moments",
    label: "Moments Together",
    text: "A few of our favourite pictures.",
  },
  { to: "/faq", label: "Q&A", text: "Kids, gifts, transport and who to call." },
] as const;

function Celebration() {
  const { content } = useWedding();

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={ceremonyImg}
          alt="Beach ceremony arch at dusk"
          width={1200}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto w-full max-w-4xl px-6 py-24 text-center sm:py-32">
          <p className="eyebrow text-background/80">Welcome, we're so glad you're here</p>
          <h1 className="mt-4 font-display text-4xl text-background sm:text-6xl">
            Three days in Sri Lanka
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-background/85">
            An Indo-Western fusion celebration at {content.venue.name}, where the
            Kalu river meets the Indian Ocean. Barefoot on the sand, dancing until
            far too late — and all of it better with you there.
          </p>
          <div className="mt-12">
            <Countdown light />
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a
              href={content.rsvpUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-accent px-8 py-3.5 text-[0.7rem] tracking-[0.3em] text-accent-foreground uppercase transition hover:opacity-90"
            >
              RSVP
            </a>
            <Link
              to="/events"
              className="rounded-sm border border-background/50 px-8 py-3.5 text-[0.7rem] tracking-[0.3em] text-background uppercase transition hover:bg-background/10"
            >
              The Weekend
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Everything you need"
          title="Explore"
          intro="Wander through the weekend at your own pace — and do let us know you're coming by 1st December 2026."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="surface-card group flex flex-col rounded-sm p-8 transition hover:-translate-y-1"
            >
              <span className="eyebrow">{c.label}</span>
              <span className="mt-3 font-display text-2xl">{c.label}</span>
              <span className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.text}
              </span>
              <span className="mt-6 text-[0.65rem] tracking-[0.28em] text-accent uppercase">
                View →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
