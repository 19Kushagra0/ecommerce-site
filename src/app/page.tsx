"use client";

import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
const MARQUEE_TEXT =
  "FREE SHIPPING OVER $75 — LIMITED DROPS — NEW GEAR EVERY FRIDAY — CANDY SKULL CULTURE — ";

interface ProductsTypes {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  tag: string;
  image: string;
  rating?: number;
  reviews?: number;
  stock: number;
  colors: string[];
  sizes: string[];
  description: string;
}

const featuredProducts: ProductsTypes[] = [
  {
    id: "1",
    name: "Neon Reaper Hoodie",
    price: 89.99,
    originalPrice: 120.0,
    category: "apparel",
    tag: "BESTSELLER",
    image: "https://picsum.photos/seed/neon-reaper-hoodie/400/400",
    rating: 4.8,
    reviews: 342,
    stock: 12,
    colors: ["#ff2d78", "#b026ff"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "The ultimate statement piece for every gamer. Deep neon pink trim and heavyweight fleece.",
  },
  {
    id: "2",
    name: "Skull Drops Mousepad XL",
    price: 34.99,
    category: "peripherals",
    tag: "NEW",
    image: "https://picsum.photos/seed/skull-drops-mousepad/400/400",
    rating: 4.6,
    reviews: 218,
    stock: 25,
    colors: ["#050008", "#2a1040"],
    sizes: ["XL (900x400mm)", "XXL (1200x600mm)"],
    description:
      "Precision micro-woven surface for pro-grade tracking. Neon pink stitched edges.",
  },
  {
    id: "3",
    name: "Calavera Keycap Set",
    price: 59.99,
    originalPrice: 79.99,
    category: "peripherals",
    tag: "SALE",
    image: "https://picsum.photos/seed/calavera-keycaps/400/400",
    rating: 4.9,
    reviews: 507,
    stock: 8,
    colors: ["#ff2d78", "#b026ff", "#00d4ff"],
    sizes: ["Full Kit", "TKL Kit"],
    description:
      "Hand-painted candy skull legends on double-shot PBT keycaps. Haunt the keyboard.",
  },
  {
    id: "5",
    name: "Ghost Rider Tee",
    price: 39.99,
    category: "apparel",
    tag: "NEW",
    image: "https://picsum.photos/seed/ghost-rider-tee/400/400",
    rating: 4.7,
    reviews: 189,
    stock: 45,
    colors: ["#050008", "#ffffff"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "100% ring-spun cotton with a faded vintage skull graphic. Perfect for long sessions.",
  },
];

export default function HomePage() {
  // PRODUCTS HARDCODED TO REMOVE JS LOGIC

  return (
    <>
      <HeroSection />

      {/* ── Featured Categories ────────────────────────────── */}
      <section className="py-20 px-4 bg-skull-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-skull-neon-pink text-xs uppercase tracking-[0.35em] mb-2">
              Browse by
            </p>
            <h2 className="font-display text-5xl gradient-skull">CATEGORIES</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Category: Apparel */}
            <div className="group relative flex flex-col items-center justify-center gap-3 p-6 bg-skull-card rounded-xl border border-skull-border hover:border-skull-neon-pink/60 hover:shadow-lg hover:shadow-skull-neon-pink/10 transition-all duration-200">
              <span className="text-4xl">👕</span>
              <span className="font-display text-lg tracking-wider text-skull-text group-hover:text-skull-neon-pink transition-colors">
                Apparel
              </span>
              <span className="text-skull-muted text-xs">2 items</span>
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                style={{ boxShadow: "inset 0 0 20px #ff2d7808" }}
              />
            </div>

            {/* Category: Peripherals */}
            <div className="group relative flex flex-col items-center justify-center gap-3 p-6 bg-skull-card rounded-xl border border-skull-border hover:border-skull-neon-pink/60 hover:shadow-lg hover:shadow-skull-neon-pink/10 transition-all duration-200">
              <span className="text-4xl">🖱️</span>
              <span className="font-display text-lg tracking-wider text-skull-text group-hover:text-skull-neon-pink transition-colors">
                Peripherals
              </span>
              <span className="text-skull-muted text-xs">3 items</span>
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                style={{ boxShadow: "inset 0 0 20px #ff2d7808" }}
              />
            </div>

            {/* Category: Accessories */}
            <div className="group relative flex flex-col items-center justify-center gap-3 p-6 bg-skull-card rounded-xl border border-skull-border hover:border-skull-neon-pink/60 hover:shadow-lg hover:shadow-skull-neon-pink/10 transition-all duration-200">
              <span className="text-4xl">🎮</span>
              <span className="font-display text-lg tracking-wider text-skull-text group-hover:text-skull-neon-pink transition-colors">
                Accessories
              </span>
              <span className="text-skull-muted text-xs">2 items</span>
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                style={{ boxShadow: "inset 0 0 20px #ff2d7808" }}
              />
            </div>

            {/* Category: Decor */}
            <div className="group relative flex flex-col items-center justify-center gap-3 p-6 bg-skull-card rounded-xl border border-skull-border hover:border-skull-neon-pink/60 hover:shadow-lg hover:shadow-skull-neon-pink/10 transition-all duration-200">
              <span className="text-4xl">🖼️</span>
              <span className="font-display text-lg tracking-wider text-skull-text group-hover:text-skull-neon-pink transition-colors">
                Decor
              </span>
              <span className="text-skull-muted text-xs">1 items</span>
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                style={{ boxShadow: "inset 0 0 20px #ff2d7808" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* ── Marquee Banner ─────────────────────────────────── */}
      <div className="py-4 bg-skull-neon-pink/10 border-y border-skull-neon-pink/20 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <span className="animate-marquee inline-flex shrink-0">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="font-display text-lg tracking-widest text-skull-neon-pink px-2"
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </span>
        </div>
      </div>

      {/* ── Featured Products ──────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-skull-neon-gold text-xs uppercase tracking-[0.35em] mb-2">
                This week's
              </p>
              <h2 className="font-display text-5xl gradient-skull">
                DROP OF THE WEEK
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-skull-neon-pink text-sm font-medium hover:text-skull-neon-purple transition-colors border-b border-skull-neon-pink/30 hover:border-skull-neon-purple/30 pb-0.5 shrink-0"
            >
              View all drops →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ─────────────────────────────────────── */}
      <section className="py-20 px-4 bg-skull-dark border-t border-skull-border">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-4xl mb-4">💀</div>
          <h2 className="font-display text-4xl gradient-skull mb-3">
            JOIN THE CULT
          </h2>
          <p className="text-skull-muted text-sm mb-8 leading-relaxed">
            Get early access to drops. No spam — just skull drops, neon drip,
            and gear before anyone else.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-skull-card border border-skull-border rounded-xl px-4 py-3 text-sm text-skull-text placeholder:text-skull-muted outline-none focus:border-skull-neon-pink/60 focus:ring-2 focus:ring-skull-neon-pink/20 transition-all duration-200"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-skull-neon-pink text-white font-semibold rounded-xl hover:brightness-110 active:scale-95 transition-all duration-150 shadow-lg shadow-skull-neon-pink/20 shrink-0"
            >
              Get Early Access
            </button>
          </form>
          <p className="text-skull-muted text-xs mt-4">
            Join the cult. Get early access to drops.
          </p>
        </div>
      </section>
    </>
  );
}
