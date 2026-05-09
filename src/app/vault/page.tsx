"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Lock, ShieldAlert, Archive, ArrowLeft, History } from "lucide-react";

export default function VaultPage() {
  const previousDrops = [
    {
      id: "v1",
      name: "NEON ONYX KNT",
      price: "$120.00",
      status: "ARCHIVED",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwV7EnauXDmVN7eX1OjbnzxqOiCMTa9PR9OptZuMXQslmw-aXil4sITsoviIJDLlFbdo6de0ZI4pdJwGexSsp5ycmXkARzsKjARHmUdElJeIk8Qdb5MiFH_aeinGhav4XCE-oMObHHm3KlIYgQ_JajFtgpyHNGRORqWiNEq0PONeAjR_XJHG8KfAUIwTf04IiqHu9EEVLAr9v6UImb37iF39-0anIPxFhr0dEzCSqN5CTZ7Vf1oq2m3gtqcFjdCEvmkj1WxYdXBeEz",
      date: "DROP #042 - 2026.02.14"
    },
    {
      id: "v2",
      name: "VOID RUNNER X1",
      price: "$85.00",
      status: "LOCKED",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKvdrckG633XTCmRDvZsDpKpIrNoClrorcqHfkS-UoBZj-Lfu0dWFusJd5CuDKDHj3gSNlZtlWjy4sQxAmLvo6phezrmbvCrOcKToVm_zzMGj3Mzsx6TZEiOd7EnpO2EqUOZoFsEGuFc9tJ9luiiFkRxaB0BHOg-3VAsU0O3rWObIkY1muiksxI2iVhHJaIVFsLm8181tyk7KPeYAAigzl6zpUC0_St9eruR9HlkNm6lEGxD39H7rrIXG2Co9lV2sBQXJt9YPiT40f",
      date: "DROP #039 - 2025.12.20"
    },
    {
      id: "v3",
      name: "CRIMSON PHANTOM",
      price: "$150.00",
      status: "DEPLETED",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtlHx5R_vSQWIX04ScFo42YbT79Kq1lfKEqx_zt12xM7e7xi-onNxd3fEyeZPZbuldxGYZiNHu8OX1qGSdaKPin3BfS55LeEoQDnQIQHrqM9wHn6LqNROiO0S1yGOu8--XWUCBdbQ7eYcu6p3b3QrQx37BP9BTkFHMp9Sol3qRJ8Z5Thbv8R4h-1NJfAEWpFZR9EteIRApL2KhJIlKhH8C7sliSlrsJOCENnE-EZU3KDkQ4A_sTcv_1c98m9s6iiL672-_lFZWEUdR",
      date: "DROP #035 - 2025.10.05"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-16 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-4 mb-10">
          <Link href="/" className="p-2 rounded-lg bg-white/5 text-skull-muted hover:text-white transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div className="flex items-center gap-2">
            <Archive size={24} className="text-skull-neon-pink" />
            <h1 className="font-display text-4xl text-white uppercase tracking-tight">The Vault</h1>
          </div>
        </div>

        {/* Security Banner */}
        <div className="w-full p-6 rounded-2xl bg-gradient-to-r from-[#c026d3]/10 to-transparent border border-[#c026d3]/20 mb-12 flex items-center gap-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-full bg-[#c026d3]/5 blur-3xl rounded-full" />
          <div className="w-14 h-14 rounded-full bg-[#c026d3]/20 flex items-center justify-center flex-shrink-0 animate-pulse">
            <ShieldAlert size={28} className="text-skull-neon-pink" />
          </div>
          <div>
            <h2 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Restricted Archive Access</h2>
            <p className="text-skull-muted text-xs leading-relaxed max-w-2xl">
              You are viewing archived tactical assets. These items are currently out of circulation and held in secure storage. 
              Sign up for <span className="text-skull-neon-pink">priority drops</span> to ensure you don't miss future releases.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previousDrops.map((drop) => (
            <div key={drop.id} className="group relative">
              {/* Card Container */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-[#c026d3]/50 transition-all duration-500">
                {/* Image */}
                <Image
                  src={drop.image}
                  alt={drop.name}
                  fill
                  className="object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                
                {/* Overlay Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Lock Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#c026d3] group-hover:scale-110 transition-transform">
                  <Lock size={20} />
                </div>

                {/* Details */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <History size={14} className="text-skull-neon-pink" />
                    <span className="text-[10px] text-skull-neon-pink font-bold uppercase tracking-[0.2em]">
                      {drop.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">{drop.name}</h3>
                  <div className="flex justify-between items-end">
                    <p className="text-xl font-mono-price text-white/50">{drop.price}</p>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] text-white font-bold tracking-widest uppercase">
                      {drop.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Empty Slot / Placeholder */}
          <div className="border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center p-12 text-center group hover:border-[#c026d3]/20 transition-colors">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[#c026d3]/5 transition-colors">
              <Lock size={24} className="text-white/20 group-hover:text-skull-neon-pink transition-colors" />
            </div>
            <p className="text-skull-muted text-[10px] uppercase tracking-[0.3em] font-bold">Upcoming Drop</p>
            <p className="text-white/20 text-[10px] uppercase tracking-widest mt-1">Status: Classified</p>
          </div>
        </div>

        {/* Action Call */}
        <div className="mt-20 text-center">
          <p className="text-skull-muted text-xs uppercase tracking-[0.4em] mb-6">Stay ahead of the system</p>
          <button className="px-10 py-4 bg-transparent border border-white/10 text-white font-bold uppercase tracking-[0.2em] text-xs rounded-full hover:bg-white hover:text-black transition-all duration-300">
            Join the Resistance
          </button>
        </div>
      </div>
    </div>
  );
}
