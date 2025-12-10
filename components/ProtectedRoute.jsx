// components/ProtectedRoute.jsx
"use client";
import Navbar from "./NavBar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      // user not logged in -> redirect to login
      router.push("/auth/login");
    }
  }, [user, router]);

  if (!user) return null; // while checking / redirecting -> don't render content
  return <Navbar>{children}</Navbar>;
}
