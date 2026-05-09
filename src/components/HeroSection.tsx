"use client";

import Link from "next/link";
import { Star, Skull } from "lucide-react";

export default function HeroSection() {
  return (
    <header className="relative min-h-[850px] flex items-center justify-center pt-24 overflow-hidden bg-[#0a0a0a] border-b border-[#2a1040]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pixel-grid pointer-events-none z-0" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(207,188,255,0.15)_0%,transparent_70%)]" />

      {/* Giant faded skull */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none z-0">
        <Skull
          size={800}
          className="text-[#c026d3]"
          strokeWidth={1}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-16 flex flex-col items-center text-center">
        <h1
          className="text-7xl md:text-[88px] tracking-tighter mb-8 leading-[1.1] font-bold"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="block bg-gradient-to-r from-[#c026d3] to-[#06b6d4] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(192,38,211,0.3)]">
            BORN TO PLAY.
          </span>
          <span className="block bg-gradient-to-r from-[#06b6d4] to-[#c026d3] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            BUILT TO DIE.
          </span>
        </h1>

        <p className="text-[18px] text-[#cbc4d2] max-w-2xl mb-12 mx-auto leading-relaxed">
          Cyberpunk grit meets Dia de los Muertos soul. Tactical apparel and
          high-performance peripherals designed for the nocturnal elite.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-16">
          <Link
            href="/collection"
            className="bg-[#c026d3] text-white text-[12px] uppercase py-4 px-8 rounded-lg hover:shadow-[0_0_20px_rgba(192,38,211,0.4)] transition-all duration-300 font-bold tracking-widest inline-block"
          >
            Collect Now
          </Link>
          <Link
            href="/about"
            className="bg-transparent border-2 border-[#06b6d4] text-[#06b6d4] text-[12px] uppercase py-4 px-8 rounded-lg hover:bg-[#06b6d4] hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 font-bold tracking-widest inline-block"
          >
            Our Story
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto border-t border-[#494551]/50 pt-12">
          <div className="flex flex-col items-center justify-center gap-2">
            <span
              className="text-[32px] text-[#c026d3] font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              10K+
            </span>
            <span className="text-[12px] text-[#cbc4d2] uppercase tracking-widest font-bold">
              Community
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border-y md:border-y-0 md:border-x border-[#494551]/50 py-4 md:py-0">
            <span
              className="text-[32px] text-[#c026d3] font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              50+
            </span>
            <span className="text-[12px] text-[#cbc4d2] uppercase tracking-widest font-bold">
              Limited Drops
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span
              className="text-[32px] text-[#c026d3] font-bold flex items-center gap-1"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              4.9 <Star className="text-[#fbbf24] fill-[#fbbf24]" size={24} />
            </span>
            <span className="text-[12px] text-[#cbc4d2] uppercase tracking-widest font-bold">
              Rating
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
