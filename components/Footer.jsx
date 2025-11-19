"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white pt-14 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Column */}
        <div>
          <h3 className="text-2xl font-bold mb-4">NaijaPetPlace</h3>
          <p className="text-gray-200 leading-relaxed">
            NaijaPetPlace is Nigeria’s #1 destination for pet adoption, grooming
            tips, health guidance, and premium pet products. We connect families
            with loving pets and support responsible pet care nationwide.
          </p>

          <div className="mt-5 flex space-x-4">
            <a href="#" className="hover:text-yellow-300">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <Twitter size={22} />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <Youtube size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-200">
            <li>
              <Link href="/adopt" className="hover:text-yellow-300">
                Adopt a Pet
              </Link>
            </li>
            <li>
              <Link href="/care/health" className="hover:text-yellow-300">
                Health & Wellness
              </Link>
            </li>
            <li>
              <Link href="/care/vets" className="hover:text-yellow-300">
                Vet Directory
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-yellow-300">
                Shop for Pets
              </Link>
            </li>
            <li>
              <Link href="/shop/partners" className="hover:text-yellow-300">
                Partner Stores
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-3 text-gray-200">
            <li>
              <Link href="/faq" className="hover:text-yellow-300">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-yellow-300">
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-yellow-300">
                Shipping Information
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-yellow-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-yellow-300">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-4 text-gray-200">
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-1" />
              <span>
                Lagos, Nigeria <br />
                Nationwide Pet Support
              </span>
            </li>

            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+234 812 345 6789</span>
            </li>

            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>support@naijapetplace.com</span>
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="font-semibold mb-2">Subscribe to our Newsletter</h4>
            <p className="text-gray-300 mb-3 text-sm">
              Get pet care tips, adoption alerts, and product updates.
            </p>

            <div className="">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-md text-black outline-none"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-emerald-700 pt-5 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} NaijaPetPlace. All rights reserved. Powered
        by love for pets 🐾
      </div>
    </footer>
  );
}
