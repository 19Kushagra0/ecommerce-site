'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-skull-black">
      {/* Animated skull SVG background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <svg
          viewBox="0 0 200 200"
          className="w-[80vmin] h-[80vmin] animate-pulse-glow"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="skullGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#b026ff" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#050008" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Skull outline */}
          <circle cx="100" cy="85" r="55" fill="url(#skullGrad)" stroke="#b026ff22" strokeWidth="1" />
          <rect x="65" y="125" width="70" height="35" rx="8" fill="none" stroke="#b026ff22" strokeWidth="1" />
          {/* Eyes */}
          <ellipse cx="82" cy="82" rx="14" ry="16" fill="#b026ff18" stroke="#ff2d7844" strokeWidth="1" />
          <ellipse cx="118" cy="82" rx="14" ry="16" fill="#b026ff18" stroke="#ff2d7844" strokeWidth="1" />
          {/* Nose */}
          <path d="M 96 100 L 100 108 L 104 100" stroke="#b026ff33" strokeWidth="1" fill="none" strokeLinecap="round" />
          {/* Teeth */}
          {[75, 87, 99, 111, 123].map((x, i) => (
            <rect key={i} x={x} y="137" width="10" height="16" rx="2" fill="none" stroke="#b026ff22" strokeWidth="1" />
          ))}
          {/* Marigold flowers */}
          {[
            { cx: 30, cy: 30 }, { cx: 170, cy: 30 },
            { cx: 30, cy: 170 }, { cx: 170, cy: 170 },
          ].map((pos, i) => (
            <g key={i}>
              {[0, 45, 90, 135].map((angle) => (
                <ellipse
                  key={angle}
                  cx={pos.cx}
                  cy={pos.cy}
                  rx="8"
                  ry="4"
                  fill="#ffd70015"
                  stroke="#ffd70022"
                  strokeWidth="0.5"
                  transform={`rotate(${angle} ${pos.cx} ${pos.cy})`}
                />
              ))}
              <circle cx={pos.cx} cy={pos.cy} r="4" fill="#ffd70015" stroke="#ffd70033" strokeWidth="0.5" />
            </g>
          ))}
        </svg>
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#b026ff 1px, transparent 1px), linear-gradient(90deg, #b026ff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-skull-neon-pink text-xs uppercase tracking-[0.4em] mb-6 font-medium">
          Limited Drops — New Gear Every Friday
        </p>

        <h1 className="font-display text-7xl sm:text-8xl md:text-9xl leading-none mb-4">
          <span className="glow-pink text-skull-neon-pink">BORN TO</span>
          <br />
          <span className="gradient-skull">PLAY.</span>
          <br />
          <span className="glow-purple text-skull-neon-purple">BUILT TO</span>
          <br />
          <span className="gradient-skull">DIE.</span>
        </h1>

        <p className="text-skull-muted text-base sm:text-lg max-w-md mx-auto mt-6 mb-10 leading-relaxed">
          Premium gaming lifestyle gear fusing Dia de los Muertos artistry with dark cyberpunk aesthetics.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-skull-neon-pink text-white font-semibold rounded-xl hover:brightness-110 active:scale-95 transition-all duration-150 shadow-lg shadow-skull-neon-pink/30"
          >
            Shop Now
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-skull-text font-semibold rounded-xl border border-skull-border hover:border-skull-neon-purple/60 hover:bg-skull-neon-purple/10 active:scale-95 transition-all duration-150"
          >
            Our Story
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-14 text-center">
          {[
            { value: '10K+', label: 'Community Members' },
            { value: '50+', label: 'Limited Drops' },
            { value: '4.9★', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl gradient-skull">{stat.value}</div>
              <div className="text-skull-muted text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-skull-black to-transparent pointer-events-none" />
    </section>
  );
}
