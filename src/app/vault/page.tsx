import { Lock, Archive, Skull } from "lucide-react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export default function VaultPage() {
  const dummyItems = [
    { id: "V-001", name: "NEON DEMON JACKET", year: "2024", status: "SEALED", rarity: "LEGENDARY" },
    { id: "V-002", name: "CYBER_RUNNER SNEAKERS", year: "2025", status: "SEALED", rarity: "EPIC" },
    { id: "V-003", name: "PHANTOM TACTICAL VEST", year: "2024", status: "ARCHIVED", rarity: "RARE" },
    { id: "V-004", name: "VOID VISOR", year: "2023", status: "LOST", rarity: "MYTHIC" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 md:px-16 bg-[#050505] relative overflow-hidden">
      {/* Subtle Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      {/* Decorative Skull */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <Icon icon={Skull} size={400} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-skull-neon-blue/10 border border-skull-neon-blue/20 rounded-full mb-6">
            <Archive size={16} className="text-skull-neon-blue" />
            <span className="text-xs font-bold text-skull-neon-blue uppercase tracking-widest">Classified Archives</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] mb-4">
            The Vault
          </h1>
          <p className="text-skull-muted max-w-lg text-sm uppercase tracking-widest leading-relaxed">
            Historical records of past drops. These items are permanently sealed and no longer available for standard requisition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dummyItems.map((item, index) => (
            <div 
              key={index}
              className="bg-skull-dark border border-white/5 rounded-2xl p-6 relative group overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              {/* Overlay Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNMCAzMGg0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>

              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">
                  {item.id}
                </span>
                <Lock size={16} className="text-white/20 group-hover:text-skull-neon-blue transition-colors" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight line-clamp-2 pr-4">{item.name}</h3>
                  <span className="text-xs text-skull-neon-pink font-mono-price font-bold">{item.year}</span>
                </div>
                
                <div className="flex gap-2 pt-4 border-t border-white/10">
                  <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[8px] font-bold text-white uppercase tracking-widest">
                    {item.rarity}
                  </span>
                  <span className="px-2 py-1 bg-red-500/10 border border-red-500/20 rounded text-[8px] font-bold text-red-500 uppercase tracking-widest">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/collection" className="inline-flex items-center gap-2 text-xs font-bold text-skull-neon-blue uppercase tracking-widest hover:text-white transition-colors">
            Return to Active Drops
          </Link>
        </div>
      </div>
    </div>
  );
}
