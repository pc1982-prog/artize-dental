import Image from "next/image";
import { clinic } from "@/data/clinic";
import { galleryImages } from "@/data/gallery";
import { doctors } from "@/data/doctors";
import { stats } from "@/data/stats";
import { HiOutlinePhone, HiOutlineArrowRight } from "react-icons/hi2";

export default function Hero() {
  const heroImage = galleryImages[0];
  const doctorNames = doctors.map((d) => d.name).join(" • ");
  const yearsStat = stats.find((s) => s.label === "Years of Experience");
  const yearsLabel = yearsStat ? `${yearsStat.numericValue}+` : "15+";
  const reviewStat = stats.find((s) => s.platform === "Google");
  // const totalReviews = stats
  //   .filter((s) => Boolean(s.platform))
  //   .reduce((acc, s) => acc + s.numericValue, 0);
  const patientStoriesStat = stats.find((s) => s.platform === "Patient Stories");
  const totalReviews = patientStoriesStat?.numericValue ?? 5000;
  return (
    <section className="relative min-h-[900px] lg:min-h-screen flex items-center overflow-hidden">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        className="object-cover object-[56%_center]"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1412]/84 via-[#0f1412]/58 to-[#0f1412]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1412]/82 via-[#0f1412]/20 to-transparent" />

      <div className="relative z-10 section-shell w-full pt-30 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl text-left">
          <p className="text-champagne text-[0.64rem] sm:text-[0.69rem] font-semibold tracking-[0.3em] uppercase mb-5">
            Luxury Cosmetic Dentistry in Rohini, Delhi
          </p>
          <h1 className="font-serif text-[2.75rem] sm:text-[4.15rem] lg:text-[6.1rem] leading-[0.94] text-white max-w-4xl tracking-[-0.01em]">
            Crafted Smiles.
            <span className="block italic font-normal text-[#eadfca]">
              Clinical Precision.
            </span>
          </h1>
          <p className="text-white/78 text-sm sm:text-base lg:text-[1.08rem] max-w-2xl mt-7 leading-relaxed">
            {clinic.tagline} For smile makeovers, implants, and aesthetic corrections, every consultation is led by senior clinicians with personalized treatment planning and outcome-focused care.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3 mt-10">
            <a
              href={clinic.practoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center justify-center gap-2 bg-white text-ink font-semibold px-8 py-3.5 rounded-full text-[0.7rem] sm:text-[0.74rem] tracking-[0.16em] uppercase hover:bg-stone-100 transition-all duration-300"
            >
              Schedule Consultation
              <HiOutlineArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${clinic.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border border-white/45 text-white font-medium px-7 py-3.5 rounded-full text-[0.7rem] sm:text-[0.74rem] tracking-[0.16em] uppercase hover:bg-white/10 transition-all duration-300"
            >
              <HiOutlinePhone className="w-4 h-4" />
              Speak with Front Desk
            </a>
          </div>

          <div className="mt-11 border-t border-white/25 pt-5">
            <p className="text-white/68 text-[0.64rem] tracking-[0.18em] uppercase mb-3">
              {doctorNames}
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-white/78">
              <p className="text-sm">
                <span className="font-serif text-[1.55rem] text-white mr-2">{yearsLabel}</span>
                Years of clinical expertise
              </p>
              <p className="text-sm">
                <span className="font-serif text-[1.55rem] text-white mr-2">{reviewStat?.numericValue ?? 700}+</span>
                Google reviews
              </p>
              <p className="text-sm">
                <span className="font-serif text-[1.55rem] text-white mr-2">{totalReviews}+</span>
                Verified patient stories
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
