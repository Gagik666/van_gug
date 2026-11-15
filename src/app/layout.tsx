import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/common/FloatingContact";
import I18nProvider from "@/i18n/I18nProvider";

const SITE_URL = "https://vangug.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Van Gug — Անհատական կահույք Երևանում | Мебель на заказ | Custom Furniture",
    template: "%s | Van Gug",
  },
  description:
    "Van Gug (Վան Գուգ) — անհատական կահույքի պատրաստում Երևանում և Հայաստանում․ խոհանոցներ, ննջասենյակներ, զգեստապահարաններ։ Мебель и кухни на заказ в Ереване.",
  keywords: [
    "Van Gug",
    "VanGug",
    "Վան Գուգ",
    "Ван Гуг",
    "կահույք պատվերով",
    "անհատական կահույք Երևան",
    "խոհանոցի կահույք պատվերով",
    "мебель на заказ Ереван",
    "кухни на заказ Армения",
    "custom furniture Armenia",
    "custom kitchens Yerevan",
  ],
  authors: [{ name: "Van Gug" }],
  creator: "Van Gug",
  publisher: "Van Gug",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Van Gug — Անհատական կահույք | Custom Furniture Armenia",
    description:
      "Խոհանոցներ, ննջասենյակներ, զգեստապահարաններ և անհատական նախագծեր Երևանում և Հայաստանում։",
    url: SITE_URL,
    siteName: "Van Gug",
    locale: "hy_AM",
    alternateLocale: ["ru_RU", "en_US"],
    type: "website",
    images: [
      {
        url: "/images/brand/hero-bg.jpg",
        width: 1376,
        height: 768,
        alt: "Van Gug — Անհատական կահույք Երևանում",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Van Gug — Անհատական կահույք | Custom Furniture",
    description:
      "Անհատական խոհանոցներ, ննջասենյակներ և զգեստապահարաններ Երևանում և Հայաստանում։",
    images: ["/images/brand/hero-bg.jpg"],
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
      "qn9k_uy43uVwhB4BKmckdjVf3er-Tbs7Olf8wOwDxQ4",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: "Van Gug",
  alternateName: ["VanGug", "Վան Գուգ", "Ван Гуг"],
  url: SITE_URL,
  logo: `${SITE_URL}/images/brand/logo.png`,
  image: `${SITE_URL}/images/brand/hero-bg.jpg`,
  description:
    "Custom furniture manufacturing in Yerevan, Armenia: kitchens, bedrooms, wardrobes, and vanity tables.",
  telephone: ["+37498881893", "+37499968196"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yerevan",
    addressCountry: "AM",
  },
  areaServed: [
    { "@type": "City", name: "Yerevan" },
    { "@type": "Country", name: "Armenia" },
  ],
  sameAs: ["https://www.instagram.com/vangug__/"],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hy"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
