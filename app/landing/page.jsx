"use client";

import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-gray-50">
      {/* HERO SECTION */}
      <section className="relative bg-emerald-700 text-white py-28 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Welcome to NaijaPetPlace 🐾
          </h1>

          <p className="text-lg opacity-90 mb-8">
            Discover Nigeria’s first all-in-one platform for **pet adoption, pet
            care, premium supplies**, and a community built for animal lovers.
            Join thousands of Nigerians giving pets better homes and better
            lives.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/auth/signup"
              className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Create Account
            </Link>
            <Link
              href="/auth/login"
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-emerald-700 transition"
            >
              Sign In
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[420px] mt-16 rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGV0c3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Pets happy"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-emerald-700 mb-6">
          Why Nigerians Love NaijaPetPlace ❤️
        </h2>

        <p className="max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed mb-16">
          We believe every pet deserves a loving home — and every pet owner
          deserves access to the right care, products, and support. Our platform
          is designed to make pet parenting **easy, fun, and stress-free**.
        </p>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="bg-emerald-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-emerald-700 mb-3">
              Verified Pet Adoption
            </h3>
            <p className="text-gray-600">
              Browse trusted pet listings from real Nigerian owners and
              shelters. Every pet is verified for health & safety before being
              listed.
            </p>
          </div>

          <div className="bg-emerald-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-emerald-700 mb-3">
              Premium Pet Marketplace
            </h3>
            <p className="text-gray-600">
              Shop high-quality foods, toys, grooming tools, and accessories
              from certified Nigerian pet stores — delivered fast!
            </p>
          </div>

          <div className="bg-emerald-50 p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-emerald-700 mb-3">
              Expert Care Guides
            </h3>
            <p className="text-gray-600">
              Access vet-approved articles, training videos, grooming advice,
              and nutrition guides to keep your pet healthy and happy.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 lg:px-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-emerald-700 mb-10">
          How NaijaPetPlace Works 🐶
        </h2>

        <div className="grid md:grid-cols-3 gap-14 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-emerald-700 text-white flex items-center justify-center rounded-full text-3xl">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Create an Account
            </h3>
            <p className="text-gray-600">
              Sign up in less than one minute to access adoption listings,
              shopping, and pet care tools.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-emerald-700 text-white flex items-center justify-center rounded-full text-3xl">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Explore & Adopt
            </h3>
            <p className="text-gray-600">
              Browse through pets available in your location and connect with
              verified owners.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-emerald-700 text-white flex items-center justify-center rounded-full text-3xl">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Shop & Care
            </h3>
            <p className="text-gray-600">
              Enjoy seamless access to top pet stores and trusted care guides
              across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-emerald-700 mb-4">
              Join a Growing Pet Community 🐕‍🦺
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Connect with other Nigerian pet lovers, share your experiences,
              get advice, and learn from professionals. NaijaPetPlace community
              is a safe, vibrant space for every pet parent.
            </p>

            <Link
              href="/auth/signup"
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              Join the Community
            </Link>
          </div>

          <div className="relative w-full h-72 md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1764942988847-bdc223f6391a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0cyUyMGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Community pets"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-emerald-700 text-center text-white px-6">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Start Your Pet Journey?
        </h2>
        <p className="text-lg opacity-90 mb-8">
          Create an account now and unlock everything NaijaPetPlace has to
          offer.
        </p>

        <Link
          href="/auth/signup"
          className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  );
}
