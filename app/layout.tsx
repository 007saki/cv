import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sakiasi Baleiwai Komaidrakulu | Portfolio",
  description:
    "Portfolio of Sakiasi Baleiwai Komaidrakulu - Self-taught developer specializing in Python and JavaScript. Explore my projects, experience, and community work.",
  keywords: [
    "Sakiasi Baleiwai Komaidrakulu",
    "portfolio",
    "developer",
    "python",
    "Fiji javascript developer",
    "Fiji python developer",
    "Fiji software engineer",
    "Fiji web development",
    "Fiji IT developer",
    "Fiji Grid Electronics",
    "Fiji Police Force",
    "Fiji Western Union",
    "Fiji AusAID",
    "Fiji IT",
    "Fiji software engineer",
  ],
  authors: [{ name: "Sakiasi Baleiwai Komaidrakulu" }],
  creator: "Sakiasi Baleiwai Komaidrakulu",
  openGraph: {
    title: "Sakiasi Baleiwai Komaidrakulu | Portfolio",
    description:
      "Self-taught developer specializing in Python and JavaScript. Explore my projects, experience, and community work.",
    url: "https://sakiasi.site/",
    siteName: "Sakiasi Portfolio",
    images: [
      {
        url: "https://sakiasi-site.s3.ap-southeast-2.amazonaws.com/sakiasi+id+photo.JPG",
        width: 600,
        height: 600,
        alt: "Sakiasi Baleiwai Komaidrakulu Profile Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakiasi Baleiwai Komaidrakulu | Portfolio",
    description:
      "Self-taught developer specializing in Python and JavaScript. Explore my projects, experience, and community work.",
    images: [
      "https://sakiasi-site.s3.ap-southeast-2.amazonaws.com/sakiasi+id+photo.JPG",
    ],
    creator: "@007saki",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
