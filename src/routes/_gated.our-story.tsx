import { createFileRoute } from "@tanstack/react-router";

import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/_gated/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Lalita & Ayush" },
      {
        name: "description",
        content:
          "Miles apart, meant to be: how a swipe right on Hinge became a wedding in Sri Lanka.",
      },
      { property: "og:title", content: "Our Story — Lalita & Ayush" },
      {
        property: "og:description",
        content: "A swipe right, long distance, and a first meeting on Valentine's Day.",
      },
    ],
  }),
  component: OurStory,
});

const chapters = [
  {
    number: "I",
    title: "A Swipe Right",
    paragraphs: [
      "Like many modern love stories, ours began with a swipe right on Hinge.",
      "Lalita was in Singapore on a work trip while Ayush was away on holiday, so although we matched, we didn't get to meet. Most people would have let the conversation fizzle out. Somehow, we kept talking.",
      "Months of daily calls followed, despite conversations that could generously be described as some of the driest known to mankind. Looking back, it's a miracle either of us stuck around. Ayush's flirting skills (or lack thereof) certainly didn't help — and Lalita made sure he knew it.",
    ],
  },
  {
    number: "II",
    title: "Long Distance",
    paragraphs: [
      "Somewhere between the awkward jokes, endless conversations, and getting to know each other from opposite sides of the world, Ayush stopped trying to impress Lalita and simply got to know her for who she really was.",
      "Then life threw us an unexpected curveball. While we were still 3,500 miles apart, Lalita was injured and unable to walk. It wasn't the romantic chapter we'd imagined, but it became one of the most meaningful. From afar, Ayush made sure her favourite desserts kept arriving at her door and was never more than a WhatsApp video call away (thanks to a VPN).",
      "Turns out, love travels surprisingly well over video calls — especially when dessert is involved.",
    ],
  },
  {
    number: "III",
    title: "The First Meeting",
    paragraphs: [
      "Months later, and with a little encouragement from his best friend's wife (thank you, Alisha!), Ayush finally booked a flight to Dubai. We met for the first time on Valentine's Day.",
      "The moment we met, everything just clicked. Since then, we've shared countless flights, adventures, new cities, and memories we'll treasure forever.",
    ],
  },
];

function OurStory() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:py-28">
      <div className="text-center">
        <p className="eyebrow">Our Story</p>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl">
          Miles Apart,
          <br />
          <span className="italic">Meant to Be</span>
        </h1>
        <div className="rule-gold mx-auto mt-7 max-w-40" />
      </div>

      <div className="mt-16 space-y-16">
        {chapters.map((c) => (
          <article key={c.number}>
            <p className="font-display text-3xl text-accent">{c.number}</p>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl">{c.title}</h2>
            <div className="mt-5 space-y-4">
              {c.paragraphs.map((p, i) => (
                <p key={i} className="leading-[1.9] text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 text-center">
        <SectionHeading
          title="And now, Sri Lanka"
          intro="Three days, one island, and every person we love in one place."
        />
      </div>
    </div>
  );
}
