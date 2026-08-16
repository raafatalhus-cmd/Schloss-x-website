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
  title: "SCHLOSS-X — Elektrotechnik & intelligente Gebäudesysteme",
  description:
    "SCHLOSS-X verbindet fundiertes Elektrohandwerk mit moderner IoT-Kompetenz — für Technik, die zuverlässig zusammenspielt. Hasbergen, Osnabrück und Umgebung.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
