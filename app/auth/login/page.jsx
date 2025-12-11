"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("http://localhost:3005/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.message || "Invalid login details");
      return;
    }

    // Save login
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);

    router.push("/");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden grid md:grid-cols-2 max-w-5xl w-full">
        {/* LEFT IMAGE */}
        <div className="relative hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBldHN8ZW58MHx8MHx8fDA%3D"
            alt="Login pets"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-emerald-700">Welcome Back</h1>
          <p className="text-gray-600 mt-2 mb-6">
            Sign in to continue exploring pets & shopping.
          </p>

          {error && (
            <p className="bg-red-200 text-red-800 px-3 py-2 rounded mb-4 text-sm">
              {error}
            </p>
          )}

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="text-sm font-medium">Email Address</label>
              <input
                type="email"
                required
                className="w-full border p-3 rounded-xl focus:border-emerald-600"
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                required
                className="w-full border p-3 rounded-xl focus:border-emerald-600"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
            >
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6 text-sm">
            Don’t have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-emerald-700 font-semibold hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
