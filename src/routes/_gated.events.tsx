import { createFileRoute } from "@tanstack/react-router";
import { useWedding } from "@/lib/use-wedding";

import ceremonyImg from "@/assets/ceremony.jpg";
import receptionImg from "@/assets/reception.jpg";
import poolSmall from "@/assets/opt/pool-party-640.webp.asset.json";
import poolLarge from "@/assets/opt/pool-party-1440.webp.asset.json";
import sangeetSmall from "@/assets/opt/sangeet-640.webp.asset.json";
import sangeetLarge from "@/assets/opt/sangeet-1440.webp.asset.json";
import { SectionHeading } from "@/components/SectionHeading";

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

const imageMap: Record<
  string,
  { src: string; srcSet?: string; alt: string }
> = {
  ceremony: { src: ceremonyImg, alt: "Beach ceremony arch at dusk" },
  reception: { src: receptionImg, alt: "Garden reception under string lights" },
  pool: {
    src: poolSmall.url,
    srcSet: `${poolSmall.url} 640w, ${poolLarge.url} 1440w`,
    alt: "Pool party dress code illustration — resort beach chic",
  },
  sangeet: {
    src: sangeetSmall.url,
    srcSet: `${sangeetSmall.url} 640w, ${sangeetLarge.url} 1440w`,
    alt: "Sangeet dress code illustration — Indian and Indo-Western glam",
  },
};

function Events() {
  const { content } = useWedding();

  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-14 sm:py-28">
      <SectionHeading
        eyebrow="20 — 22 February 2027"
        title="The Weekend"
        intro="A beach ceremony, a garden dinner, an afternoon by the pool and a night of Bollywood glam. Here is how it all unfolds."
      />

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
              {day.events.map((ev) => {
                const img = ev.image ? imageMap[ev.image] : undefined;
                return (
                  <article
                    key={ev.title}
                    className="surface-card overflow-hidden rounded-sm"
                  >
                    {img ? (
                      <img
                        src={img.src}
                        srcSet={img.srcSet}
                        sizes="(max-width: 768px) 92vw, 900px"
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-52 w-full object-cover object-top sm:h-72"
                      />
                    ) : null}
                    <div className="p-6 text-center sm:p-9">
                      <h3 className="font-display text-2xl sm:text-3xl">
                        {ev.title}
                      </h3>
                      <p className="mt-2 text-[0.7rem] tracking-[0.26em] text-accent uppercase">
                        {ev.time}
                      </p>

                      {ev.start || ev.mapsUrl ? (
                        <div className="mt-5 flex flex-wrap justify-center gap-3">
                          {ev.start ? (
                            <button
                              type="button"
                              onClick={() => downloadIcs(ev)}
                              className="inline-flex items-center gap-2 rounded-full border border-accent/50 px-5 py-2.5 text-[0.78rem] tracking-wide transition-colors hover:bg-accent/10"
                            >
                              <CalendarPlus className="h-4 w-4" aria-hidden />
                              Add to Calendar
                            </button>
                          ) : null}
                          {ev.mapsUrl ? (
                            <a
                              href={ev.mapsUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-accent/50 px-5 py-2.5 text-[0.78rem] tracking-wide transition-colors hover:bg-accent/10"
                            >
                              <Navigation className="h-4 w-4" aria-hidden />
                              Directions
                            </a>
                          ) : null}
                        </div>
                      ) : null}

                      <p className="mt-5 leading-relaxed text-muted-foreground">
                        {ev.detail}
                      </p>

                      {ev.theme ? (
                        <p className="mt-4 inline-flex items-start justify-center gap-2 text-[0.95rem] leading-relaxed">
                          <Shirt
                            className="mt-1 h-4 w-4 shrink-0 text-accent"
                            aria-hidden
                          />
                          <span className="font-display text-lg leading-snug">
                            {ev.theme}
                          </span>
                        </p>
                      ) : null}

                      {ev.location ? (
                        <p className="mt-4 inline-flex items-start justify-center gap-2 text-[0.9rem] text-muted-foreground">
                          <MapPin
                            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                            aria-hidden
                          />
                          <span>{ev.location}</span>
                        </p>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <div className="surface-card mt-20 rounded-sm p-6 sm:p-9 text-center">
        <p className="eyebrow">A gentle note on outfits</p>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
          Sri Lanka in February is warm and humid — think breathable fabrics, and
          heels that can handle sand and grass. For the civil ceremony please
          avoid black, white and red. For the Sangeet, the brighter the better.
        </p>
      </div>
    </div>
  );
}
