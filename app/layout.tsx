// app/layout.tsx
import "./globals.css"; // keep tailwind + base css import here (server component)
import ClientNavWrapper from "@/components/ClientNavWrapper";
import ClientFooterWrapper from "@/components/ClientFooterWrapper";

export const metadata = {
  title: "NaijaPetPlace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        {/* ClientNavWrapper is a client component that chooses which navbar to render
            and also provides Auth + Cart contexts to the tree. */}
        <ClientNavWrapper>{children}</ClientNavWrapper>
        <ClientFooterWrapper />
      </body>
    </html>
  );
}
