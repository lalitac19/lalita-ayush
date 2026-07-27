import { createFileRoute } from "@tanstack/react-router";
import { useWedding } from "@/lib/use-wedding";

import ceremonyImg from "@/assets/ceremony.jpg";
import receptionImg from "@/assets/reception.jpg";
import poolAsset from "@/assets/pool-party.png.asset.json";
import sangeetAsset from "@/assets/sangeet.png.asset.json";
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

const imageMap: Record<string, { src: string; alt: string }> = {
  ceremony: { src: ceremonyImg, alt: "Beach ceremony arch at dusk" },
  reception: { src: receptionImg, alt: "Garden reception under string lights" },
  pool: {
    src: poolAsset.url,
    alt: "Pool party dress code illustration — resort beach chic",
  },
  sangeet: {
    src: sangeetAsset.url,
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

      <div className="mt-16 space-y-20">
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
                        alt={img.alt}
                        loading="lazy"
                        className="h-56 w-full object-cover object-top sm:h-72"
                      />
                    ) : null}
                    <div className="p-7 sm:p-9">
                      <p className="text-[0.68rem] tracking-[0.26em] text-accent uppercase">
                        {ev.time}
                      </p>
                      <h3 className="mt-2 font-display text-2xl sm:text-3xl">
                        {ev.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-muted-foreground">
                        {ev.detail}
                      </p>
                      {ev.theme ? (
                        <div className="mt-5 border-l-2 border-accent bg-secondary/60 px-5 py-4">
                          <p className="text-[0.62rem] tracking-[0.26em] text-muted-foreground uppercase">
                            Dress code
                          </p>
                          <p className="mt-1.5 font-display text-lg leading-snug">
                            {ev.theme}
                          </p>
                        </div>
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
