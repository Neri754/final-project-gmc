"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-emerald-50 min-h-screen py-16 px-6 lg:px-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-emerald-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We love hearing from pet lovers! Whether you have questions about
          adoption, shopping, or general inquiries, our friendly team is ready
          to help.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg mb-20">
        <Image
          src="https://images.unsplash.com/photo-1626581672447-c5ed9709db79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmV0JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800"
          alt="Contact NaijaPetPlace"
          fill
          className="object-cover"
        />
      </div>

      {/* Contact Info */}
      <section className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-white rounded-3xl shadow-md p-10">
          <h2 className="text-3xl font-semibold text-emerald-700 mb-6">
            Get in Touch
          </h2>
          <div className="space-y-5 text-gray-700">
            <p className="flex items-center gap-3">
              <Mail className="text-emerald-600" /> support@naijapetplace.ng
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-emerald-600" /> +234 816 234 7789
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="text-emerald-600" /> 25A Admiralty Way, Lekki
              Phase 1, Lagos, Nigeria
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-emerald-700 mb-3">
              Follow Us
            </h3>
            <div className="flex gap-5">
              <Link href="https://instagram.com" target="_blank">
                <Instagram className="w-6 h-6 text-pink-600 hover:scale-110 transition-transform" />
              </Link>
              <Link href="https://facebook.com" target="_blank">
                <Facebook className="w-6 h-6 text-blue-600 hover:scale-110 transition-transform" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Twitter className="w-6 h-6 text-sky-500 hover:scale-110 transition-transform" />
              </Link>
              <Link href="https://wa.me/2348162347789" target="_blank">
                <MessageCircle className="w-6 h-6 text-green-600 hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-md p-10">
          <h2 className="text-3xl font-semibold text-emerald-700 mb-6">
            Send Us a Message
          </h2>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-600"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            <p className="text-emerald-700 text-lg font-semibold">
              ✅ Thank you for reaching out! We’ll get back to you shortly.
            </p>
          )}
        </div>
      </section>

      {/* Map */}
      <section className="bg-white rounded-3xl shadow-md overflow-hidden">
        <h2 className="text-3xl font-semibold text-emerald-700 mb-6 text-center pt-8">
          Visit Our Office
        </h2>
        <div className="relative w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.196924945845!2d3.454799174843714!3d6.431214625800843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52f32de0cd5%3A0x2ad0451d2b1791b9!2sAdmiralty%20Way%2C%20Lekki%20Phase%201!5e0!3m2!1sen!2sng!4v1699195603990!5m2!1sen!2sng"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
