import type { RsvpInput } from "./rsvp-types";

const IVORY = "#F8F5F0";
const CHAMPAGNE = "#E8D9C8";
const ESPRESSO = "#3E322C";
const TAUPE = "#746A60";
const GOLD = "#C5A46D";
const SAGE = "#A9B5A2";
const LOGO_URL =
  "https://www.thedamanis.com/__l5e/assets-v1/93b8c14c-62d8-412c-9d15-6ea45dc43ccb/wedding-logo.jpg";

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string): string {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid ${CHAMPAGNE};font-family:Georgia,'Times New Roman',serif;font-size:13px;letter-spacing:1px;text-transform:uppercase;color:${GOLD};width:180px;vertical-align:top;">${esc(label)}</td>
      <td style="padding:10px 0;border-bottom:1px solid ${CHAMPAGNE};font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:1.6;color:${ESPRESSO};">${esc(value)}</td>
    </tr>`;
}

/** Guest confirmation email, styled to match the wedding site. */
export function buildRsvpEmail(data: RsvpInput, editUrl: string) {
  const firstName = data.fullName.split(" ")[0] || data.fullName;
  const rows = [
    row("Attending", data.attending),
    row("Starter", data.starter),
    row("Main course", data.main),
    row("Dietary notes", data.dietary),
    row("Alcohol in dessert", data.alcoholDessert),
    row("Arriving 19th Feb", data.arriving19th),
    row("Song request", data.song),
    row("Email", data.email),
    row("WhatsApp", data.whatsapp),
  ].join("");

  const html = `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:${IVORY};">
  <div style="display:none;max-height:0;overflow:hidden;">Your RSVP for Lalita &amp; Ayush, 20–22 February 2027.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${IVORY};padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:${IVORY};border:1px solid ${CHAMPAGNE};border-radius:4px;">
        <tr><td style="background-color:${ESPRESSO};padding:28px 24px;text-align:center;">
          <img src="${LOGO_URL}" width="96" height="96" alt="Lalita &amp; Ayush" style="display:block;margin:0 auto;width:96px;height:auto;border:0;" />
          <div style="margin-top:14px;font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:${GOLD};">20–22 February 2027 · Sri Lanka</div>
        </td></tr>
        <tr><td style="padding:32px 28px 8px 28px;">
          <h1 style="margin:0 0 18px 0;font-family:Georgia,'Times New Roman',serif;font-weight:bold;font-size:28px;color:${ESPRESSO};">Hi ${esc(firstName)},</h1>
          <p style="margin:0 0 16px 0;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.7;color:${TAUPE};">
            Thank you for RSVPing! We can't wait to celebrate with you in Sri Lanka from 20–22 February 2027.
          </p>
          <p style="margin:0 0 10px 0;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.7;color:${TAUPE};">Here's what you told us:</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
          <p style="margin:22px 0 18px 0;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.7;color:${TAUPE};">
            If anything needs to be changed, you can update your RSVP any time before <strong style="color:${ESPRESSO};">7th November 2026</strong> using the link below.
          </p>
          <p style="margin:0 0 26px 0;text-align:center;">
            <a href="${esc(editUrl)}" style="display:inline-block;background-color:${SAGE};color:${ESPRESSO};text-decoration:none;padding:14px 32px;border-radius:3px;font-family:Georgia,'Times New Roman',serif;font-size:12px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;">Edit my RSVP</a>
          </p>
          <p style="margin:0 0 6px 0;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.7;color:${TAUPE};">We can't wait to celebrate with you!</p>
          <p style="margin:0 0 28px 0;font-family:Georgia,'Times New Roman',serif;font-size:20px;color:${ESPRESSO};">Lalita &amp; Ayush</p>
        </td></tr>
        <tr><td style="background-color:${CHAMPAGNE};padding:16px 24px;text-align:center;font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${TAUPE};">
          Avani Kalutara Resort · Sri Lanka
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  const text = [
    `Hi ${firstName},`,
    "",
    "Thank you for RSVPing! We can't wait to celebrate with you at Avani Kalutara from 20-22 February 2027.",
    "",
    "Here's what you told us:",
    `Attending: ${data.attending}`,
    data.starter && `Starter: ${data.starter}`,
    data.main && `Main course: ${data.main}`,
    data.dietary && `Dietary notes: ${data.dietary}`,
    data.alcoholDessert && `Alcohol in dessert: ${data.alcoholDessert}`,
    data.arriving19th && `Arriving 19th Feb: ${data.arriving19th}`,
    data.song && `Song request: ${data.song}`,
    data.email && `Email: ${data.email}`,
    data.whatsapp && `WhatsApp: ${data.whatsapp}`,
    "",
    "You can update your RSVP any time before 7th November 2026:",
    editUrl,
    "",
    "We can't wait to celebrate with you!",
    "Lalita & Ayush",
  ]
    .filter(Boolean)
    .join("\n");

  return { subject: "Your RSVP — Lalita & Ayush, 20–22 Feb 2027", html, text };
}
