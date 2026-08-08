import { downloadIcsFile } from "@/lib/download-ics";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Faq = { q: string; a: string };
type Contact = { name: string; phone: string };
type FundOption = { label: string; value: string; url?: string };

const TRANSPORT_DEADLINE_LABEL = "10th January 2027.";

function downloadTransportReminder() {
  downloadIcsFile(
    [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Lalita and Ayush//Wedding//EN",
      "BEGIN:VEVENT",
      "UID:20270110-send-flight-information@lalita-ayush",
      "DTSTAMP:20270110T000000Z",
      "DTSTART;VALUE=DATE:20270110",
      "DTEND;VALUE=DATE:20270111",
      "SUMMARY:Send flight information to Lalita & Ayush",
      "END:VEVENT",
      "END:VCALENDAR",
    ],
    "send-flight-information.ics",
  );
}

function renderAnswer(answer: string) {
  const parts = answer.split(TRANSPORT_DEADLINE_LABEL);
  if (parts.length === 1) return answer;

  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 ? (
        <button
          type="button"
          onClick={downloadTransportReminder}
          className="inline bg-transparent p-0 font-bold underline underline-offset-4 transition hover:text-accent"
        >
          {TRANSPORT_DEADLINE_LABEL}
        </button>
      ) : null}
    </span>
  ));
}

export function FaqAccordion({
  faqs,
  contacts,
  honeymoonFund,
}: {
  faqs: readonly Faq[];
  contacts?: readonly Contact[];
  honeymoonFund?: readonly FundOption[];
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
            {honeymoonFund && f.q.startsWith("Are gifts welcome") ? (
              <div className="mt-5 space-y-2.5">
                {honeymoonFund.map((option) =>
                  option.url ? (
                    <a
                      key={option.label}
                      href={option.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-4 rounded-sm border border-accent/40 bg-secondary/40 px-4 py-3 transition hover:bg-secondary"
                    >
                      <span className="text-[0.68rem] tracking-[0.16em] text-muted-foreground uppercase">
                        {option.label}
                      </span>
                      <span className="font-display text-base text-foreground underline underline-offset-4">
                        {option.value}
                      </span>
                    </a>
                  ) : (
                    <div
                      key={option.label}
                      className="flex items-center justify-between gap-4 rounded-sm border border-accent/40 bg-secondary/40 px-4 py-3"
                    >
                      <span className="text-[0.68rem] tracking-[0.16em] text-muted-foreground uppercase">
                        {option.label}
                      </span>
                      <span className="font-display text-base text-foreground">
                        {option.value}
                      </span>
                    </div>
                  ),
                )}
              </div>
            ) : null}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
