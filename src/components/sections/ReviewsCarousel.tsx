"use client";

import Script from "next/script";
import { stats } from "@/data/stats";
import { clinic } from "@/data/clinic";
import { useFadeIn } from "@/hooks/useFadeIn";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const ELFSIGHT_WIDGET_ID = "75b95581-227a-4760-a7cd-1f5f89a7ac0c";

export default function ReviewsCarousel() {
  const ref = useFadeIn();

  const googleStat = stats.find((s) => s.platform === "Google");
  const practoStat = stats.find((s) => s.platform === "Practo");
  const totalReviews = stats.reduce(
    (sum, s) => (s.platform ? sum + s.numericValue : sum),
    0
  );

  return (
    <section id="reviews" className="bg-ivory py-24 lg:py-32">
      {/* Elfsight platform script — loads once, lazily */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
        async
      />

      <div ref={ref} className="section-shell">
        {/* ── Header + Reputation Snapshot ── */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-14 items-end mb-10 fade-in">
          <div>
            <p className="text-champagne font-semibold text-xs tracking-[0.22em] uppercase mb-4">
              Patient Stories
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-neutral-900 mb-4">
              Proof of Care, in Real Words
            </h2>
            <div className="section-title-underline mb-4" />
            <p className="text-neutral-600 text-base sm:text-lg max-w-2xl">
              Rated 5&#9733; across Google, Practo &amp; Justdial with{" "}
              {totalReviews.toLocaleString()}+ verified reviews.
            </p>
          </div>

          {/* Reputation Snapshot card — stays same, data still dynamic */}
          <div className="rounded-3xl border border-stone-200/85 bg-white p-5 lg:p-6 shadow-[0_12px_30px_rgba(20,30,26,0.05)]">
            <p className="text-[0.67rem] uppercase tracking-[0.18em] text-neutral-500 mb-3">
              Reputation Snapshot
            </p>
            <div className="space-y-3.5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600">Google</span>
                <span className="font-semibold text-neutral-900">
                  {googleStat?.value} •{" "}
                  {googleStat?.numericValue.toLocaleString()} reviews
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600">Practo</span>
                <span className="font-semibold text-neutral-900">
                  {practoStat?.value} •{" "}
                  {practoStat?.numericValue.toLocaleString()} stories
                </span>
              </div>
              <a
                href={clinic.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-brand font-semibold hover:text-brand-soft transition-colors"
              >
                View all reviews
                <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Elfsight Google Reviews Widget ── */}
        <div className="fade-in">
          <div
            className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`}
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
}