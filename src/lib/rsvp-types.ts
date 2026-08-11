export type RsvpInput = {
  fullName: string;
  attending: string;
  starter: string;
  main: string;
  dietary: string;
  alcoholDessert: string;
  arriving19th: string;
  song: string;
  email: string;
  whatsapp: string;
  /** Present when the guest is editing an existing RSVP. */
  token?: string;
};
