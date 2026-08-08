export type EventItem = {
  time: string;
  title: string;
  detail: string;
  theme?: string;
  image?: "ceremony" | "reception" | "pool" | "sangeet";
  /** Venue name shown under the event */
  location?: string;
  /** Google Maps link for the Directions button */
  mapsUrl?: string;
  /** UTC start/end in ICS basic format, e.g. 20270220T073000Z */
  start?: string;
  end?: string;
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
    points: { title: string; detail: string; url?: string }[];
  };
  travelInfo: { title: string; detail: string; url?: string }[];
  discover: string[];
  faqs: Faq[];
  contacts: { name: string; phone: string }[];
  honeymoon: string[];
  areas: Area[];
  attractions: { name: string; note: string }[];
  rsvpUrl: string;
};
