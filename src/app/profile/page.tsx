"use client";

import { Icon } from "@/components/ui/Icon";
import { Skull } from "@/lib/icons";
import { User, Package, Settings, LogOut, Shield, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/sign-in");
    }
  }, [session, isPending, router]);

  if (isPending || !session) {
    return <div className="min-h-screen pt-32 pb-16 px-4 flex justify-center items-center text-skull-neon-blue font-mono uppercase tracking-widest text-sm animate-pulse">Verifying clearance...</div>;
  }

  const user = {
    codename: session.user.name || "CYBER_RUNNER_88",
    email: session.user.email || "runner@skulldrop.io",
    clearance: "LEVEL 4",
    credits: 1450.50,
    dropsJoined: 12
  };

  const recentOrders = [
    { id: "TX-9921", date: "2026.05.01", status: "DELIVERED", total: 124.99 },
    { id: "TX-8842", date: "2026.04.15", status: "IN TRANSIT", total: 45.00 },
    { id: "TX-7731", date: "2026.03.22", status: "DELIVERED", total: 89.99 },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 md:px-16 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-skull-dark border border-white/10 rounded-2xl p-6 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4 p-1 rounded-full border-2 border-skull-neon-blue shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <div className="w-full h-full bg-[#111] rounded-full flex items-center justify-center">
                  <User size={48} className="text-skull-neon-blue" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-skull-neon-gold p-1 rounded-full">
                  <Zap size={14} className="text-black" />
                </div>
              </div>
              <h2 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">{user.codename}</h2>
              <p className="text-[10px] text-skull-muted uppercase tracking-[0.2em] mb-4">{user.clearance} OPERATIVE</p>
              
              <div className="flex justify-center gap-2 border-t border-white/5 pt-4">
                <div className="text-center px-3">
                  <p className="text-xl font-bold text-white font-mono-price">{user.dropsJoined}</p>
                  <p className="text-[8px] text-skull-muted uppercase">Drops</p>
                </div>
                <div className="w-px h-8 bg-white/10 self-center" />
                <div className="text-center px-3">
                  <p className="text-xl font-bold text-skull-neon-gold font-mono-price">${user.credits}</p>
                  <p className="text-[8px] text-skull-muted uppercase">Credits</p>
                </div>
              </div>
            </div>

            <nav className="bg-skull-dark border border-white/10 rounded-2xl overflow-hidden">
              {[
                { icon: Package, label: "Your Inventory", active: true },
                { icon: Shield, label: "Security Keys", active: false },
                { icon: Settings, label: "System Config", active: false },
                { icon: LogOut, label: "Terminate Session", active: false, color: "text-skull-neon-pink", action: async () => {
                  await signOut();
                  router.push("/sign-in");
                }},
              ].map((item, i) => (
                <button 
                  key={i} 
                  onClick={item.action}
                  className={clsx(
                    "w-full flex items-center justify-between px-6 py-4 text-sm transition-all border-b border-white/5 last:border-0",
                    item.active ? "bg-white/5 text-white" : "text-skull-muted hover:bg-white/5 hover:text-white"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className={item.color || "text-skull-neon-blue"} />
                    <span className="uppercase tracking-widest text-[10px] font-bold">{item.label}</span>
                  </div>
                  <ChevronRight size={14} />
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Stats Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-skull-neon-pink/10 to-transparent border border-skull-neon-pink/20 rounded-2xl p-6">
                <h3 className="text-[10px] text-skull-muted uppercase tracking-widest mb-2">Member Since</h3>
                <p className="text-2xl font-bold text-white font-display">2024.11.12</p>
              </div>
              <div className="bg-gradient-to-br from-skull-neon-blue/10 to-transparent border border-skull-neon-blue/20 rounded-2xl p-6">
                <h3 className="text-[10px] text-skull-muted uppercase tracking-widest mb-2">Active Orders</h3>
                <p className="text-2xl font-bold text-white font-display">02</p>
              </div>
              <div className="bg-gradient-to-br from-skull-neon-gold/10 to-transparent border border-skull-neon-gold/20 rounded-2xl p-6">
                <h3 className="text-[10px] text-skull-muted uppercase tracking-widest mb-2">Loyalty Tier</h3>
                <p className="text-2xl font-bold text-white font-display">TITANIUM</p>
              </div>
            </div>

            {/* Recent Orders */}
            <section className="bg-skull-dark border border-white/10 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0d0d0d]">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <Package size={16} className="text-skull-neon-pink" />
                  Recent Transmissions
                </h3>
                <button className="text-[10px] text-skull-neon-blue uppercase font-bold tracking-widest hover:underline">View History</button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/2">
                      <th className="px-6 py-4 text-[10px] text-skull-muted uppercase tracking-widest">ID</th>
                      <th className="px-6 py-4 text-[10px] text-skull-muted uppercase tracking-widest">Date</th>
                      <th className="px-6 py-4 text-[10px] text-skull-muted uppercase tracking-widest">Status</th>
                      <th className="px-6 py-4 text-[10px] text-skull-muted uppercase tracking-widest">Total</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                        <td className="px-6 py-4 text-xs font-bold text-white">{order.id}</td>
                        <td className="px-6 py-4 text-xs text-skull-muted">{order.date}</td>
                        <td className="px-6 py-4">
                          <span className={clsx(
                            "px-2 py-1 rounded text-[8px] font-bold uppercase tracking-widest",
                            order.status === "DELIVERED" ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-skull-neon-gold/10 text-skull-neon-gold border border-skull-neon-gold/20"
                          )}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs font-bold font-mono-price text-white">${order.total}</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-skull-neon-blue hover:text-white transition-colors">
                            <ChevronRight size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Newsletter Toggle */}
            <section className="bg-gradient-to-r from-[#111] to-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Icon icon={Skull} size={150} />
                </div>
                <div className="relative z-10 text-center md:text-left">
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Stay in the Shadows</h3>
                  <p className="text-sm text-skull-muted max-w-sm">Receive classified early access to secret drops and exclusive member-only gear.</p>
                </div>
                <button className="relative z-10 px-8 py-3 bg-skull-neon-blue text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-lg shadow-skull-neon-blue/20">
                  Manage Comms
                </button>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
