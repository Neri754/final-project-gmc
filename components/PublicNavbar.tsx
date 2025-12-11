"use client";
import Link from "next/link";

export default function PublicNavbar() {
  return (
    <nav className="w-full bg-amber-100 sticky top-0 z-50 shadow-md py-4 px-6 flex justify-between items-center">
      <Link href="/landing" className="text-2xl font-bold text-emerald-700">
        🐾 NaijaPetPlace
      </Link>

      <div className="flex gap-4">
        <Link href="/auth/login" className="text-emerald-700 font-semibold">
          Login
        </Link>
        <Link
          href="/auth/signup"
          className="bg-emerald-600 text-white px-4 py-2 rounded-lg"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
