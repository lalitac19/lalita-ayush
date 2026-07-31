import { createHash, timingSafeEqual } from "node:crypto";

export type GateSession = { unlocked?: boolean };

export function gateSessionConfig() {
  return {
    password: process.env.SESSION_SECRET!,
    name: "wedding-gate",
    maxAge: 60 * 60 * 24 * 60,
    cookie: {
      httpOnly: true,
      secure: true,
      // "none" so the session survives inside the Lovable preview iframe
      // (a cross-site context, where "lax" cookies are dropped).
      sameSite: "none" as const,
      path: "/",
    },

  };
}

export function passwordMatches(input: string, expected: string): boolean {
  const a = createHash("sha256").update(input.trim().toLowerCase(), "utf8").digest();
  const b = createHash("sha256").update(expected.trim().toLowerCase(), "utf8").digest();
  return timingSafeEqual(a, b);
}
