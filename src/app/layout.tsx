import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://saivaibhav.com";

// Kept ≤ 160 chars so Google doesn't truncate
const description =
  "Sai Vaibhav — cinematographer in Bengaluru, India. Commercials, brand films, event aftermovies, and documentaries with 6+ years of experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sai Vaibhav — Cinematographer in Bengaluru",
    template: "%s | Sai Vaibhav",
  },
  description,
  keywords: [
    "cinematographer",
    "cinematographer Bengaluru",
    "cinematographer Bangalore",
    "India",
    "brand films",
    "commercials",
    "event aftermovie",
    "documentary",
    "video production",
    "visual storytelling",
    "Sai Vaibhav",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Sai Vaibhav Cinematography",
    title: "Sai Vaibhav — Cinematographer in Bengaluru",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Vaibhav — Cinematographer in Bengaluru",
    description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-cinema-950 text-gray-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
