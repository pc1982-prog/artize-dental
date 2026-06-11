import Image from "next/image";
import { clinic } from "@/data/clinic";
import { footerLinks } from "@/data/navigation";
import { stats } from "@/data/stats";
import { HiMapPin, HiPhone, HiEnvelope, HiClock, HiStar, HiOutlineArrowUpRight } from "react-icons/hi2";

export default function Footer() {
  const googleStat = stats.find((s) => s.platform === "Google");

  return (
    <footer className="bg-[#121917] text-white pt-20 pb-24 md:pb-8">
      <div className="section-shell">
        <div className="rounded-[2rem] border border-white/12 bg-white/[0.03] p-7 lg:p-9 mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">
            <div className="lg:col-span-2">
              <a href="#" className="inline-flex items-center gap-3 mb-5">
                {clinic.logoImage && (
                  <Image
                    src={clinic.logoImage}
                    alt={clinic.name}
                    width={48}
                    height={48}
                    className="drop-shadow-md"
                  />
                )}
                <span className="font-serif text-3xl font-semibold text-white">
                  {clinic.name.split(" ").slice(0, 2).join(" ")}
                </span>
              </a>
              <p className="text-neutral-300 text-sm leading-relaxed max-w-xl mb-6">
                Premium cosmetic and restorative dentistry designed for confidence, comfort, and long-term oral health.
              </p>
              {googleStat && (
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2">
                  <HiStar className="w-4 h-4 text-champagne" />
                  <span className="text-white text-xs font-semibold">
                    {googleStat.value} Rated
                  </span>
                  <span className="text-neutral-400 text-xs">
                    ({googleStat.numericValue.toLocaleString()}+ Google reviews)
                  </span>
                </div>
              )}
            </div>
{/* 
            <div>
              <h3 className="font-semibold text-white text-[0.68rem] uppercase tracking-[0.18em] mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-neutral-300 text-sm hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            <div>
              <h3 className="font-semibold text-white text-[0.68rem] uppercase tracking-[0.18em] mb-5">
                Contact
              </h3>
              <ul className="space-y-4.5">
                <li className="flex items-start gap-3">
                  <HiMapPin className="w-4.5 h-4.5 text-champagne flex-shrink-0 mt-0.5" />
                  <a
                    href={clinic.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 text-sm hover:text-white transition-colors duration-300"
                  >
                    {clinic.address}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <HiPhone className="w-4.5 h-4.5 text-champagne flex-shrink-0" />
                  <a
                    href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                    className="text-neutral-300 text-sm hover:text-white transition-colors duration-300"
                  >
                    {clinic.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <HiEnvelope className="w-4.5 h-4.5 text-champagne flex-shrink-0" />
                  <a
                    href={`mailto:${clinic.email}`}
                    className="text-neutral-300 text-sm hover:text-white transition-colors duration-300"
                  >
                    {clinic.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <HiClock className="w-4.5 h-4.5 text-champagne flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300 text-sm">{clinic.hours}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10 rounded-[1.5rem] overflow-hidden h-[220px] border border-white/10">
          <iframe
            src={clinic.mapEmbedUrl}
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${clinic.name} location`}
          />
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-neutral-400 text-xs">
            &copy; {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={clinic.practoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-400 text-xs uppercase tracking-[0.1em] hover:text-white transition-colors duration-300"
            >
              Practo
              <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={clinic.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-400 text-xs uppercase tracking-[0.1em] hover:text-white transition-colors duration-300"
            >
              Google Maps
              <HiOutlineArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
