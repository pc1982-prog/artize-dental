"use client";

import Image from "next/image";
import { ctaData } from "@/data/cta";
import { clinic } from "@/data/clinic";
import { useFadeIn } from "@/hooks/useFadeIn";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function CtaSection() {
  const ref = useFadeIn();

  return (
    <section id="book" className="relative bg-[#18231f] py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_10%_10%,#314a43_0%,transparent_40%),radial-gradient(circle_at_90%_80%,#2b3f39_0%,transparent_45%)]" />
      <div ref={ref} className="section-shell relative z-10">
        <div className="max-w-5xl mx-auto text-center fade-in rounded-[2.2rem] border border-white/15 bg-white/[0.04] backdrop-blur-sm px-6 py-12 lg:px-10 lg:py-14 shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
          {clinic.logoImage && (
            <div className="mb-6">
              <Image
                src={clinic.logoImage}
                alt={clinic.name}
                width={64}
                height={64}
                className="mx-auto opacity-75"
              />
            </div>
          )}
          <p className="text-champagne text-xs uppercase tracking-[0.24em] mb-3 font-semibold">
            Private Consultation Pathway
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.04] text-white mb-6">
            {ctaData.headline}
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {ctaData.subtext}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            {ctaData.buttons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target={btn.href.startsWith("http") ? "_blank" : undefined}
                rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`btn-press inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97] w-full sm:w-auto ${
                  btn.variant === "primary"
                    ? "bg-white text-ink hover:bg-stone-100"
                    : btn.variant === "secondary"
                      ? "bg-white/10 text-white border border-white/30 hover:bg-white/20"
                      : "border border-white/30 text-white hover:bg-white/10"
                }`}
              >
                {btn.label}
                {btn.variant === "primary" && <HiOutlineArrowRight className="w-4 h-4" />}
              </a>
            ))}
          </div>
          <p className="text-white/55 text-xs uppercase tracking-[0.1em]">
            Booked on our official Practo profile • Response within 15 minutes during clinic hours
          </p>
        </div>
      </div>
    </section>
  );
}
