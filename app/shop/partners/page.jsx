"use client";
import Image from "next/image";
import Link from "next/link";

export default function PartnersPage() {
  const partners = [
    {
      name: "PawPride Nigeria",
      description:
        "PawPride is one of the largest distributors of premium pet food, toys, and grooming supplies in West Africa. They partner with top international brands to bring quality products closer to Nigerian pet lovers.",
      logo: "https://images.unsplash.com/photo-1626581672447-c5ed9709db79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmV0JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
      website: "https://pawpride.ng",
      location: "Lagos, Nigeria",
      contact: "+234 808 567 4321",
    },
    {
      name: "VetCare Hub",
      description:
        "VetCare Hub is a network of certified veterinary clinics that provide accessible and affordable pet healthcare. Their team of professionals ensures every animal gets the care and love it deserves.",
      logo: "https://images.unsplash.com/photo-1515575550379-b923bc71669b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmV0JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=800",
      website: "https://vetcarehub.com",
      location: "Abuja, Nigeria",
      contact: "+234 701 234 5567",
    },
    {
      name: "HappyTails Pet Store",
      description:
        "HappyTails is your one-stop destination for all pet essentials—from nutrition to training gear. They also host weekend adoption events and pet training sessions across major cities in Nigeria.",
      logo: "https://images.unsplash.com/photo-1611674194996-32049858f52f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZldCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
      website: "https://happytails.ng",
      location: "Port Harcourt, Nigeria",
      contact: "+234 909 112 3344",
    },
    {
      name: "Royal Pets Africa",
      description:
        "Royal Pets Africa partners with international brands to supply luxury accessories and grooming tools. They’re known for their community programs that promote responsible pet ownership.",
      logo: "https://images.unsplash.com/photo-1512978587787-47fc7ac10b63?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZldCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=800",
      website: "https://royalpetsafrica.com",
      location: "Lagos, Nigeria",
      contact: "+234 812 789 0909",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-emerald-700 mb-6 text-center">
        Our Trusted Partners & Stores 🐾
      </h1>
      <p className="text-gray-700 text-center mb-10 leading-relaxed">
        We’re proud to work hand-in-hand with local and international partners
        who share our mission — improving the lives of pets across Nigeria. From
        veterinary services to pet boutiques, our partners ensure that every pet
        gets the best care, nutrition, and love possible.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden"
          >
            <div className="relative w-full h-56">
              <Image
                src={partner.logo}
                alt={partner.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-emerald-600 mb-2">
                {partner.name}
              </h2>
              <p className="text-gray-600 mb-4">{partner.description}</p>
              <p className="text-sm text-gray-500">
                📍 <span className="font-medium">{partner.location}</span>
              </p>
              <p className="text-sm text-gray-500 mb-4">☎️ {partner.contact}</p>
              <Link
                href={partner.website}
                target="_blank"
                className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition"
              >
                Visit Website
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-emerald-50 rounded-3xl p-10 text-center">
        <h2 className="text-3xl font-semibold text-emerald-700 mb-4">
          Become a Partner
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Do you own a pet-related business in Nigeria? Partner with us to reach
          a wider community of pet owners. Whether you’re a vet, breeder, pet
          food supplier, or trainer — we’d love to collaborate with you!
        </p>
        <Link
          href="/contact"
          className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition"
        >
          Partner With Us
        </Link>
      </div>
    </div>
  );
}
