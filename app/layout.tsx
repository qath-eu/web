import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  fallback: ["Arial", "Helvetica", "sans-serif"],
  adjustFontFallback: false,
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "European Transport Intelligence",
  description: "A new perspective on European transport is on its way.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${googleSansFlex.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
