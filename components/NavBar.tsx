"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const { cart } = useCart();

  const menus = [
    {
      title: "Adopt a Pet",
      items: [
        {
          label: "Adoption Process",
          href: "/adopt",
          desc: "Find your new best friend. Explore pets waiting for a second chance.",
        },
        {
          label: "Find Dogs",
          href: "/adopt/dogs",
          desc: "Browse dogs ready for adoption near you.",
        },
        {
          label: "Find Cats",
          href: "/adopt/cats",
          desc: "Discover cats in need of homes across Nigeria.",
        },
        {
          label: "Find Others",
          href: "/adopt/others",
          desc: "Explore smaller pets like rabbits and parrots.",
        },
        {
          label: "Adoption Tips",
          href: "/adopt/tips",
          desc: "Prepare your home for your new furry friend.",
        },
      ],
    },
    {
      title: "Pet Care",
      items: [
        {
          label: "Grooming Guides",
          href: "/care/grooming",
          desc: "Learn how to care for your pet’s coat.",
        },
        {
          label: "Health & Wellness",
          href: "/care/health",
          desc: "Nutrition, vaccines, and wellness guides.",
        },
        {
          label: "Training Tutorials",
          href: "/care/training",
          desc: "Step-by-step obedience and house training.",
        },
        {
          label: "Vet Directory",
          href: "/care/vets",
          desc: "Find trusted veterinary clinics in Nigeria.",
        },
        {
          label: "Nutrition",
          href: "/care/nutrition",
          desc: "Balanced diets and feeding tips for all pets.",
        },
      ],
    },
    {
      title: "Shop",
      items: [
        {
          label: "Pet Food & Treats",
          href: "/shop/food",
          desc: "Top-quality nutrition for every pet.",
        },
        {
          label: "Toys & Accessories",
          href: "/shop/accessories",
          desc: "Collars, leashes, beds, and fun pet toys.",
        },
        {
          label: "Health Products",
          href: "/shop/health",
          desc: "Supplements, flea control, and vitamins.",
        },
        {
          label: "Partner Stores",
          href: "/shop/partners",
          desc: "Explore local pet shops near you.",
        },
      ],
    },
    {
      title: "Contact",
      items: [
        {
          label: "Contact Us",
          href: "/contact",
          desc: "We’re here to help you and your pets.",
        },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-emerald-700">
          🐾 NaijaPetPlace
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {menus.map((menu, i) => (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => setOpenMenu(i)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-emerald-700 font-medium">
                {menu.title}
                <ChevronDownIcon className="w-4 h-4" />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute top-full mt-2 bg-white shadow-lg rounded-lg py-2 w-64 transition-all duration-200 ${
                  openMenu === i
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2"
                }`}
              >
                {menu.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block px-5 py-3 text-gray-700 hover:bg-emerald-50 transition"
                  >
                    <p className="font-semibold text-emerald-700">
                      {item.label}
                    </p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Search + Cart + Login */}
        <div className="flex items-center gap-5">
          <form
            action="/search"
            method="GET"
            className="hidden md:flex items-center"
          >
            <input
              type="text"
              name="q"
              placeholder="Search pets..."
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-600"
            />
          </form>

          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-emerald-700 hover:text-emerald-800" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
