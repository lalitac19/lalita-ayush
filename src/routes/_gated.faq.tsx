import { createFileRoute, Link } from "@tanstack/react-router";
import { useWedding } from "@/lib/use-wedding";

import { FaqAccordion } from "@/components/FaqAccordion";
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
        <FaqAccordion
          faqs={content.faqs}
          contacts={content.contacts}
          honeymoonFund={content.honeymoonFund}
        />
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
              <p className="mt-3 text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
                {t.detail}
              </p>
              {t.url ? (
                <a
                  href={t.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-[0.68rem] tracking-[0.24em] uppercase underline underline-offset-4 transition hover:text-accent"
                >
                  Apply for your ETA →
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </section>


      <div className="mt-16 text-center">
        <p className="eyebrow">Join our celebration</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl">RSVP</h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
          We can't wait to celebrate with you. Please let us know if you'll be
          joining us by 7th November 2026, so we can make the necessary
          arrangements and ensure you have the best possible weekend with us. If
          we don't hear from you by this date, we'll sadly assume you're not able
          to join.
        </p>
        <Link
          to="/rsvp"
          className="mt-8 inline-block rounded-sm bg-primary px-10 py-4 text-[0.7rem] font-bold tracking-[0.3em] text-primary-foreground uppercase transition hover:opacity-90"
        >
          RSVP Now
        </Link>
      </div>
    </div>
  );
}
