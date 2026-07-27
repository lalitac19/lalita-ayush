import { useEffect, useState } from "react";

export const WEDDING_DATE = new Date("2027-02-20T11:30:00Z");

function diff(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

export function Countdown({ light = false }: { light?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState(() => diff(WEDDING_DATE));

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setT(diff(WEDDING_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  const units: [string, number][] = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.minutes],
    ["Seconds", t.seconds],
  ];

  return (
    <div className="flex items-start justify-center gap-5 sm:gap-10">
      {units.map(([label, value]) => (
        <div key={label} className="min-w-14 text-center sm:min-w-20">
          <div
            className={`font-display text-3xl leading-none tabular-nums sm:text-5xl ${
              light ? "text-background" : "text-foreground"
            }`}
          >
            {mounted ? String(value).padStart(2, "0") : "--"}
          </div>
          <div
            className={`mt-2 text-[0.6rem] tracking-[0.28em] uppercase sm:text-[0.68rem] ${
              light ? "text-background/70" : "text-muted-foreground"
            }`}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
