import { downloadIcsFile } from "@/lib/download-ics";

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

/** Renders text, turning the transport RSVP deadline date into a bold link that downloads a calendar reminder. */
export function TransportDeadlineText({ text }: { text: string }) {
  const parts = text.split(TRANSPORT_DEADLINE_LABEL);
  if (parts.length === 1) return <>{text}</>;

  return (
    <>
      {parts.map((part, i) => (
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
      ))}
    </>
  );
}
