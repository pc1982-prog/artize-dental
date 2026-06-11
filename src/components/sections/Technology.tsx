"use client";

import { technologyItems } from "@/data/technology";
import { useFadeIn } from "@/hooks/useFadeIn";
import {
  HiCpuChip,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";

export default function Technology() {
  const ref = useFadeIn();
  const [featured, ...rest] = technologyItems;

  return (
    <section className="bg-[#141a17] py-22 lg:py-28">
      <div ref={ref} className="section-shell">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-16 items-end mb-10 fade-in">
          <div>
            <p className="text-champagne font-semibold text-[0.64rem] tracking-[0.24em] uppercase mb-4">
              Technology Platform
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.7rem] leading-[1.02] text-white mb-4">
              Evidence-Led Tools, Human-Led Decisions
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-lg">
              We invest in precision diagnostics and minimally invasive systems so treatment outcomes remain consistent, predictable, and comfortable.
            </p>
          </div>
          <div className="rounded-[1.9rem] border border-white/15 bg-white/[0.04] p-6 lg:p-8">
            <p className="text-white/50 text-[0.62rem] uppercase tracking-[0.2em] mb-3">Flagship Capability</p>
            <h3 className="font-serif text-3xl text-white mb-2">{featured.name}</h3>
            <p className="text-white/72 text-sm leading-relaxed mb-5">{featured.description}</p>
            <a
              href="#book"
              className="inline-flex items-center gap-1.5 text-champagne text-xs uppercase tracking-[0.16em] font-semibold hover:text-[#dcc292] transition-colors"
            >
              Request treatment assessment
              <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-y border-white/12 fade-in fade-in-delay-2">
          {rest.map((item, i) => (
            <article
              key={item.name}
              className={`py-7 pr-4 ${i > 0 ? "md:pl-7 md:border-l md:border-white/12" : ""}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center">
                  <HiCpuChip className="w-4 h-4 text-champagne" />
                </span>
                <h3 className="text-white text-base font-semibold">{item.name}</h3>
              </div>
              <p className="text-white/65 text-sm leading-relaxed pr-2">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
