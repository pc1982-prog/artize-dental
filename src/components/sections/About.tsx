"use client";

import Image from "next/image";
import { aboutData } from "@/data/about";
import { useFadeIn } from "@/hooks/useFadeIn";
import { HiCheckCircle } from "react-icons/hi2";

export default function About() {
  const ref = useFadeIn();

  return (
    <section id="about" className="bg-warm-50 py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="fade-in">
            <p className="text-gold font-medium text-sm tracking-[0.15em] uppercase mb-4">
              About Our Clinic
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
              {aboutData.headline}
            </h2>
            {aboutData.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-neutral-600 text-base lg:text-lg leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {aboutData.highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <HiCheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
                  <span className="text-neutral-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in fade-in-delay-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={aboutData.image}
                alt="Inside Artize Dental Clinic"
                width={800}
                height={600}
                className="object-cover w-full h-[400px] lg:h-[520px]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
