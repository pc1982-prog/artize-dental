"use client";

import { treatments } from "@/data/treatments";
import { useFadeIn } from "@/hooks/useFadeIn";
import {
  HiOutlineArrowUpRight,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineCubeTransparent,
} from "react-icons/hi2";

export default function ServicesGrid() {
  const ref = useFadeIn();
  const categories = Array.from(new Set(treatments.map((t) => t.category)));
  const featured = treatments.slice(0, 3);

  return (
    <section id="services" className="bg-stone-50 py-24 lg:py-32">
      <div ref={ref} className="section-shell">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14 items-end mb-12 fade-in">
          <div>
            <p className="text-champagne font-semibold text-xs tracking-[0.22em] uppercase mb-3">
              Signature Treatments
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.06] text-neutral-900 max-w-3xl">
              Precision Dentistry, Curated by Specialty
            </h2>
            <div className="section-title-underline" />
          </div>
          <p className="text-neutral-600 text-base lg:text-lg leading-relaxed max-w-xl">
            We combine high-comfort clinical care with digital planning and minimally invasive protocols to deliver dependable aesthetic and functional outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 mb-8">
          {featured.map((service, i) => (
            <article
              key={service.slug}
              className={`fade-in fade-in-delay-${i + 1} card-hover rounded-3xl border border-stone-200/80 bg-white p-6 lg:p-7 shadow-[0_16px_40px_rgba(16,24,20,0.06)]`}
            >
              <span className="inline-flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.18em] text-neutral-500 mb-5">
                <span className="w-8 h-[1px] bg-champagne" />
                {service.category}
              </span>
              <h3 className="font-serif text-3xl leading-tight text-ink mb-3">
                {service.name}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6 min-h-[66px]">
                {service.shortDescription}
              </p>
              <a
                href="#book"
                className="inline-flex items-center gap-1.5 text-brand text-xs uppercase tracking-[0.16em] font-semibold hover:text-brand-soft transition-colors"
              >
                Request Plan
                <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </article>
          ))}
        </div>

        <div className="fade-in fade-in-delay-2 rounded-[1.8rem] border border-stone-200/90 bg-white p-6 lg:p-8 shadow-[0_12px_35px_rgba(16,24,20,0.05)]">
          <div className="grid md:grid-cols-3 gap-7">
            {categories.map((category, index) => (
              <div
                key={category}
                className={`${index > 0 ? "md:border-l md:border-stone-200 md:pl-7" : ""}`}
              >
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-neutral-500 mb-4">
                  {category}
                </p>
                <ul className="space-y-2.5">
                  {treatments
                    .filter((item) => item.category === category)
                    .slice(0, 4)
                    .map((item) => (
                      <li key={item.slug} className="flex items-start gap-2 text-sm text-neutral-700">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand/55" />
                        <span>{item.name}</span>
                      </li>
                    ))}
                </ul>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-[11px] text-neutral-600">
                  {category === "Cosmetic" ? <HiOutlineSparkles className="w-3.5 h-3.5" /> : null}
                  {category === "Restorative" ? <HiOutlineShieldCheck className="w-3.5 h-3.5" /> : null}
                  {category === "Orthodontics" ? <HiOutlineCubeTransparent className="w-3.5 h-3.5" /> : null}
                  Specialist-led treatment pathway
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
