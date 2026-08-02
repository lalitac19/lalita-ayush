import { createFileRoute } from "@tanstack/react-router";
import { useWedding } from "@/lib/use-wedding";

import { SectionHeading } from "@/components/SectionHeading";

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

      <div className="mt-12">
        <FaqAccordion faqs={content.faqs} venueUrl={content.venue.url} />
      </div>


      <section className="mt-16">
        <h2 className="font-display text-3xl sm:text-4xl">
          Other important information
        </h2>
        <div className="rule-gold mt-5 max-w-32" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {content.travelInfo.map((t) => (
            <div key={t.title} className="surface-card rounded-sm p-6 sm:p-7">
              <h3 className="font-display text-xl leading-snug">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.detail}
              </p>
            </div>
          ))}
        </div>
      </section>


      <div className="surface-card mt-6 rounded-sm p-6 sm:p-9">
        <p className="eyebrow">Honeymoon fund</p>
        <div className="mt-4 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
          {content.honeymoon.map((line: string) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div className="surface-card mt-8 rounded-sm p-6 sm:p-9 text-center">
        <p className="eyebrow">WhatsApp us</p>
        <div className="mt-5 flex flex-wrap justify-center gap-4">
          {content.contacts.map((c: { name: string; phone: string }) => (
            <a
              key={c.name}
              href={`https://wa.me/${c.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-accent px-7 py-3 transition hover:bg-secondary"
            >
              <span className="block font-display text-xl">{c.name}</span>
              <span className="mt-0.5 block text-[0.7rem] tracking-[0.16em] text-muted-foreground">
                {c.phone}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="eyebrow">Join our celebration</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl">RSVP</h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
          We can't wait to celebrate with you. Please let us know if you'll be
          joining us by 1st December 2026, so we can make the necessary
          arrangements and ensure you have the best possible weekend with us. If
          we don't hear from you by this date, we'll sadly assume you're not able
          to join.
        </p>
        <a
          href={content.rsvpUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-sm bg-primary px-10 py-4 text-[0.7rem] font-bold tracking-[0.3em] text-primary-foreground uppercase transition hover:opacity-90"
        >
          RSVP Now
        </a>
      </div>
    </div>
  );
}
