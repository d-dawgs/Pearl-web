import { footerContent, mobilePages, inactiveDescriptionId } from "./site-content";
import { SocialIcons } from "./social-icons";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.pages} aria-label="Footer pages">
        {mobilePages.map((page) => (
          <button key={page} type="button" aria-disabled="true" aria-describedby={inactiveDescriptionId}>{page}</button>
        ))}
      </nav>
      <SocialIcons className={styles.socials} buttonClassName={styles.socialButton} />
      <button type="button" className={styles.orderButton} aria-disabled="true" aria-describedby={inactiveDescriptionId}>Order Now</button>
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
        <div className={styles.contactDetails}>
          <p>{footerContent.phone}</p>
          <p>{footerContent.email}</p>
        </div>
      </section>
      <div className={styles.extras}>
        <button type="button" aria-disabled="true" aria-describedby={inactiveDescriptionId}>Gift Cards</button>
        <span aria-hidden="true">·</span>
        <button type="button" aria-disabled="true" aria-describedby={inactiveDescriptionId}>Apply Here</button>
      </div>
    </footer>
  );
}
