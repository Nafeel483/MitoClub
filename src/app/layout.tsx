import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export const metadata: Metadata = {
  title: "Mito",
  description: "Mito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body suppressHydrationWarning={true}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

