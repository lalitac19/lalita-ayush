/**
 * Persistent RSVP call-to-action for small screens. Sits above the fold of the
 * thumb zone so guests can RSVP from any page without hunting the menu.
 */
export function RsvpBar({ url }: { url: string }) {
  return (
    <div className="glass-panel fixed inset-x-0 bottom-0 z-50 border-t px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] lg:hidden">
      <div className="flex items-center gap-3">
        <p className="min-w-0 flex-1 text-[0.68rem] leading-tight tracking-[0.16em] text-muted-foreground uppercase">
          RSVP by 7th Nov 2026
        </p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-sm bg-primary px-6 py-3 text-[0.72rem] font-bold tracking-[0.24em] text-primary-foreground uppercase transition hover:opacity-90"
        >
          RSVP
        </a>
      </div>
    </div>
  );
}
