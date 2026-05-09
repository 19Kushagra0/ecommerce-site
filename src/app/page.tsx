"use client";

import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import Image from "next/image";
import { products } from "../../data/products";
import ProductCard from "@/components/ProductCard";
import {
  Shirt,
  Mouse,
  Watch,
  Frame,
  ArrowRight,
  Skull,
} from "lucide-react";
import clsx from "clsx";

// ── Types ──────────────────────────────────────────────────────
type CategoryConfig = {
  id: string;
  label: string;
  count: number;
  cardClass: string;
  iconClass: string;
  haloClass: string;
  arrowClass: string;
  itemColor: string;
  href: string;
  Icon: React.ElementType;
  imageUrl: string;
};

// ── Data ───────────────────────────────────────────────────────
const CATEGORIES: CategoryConfig[] = [
  {
    id: "apparel",
    label: "Apparel",
    count: 12,
    cardClass: "card-apparel",
    iconClass: "icon-apparel",
    haloClass: "halo-apparel",
    arrowClass: "arrow-apparel",
    itemColor: "#c026d3",
    href: "/collection?category=apparel",
    Icon: Shirt,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBL_oa1OVSc-fXIerSmoV9m_VjmTnewRD5kXs6Vfp2z4j9ZUkt1EGT58f37R0PUy5ROjCDNyoeCjW-mnzsafkz89Z89udcVBnQQc-ht9hmXziDi6et4oPJO7bMjw8rSFZW4aFrxY3YeDjBfIrSTSmogsbDGZ62KIbvfcN1SmxGj-980uWLiGPzUwD5c6qk6gNBKRVz6OM8ZEeyVlkKBfzNR89e07yUJj-83Cv2AXgjR5JzxvPall0zJ3KCGA2yxNd1y7td6dx60QObu",
  },
  {
    id: "peripherals",
    label: "Peripherals",
    count: 8,
    cardClass: "card-peripherals",
    iconClass: "icon-peripherals",
    haloClass: "halo-peripherals",
    arrowClass: "arrow-peripherals",
    itemColor: "#06b6d4",
    href: "/collection?category=peripherals",
    Icon: Mouse,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwV7EnauXDmVN7eX1OjbnzxqOiCMTa9PR9OptZuMXQslmw-aXil4sITsoviIJDLlFbdo6de0ZI4pdJwGexSsp5ycmXkARzsKjARHmUdElJeIk8Qdb5MiFH_aeinGhav4XCE-oMObHHm3KlIYgQ_JajFtgpyHNGRORqWiNEq0PONeAjR_XJHG8KfAUIwTf04IiqHu9EEVLAr9v6UImb37iF39-0anIPxFhr0dEzCSqN5CTZ7Vf1oq2m3gtqcFjdCEvmkj1WxYdXBeEz",
  },
  {
    id: "accessories",
    label: "Accessories",
    count: 24,
    cardClass: "card-accessories",
    iconClass: "icon-accessories",
    haloClass: "halo-accessories",
    arrowClass: "arrow-accessories",
    itemColor: "#ff2d78",
    href: "/collection?category=accessories",
    Icon: Watch,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKvdrckG633XTCmRDvZsDpKpIrNoClrorcqHfkS-UoBZj-Lfu0dWFusJd5CuDKDHj3gSNlZtlWjy4sQxAmLvo6phezrmbvCrOcKToVm_zzMGj3Mzsx6TZEiOd7EnpO2EqUOZoFsEGuFc9tJ9luiiFkRxaB0BHOg-3VAsU0O3rWObIkY1muiksxI2iVhHJaIVFsLm8181tyk7KPeYAAigzl6zpUC0_St9eruR9HlkNm6lEGxD39H7rrIXG2Co9lV2sBQXJt9YPiT40f",
  },
  {
    id: "decor",
    label: "Decor",
    count: 5,
    cardClass: "card-decor",
    iconClass: "icon-decor",
    haloClass: "halo-decor",
    arrowClass: "arrow-decor",
    itemColor: "#fbbf24",
    href: "/collection?category=decor",
    Icon: Frame,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtlHx5R_vSQWIX04ScFo42YbT79Kq1lfKEqx_zt12xM7e7xi-onNxd3fEyeZPZbuldxGYZiNHu8OX1qGSdaKPin3BfS55LeEoQDnQIQHrqM9wHn6LqNROiO0S1yGOu8--XWUCBdbQ7eYcu6p3b3QrQx37BP9BTkFHMp9Sol3qRJ8Z5Thbv8R4h-1NJfAEWpFZR9EteIRApL2KhJIlKhH8C7sliSlrsJOCENnE-EZU3KDkQ4A_sTcv_1c98m9s6iiL672-_lFZWEUdR",
  },
  {
    id: "headwear",
    label: "Headwear",
    count: 7,
    cardClass: "card-apparel",
    iconClass: "icon-apparel",
    haloClass: "halo-apparel",
    arrowClass: "arrow-apparel",
    itemColor: "#c026d3",
    href: "/collection?category=headwear",
    Icon: Shirt,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBL_oa1OVSc-fXIerSmoV9m_VjmTnewRD5kXs6Vfp2z4j9ZUkt1EGT58f37R0PUy5ROjCDNyoeCjW-mnzsafkz89Z89udcVBnQQc-ht9hmXziDi6et4oPJO7bMjw8rSFZW4aFrxY3YeDjBfIrSTSmogsbDGZ62KIbvfcN1SmxGj-980uWLiGPzUwD5c6qk6gNBKRVz6OM8ZEeyVlkKBfzNR89e07yUJj-83Cv2AXgjR5JzxvPall0zJ3KCGA2yxNd1y7td6dx60QObu",
  },
  {
    id: "keyboards",
    label: "Keyboards",
    count: 15,
    cardClass: "card-peripherals",
    iconClass: "icon-peripherals",
    haloClass: "halo-peripherals",
    arrowClass: "arrow-peripherals",
    itemColor: "#06b6d4",
    href: "/collection?category=keyboards",
    Icon: Mouse,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwV7EnauXDmVN7eX1OjbnzxqOiCMTa9PR9OptZuMXQslmw-aXil4sITsoviIJDLlFbdo6de0ZI4pdJwGexSsp5ycmXkARzsKjARHmUdElJeIk8Qdb5MiFH_aeinGhav4XCE-oMObHHm3KlIYgQ_JajFtgpyHNGRORqWiNEq0PONeAjR_XJHG8KfAUIwTf04IiqHu9EEVLAr9v6UImb37iF39-0anIPxFhr0dEzCSqN5CTZ7Vf1oq2m3gtqcFjdCEvmkj1WxYdXBeEz",
  },
  {
    id: "jewelry",
    label: "Jewelry",
    count: 9,
    cardClass: "card-accessories",
    iconClass: "icon-accessories",
    haloClass: "halo-accessories",
    arrowClass: "arrow-accessories",
    itemColor: "#ff2d78",
    href: "/collection?category=jewelry",
    Icon: Watch,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKvdrckG633XTCmRDvZsDpKpIrNoClrorcqHfkS-UoBZj-Lfu0dWFusJd5CuDKDHj3gSNlZtlWjy4sQxAmLvo6phezrmbvCrOcKToVm_zzMGj3Mzsx6TZEiOd7EnpO2EqUOZoFsEGuFc9tJ9luiiFkRxaB0BHOg-3VAsU0O3rWObIkY1muiksxI2iVhHJaIVFsLm8181tyk7KPeYAAigzl6zpUC0_St9eruR9HlkNm6lEGxD39H7rrIXG2Co9lV2sBQXJt9YPiT40f",
  },
  {
    id: "prints",
    label: "Prints",
    count: 11,
    cardClass: "card-decor",
    iconClass: "icon-decor",
    haloClass: "halo-decor",
    arrowClass: "arrow-decor",
    itemColor: "#fbbf24",
    href: "/collection?category=prints",
    Icon: Frame,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtlHx5R_vSQWIX04ScFo42YbT79Kq1lfKEqx_zt12xM7e7xi-onNxd3fEyeZPZbuldxGYZiNHu8OX1qGSdaKPin3BfS55LeEoQDnQIQHrqM9wHn6LqNROiO0S1yGOu8--XWUCBdbQ7eYcu6p3b3QrQx37BP9BTkFHMp9Sol3qRJ8Z5Thbv8R4h-1NJfAEWpFZR9EteIRApL2KhJIlKhH8C7sliSlrsJOCENnE-EZU3KDkQ4A_sTcv_1c98m9s6iiL672-_lFZWEUdR",
  },
];

const MARQUEE_ITEMS = [
  "— FREE SHIPPING OVER $75 —",
  "LIMITED DROPS",
  "— NEW GEAR EVERY FRIDAY —",
  "CANDY SKULL CULTURE",
  "— FREE SHIPPING OVER $75 —",
  "LIMITED DROPS",
  "— NEW GEAR EVERY FRIDAY —",
  "CANDY SKULL CULTURE",
];

// ── Subcomponents ──────────────────────────────────────────────

function CategoryCard({ cat }: Readonly<{ cat: CategoryConfig }>) {
  return (
    <Link
      href={cat.href}
      className={clsx(
        "group relative flex flex-col rounded-[12px] h-[280px] overflow-hidden transition-all duration-300",
        cat.cardClass,
      )}
    >
      {/* Background Image */}
      <Image
        src={cat.imageUrl}
        alt={cat.label}
        fill
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Dark gradient overlay so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/85 z-0" />

      {/* Top-left icon badge */}
      <div
        className="absolute top-6 left-6 w-12 h-12 rounded-full flex items-center justify-center z-10"
        style={{
          backgroundColor: `${cat.itemColor}20`,
          border: `1px solid ${cat.itemColor}`,
        }}
      >
        <cat.Icon size={22} className={cat.iconClass} aria-hidden="true" />
      </div>

      {/* Bottom row: name + items + arrow */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end z-10">
        <div className="flex flex-col gap-1">
          <h3
            className="text-[22px] font-bold text-white leading-none"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {cat.label}
          </h3>
          <span
            className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color: cat.itemColor }}
          >
            {cat.count} ITEMS
          </span>
        </div>
        <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300", cat.arrowClass)}>
          <ArrowRight size={18} />
        </div>
      </div>
    </Link>
  );
}

function CategorySection({ category }: { category: CategoryConfig }) {
  const categoryProducts = products.filter(p => p.category === category.id).slice(0, 8);
  
  if (categoryProducts.length === 0) return null;

  return (
    <section className="bg-section-dark px-4 md:px-16 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex justify-between items-end border-b border-[#c026d3]/30 pb-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${category.itemColor}20`, border: `1px solid ${category.itemColor}` }}
            >
              <category.Icon size={20} style={{ color: category.itemColor }} />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight uppercase"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "linear-gradient(90deg, #c026d3, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {category.label} COLLECTION
            </h2>
          </div>
          <Link
            href={category.href}
            className="text-[#ff2d78] text-sm font-medium hover:text-[#c026d3] transition-colors border-b border-[#ff2d78]/30 hover:border-[#c026d3]/30 pb-0.5 shrink-0"
          >
            View all {category.label.toLowerCase()} →
          </Link>
        </div>

        {/* Product row — horizontal scroll */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide">
          {categoryProducts.map((product) => (
            <div key={product.id} className="w-[280px] sm:w-[320px] shrink-0 snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Page ───────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Marquee Banner */}
      <div className="bg-[#ff2d78] py-3 overflow-hidden border-y border-[#ff2d78] shadow-[0_0_20px_rgba(255,45,120,0.4)] relative z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {MARQUEE_ITEMS.map((item, i) => (
            <span
              key={i}
              className="text-black font-bold uppercase tracking-[0.2em] text-sm mx-5"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <section className="bg-section-dark px-4 md:px-16 py-24">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex justify-between items-center border-b border-[#c026d3]/20 pb-6">
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-white">CATE</span>
              <span
                style={{
                  background: "linear-gradient(90deg, #c026d3, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                GORIES
              </span>
            </h2>
            <Link
              href="/collection"
              className="flex items-center gap-2 text-[10px] text-white font-bold uppercase tracking-[0.2em] px-5 py-2.5 rounded-full border border-[#06b6d4]/50 hover:border-[#c026d3] transition-colors"
            >
              VIEW ALL <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.id} cat={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Category Collections Sections */}
      {CATEGORIES.map((cat) => (
        <CategorySection key={cat.id} category={cat} />
      ))}

      {/* Join the Cult / Newsletter Section */}
      <section className="bg-[#0a0a0a] px-4 md:px-16 py-16">
        <div className="max-w-4xl mx-auto cult-section-bg rounded-xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] z-0">
            <Skull size={380} aria-hidden="true" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <Skull
              size={64}
              className="cult-skull-glow text-white"
              aria-hidden="true"
            />

            <h2
              className="text-5xl md:text-6xl font-bold tracking-tight"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "linear-gradient(90deg, #c026d3, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              JOIN THE CULT
            </h2>

            <p className="text-[#e2e8f0] text-base max-w-md leading-relaxed">
              Subscribe for exclusive early access to limited drops, underground
              events, and member-only gear.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full max-w-md flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="input-email flex-grow px-4 py-3 text-sm border border-gray-500/50 rounded-lg bg-transparent text-white placeholder-gray-500 focus:outline-none focus:border-gray-300 transition-colors"
                required
              />
              <button
                type="submit"
                className="btn-cult px-8 py-3 rounded-lg text-sm whitespace-nowrap"
              >
                Get Early Access
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
