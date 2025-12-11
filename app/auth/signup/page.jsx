"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("http://localhost:3005/api/v1/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.message || "Something went wrong");
      return;
    }

    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2 w-full max-w-5xl">
        {/* LEFT IMAGE */}
        <div className="relative hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBldHN8ZW58MHx8MHx8fDA%3D"
            alt="Happy Pet"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-emerald-800 mb-3">
            Create Your Account 🐾
          </h1>
          <p className="text-gray-600 mb-6">
            Join NaijaPetPlace and start your journey with trusted pet adoption,
            care guidance, and premium shopping experiences.
          </p>

          {/* ERROR ALERT */}
          {error && (
            <div className="bg-red-100 border-l-4 border-red-600 text-red-700 p-3 rounded mb-4">
              {error}
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-600"
                placeholder="John Doe"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-600"
                placeholder="example@gmail.com"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-600"
                placeholder="Minimum 6 characters"
                onChange={handleChange}
                required
              />
            </div>

            {/* TERMS CHECK */}
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <input type="checkbox" required className="mt-1" />
              <p>
                I agree to the{" "}
                <span className="text-emerald-700 font-semibold cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-emerald-700 font-semibold cursor-pointer">
                  Privacy Policy
                </span>
                .
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          {/* ALREADY HAVE ACCOUNT */}
          <p className="text-center text-gray-600 mt-6 text-sm">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-emerald-700 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
