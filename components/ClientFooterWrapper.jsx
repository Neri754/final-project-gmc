"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer"; // authenticated footer
import PublicFooter from "@/components/PublicFooter"; // footer for unsigned users

export default function ClientFooterWrapper() {
  const pathname = usePathname();

  const publicPaths = ["/landing", "/auth/login", "/auth/signup"];
  const isPublic = publicPaths.includes(pathname);

  return <>{isPublic ? <PublicFooter /> : <Footer />}</>;
}
