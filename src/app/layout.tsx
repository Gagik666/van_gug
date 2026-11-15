import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/common/FloatingContact";
import I18nProvider from "@/i18n/I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Van Gug — Անհատական կահույք | Custom Furniture",
  description:
    "Van Gug — անհատական կահույքի պատրաստում․ խոհանոցներ, ննջասենյակներ, զգեստապահարաններ և զարդասեղաններ։ Custom kitchens, bedrooms, wardrobes, and vanity tables.",
  openGraph: {
    title: "Van Gug — Անհատական կահույք | Custom Furniture",
    description:
      "Խոհանոցներ, ննջասենյակներ, զգեստապահարաններ, զարդասեղաններ և անհատական նախագծեր։",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="am"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <I18nProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingContact />
        </I18nProvider>
      </body>
    </html>
  );
}
