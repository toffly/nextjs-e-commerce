import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopcard Online Store",
  description: "Shopcard online store, Your one-stop shop for everything!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
