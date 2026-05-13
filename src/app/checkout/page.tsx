"use client";

import { useCart } from "@/context/CartContext";
import { Icon } from "@/components/ui/Icon";
import { Skull } from "@/lib/icons";
import { CreditCard, Truck, ShieldCheck, ArrowLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckoutPage() {
  const { cart, subtotal } = useCart();
  const { data: session, isPending } = useSession();
  const router = useRouter();
  
  const shipping = 15.0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/sign-in");
    }
  }, [session, isPending, router]);

  if (isPending || !session) {
    return <div className="min-h-screen pt-32 pb-16 px-4 flex justify-center items-center text-skull-neon-pink font-mono uppercase tracking-widest text-sm animate-pulse">Initializing secure connection...</div>;
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-4 flex flex-col items-center justify-center text-center">
        <ShoppingBag size={80} className="text-skull-muted opacity-20 mb-6" />
        <h1 className="font-display text-4xl text-white mb-4 uppercase">No Gear in Selection</h1>
        <p className="text-skull-muted mb-8 max-w-md">Your tactical loadout is empty. You must select gear before initiating checkout.</p>
        <Link 
          href="/collection" 
          className="px-8 py-3 bg-skull-neon-pink text-white font-bold rounded-xl uppercase tracking-widest hover:scale-105 transition-all"
        >
          Return to Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <Link href="/collection" className="p-2 rounded-lg bg-white/5 text-skull-muted hover:text-white transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="font-display text-4xl text-white uppercase tracking-tight">Final Transmission</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left - Forms */}
          <div className="lg:col-span-7 space-y-8">
            {/* Shipping */}
            <section className="bg-skull-dark border border-white/10 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Truck className="text-skull-neon-blue w-6 h-6" />
                <h2 className="text-xl font-bold text-white uppercase tracking-wide">Deployment Zone</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="CODENAME (FIRST NAME)" 
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-skull-neon-blue transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="SURNAME" 
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-skull-neon-blue transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="SECURE EMAIL" 
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-skull-neon-blue md:col-span-2"
                />
                <input 
                  type="text" 
                  placeholder="STREET ADDRESS" 
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-skull-neon-blue md:col-span-2"
                />
                <input 
                  type="text" 
                  placeholder="CITY" 
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-skull-neon-blue"
                />
                <input 
                  type="text" 
                  placeholder="SECTOR CODE" 
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-skull-neon-blue"
                />
              </div>
            </section>

            {/* Payment */}
            <section className="bg-skull-dark border border-white/10 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="text-skull-neon-gold w-6 h-6" />
                <h2 className="text-xl font-bold text-white uppercase tracking-wide">Credit Transfer</h2>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="CARD IDENTIFIER" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-skull-neon-gold"
                  />
                  <CreditCard className="absolute right-4 top-4 text-white/20" size={20} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="EXPIRY (MM/YY)" 
                    className="bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-skull-neon-gold"
                  />
                  <input 
                    type="text" 
                    placeholder="CVC" 
                    className="bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-skull-neon-gold"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Right - Order Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <section className="bg-skull-card border border-skull-neon-pink/20 rounded-2xl p-6 shadow-2xl shadow-skull-neon-pink/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Icon icon={Skull} size={120} />
                </div>

                <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-6">Loadout Summary</h2>
                
                <div className="space-y-4 mb-8 max-h-[300px] overflow-y-auto pr-2 scrollbar-hide">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h4 className="text-sm font-bold text-white line-clamp-1">{item.name}</h4>
                        <p className="text-xs text-skull-muted uppercase">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-sm font-bold font-mono-price text-white self-center">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 border-t border-white/10 pt-6 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-skull-muted uppercase tracking-widest">Base Credit</span>
                    <span className="text-white font-mono-price">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-skull-muted uppercase tracking-widest">Logistic Fee</span>
                    <span className="text-white font-mono-price">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-skull-muted uppercase tracking-widest">System Tax</span>
                    <span className="text-white font-mono-price">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-white/10">
                    <span className="text-lg font-bold text-white uppercase tracking-tighter">Total Credits</span>
                    <span className="text-2xl font-bold text-skull-neon-pink font-mono-price">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full py-4 bg-skull-neon-pink text-white font-bold uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-skull-neon-pink/20 hover:scale-[1.02] active:scale-[0.98] transition-all group">
                  Confirm Transmission
                </button>
                
                <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-skull-muted uppercase tracking-widest opacity-60">
                  <ShieldCheck size={14} className="text-skull-neon-blue" />
                  Encrypted Protocol Active
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
