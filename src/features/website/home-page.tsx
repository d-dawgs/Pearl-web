import { DestinationCards } from "./destination-cards";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { inactiveDescriptionId, newsletterDescriptionId } from "./site-content";
import styles from "./home-page.module.css";

export function HomePage() {
  return (
    <>
      <p id={inactiveDescriptionId} className="sr-only">This destination is not connected yet.</p>
      <SiteHeader />
      <main>
        <section className={styles.hero} aria-label="Future Pearl Island video">
          <svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="8" width="18" height="12" rx="1" />
            <path d="M3 8V5a2 2 0 0 1 2-2h16v5M7 3l3 5m4-5 3 5M3 12h18" />
          </svg>
          <span>Video placeholder</span>
        </section>
        <section className={styles.welcome}>
          <h1>Welcome to Pearl Island</h1>
          <p>Pearl Island serves Caribbean food in Charlottesville. Explore our carryout, catering, and the story behind it.</p>
          <button type="button" className={styles.orderButton} aria-disabled="true" aria-describedby={inactiveDescriptionId}>Order Now</button>
        </section>
        <DestinationCards />
        <section className={styles.newsletter} aria-labelledby="newsletter-heading">
          <h2 id="newsletter-heading">Stay in the loop</h2>
          <p>Pearl Island updates</p>
          <p id={newsletterDescriptionId} className="sr-only">Newsletter signup is not connected yet.</p>
          <div className={styles.signup}>
            <input type="email" aria-label="Email address" aria-describedby={newsletterDescriptionId} placeholder="Email address" disabled />
            <button type="button" disabled aria-describedby={newsletterDescriptionId}>Sign Up</button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
