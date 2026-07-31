import type { WeddingContent } from "@/lib/wedding-types";

export function QandA({ content }: { content: WeddingContent }) {
  return (
    <>
      <div className="space-y-8">
        {content.faqs.map((f) => (
          <div key={f.q} className="border-b border-border pb-8 last:border-0">
            <h3 className="font-display text-2xl">{f.q}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>

            {f.q.startsWith("Can I arrive earlier") ? (
              <a
                href={content.venue.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-[0.68rem] tracking-[0.24em] uppercase underline underline-offset-4 transition hover:text-accent"
              >
                Book at Avani Kalutara →
              </a>
            ) : null}

            {f.q.startsWith("Are gifts") ? (
              <div className="surface-card mt-5 rounded-sm p-5 sm:p-6">
                <p className="eyebrow">Honeymoon fund</p>
                <div className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                  {content.honeymoon.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <section className="mt-16">
        <h3 className="font-display text-3xl sm:text-4xl">
          Other important information
        </h3>
        <div className="rule-gold mt-5 max-w-32" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {content.travelInfo.map((t) => (
            <div key={t.title} className="surface-card rounded-sm p-6 sm:p-7">
              <h4 className="font-display text-xl leading-snug">{t.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="surface-card mt-8 rounded-sm p-6 text-center sm:p-9">
        <p className="eyebrow">WhatsApp us</p>
        <div className="mt-5 flex flex-wrap justify-center gap-4">
          {content.contacts.map((c) => (
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
    </>
  );
}

export function RsvpCta({ rsvpUrl }: { rsvpUrl: string }) {
  return (
    <div className="mt-16 text-center">
      <p className="eyebrow">Join our celebration</p>
      <h3 className="mt-3 font-display text-3xl sm:text-4xl">RSVP</h3>
      <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
        We can't wait to celebrate with you. Please let us know if you'll be
        joining us by 1st December 2026, so we can make the necessary
        arrangements and ensure you have the best possible weekend with us. If we
        don't hear from you by this date, we'll sadly assume you're not able to
        join.
      </p>
      <a
        href={rsvpUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block rounded-sm bg-primary px-10 py-4 text-[0.7rem] tracking-[0.3em] text-primary-foreground uppercase transition hover:opacity-90"
      >
        RSVP Now
      </a>
    </div>
  );
}
