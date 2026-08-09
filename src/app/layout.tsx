import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site-data";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Two-Way Radio Communication Solutions in Lagos`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "two-way radio Lagos",
    "walkie talkie rental Nigeria",
    "PAMR network Lagos",
    "Motorola radio hire Lagos",
    "two-way radio communication company Nigeria",
    "radio managed service Lagos",
    "handheld radio sales Nigeria",
    "commercial radio network Lagos",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  applicationName: site.name,
  category: "Business",
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
    type: "website",
    locale: "en_NG",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Two-Way Radio Communication Solutions in Lagos`,
    description: site.description,
    images: [
      {
        url: "/images/hero-crane.jpg",
        width: 1167,
        height: 1357,
        alt: "Field engineer using a Linkline two-way radio on site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Two-Way Radio Communication Solutions in Lagos`,
    description: site.description,
    images: ["/images/hero-crane.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#7a1220",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/images/linkline-logo.png`,
    image: `${site.url}/images/hero-crane.jpg`,
    description: site.description,
    telephone: site.phonePrimaryRaw,
    email: site.emailPrimary,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: "NG",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Lagos State, Nigeria",
    },
    priceRange: "$$",
    sameAs: [],
  };

  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper-50 text-ink-950">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
