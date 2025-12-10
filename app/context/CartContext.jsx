// app/context/CartContext.jsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

/** 🟢 TYPE HINT FOR TYPESCRIPT COMPONENTS */
export const CartContext = createContext({
  cart: [],
  addToCart: (item) => {},
  clearCart: () => {},
  removeFromCart: (name) => {},
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const c = localStorage.getItem("np_cart");
    if (c) setCart(JSON.parse(c));
  }, []);

  useEffect(() => {
    localStorage.setItem("np_cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
    setCart((prev) => [...prev, item]);
  }

  function removeFromCart(name) {
    setCart((prev) => prev.filter((i) => i.name !== name));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
