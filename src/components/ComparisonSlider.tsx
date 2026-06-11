"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function ComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
}: ComparisonSliderProps) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setDragging(true);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      updatePosition(e.clientX);
    },
    [dragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setDragging(false);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative h-[240px] sm:h-[260px] rounded-t-2xl overflow-hidden select-none touch-none bg-warm-100 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <Image
        src={afterImage}
        alt="After treatment"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 400px"
        draggable={false}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt="Before treatment"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          draggable={false}
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-[3px] bg-white shadow-lg z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full border-2 border-gold shadow-[0_0_12px_rgba(201,168,76,0.3)] flex items-center justify-center transition-transform duration-200 hover:scale-110">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 3L2 8L5 13" stroke="#0D7377" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 3L14 8L11 13" stroke="#0D7377" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="absolute top-3 left-3 bg-neutral-800/70 text-white text-[11px] font-semibold px-3 py-1.5 rounded z-20 pointer-events-none">
        {beforeLabel}
      </div>
      <div className="absolute top-3 right-3 bg-teal/80 text-white text-[11px] font-semibold px-3 py-1.5 rounded z-20 pointer-events-none">
        {afterLabel}
      </div>
    </div>
  );
}
