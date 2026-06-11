import type { Metadata } from "next";
import { Arizonia, Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

const arizonia = Arizonia({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-arizonia",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mistwood by Vaishnavi Residences | Premium Apartments & Villas near Whitefield, Bengaluru",
  description:
    "Mistwood — a premium apartment and villa community near Whitefield, Bengaluru. 180 apartments, 20 row villas, a Miyawaki forest and curated lifestyle amenities across 2 acres 32 guntas of misty green calm.",
  keywords: [
    "Mistwood",
    "Vaishnavi Residences",
    "premium apartments Whitefield",
    "villas Bengaluru",
    "Miyawaki forest community",
  ],
  openGraph: {
    title: "Mistwood by Vaishnavi Residences",
    description:
      "Premium apartments & villas near Whitefield, Bengaluru — one day at Mistwood, from first light to lamplight.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#f2f3ee",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${instrument.variable} ${arizonia.variable}`}
    >
      <body>
        <a href="#overview" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
