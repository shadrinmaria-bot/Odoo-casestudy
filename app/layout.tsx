import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { meta } from "@/lib/content";
import "./globals.css";

// The original site uses Wix Madefor (not on Google Fonts). Hanken
// Grotesk is the closest freely-available match — same geometric,
// slightly-rounded grotesque proportions — and drives both body and
// display. Swap here if you self-host the real Madefor files.
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
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
    <html lang="en" className={hanken.variable}>
      <body className="bg-panel font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
