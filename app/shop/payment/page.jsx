"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = searchParams.get("cart");
    if (cartData) {
      setCart(JSON.parse(decodeURIComponent(cartData)));
    }
  }, [searchParams]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment successful! 🐾 Thank you for shopping with NaijaPetPlace!");
  };

  return (
    <div className="bg-emerald-50 min-h-screen py-16 px-6 lg:px-20">
      <h1 className="text-4xl font-bold text-emerald-800 mb-10 text-center">
        Checkout & Payment
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-emerald-700 mb-6">
          Order Summary
        </h2>

        <ul className="divide-y divide-gray-200 mb-8">
          {cart.map((item, idx) => (
            <li key={idx} className="py-3 flex justify-between items-center">
              <span className="text-gray-800">{item.name}</span>
              <span className="text-emerald-700 font-semibold">
                ₦{item.price.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex justify-between font-bold text-xl mb-8">
          <span>Total</span>
          <span className="text-emerald-700">₦{total.toLocaleString()}</span>
        </div>

        <form onSubmit={handlePayment} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Card Number
            </label>
            <input
              type="text"
              required
              placeholder="1234 5678 9012 3456"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                required
                placeholder="MM/YY"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                CVV
              </label>
              <input
                type="password"
                required
                placeholder="123"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Pay ₦{total.toLocaleString()}
          </button>
        </form>
      </div>
    </div>
  );
}
