import { createFileRoute } from "@tanstack/react-router";
import { useWedding } from "@/lib/use-wedding";

import srilankaImg from "@/assets/srilanka.jpg";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/_gated/sri-lanka")({
  head: () => ({
    meta: [
      { title: "About Sri Lanka — Lalita & Ayush" },
      {
        name: "description",
        content:
          "Must-see attractions, the best restaurants, beach clubs, bars and night spots in Colombo, Bentota, Galle and the south coast.",
      },
      { property: "og:title", content: "About Sri Lanka — Lalita & Ayush" },
      {
        property: "og:description",
        content:
          "Our guide to the island: where to go, eat, swim and dance while you're here.",
      },
    ],
  }),
  component: SriLanka,
});

function SriLanka() {
  const { content } = useWedding();

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:py-28">
      <SectionHeading
        eyebrow="The Island"
        title="About Sri Lanka"
        intro="Tea hills, leopards, surf towns and some of the best food in Asia — all within a few hours of the resort. Come early, stay late."
      />

      <img
        src={srilankaImg}
        alt="Misty tea plantation hills in Sri Lanka at sunrise"
        loading="lazy"
        width={1400}
        height={900}
        className="mt-14 h-52 w-full rounded-sm object-cover sm:h-72 sm:h-[26rem]"
      />

      <section className="mt-20">
        <h2 className="font-display text-3xl sm:text-4xl">Must-see</h2>
        <div className="rule-gold mt-5 max-w-32" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.attractions.map((a: { name: string; note: string }) => (
            <div key={a.name} className="surface-card rounded-sm p-6 sm:p-7">
              <h3 className="font-display text-xl leading-snug">{a.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {a.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-3xl sm:text-4xl">
          Eat, drink &amp; dance
        </h2>
        <div className="rule-gold mt-5 max-w-32" />
        <div className="mt-10 space-y-14">
          {content.areas.map((area) => (
            <div key={area.area}>
              <p className="eyebrow">{area.area}</p>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
                {area.blurb}
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {area.spots.map((s) => (
                  <div
                    key={s.name}
                    className="surface-card flex flex-col rounded-sm p-6 sm:p-7"
                  >
                    <span className="text-[0.6rem] tracking-[0.26em] text-accent uppercase">
                      {s.kind}
                    </span>
                    <h3 className="mt-2 font-display text-xl leading-snug">
                      {s.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.note}
                    </p>
                    {s.instagram ? (
                      <a
                        href={s.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 text-[0.62rem] tracking-[0.26em] uppercase underline underline-offset-4 transition hover:text-accent"
                      >
                        Instagram →
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
