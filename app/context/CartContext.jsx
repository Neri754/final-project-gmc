"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    try {
      const c = localStorage.getItem("np_cart");
      if (c) setCart(JSON.parse(c));
    } catch (e) {}
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("np_cart", JSON.stringify(cart));
  }, [cart]);

  // ADD ITEM — if exists increase quantity
  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find((x) => x.name === item.name);

      if (existing) {
        return prev.map((x) =>
          x.name === item.name ? { ...x, quantity: (x.quantity ?? 1) + 1 } : x
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  }

  // REMOVE ITEM COMPLETELY
  function removeFromCart(name) {
    setCart((prev) => prev.filter((item) => item.name !== name));
  }

  // DECREASE QTY
  function decreaseQty(name) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, quantity: (item.quantity ?? 1) - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // CLEAR CART
  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, decreaseQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
