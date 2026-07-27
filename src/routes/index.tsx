import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import heroImg from "@/assets/hero-beach.jpg";
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
      <img
        src={heroImg}
        alt="Sunset over a palm-fringed beach in Sri Lanka"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
        <Monogram light className="h-24 w-auto opacity-95 sm:h-32" />

        <p className="eyebrow mt-8 text-background/80">{"\n"}</p>

        <h1 className="mt-4 font-display text-5xl leading-[1.05] text-background sm:text-7xl">
          Lalita
          <span className="mx-3 italic opacity-80">&amp;</span>
          Ayush
        </h1>

        <div className="rule-gold mt-7 w-40" />

        <p className="mt-6 font-display text-xl tracking-[0.18em] text-background sm:text-2xl">
          20 — 22 FEBRUARY 2027
        </p>
        <p className="mt-2 text-[0.72rem] tracking-[0.3em] text-background/75 uppercase">
          Avani Kalutara · Sri Lanka
        </p>

        <div className="mt-12 w-full">
          <Countdown light />
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-14 w-full max-w-sm rounded-sm border border-background/25 bg-background/10 p-6 backdrop-blur-md"
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
            placeholder="Enter password"
            className="mt-4 w-full rounded-sm border border-background/35 bg-background/10 px-4 py-3 text-center text-background tracking-[0.2em] outline-none transition placeholder:text-background/45 focus:border-accent"
          />
          {error ? (
            <p className="mt-3 text-xs tracking-wide text-background/90">
              That password isn't quite right — do try again.
            </p>
          ) : null}
          <button
            type="submit"
            disabled={busy}
            className="mt-4 w-full cursor-pointer rounded-sm bg-accent px-4 py-3 text-[0.7rem] font-medium tracking-[0.3em] text-accent-foreground uppercase transition hover:opacity-90 disabled:opacity-60"
          >
            {busy ? "Opening…" : "Enter"}
          </button>
          <p className="mt-4 text-[0.7rem] leading-relaxed text-background/65">
            The password is on your invitation message. Lost it? WhatsApp us.
          </p>
        </form>
      </div>
    </main>
  );
}
