"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

export default function PetFoodPage() {
  const router = useRouter();
  const { cart, addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Nature’s Feast Organic Dog Food",
      price: 35000,
      img: "https://images.unsplash.com/photo-1546031515-994686fe6c46?auto=format&fit=crop&q=60&w=800",
      desc: "Made with organic meats, brown rice & vegetables. Zero additives, 100% nutrition.",
      benefits: ["Boosts immunity", "Healthy digestion", "Improves coat shine"],
    },
    {
      id: 2,
      name: "Purrfect Choice Salmon Mix",
      price: 26000,
      img: "https://images.unsplash.com/photo-1717251752726-573a8a6a404a?auto=format&fit=crop&q=60&w=800",
      desc: "Pure salmon blend packed with omega-3 for radiant skin and strong muscles.",
      benefits: [
        "High in omega-3",
        "Supports heart health",
        "Great for picky eaters",
      ],
    },
    {
      id: 3,
      name: "Crunchy Bites Training Treats",
      price: 16000,
      img: "https://images.unsplash.com/photo-1621690260995-13b89b66bb3f?auto=format&fit=crop&q=60&w=800",
      desc: "Perfect for training sessions. Tasty, grain-free and high-reward value.",
      benefits: ["Low calorie", "Highly palatable", "Ideal for rewards"],
    },
    // Added benefits for 4 - 6 as requested
    {
      id: 4,
      name: "MegaPet Goat Milk Powder",
      price: 18000,
      img: "https://images.unsplash.com/photo-1601373877164-985f22f3581e?auto=format&fit=crop&q=60&w=800",
      desc: "Rich probiotic goat milk supplement that promotes gut health and supports puppies & kittens.",
      benefits: [
        "Promotes healthy gut flora",
        "Easily digestible for young animals",
        "Boosts appetite and energy",
      ],
    },
    {
      id: 5,
      name: "FurryFeast Puppy Starter Kit",
      price: 30000,
      img: "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&q=60&w=800",
      desc: "Complete puppy starter kit with DHA, proteins, calcium, and immune boosters for healthy development.",
      benefits: [
        "Contains DHA for brain development",
        "Balanced calcium for bone growth",
        "Immune-supporting vitamins",
      ],
    },
    {
      id: 6,
      name: "CatNip Temptation Treats",
      price: 9000,
      img: "https://images.unsplash.com/photo-1598578271385-8a6d4a2de857?auto=format&fit=crop&q=60&w=800",
      desc: "Crunchy outside, soft inside — infused with real catnip to stimulate energy and playfulness.",
      benefits: [
        "Stimulates play & activity",
        "Great for enrichment",
        "Small bites for training or rewards",
      ],
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const buyNow = (product) => {
    const data = encodeURIComponent(JSON.stringify([product]));
    router.push(`/shop/payment?cart=${data}`);
  };

  const total = cart.reduce(
    (s, it) =>
      s +
      (typeof it.price === "number"
        ? it.price
        : parseInt(String(it.price).replace(/\D/g, "") || 0, 10)),
    0
  );

  return (
    <div className="bg-emerald-50 min-h-screen py-16 px-6 lg:px-20">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-emerald-800 mb-4">
          Premium Pet Food & Healthy Treats
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Handpicked, vet-inspired nutrition for dogs and cats. Shop balanced
          meals, supplements, and training treats trusted by Nigerian pet
          parents.
        </p>
      </section>

      {/* Banner */}
      <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl mb-16">
        <Image
          src="https://images.unsplash.com/photo-1714068691210-073dc52c6c1d?auto=format&fit=crop&q=60&w=1400"
          alt="Premium pet food"
          fill
          className="object-cover"
        />
      </div>

      {/* Products */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-emerald-700 mb-10 text-center">
          Shop Our Best Sellers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-64">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-emerald-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{product.desc}</p>

                <ul className="text-sm text-gray-700 mb-4 list-disc pl-5 mt-3">
                  {product.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <p className="text-emerald-700 text-xl font-bold mb-4">
                    ₦{product.price.toLocaleString()}
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg transition"
                    >
                      Add to Cart
                    </button>

                    <button
                      onClick={() => buyNow(product)}
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 mt-2"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Cart summary */}
      {cart.length > 0 && (
        <aside className="bg-white p-6 rounded-2xl shadow-lg max-w-3xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-emerald-800 mb-4">
            Your Cart ({cart.length})
          </h3>

          <ul className="divide-y">
            {cart.map((it, idx) => (
              <li key={idx} className="py-3 flex justify-between items-center">
                <span className="text-gray-800">{it.name}</span>
                <span className="font-semibold text-emerald-700">
                  ₦
                  {(typeof it.price === "number"
                    ? it.price
                    : parseInt(String(it.price).replace(/\D/g, "") || 0, 10)
                  ).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Subtotal</p>
              <p className="text-2xl font-bold text-emerald-800">
                ₦{total.toLocaleString()}
              </p>
            </div>

            <button
              onClick={() => router.push("/checkout")}
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Checkout
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}
