import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { meta } from "@/lib/content";
import "./globals.css";

// ASSUMPTION: the original uses Wix Madefor (not on Google Fonts).
// Inter (body) + Space Grotesk (display) approximate it; swap here if
// the real families differ.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
