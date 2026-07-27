export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 font-display text-3xl sm:text-5xl">{title}</h2>
      <div
        className={`rule-gold mt-5 max-w-32 ${align === "center" ? "mx-auto" : ""}`}
      />
      {intro ? (
        <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
