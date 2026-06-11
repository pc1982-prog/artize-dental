"use client";

import { stats } from "@/data/stats";
import { useCountUp } from "@/hooks/useCountUp";
import { HiStar } from "react-icons/hi2";

function CounterItem({ item }: { item: (typeof stats)[number] }) {
  const { count, ref } = useCountUp(item.numericValue);

  return (
    <div className="flex flex-col items-center text-center px-4">
      {item.platform && (
        <div className="flex items-center gap-1.5 mb-1">
          <HiStar className="w-4 h-4 text-champagne" />
          <span className="text-champagne font-semibold text-base">{item.value}</span>
        </div>
      )}
      <span ref={ref} className="text-white font-serif text-[1.7rem] lg:text-[2.1rem] leading-none">
        {count.toLocaleString()}
        {!item.platform && "+"}
      </span>
      <span className="text-white/70 text-[11px] uppercase tracking-[0.12em] mt-2">
        {item.platform || item.suffix.replace("+", "").trim()}
      </span>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className="bg-[#141b18] py-10 lg:py-11 border-y border-white/10">
      <div className="section-shell">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 place-items-center">
          {stats.map((item) => (
            <CounterItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
