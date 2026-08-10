import { createServerFn } from "@tanstack/react-start";

export type RsvpInput = {
  fullName: string;
  attending: string;
  starter: string;
  main: string;
  dietary: string;
  alcoholDessert: string;
  arriving19th: string;
  song: string;
  email: string;
  whatsapp: string;
};

const SPREADSHEET_ID = "1y9U0vg9in58bKAMVD4tAlfUTdWvuvyVcLp6Oh9_Iri4";

function clean(value: unknown, max = 500): string {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

export const submitRsvp = createServerFn({ method: "POST" })
  .inputValidator((data: RsvpInput) => {
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
  })
  .handler(async ({ data }) => {
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const connectionKey = process.env["GOOGLE_SHEETS_API_KEY"];
    if (!lovableKey || !connectionKey) {
      throw new Error("RSVP storage is not configured yet.");
    }

    const row = [
      data.fullName,
      data.attending,
      data.starter,
      data.main,
      data.dietary,
      data.alcoholDessert,
      data.arriving19th,
      data.song,
      data.email,
      data.whatsapp,
    ];

    const url =
      `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${SPREADSHEET_ID}` +
      `/values/RSVP!A2:J2:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": connectionKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [row] }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`RSVP save failed [${response.status}]: ${errorBody}`);
      throw new Error("We couldn't save your RSVP just now. Please try again.");
    }

    return { ok: true as const };
  });
