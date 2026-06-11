"use client";

import { firstVisitItems, firstVisitHeadline } from "@/data/first-visit";
import { useFadeIn } from "@/hooks/useFadeIn";
import {
  HiGift,
  HiCalendarDays,
  HiExclamationTriangle,
  HiUserGroup,
  HiHeart,
} from "react-icons/hi2";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  HiGift,
  HiCalendarDays,
  HiExclamationTriangle,
  HiUserGroup,
  HiHeart,
};

export default function FirstVisit() {
  const ref = useFadeIn();

  return (
    <section className="bg-warm-50 py-14 lg:py-16">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="fade-in text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
            {firstVisitHeadline}
          </h2>
        </div>
        <div className="fade-in flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {firstVisitItems.map((item) => {
            const Icon = iconMap[item.icon] || HiHeart;
            return (
              <div
                key={item.title}
                className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3.5 border border-neutral-200/50 card-hover"
              >
                <Icon className="w-5 h-5 text-teal flex-shrink-0" />
                <span className="text-neutral-700 text-sm font-medium whitespace-nowrap">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
