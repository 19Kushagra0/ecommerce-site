// src/app/sign-in/page.tsx
"use client";

import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await signIn.email({ email, password });

    if (error) {
      alert(error.message);
    } else {
      router.push("/"); // Redirects to homepage on success
      router.refresh();
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto mt-20 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
        Sign In
      </h2>
      <form onSubmit={handleSignIn} className="space-y-4 text-gray-900">
        <input
          type="email"
          placeholder="Email"
          required
          className="border p-2 w-full rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="border p-2 w-full rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 w-full rounded hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
