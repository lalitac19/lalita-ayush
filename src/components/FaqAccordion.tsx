import { Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Faq = { q: string; a: string };
type Contact = { name: string; phone: string };

const GETTING_THERE_LABEL = "Getting There";

function renderAnswer(answer: string) {
  const parts = answer.split(GETTING_THERE_LABEL);
  if (parts.length === 1) return answer;

  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 ? (
        <Link
          to="/getting-there"
          className="underline underline-offset-4 transition hover:text-accent"
        >
          {GETTING_THERE_LABEL}
        </Link>
      ) : null}
    </span>
  ));
}

export function FaqAccordion({
  faqs,
  contacts,
}: {
  faqs: readonly Faq[];
  contacts?: readonly Contact[];
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
            <p>{renderAnswer(f.a)}</p>
            {contacts && f.q.startsWith("Whom should I call") ? (
              <div className="mt-5 flex flex-wrap gap-3">
                {contacts.map((c) => (
                  <a
                    key={c.name}
                    href={`https://wa.me/${c.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-sm border border-accent px-6 py-2.5 text-center transition hover:bg-secondary"
                  >
                    <span className="block font-display text-lg text-foreground">
                      {c.name}
                    </span>
                    <span className="mt-0.5 block text-[0.68rem] tracking-[0.16em] text-muted-foreground">
                      {c.phone}
                    </span>
                  </a>
                ))}
              </div>
            ) : null}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
