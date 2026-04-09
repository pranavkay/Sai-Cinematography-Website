import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://sai-website.vercel.app"
  ),
  title: {
    default: "Sai Vaibhav | Cinematographer - Bangalore",
    template: "%s | Sai Vaibhav",
  },
  description:
    "Professional cinematographer based in Bangalore, India. Specializing in brand films, corporate events, documentaries, and visual storytelling. 6+ years of experience crafting cinematic narratives.",
  keywords: [
    "cinematographer",
    "Bangalore",
    "India",
    "brand films",
    "corporate events",
    "documentary",
    "video production",
    "visual storytelling",
    "Sai Vaibhav",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Sai Vaibhav Cinematography",
    title: "Sai Vaibhav | Cinematographer - Bangalore",
    description:
      "Professional cinematographer based in Bangalore. Brand films, corporate events, documentaries & visual storytelling.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sai Vaibhav - Cinematographer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Vaibhav | Cinematographer",
    description:
      "Professional cinematographer based in Bangalore. Brand films, events, documentaries.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
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
