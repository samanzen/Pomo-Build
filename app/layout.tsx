import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOSInitializer from "@/components/AOSInitializer";
import SchemaMarkup from "@/components/SchemaMarkup";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const lato = Lato({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  // UPDATED to .ca domain
  metadataBase: new URL('https://www.pomobuild.ca'),
  title: {
    default: 'Pomo Build | Renovations & Handyman Services',
    template: '%s | Pomo Build',
  },
  description: "Your trusted general contractor in Port Moody for high-quality kitchen & bath remodeling, basement finishing, and reliable handyman services.",
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
      </head>
      <body className={`${lato.variable} font-sans`}>
        <AOSInitializer />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
