import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import localFont from "next/font/local";

const ubuntu = localFont({
  src: [
    {
      path: "./fonts/Ubuntu-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Ubuntu-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Ubuntu-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Ubuntu-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Ubuntu-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-ubuntu",
  display: "swap",
})

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mito",
  description: "Mito",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${inter.variable}`}>
      <body suppressHydrationWarning={true} className="font-ubuntu bg-[#050020]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
