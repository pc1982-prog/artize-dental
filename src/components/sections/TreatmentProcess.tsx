"use client";

import { processSteps } from "@/data/process-steps";
import { useFadeIn } from "@/hooks/useFadeIn";
import {
  HiChatBubbleLeftRight,
  HiMagnifyingGlass,
  HiClipboardDocumentList,
  HiWrenchScrewdriver,
  HiShieldCheck,
} from "react-icons/hi2";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  HiChatBubbleLeftRight,
  HiMagnifyingGlass,
  HiClipboardDocumentList,
  HiWrenchScrewdriver,
  HiShieldCheck,
};

export default function TreatmentProcess() {
  const ref = useFadeIn();

  return (
    <section className="bg-white py-20 lg:py-26">
      <div ref={ref} className="section-shell">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-14 mb-10 fade-in">
          <div>
            <p className="text-champagne font-semibold text-[0.64rem] tracking-[0.22em] uppercase mb-4">
              Consultation Pathway
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.03] text-neutral-900 mb-4">
              A Structured Journey with No Guesswork
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md">
              Every stage is explained before treatment starts, so you always know what is happening, why it matters, and what result to expect.
            </p>
          </div>
          <div className="rounded-[1.8rem] border border-stone-200/85 bg-stone-50 p-6 lg:p-8">
            <p className="text-[0.62rem] uppercase tracking-[0.2em] text-neutral-500 mb-2">Best for</p>
            <p className="font-serif text-[1.8rem] leading-tight text-ink mb-3">
              Smile makeovers, implant planning, and complex restorative work
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Built to reduce uncertainty and maintain treatment precision across multi-visit cases.
            </p>
          </div>
        </div>

        <div className="relative fade-in fade-in-delay-2">
          <div className="absolute left-3.5 top-5 bottom-5 w-px bg-stone-300" />
          <div className="space-y-7 lg:space-y-8">
            {processSteps.map((step) => {
              const Icon = iconMap[step.icon] || HiShieldCheck;
              return (
                <article key={step.step} className="grid lg:grid-cols-[0.8fr_1.2fr] gap-5 lg:gap-7 items-start">
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-7 h-7 rounded-full bg-brand text-white text-[11px] font-semibold flex items-center justify-center mt-1">
                      {step.step}
                    </div>
                    <div>
                      <p className="text-neutral-500 text-[0.62rem] uppercase tracking-[0.16em] mb-1">
                        Stage {step.step}
                      </p>
                      <h3 className="font-serif text-2xl text-neutral-900 leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <div className="pl-11 lg:pl-0">
                    <div className="flex items-start gap-3">
                      <span className="w-9 h-9 rounded-full border border-stone-300 flex items-center justify-center bg-white">
                        <Icon className="w-4.5 h-4.5 text-brand" />
                      </span>
                      <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
