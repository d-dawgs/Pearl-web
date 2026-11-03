"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { externalLinks } from "@/features/website/site-content";
import { storyFacts, storyPhotos } from "./story-content";
import styles from "./our-story-page.module.css";

function StoryPhoto({ index }: { index: number }) {
  const photo = storyPhotos[index];
  return <div className={styles.photoFrame} data-story-photo role="img" aria-label={`${photo.label} (placeholder)`}>
    <div className={styles.photoLayer} data-story-layer>
      {photo.src
        ? <Image src={photo.src} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" className={styles.realPhoto} />
        : <div className={styles.photoPlaceholder} aria-hidden="true"><span>{photo.label}</span></div>}
    </div>
  </div>;
}

export function OurStoryPage() {
  const storyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const rows = [...(storyRef.current?.querySelectorAll<HTMLElement>("[data-story-row]") ?? [])];
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const viewport = innerHeight;
      for (const row of rows) {
        const text = row.querySelector<HTMLElement>("[data-story-text]");
        const photo = row.querySelector<HTMLElement>("[data-story-photo]");
        const layer = row.querySelector<HTMLElement>("[data-story-layer]");
        if (preference.matches) {
          text?.style.setProperty("--g", "1");
          layer?.style.setProperty("--photo-drift", "0%");
          continue;
        }
        const bounds = row.getBoundingClientRect();
        if (bounds.bottom < -bounds.height || bounds.top > viewport + bounds.height) continue;
        const raw = Math.max(0, Math.min(1, (.95 * viewport - bounds.top) / (.55 * viewport)));
        const growth = raw * raw * (3 - 2 * raw);
        text?.style.setProperty("--g", String(growth));
        if (photo && layer) {
          const frameBounds = photo.getBoundingClientRect();
          const frameCenterY = frameBounds.top + frameBounds.height / 2;
          const progress = Math.max(-1, Math.min(1, (frameCenterY - viewport / 2) / (viewport / 2 + frameBounds.height / 2)));
          layer.style.setProperty("--photo-drift", `${progress * -7}%`);
        }
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    schedule();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    preference.addEventListener("change", schedule);
    return () => {
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      preference.removeEventListener("change", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <>
    <section className={styles.story} ref={storyRef} aria-labelledby="story-heading">
      <div className={styles.container}>
        <p className={styles.eyebrow}>OUR STORY</p>
        <h1 id="story-heading">HAITIAN ROOTS, WHOLE CARIBBEAN.</h1>

        <div className={`${styles.storyRow} ${styles.rowA}`} data-story-row>
          <StoryPhoto index={0} />
          <div className={styles.storyText} data-story-text>
            <h2 className={styles.storyChild} data-reveal>A family-run business</h2>
            <p className={`${styles.bodyText} ${styles.storyChild}`} data-reveal>Pearl Island Catering is the vision of Sober Pierre, Founding Member and President of Pearl Island Foods: a company making Caribbean cuisine accessible through catering, Pearl Island 2Go and a packaged foods brand.</p>
            <p className={`${styles.facts} ${styles.storyChild}`} data-reveal>
              {storyFacts.map((fact, index) => <span key={fact}>{index > 0 && <span className={styles.factDiamond} aria-hidden="true" />}{fact}</span>)}
            </p>
          </div>
        </div>

        <div className={`${styles.storyRow} ${styles.rowB}`} data-story-row>
          <div className={styles.storyText} data-story-text>
            <p className={`${styles.lead} ${styles.storyChild}`} data-reveal>Pearl Island cooks Afro-Caribbean food with Haitian roots, right here in Charlottesville.</p>
            <p className={`${styles.bodyText} ${styles.storyChild}`} data-reveal>Everything comes out of the B.E.A.C.O.N. Shared Kitchen in Charlottesville.</p>
          </div>
          <StoryPhoto index={1} />
        </div>

        <div className={`${styles.storyRow} ${styles.rowC}`} data-story-row>
          <StoryPhoto index={2} />
          <div className={styles.storyText} data-story-text>
            <h2 className={styles.storyChild} data-reveal>Feeding Charlottesville</h2>
            <p className={`${styles.bodyText} ${styles.storyChild}`} data-reveal>Lunch goes out as Pearl Island 2Go, Tuesday through Friday, and the same kitchen caters weddings, corporate lunches, private events and family gatherings.</p>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.visitBand} data-reveal aria-label="Visit and order">
      <div className={styles.container}>
        <div><h2>Hours</h2><p>Tuesday–Friday<br />11 AM–3 PM</p></div>
        <div><h2>Pickup</h2><p>221 Carlton Rd Ste 1<br />Charlottesville</p></div>
        <div><h2>Call</h2><a className={styles.phoneLink} href="tel:+14344660092">(434) 466-0092</a></div>
        <div className={styles.actions}>
          <a className={`${styles.button} ${styles.mangoButton}`} href={externalLinks.orderUrl} target="_blank" rel="noopener noreferrer">Order Now<span className="sr-only"> (opens in a new tab)</span></a>
          <Link className={`${styles.button} ${styles.whiteButton}`} href="/catering">Plan catering</Link>
        </div>
      </div>
    </section>
  </>;
}
