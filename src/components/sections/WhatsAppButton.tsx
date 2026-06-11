"use client";

import { clinic } from "@/data/clinic";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href={clinic.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}
