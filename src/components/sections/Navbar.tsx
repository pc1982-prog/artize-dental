"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { navLinks } from "@/data/navigation";
import { clinic } from "@/data/clinic";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/92 backdrop-blur-xl border-b border-stone-200/70 shadow-[0_10px_40px_rgba(14,18,16,0.06)]"
          : "bg-gradient-to-b from-black/35 to-transparent"
      }`}
    >
      <div className="section-shell">
        <div className="flex items-center justify-between h-[86px]">
          <a href="#" className="flex items-center gap-3">
            {clinic.logoImage && (
              <Image
                src={clinic.logoImage}
                alt={clinic.name}
                width={40}
                height={40}
                className="drop-shadow-sm"
              />
            )}
            <div>
              <p
                className={`font-serif text-[1.5rem] sm:text-[1.7rem] leading-none tracking-tight transition-colors duration-500 ${
                  scrolled ? "text-ink" : "text-white"
                }`}
              >
                {clinic.name.split(" ").slice(0, 2).join(" ")}
              </p>
              <p
                className={`text-[0.64rem] uppercase tracking-[0.28em] mt-1 transition-colors duration-500 ${
                  scrolled ? "text-neutral-500" : "text-white/70"
                }`}
              >
                Cosmetic Dentistry Studio
              </p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link-hover text-[0.72rem] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                  scrolled ? "text-neutral-700 hover:text-brand" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={clinic.practoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-press inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] border transition-all duration-300 ${
                scrolled
                  ? "bg-brand text-white border-brand hover:bg-brand-soft"
                  : "bg-white text-ink border-white hover:bg-stone-100"
              }`}
            >
              Schedule Consultation
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? "text-neutral-900" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <HiOutlineXMark className="w-6 h-6" />
            ) : (
              <HiOutlineBars3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-ivory/98 backdrop-blur-xl border-t border-stone-200">
          <div className="px-6 py-7 space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-neutral-800 font-semibold text-sm uppercase tracking-[0.14em] hover:text-brand transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={clinic.practoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-brand text-white text-center font-semibold px-6 py-3.5 rounded-full mt-5 text-sm uppercase tracking-[0.12em] btn-press active:scale-[0.97]"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
