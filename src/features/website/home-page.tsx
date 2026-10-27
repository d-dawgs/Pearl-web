import { DestinationCards } from "./destination-cards";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { inactiveDescriptionId, newsletterDescriptionId } from "./site-content";
import styles from "./home-page.module.css";
import Image from "next/image";

export function HomePage() {
  return (
    <>
      <p id={inactiveDescriptionId} className="sr-only">This destination is not connected yet.</p>
      <SiteHeader />
      <main>
        <section className={styles.hero}>
          <Image
            src="/images/hero-beach.jpg"
            alt="Palm-lined beach and turquoise water seen from above."
            fill
            sizes="100vw"
            preload
            className={styles.heroImage}
          />
        </section>
        <section className={styles.welcome}>
          <div className={styles.welcomeContent}>
            <h1>Welcome to Pearl Island</h1>
            <p>Pearl Island serves Caribbean food in Charlottesville. Explore our carryout, catering, and the story behind it.</p>
            <button type="button" className={styles.orderButton} aria-disabled="true" aria-describedby={inactiveDescriptionId}>Order Now</button>
          </div>
          <div className={styles.photoPlaceholder}>Photo placeholder</div>
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
