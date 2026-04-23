"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Minus, Plus, Package } from "lucide-react";
import clsx from "clsx";
import productsData from "../../../../data/products.json";
import { Product } from "@/lib/types";
import { useParams } from "next/navigation";
// DUMMY DATA FOR UI SKELETON
// const product = {
//   id: "dummy",
//   name: "SKULL DROP ITEM",
//   price: 99.99,
//   originalPrice: 129.99,
//   rating: 4.5,
//   reviews: 12,
//   description:
//     "This is a placeholder description. Connect your database logic here to show real product details.",
//   image: "/placeholder-product.jpg", // You should replace this with a real image path or use your own logic
//   category: "EQUIPMENT",
//   tag: "NEW",
//   stock: 5,
//   colors: ["#000000", "#FF007A", "#BC13FE"],
//   sizes: ["S", "M", "L", "XL"],
// };

const products = productsData as Product[];

export default function ProductPage() {
  // Logic removed for the user to implement themselves
  const params = useParams();

  const [selectedColor, setSelectedColor] = useState(products.colors[0]);
  const [selectedSize, setSelectedSize] = useState(products.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const discount = Math.round(
    ((products.originalPrice - products.price) / products.originalPrice) * 100,
  );

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-skull-muted mb-8">
          <Link
            href="/"
            className="hover:text-skull-neon-pink transition-colors"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/shop"
            className="hover:text-skull-neon-pink transition-colors"
          >
            Shop
          </Link>
          <span>/</span>
          <span className="text-skull-text">{products.name}</span>
        </nav>

        {/* Main product grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* LEFT — Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-skull-card border border-skull-border card-glow">
            <div className="absolute inset-0 flex items-center justify-center bg-skull-dark text-skull-muted">
              {/* Use the Image component once you have a real source */}
              <span className="text-xl">PRODUCT IMAGE SKELETON</span>
            </div>
            {products.tag && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-widest bg-skull-neon-pink text-white z-10">
                {products.tag}
              </span>
            )}
          </div>

          {/* RIGHT — Details */}
          <div className="flex flex-col">
            <p className="text-skull-muted text-xs uppercase tracking-widest mb-2">
              {products.category}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-skull-text leading-tight mb-4">
              {products.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={clsx(
                      "w-4 h-4",
                      star <= 4
                        ? "fill-skull-neon-gold text-skull-neon-gold"
                        : "text-skull-border",
                    )}
                  />
                ))}
              </div>
              <span className="text-skull-text text-sm font-semibold">
                {products.rating}
              </span>
              <span className="text-skull-muted text-sm">
                ({products.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-mono-price text-skull-neon-pink text-4xl font-bold">
                ${products.price}
              </span>
              <span className="font-mono-price text-skull-muted text-xl line-through">
                ${products.originalPrice}
              </span>
              <span className="text-skull-neon-pink text-sm font-bold bg-skull-neon-pink/10 px-2 py-0.5 rounded">
                -{discount}%
              </span>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2 mb-8">
              <Package className="text-skull-neon-gold w-4 h-4" />
              <span className="text-xs font-medium text-skull-neon-gold">
                CONNECT STOCK LOGIC
              </span>
            </div>

            <div className="h-px bg-skull-border mb-6" />

            {/* Color Swatches */}
            <div className="mb-6">
              <p className="text-skull-muted text-xs uppercase tracking-widest mb-3">
                Color
              </p>
              <div className="flex flex-wrap gap-2">
                {products.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={clsx(
                      "w-8 h-8 rounded-full border-2 transition-all duration-150",
                      selectedColor === color
                        ? "border-skull-neon-pink scale-110 shadow-lg shadow-skull-neon-pink/30"
                        : "border-skull-border hover:border-skull-muted",
                    )}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <p className="text-skull-muted text-xs uppercase tracking-widest mb-3">
                Size
              </p>
              <div className="flex flex-wrap gap-2">
                {products.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={clsx(
                      "px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-150",
                      selectedSize === size
                        ? "bg-skull-neon-pink border-skull-neon-pink text-white"
                        : "bg-skull-dark border-skull-border text-skull-muted hover:text-skull-text",
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-8">
              <p className="text-skull-muted text-xs uppercase tracking-widest">
                Qty
              </p>
              <div className="flex items-center gap-1 bg-skull-card rounded-xl p-1 border border-skull-border">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-skull-muted hover:text-skull-neon-pink"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-mono-price text-skull-text font-bold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-skull-muted hover:text-skull-neon-pink"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="p-4 bg-skull-card rounded-xl border border-skull-border">
              <p className="text-skull-muted text-xs uppercase tracking-widest mb-2">
                About this drop
              </p>
              <p className="text-skull-text text-sm leading-relaxed">
                {products.description}
              </p>
            </div>
          </div>
        </div>

        {/* Related Products skeleton or message */}
        <section className="mt-20 text-center py-12 border-t border-skull-border">
          <h2 className="font-display text-2xl text-skull-muted">
            CONNECTION REQUIRED
          </h2>
          <p className="text-skull-muted">
            Implement your related products logic here.
          </p>
        </section>
      </div>
    </div>
  );
}
