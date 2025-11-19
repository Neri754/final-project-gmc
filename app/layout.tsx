import "./globals.css";
import Navbar from "@/components/NavBar";
import { CartProvider } from "@/app/context/CartContext";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Naija Pet Finder",
  description: "Find and adopt pets across Nigeria 🐾",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <CartProvider>
          <Navbar />
          <main className="pt-8 px-6">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
