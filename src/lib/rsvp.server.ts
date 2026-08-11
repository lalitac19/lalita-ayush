import { buildRsvpEmail } from "./rsvp-email";
import type { RsvpInput } from "./rsvp-types";

const SPREADSHEET_ID = "1y9U0vg9in58bKAMVD4tAlfUTdWvuvyVcLp6Oh9_Iri4";
const SHEETS_BASE = `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${SPREADSHEET_ID}`;
const GMAIL_BASE = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";
const SITE_URL = "https://www.thedamanis.com";

function sheetsHeaders() {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const connectionKey = process.env["GOOGLE_SHEETS_API_KEY"];
  if (!lovableKey || !connectionKey) {
    throw new Error("RSVP storage is not configured yet.");
  }
  return {
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": connectionKey,
    "Content-Type": "application/json",
  };
}

const RETRY_DELAYS_MS = [600, 1500, 3000];

async function sheetsFetch(path: string, init?: RequestInit) {
  let lastStatus = 0;
  let lastBody = "";
  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt += 1) {
    const response = await fetch(`${SHEETS_BASE}${path}`, {
      ...init,
      headers: sheetsHeaders(),
    });
    if (response.ok) return (await response.json()) as { values?: string[][] };

    lastStatus = response.status;
    lastBody = await response.text();
    console.error(`Sheets request failed [${lastStatus}]: ${lastBody}`);

    // Retry transient failures only (rate limit / upstream hiccup).
    const retryable = lastStatus === 429 || lastStatus >= 500;
    const delay = RETRY_DELAYS_MS[attempt];
    if (!retryable || delay === undefined) break;
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  throw new Error("We couldn't reach the guest list just now. Please try again in a moment.");
}


export function newToken(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(12));
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

export function editUrlFor(token: string): string {
  return `${SITE_URL}/rsvp?edit=${token}`;
}

function toRow(data: RsvpInput, token: string): string[] {
  return [
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
    token,
  ];
}

function fromRow(row: string[]): RsvpInput {
  return {
    fullName: row[0] ?? "",
    attending: row[1] ?? "",
    starter: row[2] ?? "",
    main: row[3] ?? "",
    dietary: row[4] ?? "",
    alcoholDessert: row[5] ?? "",
    arriving19th: row[6] ?? "",
    song: row[7] ?? "",
    email: row[8] ?? "",
    whatsapp: row[9] ?? "",
    token: row[10] ?? "",
  };
}

async function findRowIndex(token: string): Promise<number | null> {
  const data = await sheetsFetch("/values/RSVP!A2:K1000");
  const rows = data.values ?? [];
  const index = rows.findIndex((row) => (row[10] ?? "") === token);
  return index === -1 ? null : index + 2; // sheet row number
}

export async function loadRsvpByToken(token: string): Promise<RsvpInput | null> {
  const data = await sheetsFetch("/values/RSVP!A2:K1000");
  const row = (data.values ?? []).find((r) => (r[10] ?? "") === token);
  return row ? fromRow(row) : null;
}

/** Appends a new RSVP row, or updates the existing row when editing. */
export async function saveRsvp(data: RsvpInput): Promise<string> {
  const token = data.token && data.token.length > 0 ? data.token : newToken();
  const values = [toRow(data, token)];

  const existingRow = data.token ? await findRowIndex(data.token) : null;

  if (existingRow) {
    await sheetsFetch(
      `/values/RSVP!A${existingRow}:K${existingRow}?valueInputOption=RAW`,
      { method: "PUT", body: JSON.stringify({ values }) },
    );
  } else {
    await sheetsFetch(
      "/values/RSVP!A2:K2:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS",
      { method: "POST", body: JSON.stringify({ values }) },
    );
  }

  return token;
}

function base64Url(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function encodeSubject(subject: string): string {
  return `=?UTF-8?B?${base64Url(subject).replace(/-/g, "+").replace(/_/g, "/")}=?=`;
}

/** Sends the styled confirmation email. Never throws — a failed email must not lose an RSVP. */
export async function sendRsvpConfirmation(data: RsvpInput, token: string): Promise<void> {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const gmailKey = process.env["GOOGLE_MAIL_API_KEY"];
  if (!lovableKey || !gmailKey || !data.email) {
    console.warn("RSVP confirmation email skipped — email connection not configured.");
    return;
  }

  const { subject, html, text } = buildRsvpEmail(data, editUrlFor(token));
  const boundary = `rsvp-${token}`;
  const message = [
    `To: ${data.email}`,
    `Subject: ${encodeSubject(subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "",
    text,
    "",
    `--${boundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    "",
    html,
    "",
    `--${boundary}--`,
  ].join("\r\n");

  try {
    const response = await fetch(`${GMAIL_BASE}/users/me/messages/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": gmailKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw: base64Url(message) }),
    });
    if (!response.ok) {
      console.error(`RSVP email failed [${response.status}]: ${await response.text()}`);
    }
  } catch (error) {
    console.error("RSVP email failed", error);
  }
}
