// src/app/sign-up/page.tsx
"use client";

import { useState } from "react";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await signUp.email({ email, password, name });

    if (error) {
      alert(error.message);
    } else {
      router.push("/sign-in?message=Signed up successfully! Please log in.");
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto mt-20 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
        Sign Up
      </h2>
      <form onSubmit={handleSignUp} className="space-y-4 text-gray-900">
        <input
          type="text"
          placeholder="Full Name"
          required
          className="border p-2 w-full rounded"
          onChange={(e) => setName(e.target.value)}
        />
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
          Sign Up
        </button>
      </form>
    </div>
  );
}
