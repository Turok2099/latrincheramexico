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
  metadataBase: new URL("https://latrincheramexico.com"),
  title: "La Trinchera México | Organización de eventos en CDMX",
  description: "Organización de eventos en CDMX: eventos corporativos, bodas, catering, stands, pantallas y música.",
  openGraph: {
    siteName: "La Trinchera México",
    type: "website",
    locale: "es_MX",
    images: [{ url: "/og-trinchera.png", width: 1200, height: 630, alt: "La Trinchera México" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-trinchera.png"],
  },
  other: {
    "font-display": "swap",
  },
};

const analitica =
  process.env.NODE_ENV === "production" &&
  process.env.VERCEL_ENV !== "preview";

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
            body{background:var(--background);color:var(--foreground);font-family:var(--font-sans);margin:0;padding:0;overflow-x:clip;line-height:inherit;font-feature-settings:"kern"}
            img,video{max-width:100%;height:auto}
            h1,h2,h3{margin:0;font-weight:700;line-height:1.2}
            button{cursor:pointer}
            .fixed{position:fixed}
            @media(max-width:768px){body{position:relative;width:100%}}
          `,
          }}
        />
      </head>
      <body
        className={`${openSans.variable} font-open-sans antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton phoneNumber="+525545210178" />
        {/* GA4 solo en producción real: no en desarrollo local ni en previews de Vercel */}
        {analitica && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-K9R5B0D8QR"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-K9R5B0D8QR');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
