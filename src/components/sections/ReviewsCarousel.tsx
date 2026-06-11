"use client";

import { reviews } from "@/data/reviews";
import { clinic } from "@/data/clinic";
import { stats } from "@/data/stats";
import { useFadeIn } from "@/hooks/useFadeIn";
import { HiStar } from "react-icons/hi2";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  const initial = review.patientName.charAt(0).toUpperCase();

  return (
    <div className="flex-shrink-0 w-[305px] sm:w-[360px]">
      <div className="bg-white rounded-[1.6rem] border border-stone-200/80 p-6 h-full flex flex-col card-hover shadow-[0_14px_36px_rgba(20,30,26,0.05)]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-full bg-brand text-white flex items-center justify-center text-xs font-semibold flex-shrink-0">
            {initial}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-neutral-900 truncate">
              {review.patientName}
            </p>
            <p className="text-[11px] text-neutral-500">{review.source} • {review.timeAgo}</p>
          </div>
        </div>

        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: review.rating }).map((_, j) => (
            <HiStar key={j} className="w-3.5 h-3.5 text-[#FBBC04]" />
          ))}
        </div>

        <p className="text-neutral-700 text-[0.9rem] leading-relaxed flex-1">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>
    </div>
  );
}

export default function ReviewsCarousel() {
  const ref = useFadeIn();
  const ctaRef = useFadeIn();
  const hasWidget = clinic.elfsightWidgetId && clinic.elfsightWidgetId !== "YOUR_ELFSIGHT_WIDGET_ID";
  const googleStat = stats.find((s) => s.platform === "Google");
  const practoStat = stats.find((s) => s.platform === "Practo");
  const totalReviews = stats.reduce((sum, s) => s.platform ? sum + s.numericValue : sum, 0);

  return (
    <section id="reviews" className="bg-ivory py-24 lg:py-32">
      <div ref={ref} className="section-shell">
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
              Rated 5&#9733; across Google, Practo &amp; Justdial with {totalReviews.toLocaleString()}+ verified reviews.
            </p>
          </div>
          <div className="rounded-3xl border border-stone-200/85 bg-white p-5 lg:p-6 shadow-[0_12px_30px_rgba(20,30,26,0.05)]">
            <p className="text-[0.67rem] uppercase tracking-[0.18em] text-neutral-500 mb-3">
              Reputation Snapshot
            </p>
            <div className="space-y-3.5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600">Google</span>
                <span className="font-semibold text-neutral-900">{googleStat?.value} • {googleStat?.numericValue.toLocaleString()} reviews</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600">Practo</span>
                <span className="font-semibold text-neutral-900">{practoStat?.value} • {practoStat?.numericValue.toLocaleString()} stories</span>
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

        {hasWidget ? (
          <div className="fade-in">
            <div className={`elfsight-app-${clinic.elfsightWidgetId}`} data-elfsight-app-lazy />
          </div>
        ) : (
          <div className="fade-in mb-3">
            <div className="overflow-hidden py-4">
              <div
                className="auto-scroll-track gap-5"
                style={{ "--scroll-duration": "46s" } as React.CSSProperties}
              >
                {reviews.map((review, i) => (
                  <ReviewCard key={`a-${i}`} review={review} />
                ))}
                {reviews.map((review, i) => (
                  <ReviewCard key={`b-${i}`} review={review} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {!hasWidget && (
        <div ref={ctaRef} className="section-shell">
          <div className="fade-in mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-3xl border border-stone-200/85 bg-stone-50 px-5 py-4">
            <p className="text-sm text-neutral-700">
              Looking for more patient stories before booking?
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={clinic.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-700 hover:border-brand hover:text-brand transition-colors"
              >
                Google Reviews
              </a>
              <a
                href={clinic.practoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-700 hover:border-brand hover:text-brand transition-colors"
              >
                Practo Reviews
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
