import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";

import { Monogram } from "@/components/Monogram";
import { SectionHeading } from "@/components/SectionHeading";
import { loadRsvp, submitRsvp, type RsvpInput } from "@/lib/rsvp.functions";

export const Route = createFileRoute("/rsvp")({
  validateSearch: (search: Record<string, unknown>): { edit?: string } =>
    typeof search["edit"] === "string" ? { edit: search["edit"] as string } : {},
  head: () => ({
    meta: [
      { title: "RSVP — Lalita & Ayush" },
      {
        name: "description",
        content:
          "Let Lalita & Ayush know if you'll join their Sri Lanka wedding weekend, choose your dinner and request a song.",
      },
      { property: "og:title", content: "RSVP — Lalita & Ayush" },
      {
        property: "og:description",
        content: "Reply by 7th November 2026 for the Sri Lanka wedding weekend.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RsvpPage,
});

const STARTERS = [
  "Smashed feta and spinach-stuffed homemade tortellini in creamy tomato sauce (V)",
  "Slice of prawn roulade with lime and mango chutney with crunchy vegetable avocado salad",
  "Herb marinated lamb shoulder chop with mushroom & mint ragout and seasonal vegetable and green apple salad",
];

const MAINS = [
  "Baked vegetable lasagna with cheesy tomato sauce and spinach coulis (V)",
  "Herb-crusted baked mullet fish fillet with Italian vegetable caponata and creamy mashed potato with lemon-garlic cream and olive-basil oil",
  "Chicken roulade with vegetable ratatouille, Italian-spiced roasted potato wedges, mushroom ragout and tomato-basil oil",
];

const EMPTY: RsvpInput = {
  fullName: "",
  attending: "",
  starter: "",
  main: "",
  dietary: "",
  alcoholDessert: "",
  arriving19th: "",
  song: "",
  email: "",
  whatsapp: "",
};

const inputClass =
  "mt-3 w-full rounded-sm border border-border bg-background/70 px-4 py-3 text-base outline-none transition focus:border-accent sm:text-sm";

function Choice({
  name,
  value,
  current,
  onSelect,
  children,
}: {
  name: string;
  value: string;
  current: string;
  onSelect: (v: string) => void;
  children: React.ReactNode;
}) {
  const active = current === value;
  return (
    <label
      className={`flex min-h-12 cursor-pointer items-start gap-3 rounded-sm border px-3.5 py-3.5 text-[0.95rem] leading-relaxed transition sm:px-4 sm:py-3 sm:text-sm ${
        active
          ? "border-accent bg-accent/15 text-foreground"
          : "border-border bg-background/60 text-muted-foreground hover:border-accent/60"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={active}
        onChange={() => onSelect(value)}
        className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-accent)]"
      />
      <span>{children}</span>
    </label>
  );
}

function Section({
  step,
  title,
  hint,
  children,
}: {
  step: number;
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="glass-panel rounded-sm border p-4 sm:p-7">
      <p className="eyebrow">Step {step}</p>
      <h2 className="mt-2 font-display text-xl leading-snug font-bold sm:text-3xl">{title}</h2>
      {hint ? <p className="mt-2 text-sm text-muted-foreground">{hint}</p> : null}
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}

function RsvpPage() {
  const send = useServerFn(submitRsvp);
  const fetchExisting = useServerFn(loadRsvp);
  const { edit } = useSearch({ from: "/rsvp" });
  const [form, setForm] = useState<RsvpInput>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(Boolean(edit));
  const [editUrl, setEditUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!edit) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    // Keep the token even if the lookup fails, so re-sending updates the same row
    // instead of creating a duplicate entry.
    setForm((f) => ({ ...f, token: edit }));
    fetchExisting({ data: { token: edit } })
      .then((existing) => {
        if (cancelled) return;
        if (existing) setForm({ ...EMPTY, ...existing, token: edit });
        else setError("We couldn't find that RSVP — please fill the form in again.");
      })
      .catch(() => {
        if (!cancelled) {
          setError(
            "We couldn't load your saved answers just now. Please refresh the page, or fill the form in again — your reply will still update your existing RSVP.",
          );
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [edit, fetchExisting]);


  const set = <K extends keyof RsvpInput>(key: K, value: RsvpInput[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const coming = form.attending === "Yes, count me in";

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setSaving(true);
    try {
      const result = await send({ data: form });
      if (result?.token) {
        setForm((f) => ({ ...f, token: result.token }));
        setEditUrl(`${window.location.origin}/rsvp?edit=${result.token}`);
      }
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  if (done) {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-16 text-center sm:px-5 sm:py-32">
        <p className="eyebrow">Thank you</p>
        <h1 className="mt-4 font-display text-3xl sm:text-5xl">
          {coming ? "Your RSVP is in!" : "We'll miss you"}
        </h1>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          {coming
            ? "We'll follow up with more details closer to the date. In the meantime, feel free to check our website for more information."
            : "Thank you for letting us know. We'll be raising a glass to you from the beach."}
        </p>
        {coming && editUrl ? (
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Need to change something? Use your personal link any time before 7th November 2026:
            <br />
            <a
              href={editUrl}
              className="mt-2 inline-block font-bold break-all text-accent underline"
            >
              Edit my RSVP
            </a>
          </p>
        ) : null}

        <Link
          to="/celebration"
          className="mt-10 inline-block rounded-sm bg-primary px-10 py-4 text-[0.7rem] font-bold tracking-[0.3em] text-primary-foreground uppercase transition hover:opacity-90"
        >
          Back to the weekend
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pt-10 pb-28 sm:px-5 sm:py-24 lg:pb-24">
      <Link to="/" className="mx-auto mb-10 block w-fit">
        <Monogram className="h-12 w-auto opacity-80" />
      </Link>
      <SectionHeading eyebrow="Join us" title="RSVP" />
      <p className="mt-5 leading-relaxed text-muted-foreground">
        We hope you can join us! Please take a moment to RSVP by{" "}
        <strong className="font-bold text-foreground">7th November 2026</strong>.
      </p>

      {edit && !loading ? (
        <p className="mt-4 text-sm text-muted-foreground">
          You're editing an RSVP you already sent — change anything below and send it again.
        </p>
      ) : null}

      <form onSubmit={onSubmit} className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
        <Section step={1} title="What is your full name?">
          <label className="block text-sm">
            <input
              required
              value={form.fullName}
              onChange={(e) => set("fullName", e.target.value)}
              className={inputClass}
              placeholder="Full name"
            />
          </label>
        </Section>

        <Section step={2} title="Will you be joining us in Sri Lanka?">
          <div className="grid gap-3 sm:grid-cols-2">
            <Choice
              name="attending"
              value="Yes, count me in"
              current={form.attending}
              onSelect={(v) => set("attending", v)}
            >
              Yes, count me in
            </Choice>
            <Choice
              name="attending"
              value="No, I can't make it"
              current={form.attending}
              onSelect={(v) => set("attending", v)}
            >
              No, I can't make it
            </Choice>
          </div>
        </Section>

        {coming ? (
          <>
            <Section
              step={3}
              title="Dinner: your starter"
              hint="Please select one starter for the wedding dinner."
            >
              <div className="space-y-3">
                {STARTERS.map((s) => (
                  <Choice
                    key={s}
                    name="starter"
                    value={s}
                    current={form.starter}
                    onSelect={(v) => set("starter", v)}
                  >
                    {s}
                  </Choice>
                ))}
              </div>
            </Section>

            <Section
              step={4}
              title="Dinner: your main course"
              hint="Please select one main course for the wedding dinner."
            >
              <div className="space-y-3">
                {MAINS.map((m) => (
                  <Choice
                    key={m}
                    name="main"
                    value={m}
                    current={form.main}
                    onSelect={(v) => set("main", v)}
                  >
                    {m}
                  </Choice>
                ))}
              </div>
            </Section>

            <Section step={5} title="The finer details">
              <label className="block text-sm">
                <span className="font-bold">
                  Any food allergies or dietary preferences we should know about?
                </span>
                <textarea
                  required
                  rows={3}
                  value={form.dietary}
                  onChange={(e) => set("dietary", e.target.value)}
                  className={inputClass}
                  placeholder="Tell us here — or write 'None'"
                />
              </label>

              <div className="pt-2 text-sm">
                <span className="font-bold">Are you okay with alcohol in your dessert?</span>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {["Yes", "No"].map((v) => (
                    <Choice
                      key={v}
                      name="alcoholDessert"
                      value={v}
                      current={form.alcoholDessert}
                      onSelect={(val) => set("alcoholDessert", val)}
                    >
                      {v}
                    </Choice>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-sm">
                <span className="font-bold">
                  Are you planning to arrive on 19th February 2027?
                </span>
                <p className="mt-1 text-muted-foreground">
                  If yes, we'll send you a link closer to the date to book your room at our
                  preferred hotel rate.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {["Yes", "No"].map((v) => (
                    <Choice
                      key={v}
                      name="arriving19th"
                      value={v}
                      current={form.arriving19th}
                      onSelect={(val) => set("arriving19th", val)}
                    >
                      {v}
                    </Choice>
                  ))}
                </div>
              </div>
            </Section>

            <Section step={6} title="Your song request" hint="What would get you on the dancefloor?">
              <label className="block text-sm">
                <span className="font-bold">
                  What song would you love to hear at our wedding?
                </span>
                <input
                  required
                  value={form.song}
                  onChange={(e) => set("song", e.target.value)}
                  className={inputClass}
                  placeholder="Song and artist"
                />
              </label>
            </Section>

            <Section step={7} title="How we reach you">
              <label className="block text-sm">
                <span className="font-bold">What is your email address?</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className={inputClass}
                  placeholder="you@email.com"
                />
              </label>
              <label className="block text-sm">
                <span className="font-bold">
                  What is your WhatsApp number? (include the country code)
                </span>
                <input
                  required
                  value={form.whatsapp}
                  onChange={(e) => set("whatsapp", e.target.value)}
                  className={inputClass}
                  placeholder="+44 7565 790424"
                />
              </label>
            </Section>
          </>
        ) : null}

        {error ? <p className="text-sm font-medium text-destructive">{error}</p> : null}

        <button
          type="submit"
          disabled={saving || loading || !form.attending}
          className="w-full cursor-pointer rounded-sm bg-primary px-10 py-4 text-[0.7rem] font-bold tracking-[0.3em] text-primary-foreground uppercase transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving ? "Sending…" : loading ? "Loading…" : edit ? "Update my RSVP" : "Send my RSVP"}
        </button>
      </form>
    </div>
  );
}
