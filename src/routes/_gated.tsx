import { createFileRoute, Link, Outlet, redirect } from "@tanstack/react-router";
import { useState } from "react";

import { Monogram } from "@/components/Monogram";
import { getWeddingContent } from "@/lib/gate.functions";
import type { WeddingContent } from "@/lib/wedding-types";

export const Route = createFileRoute("/_gated")({
  loader: async (): Promise<{ content: WeddingContent }> => {
    const res = await getWeddingContent();
    if (!res.unlocked || !res.content) throw redirect({ to: "/" });
    return { content: res.content as WeddingContent };
  },
  component: GatedLayout,
});


const links = [
  { to: "/celebration", label: "Home" },
  { to: "/events", label: "The Weekend" },
  { to: "/faq", label: "Q&A" },
  { to: "/sri-lanka", label: "Sri Lanka" },
  { to: "/getting-there", label: "Getting There" },
  { to: "/our-story", label: "Our Story" },
  { to: "/moments", label: "Moments" },
] as const;

function GatedLayout() {
  const { content } = Route.useLoaderData();
  const [open, setOpen] = useState(false);


  return (
    <div className="flex min-h-screen flex-col">
      <header className="glass-panel sticky top-0 z-50 border-b">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:flex lg:justify-between">

          <Link to="/celebration" className="flex min-w-0 items-center gap-3">
            <Monogram className="h-9 w-auto shrink-0" />
            <span className="truncate font-display text-lg">Lalita &amp; Ayush</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[0.68rem] tracking-[0.22em] text-muted-foreground uppercase transition hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={content.rsvpUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-primary px-4 py-2 text-[0.68rem] tracking-[0.22em] text-primary-foreground uppercase font-bold transition hover:opacity-90"
            >
              RSVP
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 cursor-pointer rounded-sm border border-border px-3 py-2 text-[0.65rem] tracking-[0.22em] uppercase lg:hidden"
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open ? (
          <nav className="glass-panel flex flex-col gap-1 border-t px-5 pb-5 lg:hidden">

            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={content.rsvpUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-sm bg-primary px-4 py-3 text-center text-[0.7rem] font-bold tracking-[0.22em] text-primary-foreground uppercase"
            >
              RSVP
            </a>
          </nav>
        ) : null}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="glass-panel border-t">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 text-center">
          <Monogram className="mx-auto h-12 w-auto opacity-80" />
          <p className="mt-5 font-display text-2xl">Lalita &amp; Ayush</p>
          <p className="mt-2 text-[0.68rem] tracking-[0.28em] text-muted-foreground uppercase">
            20 — 22 February 2027 · {content.venue.location}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
            <a
              href={content.rsvpUrl}
              target="_blank"
              rel="noreferrer"
              className="font-bold transition hover:text-foreground"
            >
              RSVP
            </a>
            <span aria-hidden>·</span>
            <a
              href={content.venue.url}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-foreground"
            >
              {content.venue.name}
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}
