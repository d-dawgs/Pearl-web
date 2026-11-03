"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { externalLinks } from "@/features/website/site-content";
import { cateringPhotoSrc, questions, serviceStyles } from "./catering-content";
import styles from "./catering-page.module.css";

function BookingLink({ mango = false }: { mango?: boolean }) {
  return <a className={`${styles.button} ${mango ? styles.mangoButton : styles.blueButton}`} href={externalLinks.cateringUrl} target="_blank" rel="noopener noreferrer">Book catering<span className="sr-only"> (opens in a new tab)</span></a>;
}

export function CateringPage() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = heroRef.current;
      const photo = photoRef.current;
      if (preference.matches) {
        hero?.style.setProperty("--frame-drift", "0px");
        photo?.style.setProperty("--photo-drift", "0%");
        return;
      }
      const viewport = innerHeight;
      if (hero) {
        const bounds = hero.getBoundingClientRect();
        if (bounds.bottom > -bounds.height && bounds.top < viewport + bounds.height) {
          const parentCenterY = bounds.top + bounds.height / 2;
          const progress = (parentCenterY - viewport / 2) / viewport;
          hero.style.setProperty("--frame-drift", `${progress * -40}px`);
        }
      }
      if (photo) {
        const bounds = photo.getBoundingClientRect();
        if (bounds.bottom > -bounds.height && bounds.top < viewport + bounds.height) {
          const frameCenterY = bounds.top + bounds.height / 2;
          const progress = (frameCenterY - viewport / 2) / (viewport / 2 + bounds.height / 2);
          photo.style.setProperty("--photo-drift", `${progress * -18}%`);
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

  return <div className={styles.page}>
    <section className={styles.hero} aria-labelledby="catering-heading">
      <div className={styles.heroStack} ref={heroRef}>
        <div className={styles.backFrame} aria-hidden="true" />
        <div className={styles.frontCard}>
          <p className={styles.heroEyebrow} data-catering-intro="eyebrow">PEARL ISLAND</p>
          <h1 id="catering-heading" data-catering-intro="heading">CATERING</h1>
          <p className={styles.heroSubline} data-catering-intro="subline">Bring the flavor of the islands to your next event.</p>
          <div data-catering-intro="button"><BookingLink /></div>
        </div>
      </div>
    </section>

    <section className={styles.photoWindow} ref={photoRef} data-reveal aria-label="Catering photograph placeholder">
      <div className={styles.photoLayer}>
        {cateringPhotoSrc
          ? <Image src={cateringPhotoSrc} alt="Pearl Island catering" fill sizes="100vw" className={styles.cateringPhoto} />
          : <div className={styles.photoPlaceholder} aria-hidden="true"><span className={styles.photoLabel}>Catering photo</span></div>}
      </div>
    </section>

    <section className={styles.caterersPanel} data-reveal aria-labelledby="caterers-heading">
      <div className={styles.panelLeft}>
        <h2 id="caterers-heading">WE ARE CATERERS FOR ALL.</h2>
        <p>We take a hands-on approach to planning and take care of every detail, so you can sit back, relax and celebrate. Our menus are inspired by Caribbean comfort food and customized for you.</p>
        <a className={styles.pdfLink} href={externalLinks.specialEventsMenuUrl} target="_blank" rel="noopener noreferrer">View the Special Events Menu (PDF)<span className="sr-only"> (opens in a new tab)</span></a>
      </div>
      <div className={styles.panelDivider} aria-hidden="true" />
      <div className={styles.panelRight}>
        <p className={styles.panelLabel}>HOW WE SERVE</p>
        {serviceStyles.map((service) => <div className={styles.serviceRow} key={service.title}>
          <h3>{service.title}</h3><p>{service.description}</p>
        </div>)}
      </div>
    </section>

    <section className={styles.planBand} data-reveal aria-labelledby="plan-heading">
      <div className={styles.container}>
        <h2 id="plan-heading">READY TO PLAN YOUR EVENT?<span className={styles.planDot} aria-hidden="true" /></h2>
        <BookingLink mango />
      </div>
    </section>

    <section className={styles.questions} data-reveal aria-labelledby="questions-heading">
      <div className={styles.container}>
        <h2 id="questions-heading">CATERING QUESTIONS</h2>
        <div className={styles.questionColumns}>
          {questions.map((group, groupIndex) => <div className={styles.questionGroup} key={group.label}>
            <h3>{group.label}</h3>
            <div className={styles.cabinet}>
              {group.items.map((item, itemIndex) => {
                const id = `catering-answer-${groupIndex}-${itemIndex}`;
                const isOpen = openQuestion === id;
                return <div className={styles.drawer} data-open={isOpen} key={id}>
                  <button type="button" className={styles.drawerFront} aria-expanded={isOpen} aria-controls={id} onClick={() => setOpenQuestion(isOpen ? null : id)}>
                    <span className={styles.questionText}>
                      <span>{item.question}</span>
                      {"pending" in item && item.pending && <span className={styles.pendingTag}>NEEDS SOBER&apos;S ANSWER</span>}
                    </span>
                    <span className={styles.handle} aria-hidden="true" />
                  </button>
                  <div className={styles.answerGrid} id={id} role="region" aria-label={item.question} aria-hidden={!isOpen}>
                    <div className={styles.answerInner}><p>{item.answer}</p></div>
                  </div>
                </div>;
              })}
            </div>
          </div>)}
        </div>
      </div>
    </section>
  </div>;
}
