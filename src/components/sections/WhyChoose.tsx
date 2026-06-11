"use client";

import { whyChooseFeatures } from "@/data/why-choose";
import { useFadeIn } from "@/hooks/useFadeIn";
import {
  HiHeart,
  HiOutlineCheck,
} from "react-icons/hi2";

export default function WhyChoose() {
  const ref = useFadeIn();
  const [lead, ...rest] = whyChooseFeatures;

  return (
    <section className="bg-ivory py-24 lg:py-30">
      <div ref={ref} className="section-shell">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-end mb-12 fade-in">
          <div>
            <p className="text-champagne font-semibold text-[0.64rem] tracking-[0.22em] uppercase mb-4">
              Why Artize
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.7rem] leading-[1.03] text-neutral-900">
              Subtle Luxury.
              <span className="block italic font-normal">Serious Clinical Depth.</span>
            </h2>
          </div>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl">
            We are not volume-driven. Every case is diagnosed with care, explained clearly, and executed with specialist oversight from consultation to follow-up.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 lg:gap-10">
          <article className="fade-in rounded-[2rem] bg-white border border-stone-200/85 p-7 lg:p-9 shadow-[0_14px_35px_rgba(16,24,20,0.05)]">
            <div className="w-11 h-11 rounded-full bg-brand/8 border border-brand/20 flex items-center justify-center mb-5">
              <HiHeart className="w-5 h-5 text-brand" />
            </div>
            <h3 className="font-serif text-[2rem] leading-tight text-ink mb-3">{lead.title}</h3>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">{lead.description}</p>
            <p className="text-neutral-500 text-xs uppercase tracking-[0.15em]">
              Crafted for long-term oral health and confidence
            </p>
          </article>

          <div className="fade-in fade-in-delay-1 grid sm:grid-cols-2 gap-x-8 gap-y-6 pt-1">
            {rest.map((feature) => (
              <article key={feature.title} className="border-b border-stone-200/90 pb-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5">
                    <HiOutlineCheck className="w-4 h-4 text-brand" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-neutral-900 text-base mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
