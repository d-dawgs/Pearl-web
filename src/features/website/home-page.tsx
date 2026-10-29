import { DestinationCards } from "./destination-cards";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { externalLinkDescriptionId, externalLinks, inactiveDescriptionId, newsletterDescriptionId } from "./site-content";
import styles from "./home-page.module.css";
import Image from "next/image";
import { ScrollMotion } from "./scroll-motion";

const wavePath = Array.from({ length: 161 }, (_, index) => {
  const t = index / 160;
  const x = 1440 * t;
  const y = 94 - 20 * Math.sin(2 * Math.PI * 2.5 * t + 0.6) * (0.85 + 0.15 * Math.cos(2 * Math.PI * t));
  return `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
}).join(" ") + " L1440 120 L0 120 Z";

export function HomePage() {
  return (
    <>
      <p id={inactiveDescriptionId} className="sr-only">This destination is not connected yet.</p>
      <p id={externalLinkDescriptionId} className="sr-only">(opens in a new tab)</p>
      <SiteHeader />
      <ScrollMotion />
      <main>
        <section className={styles.welcome}>
          <div className={styles.welcomeContent} data-scroll-reveal data-reveal-delay="0">
            <h1>Welcome to Pearl Island</h1>
            <p>Bring a little Caribbean flavor to your day. Pearl Island serves Charlottesville with island-inspired cooking, easy carryout, and catering for gatherings. Explore the menu, plan a meal to share, and get to know the story behind Pearl Island.</p>
            <a href={externalLinks.orderUrl} target="_blank" rel="noopener noreferrer" className={styles.orderButton} aria-describedby={externalLinkDescriptionId}>Order Now</a>
          </div>
          <div className={styles.welcomePhotoReveal} data-scroll-reveal data-reveal-delay="150">
            <div className={styles.welcomePhoto}>
              <div className={styles.welcomeZoomFrame}>
                <Image
                  src="/images/welcome-kitchen.jpg"
                  alt="A Pearl Island cook slicing seasoned chicken on a cutting board in the kitchen"
                  fill
                  sizes="(min-width: 900px) 46vw, 100vw"
                  preload
                  className={styles.welcomeImage}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.hero} data-hero>
          <svg className={styles.heroWaveTop} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
            <path d={wavePath} />
          </svg>
          <div className={styles.heroPhoto} data-hero-photo>
            <Image
              src="/images/hero-beach.jpg"
              alt="Palm-lined beach and turquoise water seen from above."
              fill
              sizes="100vw"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.heroEdgeTop} aria-hidden="true" />
          <div className={styles.heroEdgeBottom} aria-hidden="true" />
          <div className={styles.heroFade} data-hero-fade aria-hidden="true" />
          <svg className={styles.heroWave} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
            <path d={wavePath} />
          </svg>
        </section>
        <DestinationCards />
        <section className={styles.newsletter} aria-labelledby="newsletter-heading">
          <div className={styles.newsletterContent} data-scroll-reveal data-reveal-delay="0">
            <h2 id="newsletter-heading">Stay in the loop</h2>
            <p>Pearl Island updates</p>
            <p id={newsletterDescriptionId} className="sr-only">Newsletter signup is not connected yet.</p>
            <div className={styles.signup}>
              <input type="email" aria-label="Email address" aria-describedby={newsletterDescriptionId} placeholder="Email address" disabled />
              <button type="button" disabled aria-describedby={newsletterDescriptionId}>Sign Up</button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
