import Image from "next/image";
import Link from "next/link";
import { menuData } from "@/features/menu/menu-data";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { externalLinks, inactiveDescriptionId, reviews } from "./site-content";
import styles from "./home-page.module.css";

const previewPhotos: Record<string, string | null> = {
  platters: menuData.proteins[0].image ?? null,
  sides: menuData.sides[0].image ?? null,
  "family-style": null,
  salads: menuData.salads[0].image ?? null,
  drinks: menuData.drinks[0].image ?? null,
  "pearl-island-products": menuData.products[0].image ?? null,
  "wing-wednesdays": menuData.wingPhotos[0].image ?? null,
  oxtail: null,
};

function ExternalOrder({ className, children }: { className: string; children: React.ReactNode }) {
  return <a className={className} href={externalLinks.orderUrl} target="_blank" rel="noopener noreferrer">{children}<span className="sr-only"> (opens in a new tab)</span></a>;
}

export function HomePage() {
  return (
    <>
      <p id={inactiveDescriptionId} className="sr-only">This destination is not connected yet.</p>
      <SiteHeader />
      <main>
        <section className={styles.hero} data-home-hero aria-labelledby="home-heading">
          <div className={styles.wrap}>
            <div className={styles.heroText}>
              <p className={styles.heroEyebrow} data-intro="eyebrow">CARIBBEAN FLAVORS · CHARLOTTESVILLE</p>
              <h1 id="home-heading" data-intro="heading"><span>ISLAND</span><span>FLAVOR.</span></h1>
              <div className={styles.heroBar} data-intro="bar" aria-hidden="true" />
              <div className={styles.heroActions} data-intro="actions">
                <ExternalOrder className={styles.primaryButton}>Order Now</ExternalOrder>
                <Link className={styles.whiteButton} href="/catering">Plan catering</Link>
              </div>
            </div>
            <div className={styles.bowlEntry} data-intro="bowl">
              <Image className={styles.heroBowl} data-hero-bowl src="/images/menu/sous-poulet.png" alt="Sous poulet platter" width={1022} height={1090} sizes="(max-width: 700px) 80vw, 520px" preload />
            </div>
          </div>
        </section>

        <section className={styles.menuPreview} data-reveal aria-labelledby="home-menu-heading">
          <div className={styles.wrap}>
            <div className={styles.sectionHeadingRow}>
              <h2 id="home-menu-heading" className={styles.sectionHeading}>THE MENU</h2>
              <Link className={styles.outlineButton} href="/menu">Full menu</Link>
            </div>
            <div className={styles.categoryStrip}>
              {menuData.categories.map((category) => (
                <Link className={styles.categoryLink} key={category.id} href={"/menu?category=" + category.id}>
                  <span className={styles.categoryCircle}>
                    {previewPhotos[category.id]
                      ? <Image src={previewPhotos[category.id]!} alt="" fill sizes="140px" />
                      : <span className={styles.pendingPhoto} aria-hidden="true">PI</span>}
                  </span>
                  <span>{category.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.reviews} data-reviews aria-labelledby="reviews-heading">
          <div className={styles.wrap}>
            <div className={styles.sectionHeadingRow}>
              <h2 id="reviews-heading" className={styles.sectionHeading}>WHAT PEOPLE SAY</h2>
              <span className={styles.googleTag}><span className={styles.googleG} aria-hidden="true">G</span>Google reviews</span>
            </div>
            <div className={styles.reviewStack}>
              {[0, 1, 2, 3].map((setIndex) => (
                <div className={styles.reviewSet} data-review-set={setIndex} data-active={setIndex === 0 ? "true" : "false"} key={setIndex} aria-hidden={setIndex !== 0}>
                  {reviews.slice(setIndex * 3, setIndex * 3 + 3).map((review, index) => (
                    <figure className={styles.reviewCard} data-review-card={index} key={index}>
                      <span className={styles.reviewLine} aria-hidden="true" />
                      <div className={styles.stars} aria-label="Five stars">★★★★★</div>
                      <blockquote>{review.quote}</blockquote>
                      <figcaption>{review.name}</figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.duoSection} data-reveal aria-label="Order options">
          <div className={styles.wrap}>
            <div className={styles.duoGrid}>
              <article className={styles.carryoutCard}>
                <div className={styles.cardText}>
                  <p className={styles.cardEyebrow}>PEARL ISLAND 2GO</p>
                  <h2>LUNCH TO GO</h2>
                  <p>Jerk chicken, curry, plantains, pikliz and more. Tuesday–Friday, 11 AM–3 PM. Order ahead on Square.</p>
                  <ExternalOrder className={styles.primaryButton}>Order Now</ExternalOrder>
                </div>
                <Image className={styles.cardFood} src="/images/menu/jerk-chicken.png" alt="" width={1060} height={1165} sizes="(max-width: 700px) 65vw, 360px" />
              </article>
              <article className={styles.cateringCard}>
                <div className={styles.cardText}>
                  <p className={styles.cardEyebrow}>CATERING</p>
                  <h2>FEED THE CROWD</h2>
                  <p>Weddings, corporate lunches, private events and family gatherings.</p>
                  <Link className={styles.blueButton} href="/catering">Plan catering</Link>
                </div>
                <Image className={styles.cardFood} src="/images/menu/side-plantain-platter-6.png" alt="" width={980} height={736} sizes="(max-width: 700px) 65vw, 360px" />
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
