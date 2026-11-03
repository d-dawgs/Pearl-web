import type { Metadata } from "next";
import { SiteFooter } from "@/features/website/site-footer";
import { SiteHeader } from "@/features/website/site-header";
import { externalLinkDescriptionId, inactiveDescriptionId } from "@/features/website/site-content";
import { MenuPage } from "@/features/menu/menu-page";

export const metadata: Metadata = { title: "Menu | Pearl Island" };

export default function MenuRoute() {
  return (
    <>
      <p id={inactiveDescriptionId} className="sr-only">This destination is not connected yet.</p>
      <p id={externalLinkDescriptionId} className="sr-only">(opens in a new tab)</p>
      <SiteHeader />
      <main><MenuPage /></main>
      <SiteFooter />
    </>
  );
}
