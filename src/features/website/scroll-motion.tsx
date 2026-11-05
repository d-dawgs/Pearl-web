"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hero = document.querySelector<HTMLElement>("[data-home-hero]");
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    const reveals = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    const reviews = document.querySelector<HTMLElement>("[data-reviews]");
    const reviewSets = [...(reviews?.querySelectorAll<HTMLElement>("[data-review-set]") ?? [])];
    let frame = 0;
    let reviewTimer: ReturnType<typeof setInterval> | undefined;
    let reviewIndex = 0;
    let lastScrollY = window.scrollY;
    let upwardTravel = 0;
    let downwardTravel = 0;

    const rotateReviews = () => {
      reviewIndex = (reviewIndex + 1) % reviewSets.length;
      reviewSets.forEach((set, index) => {
        const active = index === reviewIndex;
        set.dataset.active = String(active);
        set.setAttribute("aria-hidden", String(!active));
      });
    };

    const update = () => {
      frame = 0;
      const scrollY = Math.max(0, window.scrollY);
      const distance = scrollY - lastScrollY;
      lastScrollY = scrollY;
      if (scrollY <= 16) {
        upwardTravel = 0;
        downwardTravel = 0;
        header?.removeAttribute("data-hidden");
      } else if (distance < -2) {
        upwardTravel += -distance;
        downwardTravel = 0;
        if (upwardTravel >= 145) header?.removeAttribute("data-hidden");
      } else if (distance > 2) {
        downwardTravel += distance;
        upwardTravel = 0;
        if (scrollY > 160 && downwardTravel >= 12) header?.setAttribute("data-hidden", "true");
      }
      if (preference.matches) return;
      const viewport = window.innerHeight;
      reveals.forEach((element) => {
        if (!element.classList.contains("is-in") && element.getBoundingClientRect().top < viewport * .9) element.classList.add("is-in");
      });
      if (reviews && !reviews.classList.contains("is-in") && reviews.getBoundingClientRect().top < viewport * .9) {
        reviews.classList.add("is-in");
        if (reviewSets.length) reviewTimer = setInterval(rotateReviews, 9000);
      }
      if (hero) {
        const heroTop = hero.getBoundingClientRect().top + window.scrollY;
        const start = Math.max(0, heroTop - .25 * viewport);
        const progress = Math.max(0, Math.min(1, (window.scrollY - start) / Math.max(1, .7 * hero.offsetHeight)));
        hero.style.setProperty("--sp", String(progress));
      }
    };

    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const onPreference = () => {
      lastScrollY = window.scrollY;
      upwardTravel = 0;
      downwardTravel = 0;
      if (preference.matches) {
        root.removeAttribute("data-motion-ready");
        reveals.forEach((element) => element.classList.add("is-in"));
        reviews?.classList.add("is-in");
        hero?.style.setProperty("--sp", "0");
        if (reviewTimer) clearInterval(reviewTimer);
        reviewTimer = undefined;
        reviewIndex = 0;
        reviewSets.forEach((set, index) => {
          set.dataset.active = String(index === 0);
          set.setAttribute("aria-hidden", String(index !== 0));
        });
      } else {
        root.dataset.motionReady = "true";
        schedule();
      }
    };

    onPreference();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", onPreference);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", onPreference);
      if (frame) cancelAnimationFrame(frame);
      if (reviewTimer) clearInterval(reviewTimer);
      hero?.style.removeProperty("--sp");
    };
  }, [pathname]);

  return null;
}
