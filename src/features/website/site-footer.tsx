import Link from "next/link";
import { externalLinks, footerContent } from "./site-content";
import { SocialLinks } from "./social-links";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.brand} data-reveal>
            <Link className={styles.wordmark} href="/">PEARL ISLAND</Link>
            <p className={styles.tagline}>CATERING · 2GO</p>
            <a className={styles.orderButton} href={externalLinks.orderUrl} target="_blank" rel="noopener noreferrer">Order Now<span className="sr-only"> (opens in a new tab)</span></a>
          </div>
          <div className={styles.column} data-reveal>
            <h2>Visit</h2>
            <address><span>{footerContent.locationName}</span><span>{footerContent.addressLine1}</span><span>{footerContent.addressLine2}</span></address>
          </div>
          <div className={styles.column} data-reveal>
            <h2>Hours &amp; contact</h2>
            <p>Tue–Fri · 11 AM–3 PM</p>
            <a href="tel:+14344660092">{footerContent.phone}</a>
            <a href={"mailto:" + footerContent.email}>{footerContent.email}</a>
          </div>
          <div className={styles.column} data-reveal>
            <h2>Follow</h2>
            <SocialLinks className={styles.socials} />
            <p className={styles.extraLinks}>
              <a href={externalLinks.giftCardsUrl} target="_blank" rel="noopener noreferrer">Gift cards<span className="sr-only"> (opens in a new tab)</span></a>
              <span aria-hidden="true"> · </span>
              <a href={externalLinks.applyUrl} target="_blank" rel="noopener noreferrer">Apply here<span className="sr-only"> (opens in a new tab)</span></a>
            </p>
          </div>
        </div>
        <div className={styles.legal}>© 2026 Pearl Island Catering</div>
      </div>
    </footer>
  );
}
