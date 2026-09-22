import type { Metadata, Viewport } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  fallback: ["Arial", "Helvetica", "sans-serif"],
  adjustFontFallback: false,
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qath.eu"),
  alternates: { canonical: "/" },
  title: "European Transport Intelligence",
  description: "A new perspective on European transport is on its way.",
  applicationName: "qath",
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
    <html
      lang="en"
      className={`${googleSansFlex.className} h-full`}
    >
      <body>{children}</body>
    </html>
  );
}
