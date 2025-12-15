// app/checkout/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();

  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    return parseInt(price.replace(/\D/g, ""), 10) || 0;
  };

  const total = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * (item.quantity ?? 1),
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-lg text-gray-600">Your cart is empty</p>
        <Link href="/shop/accessories" className="mt-4 text-emerald-600">
          Continue shopping →
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow">
        <h1 className="text-3xl font-bold text-emerald-800 mb-6">Checkout</h1>

        {cart.map((item, i) => (
          <div key={i} className="flex justify-between border-b py-4">
            <p>{item.name}</p>
            <p>₦{parsePrice(item.price).toLocaleString()}</p>
          </div>
        ))}

        <div className="flex justify-between mt-6 font-semibold text-xl">
          <span>Total</span>
          <span>₦{total.toLocaleString()}</span>
        </div>

        <button
          onClick={() => {
            alert("Payment successful 🎉");
            clearCart();
          }}
          className="w-full mt-8 bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
