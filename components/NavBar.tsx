"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDownIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cart } = useCart() as { cart: any[] };

  const menus = [
    {
      title: "Adopt a Pet",
      items: [
        { label: "Adoption Process", href: "/adopt" },
        { label: "Find Dogs", href: "/adopt/dogs" },
        { label: "Find Cats", href: "/adopt/cats" },
        { label: "Find Others", href: "/adopt/others" },
        { label: "Adoption Tips", href: "/adopt/tips" },
      ],
    },
    {
      title: "Pet Care",
      items: [
        { label: "Grooming Guides", href: "/care/grooming" },
        { label: "Health & Wellness", href: "/care/health" },
        { label: "Training Tutorials", href: "/care/training" },
        { label: "Vet Directory", href: "/care/vets" },
        { label: "Nutrition", href: "/care/nutrition" },
      ],
    },
    {
      title: "Shop",
      items: [
        { label: "Pet Food & Treats", href: "/shop/food" },
        { label: "Toys & Accessories", href: "/shop/accessories" },
        { label: "Health Products", href: "/shop/health" },
        { label: "Partner Stores", href: "/shop/partners" },
      ],
    },
    {
      title: "Contact",
      items: [{ label: "Contact Us", href: "/contact" }],
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-emerald-700">
            🐾 NaijaPetPlace
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menus.map((menu, idx) => (
              <div key={idx} className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-emerald-700">
                  {menu.title}
                  <ChevronDownIcon className="w-4 h-4" />
                </button>

                {/* Dropdown */}
                <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {menu.items.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-emerald-50"
                    >
                      <p className="text-sm font-semibold text-emerald-700">
                        {item.label}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Cart */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-emerald-700" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-orange-600 text-white text-xs px-2 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Login */}
            <Link
              href="/profile"
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
            >
              Profile
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-emerald-700" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-orange-600 text-white text-xs px-2 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>

            <button onClick={() => setMobileOpen(true)}>
              <Bars3Icon className="w-8 h-8 text-emerald-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 w-72 bg-white h-full shadow-xl z-50 p-6 transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setMobileOpen(false)}
        >
          <XMarkIcon className="w-7 h-7 text-emerald-700" />
        </button>

        <h2 className="text-xl font-bold text-emerald-700 mb-6">Menu</h2>

        {/* MOBILE DROPDOWNS */}
        <div className="flex flex-col gap-4">
          {menus.map((menu, idx) => (
            <details key={idx} className="border-b pb-3">
              <summary className="cursor-pointer font-medium text-gray-800 flex justify-between items-center">
                {menu.title}
                <ChevronDownIcon className="w-5 h-5" />
              </summary>
              <div className="ml-4 mt-2 flex flex-col gap-2 text-gray-600">
                {menu.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-emerald-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          ))}

          {/* Login */}
          <Link
            href="/profile"
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-center mt-4"
          >
            Profile
          </Link>
        </div>
      </div>
    </>
  );
}
