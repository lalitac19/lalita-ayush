import { createFileRoute, Link } from "@tanstack/react-router";
import { useWedding } from "@/lib/use-wedding";

import { Countdown } from "@/components/Countdown";
import { PhotoImage } from "@/components/PhotoImage";
import { SectionHeading } from "@/components/SectionHeading";
import { WeekendTimeline } from "@/components/WeekendTimeline";
import { QandA, RsvpCta } from "@/components/QandA";
import { celebrationPhoto } from "@/lib/photos";

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
        <PhotoImage
          photo={celebrationPhoto}
          alt="Lalita and Ayush hand in hand"
          sizes="100vw"
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[oklch(0.18_0.02_62)]/60" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-6 sm:py-32">
          <p className="eyebrow text-background/90 [text-shadow:0_1px_10px_oklch(0.15_0.02_62/0.75)]">
            Welcome
          </p>
          <h1 className="mt-4 font-display text-[2.25rem] leading-[1.08] font-semibold text-background [text-shadow:0_2px_18px_oklch(0.15_0.02_62/0.8)] sm:text-6xl">
            We're getting married!
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-background [text-shadow:0_1px_12px_oklch(0.15_0.02_62/0.85)]">
            After countless flights, adventures, and far too many airport
            goodbyes, we're finally celebrating our greatest adventure yet.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-[0.95rem] leading-relaxed text-background [text-shadow:0_1px_12px_oklch(0.15_0.02_62/0.85)]">
            We can't wait to celebrate with you in Sri Lanka!
          </p>
          <div className="mt-12 [text-shadow:0_1px_12px_oklch(0.15_0.02_62/0.8)]">
            <Countdown light />
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              to="/events"
              className="rounded-sm bg-accent px-8 py-3.5 text-[0.7rem] tracking-[0.3em] text-accent-foreground uppercase transition hover:opacity-90"
            >
              The Weekend Celebrations
            </Link>
            <a
              href={content.rsvpUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-background/60 bg-background/10 px-8 py-3.5 text-[0.7rem] tracking-[0.3em] text-background uppercase transition hover:bg-background/20"
            >
              RSVP
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:py-28">
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
              className="surface-card glass-sheen group flex flex-col rounded-sm p-6 sm:p-8 hover:-translate-y-1"
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

      <section className="mx-auto w-full max-w-5xl px-5 pb-14 sm:pb-24">
        <SectionHeading
          eyebrow="20 — 22 February 2027"
          title="The Weekend"
          intro="A beach ceremony, a garden dinner, an afternoon by the pool and a night of Bollywood glam. Here is how it all unfolds."
        />
        <div className="mt-12">
          <WeekendTimeline content={content} />
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-5 pb-16 sm:pb-28">
        <SectionHeading
          eyebrow="Good to know"
          title="Q&A"
          intro="And if we've missed anything at all, just message us."
        />
        <div className="mt-12">
          <QandA content={content} />
          <RsvpCta rsvpUrl={content.rsvpUrl} />
        </div>
      </section>
    </>
  );
}
