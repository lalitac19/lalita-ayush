import { createServerFn } from "@tanstack/react-start";

import type { RsvpInput } from "./rsvp-types";
import { validateRsvp } from "./rsvp-validate";

export type { RsvpInput };

export const submitRsvp = createServerFn({ method: "POST" })
  .inputValidator((data: RsvpInput) => validateRsvp(data))
  .handler(async ({ data }) => {
    const { saveRsvp, sendRsvpConfirmation } = await import("./rsvp.server");
    const token = await saveRsvp(data);
    if (data.attending === "Yes, count me in") {
      await sendRsvpConfirmation(data, token);
    }
    return { ok: true as const, token };
  });

export const loadRsvp = createServerFn({ method: "POST" })
  .inputValidator((data: { token: string }) => ({
    token: String(data?.token ?? "")
      .trim()
      .slice(0, 64),
  }))
  .handler(async ({ data }) => {
    if (!data.token) return null;
    const { loadRsvpByToken } = await import("./rsvp.server");
    return await loadRsvpByToken(data.token);
  });
