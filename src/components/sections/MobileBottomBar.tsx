"use client";

import { clinic } from "@/data/clinic";
import { HiOutlinePhone } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineCalendarDays } from "react-icons/hi2";

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-ivory/98 backdrop-blur-md border-t border-stone-200 shadow-[0_-8px_26px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-3 divide-x divide-stone-200">
        <a
          href={`tel:${clinic.phone.replace(/\s/g, "")}`}
          className="flex flex-col items-center justify-center py-3 gap-1 hover:bg-stone-50 transition-colors"
        >
          <HiOutlinePhone className="w-5 h-5 text-brand" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-700">Call</span>
        </a>
        <a
          href={clinic.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 hover:bg-stone-50 transition-colors"
        >
          <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-700">
            Ask
          </span>
        </a>
        <a
          href={clinic.practoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 bg-brand hover:bg-brand-soft transition-colors"
        >
          <HiOutlineCalendarDays className="w-5 h-5 text-white" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white">Consult</span>
        </a>
      </div>
    </div>
  );
}
