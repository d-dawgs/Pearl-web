"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./destination-cards.module.css";

const cards = ["Menu", "Catering", "Our Story"] as const;
const cardImages = {
  Menu: "/images/card-menu.jpg",
  Catering: "/images/card-catering.jpg",
  "Our Story": "/images/card-our-story.jpg",
} as const;

function DestinationCard({ title }: { title: (typeof cards)[number] }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const card = cardRef.current;
    if (!stage || !card) return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const current = [0, 0, 0, 0, 0];
    const target = [0, 0, 0, 0, 0];
    let frame = 0;
    let lastTime = 0;
    const canMove = () => finePointer.matches && !reducedMotion.matches;
    const paint = () => {
      card.style.transform = `perspective(1000px) rotateX(${current[0].toFixed(4)}deg) rotateY(${current[1].toFixed(4)}deg) translateY(${current[2].toFixed(4)}px)`;
      card.style.setProperty("--photo-drift-x", `${current[3].toFixed(4)}px`);
      card.style.setProperty("--photo-drift-y", `${current[4].toFixed(4)}px`);
    };
    const settle = (time: number) => {
      const dt = Math.min(.032, Math.max(.001, lastTime ? (time - lastTime) / 1000 : 1 / 60));
      lastTime = time;
      const alpha = 1 - Math.exp(-3 * dt / .4);
      let moving = false;
      for (let i = 0; i < current.length; i++) {
        current[i] += (target[i] - current[i]) * alpha;
        if (Math.abs(target[i] - current[i]) > .001) moving = true;
      }
      paint();
      if (moving && canMove()) frame = requestAnimationFrame(settle);
      else {
        for (let i = 0; i < current.length; i++) current[i] = target[i];
        paint();
        frame = 0;
        lastTime = 0;
        card.style.willChange = "auto";
      }
    };
    const start = () => {
      if (!frame) {
        card.style.willChange = "transform";
        frame = requestAnimationFrame(settle);
      }
    };
    const reset = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      current.fill(0);
      target.fill(0);
      card.style.willChange = "auto";
      paint();
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch" || !canMove()) return;
      const bounds = stage.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
      target[0] = -y * 4.5;
      target[1] = x * 4.5;
      target[2] = -2;
      target[3] = -x * 8;
      target[4] = -y * 8;
      start();
    };
    const leave = () => {
      target.fill(0);
      if (canMove()) start();
      else reset();
    };
    stage.addEventListener("pointerenter", move);
    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerleave", leave);
    stage.addEventListener("pointercancel", leave);
    reducedMotion.addEventListener("change", reset);
    finePointer.addEventListener("change", reset);
    return () => {
      stage.removeEventListener("pointerenter", move);
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerleave", leave);
      stage.removeEventListener("pointercancel", leave);
      reducedMotion.removeEventListener("change", reset);
      finePointer.removeEventListener("change", reset);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={stageRef} className={styles.stage}>
      <div className={styles.reveal} data-scroll-reveal data-reveal-delay={title === "Menu" ? "0" : title === "Catering" ? "130" : "260"}>
        <article ref={cardRef} className={styles.card}>
          <div className={styles.image} data-card={title}>
            <div className={styles.zoomFrame}>
              <Image
                src={cardImages[title]}
                alt=""
                fill
                sizes="(min-width: 900px) 33vw, 420px"
                className={styles.photo}
              />
            </div>
          </div>
          <h3 className={`${styles.title} ${title === "Our Story" ? styles.storyTitle : ""}`}>{title}</h3>
          {title === "Menu" && <Link className={styles.cardLink} href="/menu" aria-label="Menu" />}
        </article>
      </div>
    </div>
  );
}

export function DestinationCards() {
  return (
    <section className={styles.cards} aria-label="Explore Pearl Island">
      {cards.map((title) => <DestinationCard key={title} title={title} />)}
    </section>
  );
}
