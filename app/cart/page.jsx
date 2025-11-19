"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CheckoutPage() {
  const { cart, clearCart, removeFromCart, addToCart } = useCart();

  // Helper: return numeric price in Naira (no decimals), works for numbers and strings like "₦45,000"
  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    if (typeof price === "string") {
      // remove non-digits (keeps digits only) then parse
      const digits = price.replace(/\D/g, "");
      return digits === "" ? 0 : parseInt(digits, 10);
    }
    return 0;
  };

  const total = cart.reduce((sum, item) => {
    const p = parsePrice(item.price);
    const qty = item.quantity ?? 1;
    return sum + p * qty;
  }, 0);

  return (
    <div className="bg-emerald-50 min-h-screen py-16 px-6 lg:px-20">
      <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">
        Checkout
      </h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-700">
          <p>Your cart is empty.</p>
          <Link
            href="/shop/accessories"
            className="mt-4 inline-block text-emerald-700 font-semibold hover:underline"
          >
            Go Back to Shop
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-lg p-10 max-w-4xl mx-auto">
          {cart.map((item, idx) => {
            const priceNumber = parsePrice(item.price);
            const qty = item.quantity ?? 1;
            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center gap-6 border-b border-gray-200 py-6"
              >
                <div className="relative w-32 h-32 rounded-lg overflow-hidden shadow">
                  {/* If you used external URLs for images, put them here; if local public images, keep the path */}
                  <Image
                    src={
                      item.image ??
                      item.img ??
                      "/images/accessories/placeholder.jpg"
                    }
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-emerald-800">
                    {item.name}
                  </h2>
                  {item.description && (
                    <p className="text-gray-600 text-sm mt-1">
                      {item.description}
                    </p>
                  )}
                  <p className="text-emerald-700 font-bold mt-2">
                    ₦{priceNumber.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">Quantity: {qty}</p>

                  <div className="mt-3 flex gap-3">
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="text-red-600 text-sm"
                    >
                      Remove
                    </button>

                    <button
                      onClick={() => addToCart(item)}
                      className="text-emerald-600 text-sm"
                    >
                      + Add one more
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-2xl font-semibold text-emerald-800">
              Total: ₦{total.toLocaleString()}
            </p>

            <div className="w-full md:w-auto flex gap-3">
              <button
                onClick={() => {
                  // Simulate payment
                  alert("✅ Payment Successful! Thank you for your purchase.");
                  clearCart();
                }}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700"
              >
                Pay Now
              </button>

              <Link
                href="/shop/accessories"
                className="px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
