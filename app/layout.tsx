import "./globals.css";

import { Inter } from "next/font/google";
import LoadingSpinner from "./loading";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TPLGEN",
  description: "Template Generator Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <main className="flex-grow">{children}</main>
          </Suspense>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
