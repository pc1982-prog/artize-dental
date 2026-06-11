import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { seoData } from "@/data/seo";
import { clinic } from "@/data/clinic";
import { doctors } from "@/data/doctors";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords,
  metadataBase: new URL(seoData.canonical),
  alternates: { canonical: "/" },
  openGraph: {
    title: seoData.title,
    description: seoData.description,
    url: seoData.canonical,
    siteName: clinic.name,
    images: [{ url: seoData.ogImage, width: 1200, height: 630, alt: clinic.name }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.title,
    description: seoData.description,
    images: [seoData.ogImage],
  },
  other: {
    "theme-color": "#1D322D",
  },
};

function buildJsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness"],
    name: clinic.name,
    description: seoData.description,
    url: clinic.website,
    telephone: clinic.phone,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "B-2/16, opp. CNG Pump, Sector 11",
      addressLocality: "Rohini",
      addressRegion: "Delhi",
      postalCode: "110085",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.7364,
      longitude: 77.1068,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"],
        opens: "16:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "19:00",
      },
    ],
    image: seoData.ogImage,
    priceRange: "₹400–₹500",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "4222",
      bestRating: "5",
    },
    sameAs: [clinic.practoUrl, clinic.mapUrl],
  };

  const doctorSchemas = doctors.map((doc) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: doc.name,
    image: doc.photo,
    jobTitle: "Dentist",
    description: `${doc.experienceLabel}. Specializes in ${doc.specialties.slice(0, 3).join(", ")}`,
    worksFor: { "@type": "Organization", name: clinic.name },
    memberOf: doc.memberships?.map((m) => ({ "@type": "Organization", name: m })),
  }));

  return [localBusiness, ...doctorSchemas];
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdItems = buildJsonLd();

  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable} scroll-smooth`}>
      <head>
        {jsonLdItems.map((item, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        />
      </head>
      <body className="font-sans antialiased text-neutral-800 bg-ivory">
        {children}
      </body>
    </html>
  );
}
