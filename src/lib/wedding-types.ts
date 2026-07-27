export type EventItem = {
  time: string;
  title: string;
  detail: string;
  theme?: string;
  image?: "ceremony" | "reception" | "pool" | "sangeet";
};

export type DayItem = {
  date: string;
  weekday: string;
  label: string;
  events: EventItem[];
};

export type Faq = { q: string; a: string };

export type Spot = {
  name: string;
  kind: string;
  note: string;
  instagram?: string;
};

export type Area = { area: string; blurb: string; spots: Spot[] };

export type WeddingContent = {
  venue: { name: string; location: string; url: string };
  days: DayItem[];
  travel: {
    heading: string;
    body: string;
    points: { title: string; detail: string }[];
  };
  faqs: Faq[];
  contacts: { name: string; phone: string }[];
  honeymoon: string[];
  areas: Area[];
  attractions: { name: string; note: string }[];
  rsvpUrl: string;
};
