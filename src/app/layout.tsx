import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "J O C L A R I F — Cinematic Hospitality Ecosystem | Strategic Proposal",
  description:
    "A visionary luxury digital hospitality proposal for Joclarif Hotel, Zaria, Nigeria. Unifying guest web, mobile services, conversational booking, and central hotel operations.",
  keywords: [
    "Joclarif Hotel",
    "Luxury Hospitality Ecosystem",
    "Hotel Digital Transformation",
    "Zaria Hotels",
    "Hospitality Technology",
    "Hotel Management System",
  ],
  authors: [{ name: "Digital Hospitality Architecture Team" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0D0804] text-[#F7F1E6] min-h-screen antialiased selection:bg-[#F5B841] selection:text-[#0D0804]">
        {/* Film grain texture */}
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
