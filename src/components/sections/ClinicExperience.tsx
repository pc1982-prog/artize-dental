"use client";

import {
  clinicExperienceItems,
  clinicExperienceHeadline,
  clinicExperienceSubtext,
} from "@/data/clinic-experience";
import { useFadeIn } from "@/hooks/useFadeIn";
import {
  HiHeart,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";

export default function ClinicExperience() {
  const ref = useFadeIn();
  const [signatureOne, signatureTwo, ...supporting] = clinicExperienceItems;

  return (
    <section className="bg-stone-50 py-26 lg:py-34">
      <div ref={ref} className="section-shell">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-end mb-12 fade-in">
          <div>
            <p className="text-champagne font-semibold text-[0.64rem] tracking-[0.24em] uppercase mb-4">
              Patient Experience
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.8rem] leading-[1.02] text-neutral-900 mb-4">
              {clinicExperienceHeadline}
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl">
              {clinicExperienceSubtext}
            </p>
          </div>
          <div className="lg:justify-self-end text-left">
            <p className="text-neutral-500 text-[0.64rem] uppercase tracking-[0.2em] mb-3">
              Consultation Promise
            </p>
            <p className="font-serif text-[1.95rem] sm:text-[2.4rem] leading-tight text-ink max-w-md">
              Every visit is paced, explained, and tailored before any procedure begins.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-5 lg:gap-7 mb-6">
          <article className="fade-in card-hover bg-white border border-stone-200/85 rounded-[2rem] p-7 lg:p-9 shadow-[0_14px_36px_rgba(18,26,22,0.05)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.16em] text-brand font-semibold mb-4">
              Signature Standard
            </div>
            <h3 className="font-serif text-3xl lg:text-[2.2rem] text-ink mb-3">{signatureOne.title}</h3>
            <p className="text-neutral-600 text-sm lg:text-base leading-relaxed mb-5 max-w-xl">
              {signatureOne.description}
            </p>
            <a href="#book" className="inline-flex items-center gap-1.5 text-brand text-xs uppercase tracking-[0.16em] font-semibold hover:text-brand-soft transition-colors">
              Discuss your treatment goals
              <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </article>

          <article className="fade-in fade-in-delay-1 bg-[#161d1a] border border-white/10 rounded-[2rem] p-7 lg:p-9">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.16em] text-white/80 font-semibold mb-4">
              Clinical Comfort
            </div>
            <h3 className="font-serif text-3xl lg:text-[2.15rem] text-white mb-3">{signatureTwo.title}</h3>
            <p className="text-white/70 text-sm lg:text-base leading-relaxed">
              {signatureTwo.description}
            </p>
          </article>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 fade-in fade-in-delay-2">
          {supporting.slice(0, 3).map((item) => (
            <article
              key={item.title}
              className="bg-white/75 border border-stone-200/80 rounded-2xl p-5"
            >
              <div className="w-8 h-8 rounded-full border border-brand/25 flex items-center justify-center mb-3">
                <HiHeart className="w-4 h-4 text-brand" />
              </div>
              <h3 className="text-neutral-900 font-semibold text-sm mb-2">{item.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
