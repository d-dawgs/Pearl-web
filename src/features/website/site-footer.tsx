import { mobilePages, inactiveDescriptionId } from "./site-content";
import { SocialIcons } from "./social-icons";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.pages} aria-label="Footer pages">
        {mobilePages.filter((page) => page !== "Pearl Island 2 Go").map((page) => (
          <button key={page} type="button" aria-disabled="true" aria-describedby={inactiveDescriptionId}>{page}</button>
        ))}
      </nav>
      <div className={styles.column}>
        <h2>Location</h2>
        <div className={styles.placeholder} aria-hidden="true" />
        <div className={`${styles.placeholder} ${styles.short}`} aria-hidden="true" />
        <button type="button" className={styles.extra} aria-disabled="true" aria-describedby={inactiveDescriptionId}>Pearl Island 2 Go</button>
      </div>
      <div className={styles.column}>
        <h2>Contact</h2>
        <div className={styles.placeholder} aria-hidden="true" />
        <SocialIcons className={styles.socials} buttonClassName={styles.socialButton} />
        <div className={styles.extras}>
          <button type="button" aria-disabled="true" aria-describedby={inactiveDescriptionId}>Gift Cards</button>
          <span aria-hidden="true">·</span>
          <button type="button" aria-disabled="true" aria-describedby={inactiveDescriptionId}>Apply Here</button>
        </div>
      </div>
    </footer>
  );
}
