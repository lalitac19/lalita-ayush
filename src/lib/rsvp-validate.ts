import type { RsvpInput } from "./rsvp-types";

function clean(value: unknown, max = 500): string {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

export function validateRsvp(data: RsvpInput): RsvpInput {
  const attending = clean(data?.attending, 60);
  const fullName = clean(data?.fullName, 120);
  if (!fullName) throw new Error("Please tell us your full name.");
  if (attending !== "Yes, count me in" && attending !== "No, I can't make it") {
    throw new Error("Please let us know if you can join.");
  }
  const payload: RsvpInput = {
    fullName,
    attending,
    starter: clean(data?.starter, 300),
    main: clean(data?.main, 300),
    dietary: clean(data?.dietary, 500),
    alcoholDessert: clean(data?.alcoholDessert, 10),
    arriving19th: clean(data?.arriving19th, 10),
    song: clean(data?.song, 200),
    email: clean(data?.email, 200),
    whatsapp: clean(data?.whatsapp, 40),
    token: clean(data?.token, 64),
  };
  if (attending === "Yes, count me in") {
    const required: (keyof RsvpInput)[] = [
      "starter",
      "main",
      "dietary",
      "alcoholDessert",
      "arriving19th",
      "song",
      "email",
      "whatsapp",
    ];
    for (const key of required) {
      if (!payload[key]) throw new Error("Please answer every question.");
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(payload.email)) {
      throw new Error("Please enter a valid email address.");
    }
  } else {
    payload.starter = "";
    payload.main = "";
    payload.dietary = "";
    payload.alcoholDessert = "";
    payload.arriving19th = "";
    payload.song = "";
    payload.email = "";
    payload.whatsapp = "";
  }
  return payload;
}
