import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thesimplestream.com'),
  title: {
    default: "The Simple Stream | Live Shopping Platform for Retailers",
    template: "%s | The Simple Stream",
  },
  description:
    "Turn your products into live shopping events. Professional HD streaming, Shopify integration, 0% commission. Start selling live in days.",
  keywords: [
    "live shopping",
    "live commerce",
    "shoppable video",
    "live streaming",
    "Shopify live shopping",
    "retail streaming",
    "live selling",
  ],
  authors: [{ name: "The Simple Stream" }],
  creator: "The Simple Stream",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://thesimplestream.com",
    siteName: "The Simple Stream",
    title: "The Simple Stream | Live Shopping Platform for Retailers",
    description:
      "Turn your products into live shopping events. Professional HD streaming, Shopify integration, 0% commission.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Simple Stream - Live Shopping Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Simple Stream | Live Shopping Platform",
    description: "Turn your products into live shopping events.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
