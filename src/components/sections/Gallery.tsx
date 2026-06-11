"use client";

import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import { clinic } from "@/data/clinic";
import { useFadeIn } from "@/hooks/useFadeIn";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function Gallery() {
  const ref = useFadeIn();

  return (
    <section id="gallery" className="bg-stone-50 py-24 lg:py-32">
      <div ref={ref} className="section-shell">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-14 items-end mb-14 fade-in">
          <div>
            <p className="text-champagne font-semibold text-xs tracking-[0.22em] uppercase mb-4">
              Studio Gallery
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-neutral-900 mb-4">
              Step Into a Calm, Boutique Clinical Environment
            </h2>
            <div className="section-title-underline mb-4" />
            <p className="text-neutral-600 text-base sm:text-lg max-w-2xl">
              Spacious treatment suites, sterilization-first protocols, and warm interiors designed to make every visit feel reassuring.
            </p>
          </div>
          <a
            href={clinic.googleMapsPhotosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="justify-self-start lg:justify-self-end inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-2.5 text-xs uppercase tracking-[0.14em] font-semibold text-neutral-700 hover:border-brand hover:text-brand transition-colors"
          >
            View Full Photo Library
            <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="fade-in grid grid-cols-12 gap-4 lg:gap-5 mb-12">
          {galleryImages.slice(0, 5).map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-3xl ${
                i === 0 ? "col-span-12 lg:col-span-7 row-span-2" :
                i === 1 ? "col-span-12 sm:col-span-6 lg:col-span-5" :
                i === 2 ? "col-span-12 sm:col-span-6 lg:col-span-5" :
                "col-span-6 lg:col-span-3"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1000}
                height={800}
                className={`gallery-img object-cover w-full ${
                  i === 0
                    ? "h-[360px] sm:h-[460px] lg:h-full"
                    : i < 3
                      ? "h-[230px] sm:h-[260px]"
                      : "h-[180px] sm:h-[220px]"
                }`}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/8 rounded-3xl" />
            </div>
          ))}
        </div>

        <div className="fade-in fade-in-delay-2">
          <div className="rounded-[1.8rem] border border-stone-200/85 bg-white overflow-hidden shadow-[0_14px_38px_rgba(20,30,26,0.06)]">
            <div className="p-5 lg:p-6 border-b border-stone-200/70 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="font-semibold text-neutral-900 text-sm uppercase tracking-[0.12em]">
                  Visit Planning
                </p>
                <p className="text-neutral-600 text-sm mt-1">
                  Preview access routes, nearby landmarks, and parking availability.
                </p>
              </div>
              <a
                href={clinic.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand text-xs uppercase tracking-[0.14em] font-semibold hover:text-brand-soft transition-colors"
              >
                Open in Google Maps
                <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="aspect-[16/8] sm:aspect-[16/6]">
              <iframe
                src={clinic.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Artize Dental Clinic on Google Maps"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
