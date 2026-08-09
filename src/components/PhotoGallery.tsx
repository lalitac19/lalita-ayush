import { useEffect, useState } from "react";

import { PhotoImage } from "@/components/PhotoImage";
import { photos } from "@/lib/photos";

export function PhotoGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex === null ? null : photos[openIndex];

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight")
        setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === "ArrowLeft")
        setOpenIndex((i) =>
          i === null ? i : (i - 1 + photos.length) % photos.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {photos.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="surface-card group relative block w-full cursor-pointer overflow-hidden rounded-sm bg-secondary"
          >
            <div className="aspect-3/4">
              <PhotoImage
                photo={p}
                alt={p.caption}
                sizes="(max-width: 640px) 48vw, (max-width: 1024px) 31vw, 360px"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent px-3 pt-8 pb-2.5 text-left text-[0.58rem] tracking-[0.18em] text-background uppercase sm:text-[0.62rem]">
              {p.caption}
            </span>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-foreground/95 p-4"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
        >
          <img
            src={active.small}
            srcSet={`${active.small} 640w, ${active.large} 1440w`}
            sizes="100vw"
            alt={active.caption}
            width={1440}
            height={Math.round(1440 / (active.ratio || 1))}
            decoding="async"
            className="max-h-[80vh] w-auto max-w-full rounded-sm object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-4 text-[0.65rem] tracking-[0.24em] text-background/85 uppercase">
            {active.caption}
          </p>
          <div className="mt-5 flex items-center gap-6 text-[0.65rem] tracking-[0.24em] text-background/70 uppercase">
            <button
              type="button"
              className="cursor-pointer transition hover:text-background"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) =>
                  i === null ? i : (i - 1 + photos.length) % photos.length,
                );
              }}
            >
              ← Prev
            </button>
            <button
              type="button"
              className="cursor-pointer transition hover:text-background"
              onClick={() => setOpenIndex(null)}
            >
              Close
            </button>
            <button
              type="button"
              className="cursor-pointer transition hover:text-background"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));
              }}
            >
              Next →
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
