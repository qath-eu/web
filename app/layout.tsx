import type { Metadata, Viewport } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  fallback: ["Arial", "Helvetica", "sans-serif"],
  adjustFontFallback: false,
  weight: ["400", "500"],
});

const title = "qath — European Transport Intelligence";
const description = "A new perspective on European transport is on its way.";
const shareImage = {
  url: "/preview.png",
  width: 1200,
  height: 630,
  alt: "qath — European Transport Intelligence.",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://qath.eu"),
  alternates: { canonical: "/" },
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://qath.eu",
    siteName: "qath",
    locale: "en_GB",
    title,
    description,
    images: [{ ...shareImage, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
  applicationName: "qath",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "qath",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${googleSansFlex.className} h-full`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
