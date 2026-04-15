import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "microooo — 15 Micro-SaaS Tools. One Subscription.",
  description:
    "All the tools your business needs — group cards, feedback boards, social walls, onboarding, screenshots, legal pages, OG images, and more. One dashboard. One subscription. Zero complexity.",
  openGraph: {
    title: "microooo — 15 Micro-SaaS Tools. One Subscription.",
    description:
      "All the tools your business needs — group cards, feedback boards, social walls, onboarding, screenshots, legal pages, OG images, and more.",
    url: "https://microooo.com",
    siteName: "microooo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "microooo — 15 Micro-SaaS Tools. One Subscription.",
    description:
      "All the tools your business needs in one platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
