"use client";

import { Literata, Lora } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { externalLinkDescriptionId, footerContent, footerPages, externalLinks, inactiveDescriptionId } from "./site-content";
import styles from "./site-footer.module.css";

const footerDisplayFont = Lora({ weight: "600", subsets: ["latin"], display: "swap", fallback: ["Georgia", "Times New Roman", "serif"], variable: "--footer-display-font" });
const footerTextFont = Literata({ weight: ["400", "500"], subsets: ["latin"], display: "swap", fallback: ["Georgia", "Times New Roman", "serif"], variable: "--footer-text-font" });

const instagramPath = "M46.91 25.816c-.073-1.597-.326-2.687-.697-3.641-.383-.986-.896-1.823-1.73-2.657-.834-.834-1.67-1.347-2.657-1.73-.954-.371-2.045-.624-3.641-.697C36.585 17.017 36.074 17 32 17s-4.585.017-6.184.09c-1.597.073-2.687.326-3.641.697-.986.383-1.823.896-2.657 1.73-.834.834-1.347 1.67-1.73 2.657-.371.954-.624 2.045-.697 3.641C17.017 27.415 17 27.926 17 32s.017 4.585.09 6.184c.073 1.597.326 2.687.697 3.641.383.986.896 1.823 1.73 2.657.834.834 1.67 1.347 2.657 1.73.954.371 2.045.624 3.641.697C27.415 46.983 27.926 47 32 47s4.585-.017 6.184-.09c1.597-.073 2.687-.326 3.641-.697.986-.383 1.823-.896 2.657-1.73.834-.834 1.347-1.67 1.73-2.657.371-.954.624-2.045.697-3.641C46.983 36.585 47 36.074 47 32s-.017-4.585-.09-6.184Zm-2.7 12.245c-.067 1.462-.311 2.257-.516 2.785-.272.7-.597 1.2-1.122 1.725-.525.525-1.025.85-1.725 1.122-.529.205-1.323.45-2.785.516-1.581.072-2.056.087-6.061.087s-4.48-.015-6.061-.087c-1.462-.067-2.257-.311-2.785-.516-.7-.272-1.2-.597-1.725-1.122-.525-.525-.85-1.025-1.122-1.725-.205-.529-.45-1.323-.516-2.785-.072-1.582-.087-2.056-.087-6.061s.015-4.48.087-6.061c.067-1.462.311-2.257.516-2.785.272-.7.597-1.2 1.122-1.725.525-.525 1.025-.85 1.725-1.122.529-.205 1.323-.45 2.785-.516 1.582-.072 2.056-.087 6.061-.087s4.48.015 6.061.087c1.462.067 2.257.311 2.785.516.7.272 1.2.597 1.725 1.122.525.525.85 1.025 1.122 1.725.205.529.45 1.323.516 2.785.072 1.582.087 2.056.087 6.061s-.015 4.48-.087 6.061ZM32 24.297c-4.254 0-7.703 3.449-7.703 7.703s3.449 7.703 7.703 7.703 7.703-3.449 7.703-7.703-3.449-7.703-7.703-7.703ZM32 37c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5Zm8.007-14.807c-.994 0-1.8.806-1.8 1.8s.806 1.8 1.8 1.8 1.8-.806 1.8-1.8-.806-1.8-1.8-1.8Z";
const facebookPath = "M34.1 47V33.3h4.6l.7-5.3h-5.3v-3.4c0-1.5.4-2.6 2.6-2.6h2.8v-4.8c-.5-.1-2.2-.2-4.1-.2-4.1 0-6.9 2.5-6.9 7V28H24v5.3h4.6V47h5.5Z";

function SocialLinks({ className, linkClassName }: { className: string; linkClassName: string }) {
  return (
    <div className={className} aria-label="Social media">
      <a className={linkClassName} href={externalLinks.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Pearl Island on Instagram" aria-describedby={externalLinkDescriptionId}>
        <svg viewBox="17 17 30 30" width="23" height="23" fill="currentColor" aria-hidden="true"><path d={instagramPath} /></svg>
      </a>
      <a className={linkClassName} href={externalLinks.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Pearl Island on Facebook" aria-describedby={externalLinkDescriptionId}>
        <svg viewBox="17 17 30 30" width="23" height="23" fill="currentColor" aria-hidden="true"><path d={facebookPath} /></svg>
      </a>
    </div>
  );
}

export function SiteFooter() {
  const pathname = usePathname();
  const replayHome = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    event.preventDefault();
    window.dispatchEvent(new Event("pearl:replay-intro"));
  };
  return (
    <footer className={`${styles.footer} ${footerDisplayFont.variable} ${footerTextFont.variable}`}>
      <nav className={styles.pages} aria-label="Footer pages">
        {footerPages.map((page) => page === "Home" || page === "Menu" ? (
          <Link key={page} href={page === "Home" ? "/" : "/menu"} onClick={page === "Home" ? replayHome : undefined}>{page}</Link>
        ) : (
          <button key={page} type="button" aria-disabled="true" aria-describedby={inactiveDescriptionId}>{page}</button>
        ))}
      </nav>
      <a href={externalLinks.orderUrl} target="_blank" rel="noopener noreferrer" className={styles.orderButton} aria-describedby={externalLinkDescriptionId}>Order Now</a>
      <section className={`${styles.column} ${styles.location}`} aria-labelledby="footer-location-heading">
        <h2 id="footer-location-heading">Location</h2>
        <address>
          <span className={styles.locationName}>{footerContent.locationName}</span>
          <span>{footerContent.addressLine1}</span>
          <span>{footerContent.addressLine2}</span>
        </address>
      </section>
      <section className={`${styles.column} ${styles.contact}`} aria-labelledby="footer-contact-heading">
        <h2 id="footer-contact-heading">Contact</h2>
        <div className={styles.contactDetails}><p>{footerContent.phone}</p><p>{footerContent.email}</p></div>
      </section>
      <div className={styles.contactBottomRow}>
        <SocialLinks className={styles.socials} linkClassName={styles.socialButton} />
        <div className={styles.extras}>
          <a href={externalLinks.giftCardsUrl} target="_blank" rel="noopener noreferrer" aria-describedby={externalLinkDescriptionId}>Gift Cards</a>
          <span aria-hidden="true">·</span>
          <a href={externalLinks.applyUrl} target="_blank" rel="noopener noreferrer" aria-describedby={externalLinkDescriptionId}>Apply Here</a>
        </div>
      </div>
    </footer>
  );
}
