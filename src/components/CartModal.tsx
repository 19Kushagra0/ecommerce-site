"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useEffect } from "react";

export default function CartModal() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, subtotal } = useCart();

  // Prevent scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300",
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Panel */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-white/10 z-[101] shadow-2xl transition-transform duration-500 ease-out flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0d0d0d]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-skull-neon-pink w-6 h-6" />
            <h2 className="font-display text-2xl text-white uppercase tracking-tight">Your Loadout</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-skull-muted hover:text-white hover:bg-white/10 rounded-lg transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                <ShoppingBag size={40} className="text-skull-muted opacity-30" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 uppercase">Empty Inventory</h3>
                <p className="text-skull-muted text-sm max-w-[200px]">Your tactical gear slot is empty. Head back to the collection.</p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-6 py-2 border border-skull-neon-pink/50 text-skull-neon-pink rounded-full text-xs font-bold uppercase tracking-widest hover:bg-skull-neon-pink hover:text-white transition-all"
              >
                Back to Collection
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-white/5 border border-white/10 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-bold text-white leading-tight mb-1">{item.name}</h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-skull-muted hover:text-skull-neon-pink transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <p className="text-[10px] text-skull-muted uppercase tracking-widest">{item.category}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/10">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center text-skull-muted hover:text-white transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-6 text-center text-xs font-bold font-mono-price text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center text-skull-muted hover:text-white transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-mono-price text-skull-neon-pink font-bold text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#0d0d0d]">
            <div className="flex justify-between items-center mb-6">
              <span className="text-skull-muted uppercase tracking-[0.2em] text-xs font-bold">Total Credit Required</span>
              <span className="font-mono-price text-2xl font-bold text-white">${subtotal.toFixed(2)}</span>
            </div>
            <Link 
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block"
            >
              <button className="w-full py-4 bg-skull-neon-pink text-white text-sm font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-skull-neon-pink/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Initiate Checkout
              </button>
            </Link>
            <p className="text-center text-[10px] text-skull-muted mt-4 uppercase tracking-widest opacity-50">Secure tactical transmission guaranteed</p>
          </div>
        )}
      </div>
    </>
  );
}
