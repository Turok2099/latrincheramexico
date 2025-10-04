import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Open_Sans } from "next/font/google";

// Optimizar fuente con display: swap y fallback
const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap", // CRÍTICO: Previene FOIT (Flash of Invisible Text)
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true, // Ajusta métricas del fallback
});

export const metadata: Metadata = {
  title: "La Trinchera México",
  description: "Organización de eventos y reservas en La Trinchera México",
  other: {
    "font-display": "swap",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* ⚡ DNS Prefetch y Preconnect para recursos externos */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
          crossOrigin="anonymous"
        />

        {/* 🚀 CSS Crítico Inline - Above the Fold */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            :root{--color-primary:#22d3f7;--color-accent:#22d3f7;--background:#000000;--foreground:#ededed;--font-sans:"Open Sans",system-ui,-apple-system,sans-serif}
            *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid}
            html{font-family:var(--font-sans);line-height:1.6;-webkit-text-size-adjust:100%;tab-size:4;overflow-x:hidden}
            body{background:var(--background);color:var(--foreground);font-family:var(--font-sans);margin:0;padding:0;overflow-x:hidden;overscroll-behavior:none;-webkit-overflow-scrolling:touch;line-height:inherit;font-feature-settings:"kern"}
            img,video{max-width:100%;height:auto}
            h1,h2,h3{margin:0;font-weight:700;line-height:1.2}
            button{cursor:pointer}
            .fixed{position:fixed}
            @media(max-width:768px){body{position:relative;width:100%;overscroll-behavior-y:contain}}
          `,
          }}
        />
      </head>
      <body
        className={`${openSans.variable} font-open-sans antialiased flex flex-col min-h-screen`}
      >
        {/* 📊 Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-55QXTXJ9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton phoneNumber="+525545210178" />

        {/* 📊 Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-55QXTXJ9');
          `,
          }}
        />
      </body>
    </html>
  );
}
