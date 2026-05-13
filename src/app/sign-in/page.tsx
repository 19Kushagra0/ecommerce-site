// src/app/sign-in/page.tsx
"use client";

import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Skull, Lock, Mail, ArrowRight } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    const { data, error } = await signIn.email({ email, password });

    if (error) {
      setErrorMsg(error.message);
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16 bg-[#050505] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="w-full max-w-md bg-skull-dark border border-white/10 rounded-2xl p-8 relative z-10 shadow-2xl shadow-skull-neon-pink/5">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-white/5 rounded-full border border-white/10">
            <Skull className="w-8 h-8 text-skull-neon-pink" />
          </div>
        </div>

        <h2 className="text-3xl font-display font-bold mb-2 text-center text-white uppercase tracking-tighter">
          System Access
        </h2>
        <p className="text-center text-skull-muted text-xs uppercase tracking-widest mb-8">
          Enter credentials to authenticate
        </p>

        {errorMsg && (
          <div className="mb-6 p-3 border border-red-500/30 bg-red-500/10 rounded-lg text-red-400 text-xs text-center uppercase tracking-wider">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSignIn} className="space-y-5">
          <div className="space-y-1">
            <label className="text-[10px] text-skull-muted uppercase tracking-widest font-bold ml-1">
              Secure Email
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="OPERATIVE@SKULLDROP.IO"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-skull-neon-pink transition-colors text-sm"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Mail className="absolute left-3 top-3.5 w-4 h-4 text-skull-muted" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] text-skull-muted uppercase tracking-widest font-bold ml-1">
              Access Code
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-white/20 focus:outline-none focus:border-skull-neon-pink transition-colors text-sm"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Lock className="absolute left-3 top-3.5 w-4 h-4 text-skull-muted" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 mt-2 bg-skull-neon-pink text-white font-bold text-sm uppercase tracking-[0.2em] rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-skull-neon-pink/20"
          >
            Authenticate <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-skull-muted">
            NO CLEARANCE?{" "}
            <Link
              href="/sign-up"
              className="text-skull-neon-blue hover:text-white uppercase tracking-widest ml-2 transition-colors"
            >
              Request Access
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
