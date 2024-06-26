import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloudent",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <main className="overflow-auto">{children}</main>
        </body>
      </html>
  );
}
