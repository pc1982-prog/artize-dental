"use client";

import {
  transformations,
  transformationsHeadline,
  transformationsSubtext,
} from "@/data/transformations";
import { useFadeIn } from "@/hooks/useFadeIn";
import ComparisonSlider from "@/components/ComparisonSlider";

function TransformCard({ t }: { t: (typeof transformations)[0] }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[340px]">
      <div className="card-hover bg-white rounded-2xl overflow-hidden border border-neutral-200/60 shadow-sm h-full">
        <ComparisonSlider
          beforeImage={t.beforeImage}
          afterImage={t.afterImage}
        />
        <div className="p-5">
          <span className="inline-block bg-gold/10 text-gold text-xs font-bold px-3 py-1 rounded-full mb-2 tracking-wide">
            {t.treatmentLabel}
          </span>
          <p className="text-neutral-600 text-sm leading-relaxed">
            {t.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const ref = useFadeIn();

  return (
    <section ref={ref} className="bg-warm-100 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <p className="text-gold font-medium text-sm tracking-[0.15em] uppercase mb-4">
            Real Results
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            {transformationsHeadline}
          </h2>
          <div className="section-title-underline" />
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto mt-4">
            {transformationsSubtext}
          </p>
        </div>
      </div>

      <div className="fade-in overflow-hidden">
        <div
          className="auto-scroll-track gap-6 px-6"
          style={{ "--scroll-duration": "40s" } as React.CSSProperties}
        >
          {transformations.map((t, i) => (
            <TransformCard key={`a-${i}`} t={t} />
          ))}
          {transformations.map((t, i) => (
            <TransformCard key={`b-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
