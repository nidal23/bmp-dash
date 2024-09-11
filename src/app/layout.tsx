import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nidal's Portfolio",
  description: "Clickity clack clack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className=" flex flex-col w-full h-screen justify-between">
      <Navbar />
      {children}
      <Footer />
      </div>
      </body>
    </html>
  );
}
