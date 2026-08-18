import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono, Fraunces } from "next/font/google";
import "./globals.css";

// Display face: architectural, precise grotesk — used for headlines.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Body face: IBM Plex Sans has an engineering pedigree, which fits
// SCHLOSS-X's combination of Elektrohandwerk + IoT-Kompetenz thematically.
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Mono face: used for labels, numbers, and the address — a deliberate,
// meaningful choice (technical precision) rather than decorative tracking.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// Serif italic accent: used sparingly inside headlines via <em>.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://schloss-x-website-fawn.vercel.app"),
  title: "SCHLOSS-X — Elektrotechnik & intelligente Gebäudesysteme",
  description:
    "SCHLOSS-X verbindet fundiertes Elektrohandwerk mit moderner IoT-Kompetenz — für Technik, die zuverlässig zusammenspielt. Hasbergen, Osnabrück und Umgebung.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "SCHLOSS-X",
    title: "SCHLOSS-X — Elektrotechnik & intelligente Gebäudesysteme",
    description:
      "Moderne Elektrotechnik und intelligente Gebäudesysteme für Hasbergen, Osnabrück und Umgebung.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SCHLOSS-X" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SCHLOSS-X — Elektrotechnik & intelligente Gebäudesysteme",
    description:
      "Moderne Elektrotechnik und intelligente Gebäudesysteme für Hasbergen, Osnabrück und Umgebung.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} ${fraunces.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Electrician",
              name: "SCHLOSS-X e.K.",
              url: "https://schloss-x-website-fawn.vercel.app",
              email: "info@schloss-x.de",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Riedweg 22",
                postalCode: "49205",
                addressLocality: "Hasbergen",
                addressCountry: "DE",
              },
              areaServed: ["Hasbergen", "Osnabrück", "Osnabrücker Land"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
