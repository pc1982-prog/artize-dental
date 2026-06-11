"use client";

import Image from "next/image";
import { doctors } from "@/data/doctors";
import { useFadeIn } from "@/hooks/useFadeIn";
import { HiStar, HiAcademicCap, HiGlobeAlt, HiOutlineArrowUpRight } from "react-icons/hi2";

export default function DoctorProfiles() {
  const ref = useFadeIn();

  return (
    <section id="doctors" className="bg-ivory py-24 lg:py-32">
      <div ref={ref} className="section-shell">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-end mb-14 fade-in">
          <div>
            <p className="text-champagne font-semibold text-xs tracking-[0.22em] uppercase mb-3">
              Meet Your Specialists
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.06] text-neutral-900 max-w-3xl">
              Prestige-Led Expertise for Cosmetic and Restorative Smiles
            </h2>
            <div className="section-title-underline" />
          </div>
          <p className="text-neutral-600 text-base lg:text-lg leading-relaxed max-w-xl">
            Our doctor-led model ensures continuity of care at every stage. Consultations, treatment planning, and execution are handled by experienced clinicians with an uncompromising clinical ethos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {doctors.map((doctor, i) => (
            <div
              key={doctor.slug}
              className={`fade-in fade-in-delay-${i + 1} card-hover bg-white rounded-[2rem] overflow-hidden border border-stone-200/80 shadow-[0_18px_45px_rgba(20,30,26,0.08)] flex flex-col`}
            >
              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <div className="grid sm:grid-cols-[164px_1fr] gap-5 lg:gap-7 mb-6">
                  <div className="relative w-40 h-44 sm:w-[164px] sm:h-[196px] flex-shrink-0 mx-auto sm:mx-0 overflow-hidden rounded-3xl">
                    <Image
                      src={doctor.photo}
                      alt={doctor.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                      sizes="164px"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl" />
                  </div>

                  <div className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
                      <h3 className="font-serif text-2xl lg:text-[2rem] font-semibold text-neutral-900">
                        {doctor.name}
                      </h3>
                    </div>
                    <p className="text-[0.67rem] uppercase tracking-[0.18em] text-neutral-500 mb-3">
                      Cosmetic & Advanced Dental Surgeon
                    </p>

                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand/7 text-brand text-xs font-semibold px-3 py-1 border border-brand/12">
                        <HiStar className="w-3.5 h-3.5" />
                        {doctor.rating.toFixed(1)} Rated
                      </span>
                      <span className="text-neutral-500 text-xs">
                        {doctor.reviewCount.toLocaleString()} verified stories
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-[0.67rem] bg-stone-50 border border-stone-200 rounded-full px-3 py-1 text-neutral-700">
                        {doctor.experienceLabel}
                      </span>
                      <span className="text-[0.67rem] bg-stone-50 border border-stone-200 rounded-full px-3 py-1 text-neutral-700">
                        {doctor.feeLabel}
                      </span>
                    </div>
                    <p className="text-neutral-500 text-xs mb-1.5">
                      Reg. {doctor.registration}
                    </p>
                    {doctor.languages && doctor.languages.length > 0 && (
                      <p className="flex items-center justify-center sm:justify-start gap-1.5 text-neutral-500 text-xs mb-2">
                        <HiGlobeAlt className="w-3.5 h-3.5" />
                        Languages: {doctor.languages.join(" | ")}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-5 rounded-2xl bg-stone-50 border border-stone-200/80 p-4">
                  <div className="flex items-start gap-2.5">
                    <HiAcademicCap className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-neutral-700 text-xs font-semibold">
                        {doctor.degrees.join(", ")} — {doctor.university}
                      </p>
                      {doctor.pgInfo && (
                        <p className="text-neutral-500 text-xs mt-0.5">
                          {doctor.pgInfo}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.17em] text-neutral-500 mb-2.5">
                    Core Expertise
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {doctor.specialties.slice(0, 6).map((s) => (
                      <span
                        key={s}
                        className="bg-brand/6 text-brand text-[11px] font-semibold px-2.5 py-1 rounded-full border border-brand/12"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {doctor.memberships && doctor.memberships.length > 0 && (
                  <p className="text-neutral-500 text-[11px] mb-5">
                    Professional Memberships: {doctor.memberships.join(" • ")}
                  </p>
                )}

                <div className="flex items-center justify-between gap-4 pt-5 border-t border-stone-200/85 mt-auto">
                  <span className="text-neutral-600 text-sm font-medium">
                    One-to-one treatment planning
                  </span>
                  <a
                    href={doctor.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press inline-flex items-center justify-center gap-1.5 bg-brand text-white text-center font-semibold py-3 px-5 rounded-full hover:bg-brand-soft transition-all duration-300 hover:-translate-y-0.5 text-xs uppercase tracking-[0.14em]"
                  >
                    Book with {doctor.name.split(" ").slice(0, 2).join(" ")}
                    <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
