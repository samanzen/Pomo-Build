import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOSInitializer from "@/components/AOSInitializer";
import SchemaMarkup from "@/components/SchemaMarkup";
import StickyMobileCTA from "@/components/StickyMobileCTA"; // New import
import Script from "next/script"; // Added for Google Analytics

const lato = Lato({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pomobuild.ca'),
  title: {
    default: 'Pomo Build | Port Moody Renovations & Handyman Services',
    template: '%s | Pomo Build',
  },
  description:
    'Port Moody-based contractor for kitchen, bath, and full-home renovations across the Tri-Cities.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SMPMW6HZJ5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SMPMW6HZJ5');
          `}
        </Script>
        {/* Google Ads website-call conversion */}
        <Script id="google-ads-call-conversion" strategy="afterInteractive">
          {`
            gtag('config', 'AW-18439072195/dUtbCNeG6vEcEMPTt9hE', {
              'phone_conversion_number': '(604) 500-2003'
            });
          `}
        </Script>
      </head>
      <body className={`${lato.variable} font-sans`}>
        <AOSInitializer />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA /> {/* New component added */}
      </body>
    </html>
  );
}
