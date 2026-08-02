import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Faq = { q: string; a: string };

export function FaqAccordion({
  faqs,
  venueUrl,
}: {
  faqs: readonly Faq[];
  venueUrl?: string;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="mx-auto w-full max-w-3xl space-y-3"
    >
      {faqs.map((f, i) => (
        <AccordionItem
          key={f.q}
          value={`faq-${i}`}
          className="surface-card rounded-sm border-0 px-5 sm:px-7"
        >
          <AccordionTrigger className="py-5 text-left font-display text-lg leading-snug text-balance hover:no-underline sm:text-xl [&>svg]:text-accent">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-[0.95rem] leading-relaxed text-muted-foreground">
            <p>{f.a}</p>
            {venueUrl && f.q.startsWith("Can I arrive earlier") ? (
              <a
                href={venueUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-[0.68rem] tracking-[0.24em] uppercase underline underline-offset-4 transition hover:text-accent"
              >
                Book at Avani Kalutara →
              </a>
            ) : null}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
