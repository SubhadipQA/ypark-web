import "./globals.css";
import type { ReactNode } from "react";
import { DM_Mono, DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-dm-mono",
});

export const metadata = {
  title: {
    default: "YPark — Organized Parking for India",
    template: "%s | YPark",
  },
  description:
    "YPark is India's organized parking marketplace. Connecting parking zone owners with daily drivers. Manage walk-ins, monthly passes, staff and revenue — all from one app.",
  keywords: [
    "parking app India",
    "parking zone management",
    "find parking India",
    "organized parking",
    "parking marketplace India",
    "monthly parking pass",
    "government authorized parking",
    "private parking management",
    "parking owner app",
    "YPark",
  ],
  authors: [{ name: "Prothom Analytica India" }],
  creator: "Prothom Analytica India",
  metadataBase: new URL("https://ypark.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ypark.in",
    siteName: "YPark",
    title: "YPark — Organized Parking for India",
    description:
      "India's organized parking marketplace. For parking owners — manage your zone digitally. For drivers — find parking near you.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YPark — Organized Parking for India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YPark — Organized Parking for India",
    description:
      "India's organized parking marketplace. Connecting owners and drivers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmMono.variable} scroll-smooth`}
    >
      <body className={`${dmSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}