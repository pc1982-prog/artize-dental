"use client";

import { credibilityItems } from "@/data/credibility";
import { useFadeIn } from "@/hooks/useFadeIn";
import {
  HiAcademicCap,
  HiGlobeAlt,
  HiShieldCheck,
  HiDocumentCheck,
} from "react-icons/hi2";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  HiAcademicCap,
  HiGlobeAlt,
  HiShieldCheck,
  HiDocumentCheck,
};

export default function CredibilityStrip() {
  const ref = useFadeIn();

  return (
    <section className="bg-neutral-900 py-12 lg:py-16">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="fade-in flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {credibilityItems.map((item) => {
            const Icon = iconMap[item.icon] || HiShieldCheck;
            return (
              <div key={item.label} className="flex items-center gap-2.5">
                <Icon className="w-[18px] h-[18px] text-gold flex-shrink-0" />
                <span className="text-white/80 text-[13px] font-medium whitespace-nowrap tracking-wide">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
