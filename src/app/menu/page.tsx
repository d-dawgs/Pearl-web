import type { Metadata } from "next";
import { SiteFooter } from "@/features/website/site-footer";
import { SiteHeader } from "@/features/website/site-header";
import { externalLinkDescriptionId, inactiveDescriptionId } from "@/features/website/site-content";
import styles from "@/features/website/menu-page.module.css";

export const metadata: Metadata = { title: "Menu | Pearl Island" };

export default function MenuPage() {
  return (
    <>
      <p id={inactiveDescriptionId} className="sr-only">This destination is not connected yet.</p>
      <p id={externalLinkDescriptionId} className="sr-only">(opens in a new tab)</p>
      <SiteHeader />
      <main className={styles.menuPage}>
        <h1 className="sr-only">Menu</h1>
      </main>
      <SiteFooter />
    </>
  );
}
