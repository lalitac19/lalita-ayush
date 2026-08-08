import { createFileRoute } from "@tanstack/react-router";
import { CalendarPlus, Clock, Download, MapPin, Navigation } from "lucide-react";
import { useWedding } from "@/lib/use-wedding";
import type { EventItem } from "@/lib/wedding-types";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SectionHeading } from "@/components/SectionHeading";

import formalSmall from "@/assets/opt/summer-formal-640.webp";
import formalLarge from "@/assets/opt/summer-formal-1440.webp";
import poolSmall from "@/assets/opt/pool2-640.webp";
import poolLarge from "@/assets/opt/pool2-1440.webp";
import sangeetSmall from "@/assets/opt/sangeet2-640.webp";
import sangeetLarge from "@/assets/opt/sangeet2-1440.webp";
import resortMapSmall from "@/assets/opt/avani-resort-map-640.webp";
import resortMapLarge from "@/assets/opt/avani-resort-map-1440.webp";

function downloadIcs(ev: EventItem) {
  if (!ev.start) return;
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Lalita and Ayush//Wedding//EN",
    "BEGIN:VEVENT",
    `UID:${ev.start}-${ev.title.replace(/\s+/g, "-").toLowerCase()}@lalita-ayush`,
    `DTSTAMP:${ev.start}`,
    `DTSTART:${ev.start}`,
    `DTEND:${ev.end ?? ev.start}`,
    `SUMMARY:${ev.title} — Lalita & Ayush`,
    `DESCRIPTION:${ev.detail.replace(/,/g, "\\,")}`,
    `LOCATION:${(ev.location ?? "Avani Kalutara Resort").replace(/,/g, "\\,")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const url = URL.createObjectURL(
    new Blob([ics], { type: "text/calendar;charset=utf-8" }),
  );
  const a = document.createElement("a");
  a.href = url;
  a.download = `${ev.title.replace(/\s+/g, "-").toLowerCase()}.ics`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export const Route = createFileRoute("/_gated/events")({
  head: () => ({
    meta: [
      { title: "The Weekend — Lalita & Ayush" },
      {
        name: "description",
        content:
          "Timeline of the wedding weekend: beach civil ceremony, garden reception, pool party and Sangeet — plus a dress code guide for every event.",
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

const dressCodes = [
  {
    event: "Civil Ceremony · Dinner & Dance",
    title: "Summer Formal",
    detail:
      "Pastels, florals and soft colour — colour is encouraged. Linen suits, flowing dresses and heels that can handle sand. Please avoid black, white and red.",
    small: formalSmall,
    large: formalLarge,
    alt: "Summer formal dress code illustration — linen suits and floral maxi dresses",
  },
  {
    event: "Pool Party",
    title: "Resort Beach Chic",
    detail:
      "Elegant swimwear, kaftans and cover-ups, open linen shirts and swim shorts. Sunglasses essential.",
    small: poolSmall,
    large: poolLarge,
    alt: "Pool party dress code illustration — swimwear, kaftans and linen shirts",
  },
  {
    event: "Sangeet, Dinner & DJ Night",
    title: "Bollywood Glam",
    detail:
      "Indian and Indo-Western at its most vibrant — sarees, lehengas, bandhgalas and kurtas. The brighter the better, and made for dancing.",
    small: sangeetSmall,
    large: sangeetLarge,
    alt: "Sangeet dress code illustration — colourful sarees, lehengas and bandhgalas",
  },
];

function Events() {
  const { content } = useWedding();

  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-14 sm:py-28">
      <SectionHeading
        eyebrow="20 — 22 February 2027"
        title="The Weekend"
        intro="A beach ceremony, a garden dinner, an afternoon by the pool and a night of Bollywood glam. Everything you need to know for the weekend is below, including the dress code for each event at the bottom of the page."
      />

      <div className="mt-8 flex justify-center">
        <a
          href="/lalita-ayush-weekend-itinerary.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full border border-accent/60 bg-secondary/60 px-5 py-3 text-[0.72rem] font-bold tracking-[0.2em] uppercase transition-colors hover:bg-accent/15 sm:px-6 sm:text-[0.75rem]"
        >
          <Download className="h-4 w-4 shrink-0 text-accent" aria-hidden />
          Download the itinerary (PDF)
        </a>
      </div>


      <div className="mt-12 space-y-14 sm:space-y-20">
        {content.days.map((day) => (
          <section key={day.date}>
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5">
              <div className="shrink-0 text-center">
                <div className="font-display text-4xl leading-none sm:text-5xl">{day.date}</div>
                <div className="mt-1 text-[0.6rem] tracking-[0.24em] text-muted-foreground uppercase">
                  Feb
                </div>
              </div>
              <div className="min-w-0">
                <p className="eyebrow">{day.weekday}</p>
                <h2 className="font-display text-2xl leading-tight sm:text-3xl">{day.label}</h2>
              </div>
            </div>
            <div className="rule-gold mt-6" />

            <div className="mt-8 space-y-6">
              {day.events.map((ev) => (
                <article
                  key={ev.title}
                  className="surface-card overflow-hidden rounded-sm"
                >
                  <div className="p-5 text-center sm:p-9">
                    <h3 className="font-display text-xl leading-tight sm:text-3xl">
                      {ev.title}
                    </h3>
                    <p className="mt-3 inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-accent/15 px-3.5 py-1.5 font-display text-base font-semibold text-balance text-foreground sm:px-4 sm:text-xl">
                      <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {ev.time}
                    </p>

                    {ev.start || ev.mapsUrl ? (
                      <div className="mt-5 flex flex-wrap justify-center gap-2.5 sm:gap-3">
                        {ev.start ? (
                          <button
                            type="button"
                            onClick={() => downloadIcs(ev)}
                            className="inline-flex items-center gap-2 rounded-full border border-accent/50 px-4 py-2.5 text-[0.72rem] tracking-wide transition-colors hover:bg-accent/10 sm:px-5 sm:text-[0.78rem]"
                          >
                            <CalendarPlus className="h-4 w-4 shrink-0" aria-hidden />
                            Add to Calendar
                          </button>
                        ) : null}
                        {ev.mapsUrl ? (
                          <a
                            href={ev.mapsUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-accent/50 px-4 py-2.5 text-[0.72rem] tracking-wide transition-colors hover:bg-accent/10 sm:px-5 sm:text-[0.78rem]"
                          >
                            <Navigation className="h-4 w-4 shrink-0" aria-hidden />
                            Directions
                          </a>
                        ) : null}
                      </div>
                    ) : null}

                    <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
                      {ev.detail}
                    </p>

                    {ev.location ? (
                      <p className="mt-5 inline-flex max-w-full items-start justify-center gap-2 rounded-sm border border-accent/40 bg-secondary/50 px-3.5 py-2.5 text-left text-[0.88rem] font-medium text-balance text-foreground sm:px-4 sm:text-[0.95rem]">
                        <MapPin
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          aria-hidden
                        />
                        <span className="min-w-0">{ev.location}</span>
                      </p>
                    ) : null}
                  </div>

                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-20 sm:mt-28">
        <SectionHeading
          eyebrow="Dress code"
          title="What to Wear"
          intro="Sri Lanka in February is warm and humid — think breathable fabrics, and heels that can handle sand and grass."
        />

        <div className="mt-10 space-y-6 sm:space-y-8">
          {dressCodes.map((dc) => (
            <article key={dc.title} className="surface-card overflow-hidden rounded-sm">
              <img
                src={dc.small}
                srcSet={`${dc.small} 640w, ${dc.large} 1440w`}
                sizes="(max-width: 768px) 92vw, 900px"
                alt={dc.alt}
                loading="lazy"
                decoding="async"
                className="w-full object-cover"
              />
              <div className="p-5 text-center sm:p-9">
                <p className="eyebrow text-balance">{dc.event}</p>
                <h3 className="mt-3 inline-block max-w-full rounded-full bg-accent/20 px-4 py-2 font-display text-xl font-semibold text-balance text-foreground sm:px-5 sm:text-3xl">
                  {dc.title}
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
                  {dc.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 sm:mt-28">
        <SectionHeading
          eyebrow="Good to know"
          title="Q&A"
          intro="And if we've missed anything at all, just message us."
        />

        <div className="mt-10">
          <FaqAccordion
            faqs={content.faqs}
            contacts={content.contacts}
            honeymoonFund={content.honeymoonFund}
          />
        </div>
      </section>

      <section className="mt-20 sm:mt-28">
        <SectionHeading
          eyebrow="Getting around"
          title="Resort Map"
          intro="Find your way between the ceremony, dinner and party spots at Avani Kalutara Resort."
        />
        <div className="mt-10 overflow-hidden rounded-sm border border-accent/40">
          <img
            src={resortMapSmall}
            srcSet={`${resortMapSmall} 640w, ${resortMapLarge} 1440w`}
            sizes="(max-width: 768px) 92vw, 900px"
            alt="Illustrated map of Avani Kalutara Resort showing the entrance, reception, restaurants, pool, beach, Anantara Ballroom and River Mouth"
            loading="lazy"
            decoding="async"
            className="w-full"
          />
        </div>
      </section>

    </div>
  );
}
