"use client";

import { useState } from "react";
import { use } from "react";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";
import { products } from "@/../data/products";
import { categories } from "@/../data/categories";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface ShopPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default function ShopPage({ searchParams }: ShopPageProps) {
  const { category: initialCategory } = use(searchParams);
  const router = useRouter();
  const pathname = usePathname();
  const currentSearchParams = useSearchParams();

  // easy way to get search params
  // const params = use(searchParams);
  // const initialCategory = params.category;

  const [activeCategory, setActiveCategory] = useState(
    initialCategory ?? "all",
  );

  console.log(activeCategory);

  const [search, setSearch] = useState("");

  const filtered = products.filter((el) => {
    if (activeCategory === "all") {
      return true;
    } else {
      return el.category === activeCategory;
    }
  });

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-skull-neon-pink text-xs uppercase tracking-[0.35em] mb-2">
            All gear drops
          </p>
          <h1 className="font-display text-6xl gradient-skull">THE DROP</h1>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-skull-neon-pink/50" />
            <span className="text-skull-neon-pink text-lg">💀</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-skull-neon-pink/50" />
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>

        {/* Result count */}

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-6xl mb-4">💀</p>
            <h2 className="font-display text-3xl text-skull-muted mb-2">
              No drops found
            </h2>
            <p className="text-skull-muted text-sm">
              Try a different search or category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
