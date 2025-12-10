"use client";

import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AccessoriesPage() {
  const { addToCart } = useCart();
  const router = useRouter();

  const accessories = [
    {
      id: 1,
      name: "Comfort Collar",
      price: 6500,
      image:
        "https://images.unsplash.com/photo-1705351738440-8bfa1fa5d54b?auto=format&fit=crop&q=80&w=800",
      description:
        "Durable and comfortable adjustable collar made from soft nylon. Perfect for all dog breeds.",
    },
    {
      id: 2,
      name: "Chew Toy Set",
      price: 5000,
      image:
        "https://images.unsplash.com/photo-1635536360947-886f9a65e647?auto=format&fit=crop&q=80&w=800",
      description:
        "A pack of 3 chew toys designed to keep your pet entertained and active.",
    },
    {
      id: 3,
      name: "Pet Bed (Medium)",
      price: 12000,
      image:
        "https://images.unsplash.com/photo-1504968430878-8b4dc34be661?auto=format&fit=crop&q=80&w=800",
      description:
        "Soft and cozy pet bed made from hypoallergenic materials. Perfect for cats and small dogs.",
    },
    {
      id: 4,
      name: "Feeding Bowl Duo",
      price: 4500,
      image:
        "https://images.unsplash.com/photo-1603512277021-0f124888c487?auto=format&fit=crop&q=80&w=800",
      description:
        "Twin stainless steel feeding bowls with a non-slip base. Durable and easy to clean.",
    },
    {
      id: 5,
      name: "Interactive Cat Teaser",
      price: 3800,
      image:
        "https://images.unsplash.com/photo-1646758489059-cddff648a193?auto=format&fit=crop&q=80&w=800",
      description:
        "A feather teaser wand that stimulates your cat’s natural hunting instincts.",
    },
    {
      id: 6,
      name: "Reflective Leash",
      price: 7000,
      image:
        "https://images.unsplash.com/photo-1622231357459-87de204ff656?auto=format&fit=crop&q=80&w=800",
      description:
        "Heavy-duty leash with reflective strip for safe nighttime walks.",
    },
    {
      id: 7,
      name: "Cat Tunnel Toy",
      price: 8500,
      image:
        "https://images.unsplash.com/photo-1603649222500-d801d0b47a62?auto=format&fit=crop&q=80&w=800",
      description:
        "Foldable tunnel toy with peek holes — great for exercise and reducing stress.",
    },
    {
      id: 8,
      name: "Pet Grooming Brush",
      price: 5500,
      image:
        "https://images.unsplash.com/photo-1606730739660-79cc1ff11f9b?auto=format&fit=crop&q=80&w=800",
      description:
        "Soft-bristle grooming brush that gently removes loose fur and detangles hair.",
    },
  ];

  const handleBuyNow = (item) => {
    addToCart(item, 1);
    router.push("/cart");
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6">
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">
        🐾 Toys & Accessories
      </h1>

      <p className="text-gray-600 mb-10 leading-relaxed">
        Explore a collection of premium toys and accessories crafted to make
        your pet’s life more fun, comfortable, and safe.
      </p>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {accessories.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col"
          >
            {/* IMAGE */}
            <div className="relative w-full h-56 sm:h-64 rounded-t-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       25vw"
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1 flex-grow">
                {item.description}
              </p>
              <p className="text-emerald-600 font-bold mt-3">
                ₦{item.price.toLocaleString()}
              </p>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => addToCart(item)}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg text-sm"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => handleBuyNow(item)}
                  className="flex-1 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-2 rounded-lg text-sm"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* WHY SHOP SECTION */}
      <div className="mt-16 text-center px-2">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-3">
          Why Shop With Us?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          At Naija Pet Finder, we understand the bond you share with your pet.
          That’s why we only stock high-quality, vet-approved accessories and
          toys that ensure your furry friends are safe, happy, and entertained.
        </p>
      </div>
    </div>
  );
}
