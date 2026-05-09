"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Skull } from "@/lib/icons";
import type { Product } from "@/lib/types";
import clsx from "clsx";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const TAG_STYLES: Record<string, string> = {
  BESTSELLER: "bg-skull-neon-gold text-skull-black",
  NEW: "bg-skull-neon-blue text-skull-black",
  SALE: "bg-skull-neon-pink text-white",
};

export default function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article
        className={clsx(
          "bg-skull-dark rounded-xl overflow-hidden border transition-all duration-300",
          "border-skull-border card-glow",
          hovered &&
            "border-skull-neon-pink/60 scale-[1.02] shadow-xl shadow-skull-neon-pink/10",
        )}
      >
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-skull-card">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Tag */}
          {product.tag && (
            <span
              className={clsx(
                "absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold tracking-widest z-10",
                TAG_STYLES[product.tag] ?? "bg-skull-neon-purple text-white",
              )}
            >
              {product.tag}
            </span>
          )}

        </div>

        {/* Body */}
        <div className="p-4">
          <p className="text-skull-muted text-xs uppercase tracking-widest mb-1 font-medium">
            {product.category}
          </p>
          <h3 className="text-skull-text font-semibold text-sm leading-snug mb-2 line-clamp-2">
            {product.name}
          </h3>
          {/* Rating */}
          {product.rating ? (
            <div className="flex items-center gap-1 mb-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={clsx(
                      "w-3 h-3",
                      star <= Math.round(product.rating || 0)
                        ? "fill-skull-neon-gold text-skull-neon-gold"
                        : "text-skull-border",
                    )}
                  />
                ))}
              </div>
              <span className="text-skull-muted text-xs">
                ({product.reviews})
              </span>
            </div>
          ) : (
            <span className="text-skull-neon-pink/70 text-[10px] uppercase tracking-widest font-bold flex items-center">
              New Drop <Icon icon={Skull} size={12} className="ml-1" aria-hidden="true" />
            </span>
          )}
          {/* Price and Cart */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-mono-price text-skull-neon-pink font-bold text-base">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="font-mono-price text-skull-muted text-xs line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
                setIsAdded(true);
                setTimeout(() => setIsAdded(false), 500);
              }}
              className={clsx(
                "p-2 rounded-lg transition-all duration-300 group/cart shadow-lg",
                isAdded 
                  ? "bg-skull-neon-blue text-skull-black border-skull-neon-blue shadow-skull-neon-blue/40 scale-110" 
                  : "bg-skull-neon-pink/10 border border-skull-neon-pink/20 text-skull-neon-pink hover:bg-skull-neon-pink hover:text-white shadow-skull-neon-pink/5"
              )}
              aria-label="Add to cart"
            >
              <ShoppingCart size={16} className={clsx("transition-transform duration-300", !isAdded && "group-hover/cart:scale-110")} />
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
}
