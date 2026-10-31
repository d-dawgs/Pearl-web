import type { Metadata } from "next";
import { SiteFooter } from "@/features/website/site-footer";
import { SiteHeader } from "@/features/website/site-header";
import { externalLinkDescriptionId, inactiveDescriptionId } from "@/features/website/site-content";
import styles from "@/features/website/blank-page.module.css";

export const metadata: Metadata = { title: "Our Story | Pearl Island" };

export default function OurStoryRoute() {
  return (
    <>
      <p id={inactiveDescriptionId} className="sr-only">This destination is not connected yet.</p>
      <p id={externalLinkDescriptionId} className="sr-only">(opens in a new tab)</p>
      <SiteHeader />
      <main className={styles.canvas}><h1 className="sr-only">Our Story</h1></main>
      <SiteFooter />
    </>
  );
}
