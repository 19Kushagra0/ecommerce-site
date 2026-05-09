"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Skull, Search, ShoppingCart, User } from "lucide-react";
import clsx from "clsx";

import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { itemCount, setIsCartOpen } = useCart();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
          scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-xl" : "bg-transparent backdrop-blur-md"
        )}
      >
        <div className="flex justify-between items-center px-4 md:px-16 py-4 w-full max-w-[1920px] mx-auto">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <Skull className="text-[#c026d3] w-8 h-8" />
            <span
              className="text-[28px] font-bold tracking-tighter bg-gradient-to-r from-[#c026d3] to-[#06b6d4] bg-clip-text text-transparent"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              SKULLDROP
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={clsx(
                "text-[12px] font-bold transition-all duration-300 uppercase tracking-widest",
                pathname === "/" ? "text-[#c026d3] drop-shadow-[0_0_8px_rgba(192,38,211,0.8)]" : "text-[#e6e0e9]/70 hover:text-[#c026d3]"
              )}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              DROPS
            </Link>
            <Link
              href="/collection"
              className={clsx(
                "text-[12px] font-bold transition-all duration-300 uppercase tracking-widest",
                pathname === "/collection" ? "text-[#c026d3] drop-shadow-[0_0_8px_rgba(192,38,211,0.8)]" : "text-[#e6e0e9]/70 hover:text-[#c026d3]"
              )}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              COLLECTION
            </Link>
            <Link
              href="/vault"
              className={clsx(
                "text-[12px] font-bold transition-all duration-300 uppercase tracking-widest",
                pathname === "/vault" ? "text-[#c026d3] drop-shadow-[0_0_8px_rgba(192,38,211,0.8)]" : "text-[#e6e0e9]/70 hover:text-[#c026d3]"
              )}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              VAULT
            </Link>
            <Link
              href="/about"
              className={clsx(
                "text-[12px] font-bold transition-all duration-300 uppercase tracking-widest",
                pathname === "/about" ? "text-[#c026d3] drop-shadow-[0_0_8px_rgba(192,38,211,0.8)]" : "text-[#e6e0e9]/70 hover:text-[#c026d3]"
              )}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              THE CULT
            </Link>
          </div>

          {/* Trailing Icons */}
          <div className="flex items-center gap-4 text-[#c026d3]">
            <button className="hover:text-[#ff2d78] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,45,120,0.8)] scale-95 ease-in-out hidden sm:block">
              <Search className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative hover:text-[#ff2d78] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,45,120,0.8)] scale-95 ease-in-out"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#ff2d78] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center shadow-[0_0_8px_rgba(255,45,120,0.6)]">
                  {itemCount}
                </span>
              )}
            </button>
            <Link href="/profile" className="hover:text-[#ff2d78] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,45,120,0.8)] scale-95 ease-in-out hidden md:block">
              <User className="w-6 h-6" />
            </Link>
            <button
              className="md:hidden text-[#c026d3] hover:text-[#ff2d78]"
              onClick={() => setDrawerOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={clsx(
          "fixed inset-0 z-[60] lg:hidden transition-all duration-300",
          drawerOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={clsx(
            "absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-sm transition-opacity duration-300",
            drawerOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className={clsx(
            "absolute right-0 top-0 bottom-0 w-72 bg-[#0a0a0a] border-l border-[#c026d3]/30 flex flex-col p-8 transition-transform duration-300 shadow-[-10px_0_30px_rgba(192,38,211,0.1)]",
            drawerOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <button
            className="absolute top-4 right-4 text-[#e6e0e9]/70 hover:text-[#c026d3] transition-colors"
            onClick={() => setDrawerOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2 mb-10 mt-4">
            <Skull className="w-6 h-6 text-[#c026d3]" />
            <span
              className="text-xl font-bold bg-gradient-to-r from-[#c026d3] to-[#06b6d4] bg-clip-text text-transparent"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              SKULLDROP
            </span>
          </div>
          <ul className="flex flex-col gap-6">
            <li>
              <Link 
                href="/" 
                onClick={() => setDrawerOpen(false)} 
                className={clsx(
                  "text-xl font-bold tracking-widest uppercase",
                  pathname === "/" ? "text-[#c026d3] drop-shadow-[0_0_8px_rgba(192,38,211,0.8)]" : "text-[#e6e0e9]"
                )}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                DROPS
              </Link>
            </li>
            <li>
              <Link 
                href="/collection" 
                onClick={() => setDrawerOpen(false)} 
                className={clsx(
                  "text-xl font-bold tracking-widest uppercase",
                  pathname === "/collection" ? "text-[#c026d3] drop-shadow-[0_0_8px_rgba(192,38,211,0.8)]" : "text-[#e6e0e9]"
                )}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                COLLECTION
              </Link>
            </li>
            <li>
              <Link 
                href="/vault" 
                onClick={() => setDrawerOpen(false)} 
                className={clsx(
                  "text-xl font-bold tracking-widest uppercase",
                  pathname === "/vault" ? "text-[#c026d3] drop-shadow-[0_0_8px_rgba(192,38,211,0.8)]" : "text-[#e6e0e9]"
                )}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                VAULT
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                onClick={() => setDrawerOpen(false)} 
                className={clsx(
                  "text-xl font-bold tracking-widest uppercase",
                  pathname === "/about" ? "text-[#c026d3] drop-shadow-[0_0_8px_rgba(192,38,211,0.8)]" : "text-[#e6e0e9]"
                )}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                THE CULT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
