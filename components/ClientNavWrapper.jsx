// components/ClientNavWrapper.jsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/NavBar"; // full navbar (for authenticated users)
import PublicNavbar from "@/components/PublicNavbar"; // navbar for non-signed-in users
import { AuthProvider } from "@/app/context/AuthContext";
import { CartProvider } from "@/app/context/CartContext";

export default function ClientNavWrapper({ children }) {
  const pathname = usePathname();
  const publicPaths = ["/landing", "/auth/login", "/auth/signup"]; // adjust as desired
  const isPublic = publicPaths.includes(pathname);

  return (
    <AuthProvider>
      <CartProvider>
        {isPublic ? <PublicNavbar /> : <Navbar />}
        <main className="">{children}</main>
      </CartProvider>
    </AuthProvider>
  );
}
