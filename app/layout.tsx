import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ variable: "--inter-font", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kent Miguel",
  description: "Kent Miguel Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ background: "black" }}>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
