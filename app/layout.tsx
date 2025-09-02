
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://solcray.art"),
  title: "Soluxe — We enjoy your money for you",
  description: "Too much money and not enough time? We specialize in enjoying it properly — so you don’t have to. BTC, ETH, SOL, TRX accepted.",
  openGraph: {
    title: "Soluxe — We enjoy your money for you",
    description: "Too much money and not enough time? We specialize in enjoying it properly — so you don’t have to.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluxe — We enjoy your money for you",
    description: "Too much money and not enough time? We specialize in enjoying it properly — so you don’t have to.",
    images: ["/og.png"],
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://videos.pexels.com" />
        <link rel="preconnect" href="https://api.qrserver.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
