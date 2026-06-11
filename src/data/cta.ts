import { CtaData } from "./types";
import { clinic } from "./clinic";

export const ctaData: CtaData = {
  headline: "Start with a Private Smile Consultation",
  subtext:
    "Meet a senior doctor, review your concerns, and leave with a clear treatment roadmap tailored to your smile goals.",
  buttons: [
    {
      label: "Schedule Consultation",
      href: clinic.practoUrl,
      variant: "primary",
    },
    {
      label: "Discuss on WhatsApp",
      href: clinic.whatsappUrl,
      variant: "secondary",
    },
    {
      label: "Call Front Desk",
      href: `tel:${clinic.phone.replace(/\s/g, "")}`,
      variant: "outline",
    },
  ],
};
