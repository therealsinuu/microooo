import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "microooo — Products by Sinan",
  description:
    "A collection of standalone micro-SaaS products built by Sinan — group cards, feedback boards, social walls, onboarding, screenshots, legal pages, OG images, and more.",
  openGraph: {
    title: "microooo — Products by Sinan",
    description:
      "A collection of standalone micro-SaaS products built by Sinan — group cards, feedback boards, social walls, onboarding, screenshots, legal pages, OG images, and more.",
    url: "https://microooo.com",
    siteName: "microooo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "microooo — Products by Sinan",
    description:
      "A collection of standalone micro-SaaS products built by Sinan.",
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
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
