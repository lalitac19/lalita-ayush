import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { PhotoImage } from "@/components/PhotoImage";
import { heroPhoto } from "@/lib/photos";

import { Countdown } from "@/components/Countdown";
import { Monogram } from "@/components/Monogram";
import { unlockSite } from "@/lib/gate.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lalita & Ayush — 20–22 February 2027, Sri Lanka" },
      {
        name: "description",
        content:
          "Lalita & Ayush Damani are getting married at Avani Kalutara, Sri Lanka, 20–22 February 2027. Enter the guest password for all the details.",
      },
      {
        property: "og:title",
        content: "Lalita & Ayush — 20–22 February 2027, Sri Lanka",
      },
      {
        property: "og:description",
        content:
          "An Indo-Western fusion wedding on the west coast of Sri Lanka. Enter the guest password for all the details.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  const router = useRouter();
  const unlock = useServerFn(unlockSite);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError(false);
    try {
      const res = await unlock({ data: { password } });
      if (res.ok) {
        await router.navigate({ to: "/celebration" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <PhotoImage
        photo={heroPhoto}
        alt="Lalita and Ayush walking under the palms"
        sizes="100vw"
        priority
        className="absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-center"
      />

      <div className="absolute inset-0 bg-[oklch(0.24_0.025_62)]/45" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-5 py-14 text-center sm:px-6 sm:py-16">
        <Monogram light className="h-20 w-auto opacity-95 sm:h-32" />

        <p className="eyebrow mt-6 text-background/80 sm:mt-8">{"\n"}</p>

        <h1 className="mt-3 font-display text-[2.75rem] leading-[1.05] font-semibold text-background sm:mt-4 sm:text-7xl">
          Lalita
          <span className="mx-2 italic opacity-80 sm:mx-3">&amp;</span>
          Ayush
        </h1>

        <div className="rule-gold mt-6 w-32 sm:mt-7 sm:w-40" />

        <p className="mt-5 font-display text-lg tracking-[0.14em] text-background sm:mt-6 sm:text-2xl sm:tracking-[0.18em]">
          20 — 22 FEBRUARY 2027
        </p>
        <p className="mt-2 text-[0.65rem] tracking-[0.22em] text-background/75 uppercase sm:text-[0.72rem] sm:tracking-[0.3em]">
          Avani Kalutara · Sri Lanka
        </p>

        <div className="mt-10 w-full sm:mt-12">
          <Countdown light />
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-10 w-full max-w-sm rounded-sm border border-background/25 bg-background/10 p-5 backdrop-blur-md sm:mt-14 sm:p-6"
        >
          <label
            htmlFor="password"
            className="block text-[0.68rem] tracking-[0.28em] text-background/85 uppercase"
          >
            Guest password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            maxLength={100}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter the weekend"
            className="mt-4 w-full rounded-sm border border-background/35 bg-background/10 px-4 py-3 text-center text-base text-background tracking-[0.2em] outline-none transition placeholder:text-background/45 focus:border-accent"
          />
          {error ? (
            <p className="mt-3 text-xs tracking-wide text-background/90">
              That password isn't quite right — do try again.
            </p>
          ) : null}
          <button
            type="submit"
            disabled={busy}
            className="mt-4 w-full cursor-pointer rounded-sm bg-accent px-4 py-3.5 text-[0.7rem] font-medium tracking-[0.3em] text-accent-foreground uppercase transition hover:opacity-90 disabled:opacity-60"
          >
            {busy ? "Opening…" : "Enter"}
          </button>
          <p className="mt-4 text-[0.7rem] leading-relaxed text-background/65">
            The password is on your invitation message. Lost it?{" "}
            <a
              href="https://wa.me/447565790424?text=Hey,%20what%20is%20the%20password?"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition hover:text-background"
            >
              WhatsApp us
            </a>
            .
          </p>
        </form>
      </div>
    </main>
  );
}
