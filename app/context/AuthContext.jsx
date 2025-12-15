// app/context/AuthContext.jsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const u = localStorage.getItem("np_user");
      if (u) setUser(JSON.parse(u));
    } catch (e) {
      console.warn("AuthContext: failed to parse user from localStorage", e);
    }
  }, []);

  function login(userData, token) {
    // userData: object from backend
    setUser(userData);
    localStorage.setItem("np_token", token);
    localStorage.setItem("np_user", JSON.stringify(userData));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("np_token");
    localStorage.removeItem("np_user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
