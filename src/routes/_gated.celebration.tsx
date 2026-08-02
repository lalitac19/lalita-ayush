import { createFileRoute, Link } from "@tanstack/react-router";
import { useWedding } from "@/lib/use-wedding";

import { Countdown } from "@/components/Countdown";
import { PhotoImage } from "@/components/PhotoImage";
import { SectionHeading } from "@/components/SectionHeading";
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
    to: "/events",
    label: "The Weekend",
    text: "Timeline, ceremonies and what to wear for each event.",
  },
  { to: "/faq", label: "Q&A", text: "Kids, gifts, transport and who to call." },
  {
    to: "/sri-lanka",
    label: "About Sri Lanka",
    text: "Where to go, eat, swim and dance while you're on the island.",
  },
  {
    to: "/getting-there",
    label: "Getting There",
    text: "Flights, transfers and everything about the resort.",
  },
  {
    to: "/our-story",
    label: "Our Story",
    text: "Miles apart, meant to be — how a swipe right became a wedding.",
  },
  {
    to: "/moments",
    label: "Moments Together",
    text: "A few of our favourite pictures.",
  },
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

        <div className="absolute inset-0 bg-[oklch(0.24_0.025_62)]/45" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="on-image relative mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-6 sm:py-32">
          <p className="eyebrow text-background/80">Welcome</p>
          <h1 className="mt-4 font-display text-[2.25rem] leading-[1.08] font-semibold text-background sm:text-6xl">
            We're getting married!
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-background/85">
            We are so excited to invite you to celebrate our wedding with us in
            Kalutara, Sri Lanka.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-background/85">
            Join us from 20–22 February 2027 for an unforgettable weekend of
            celebrations. We'll begin with a beachfront civil ceremony, sunset
            cocktails, dinner and dancing on Saturday, before continuing with a
            day of poolside fun, a vibrant Sangeet celebration and a farewell
            breakfast to bring the festivities to a close.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-background/85">
            Please note that this will be an adults-only celebration, giving
            everyone the opportunity to relax, unwind and enjoy the festivities.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-background/85">
            We can't wait to celebrate with you!
          </p>
          <div className="mt-12">
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
              className="rounded-sm border border-background/50 px-8 py-3.5 text-[0.7rem] font-bold tracking-[0.3em] text-background uppercase transition hover:bg-background/10"
            >
              RSVP
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:py-28">
        <SectionHeading
          title="Explore"
          intro={
            <>
              From travel tips and accommodation to the weekend celebrations,
              you'll find everything you need below.{" "}
              <strong className="font-semibold text-foreground">
                Please RSVP by 7th November 2026.
              </strong>
            </>
          }
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="surface-card glass-sheen group flex flex-col rounded-sm p-6 sm:p-8 hover:-translate-y-1"
            >
              <span className="font-display text-2xl">{c.label}</span>
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
