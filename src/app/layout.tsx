import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { Anton, DM_Serif_Display, Inter, Oswald } from "next/font/google";
import "./globals.css";
import { ScrollMotion } from "@/features/website/scroll-motion";

const display = Oswald({ weight: ["500", "700"], subsets: ["latin"], display: "swap", variable: "--font-display" });
const body = Inter({ weight: ["400", "600", "700", "800"], subsets: ["latin"], display: "swap", variable: "--font-body" });
const serif = DM_Serif_Display({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], display: "swap", variable: "--font-serif" });
const wordmark = Anton({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-wordmark" });

export const metadata: Metadata = {
  title: "Pearl Island",
  description: "Pearl Island serves Caribbean food in Charlottesville.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} ${serif.variable} ${wordmark.variable}`}>
      <head>
        <Script
          id="pearl-motion-paint-gate"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: "try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.dataset.motionReady='pending'}catch{}",
          }}
        />
      </head>
      <body><ScrollMotion />{children}</body>
    </html>
  );
}
