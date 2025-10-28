import type { Metadata } from "next";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <ClerkProvider>
      <html lang="en">
        <body className="font-poppins antialiased container">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
