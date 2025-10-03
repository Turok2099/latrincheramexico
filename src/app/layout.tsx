import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "La Trinchera México",
  description: "Organización de eventos y reservas en La Trinchera México",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${openSans.variable} font-open-sans`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton phoneNumber="+525545210178" />
      </body>
    </html>
  );
}
