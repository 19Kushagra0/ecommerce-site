import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SkullDrop — Born to Play. Built to Die.",
  description:
    "SkullDrop is the premier gaming lifestyle brand fusing Dia de los Muertos artistry with dark cyberpunk aesthetics. Shop limited drops of apparel, peripherals, and decor.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-skull-black text-skull-text antialiased">
        <Navbar />
        <main className="flex-1 animate-fade-in">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
