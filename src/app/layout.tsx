"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import { RootState } from "./redux/store"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Header />
          <main className="min-h-screen px-8 py-6 mt-8">{children}</main>
          <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4 mt-12">
            © {new Date().getFullYear()} Demo App. All rights reserved.
          </footer>
        </body>
      </html>
    </Provider>
  );
}

function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.length;

  return (
    <header className="fixed top-0 left-0 right-0 bg-sky-600 text-white py-4 px-8 shadow-md z-50">
      <div className="mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Demo App</h1>
        <nav>
          <Link href="/" className="mr-4 hover:underline">
            Home
          </Link>
          <Link href="/profile" className="mr-4 hover:underline">
            Profile
          </Link>
          <Link href="/cart" className="relative hover:underline">
            Cart
            {cartItemCount > 0 && (
              <span className="mr-5 bsolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
