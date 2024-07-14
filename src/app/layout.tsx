"use client"

import { Outfit } from "next/font/google";
import "./globals.css";
import { InfoProvider } from "@/context/InfoProvider";

const inter = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <InfoProvider>
        <body className={`${inter.className} px-20 py-10`}>{children}</body>
      </InfoProvider>
    </html>
  );
}
 