import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pearl Island",
  description: "Pearl Island serves Caribbean food in Charlottesville.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="pearl-motion-paint-gate"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: "try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.dataset.motionReady='pending'}catch{}",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
