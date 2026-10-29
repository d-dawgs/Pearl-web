"use client";

import { useEffect } from "react";

const revealThreshold = 0.18;

export function ScrollMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const heroPhoto = document.querySelector<HTMLElement>("[data-hero-photo]");
    const hero = heroPhoto?.closest<HTMLElement>("[data-hero]");
    const heroFade = hero?.querySelector<HTMLElement>("[data-hero-fade]");
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-reveal]"));
    let observer: IntersectionObserver | null = null;
    let driftFrame = 0;
    let replayFrame = 0;

    const updateFadeMask = () => {
      if (!hero || !heroFade) return;
      const layerHeight = Math.min(356, hero.clientHeight);
      const rampHeight = Math.max(0, Math.min(310, layerHeight - 46));
      const stops = Array.from({ length: 10 }, (_, index) => {
        const t = index / 9;
        const eased = t * t * (3 - 2 * t);
        const alpha = 0.08 * eased;
        const position = rampHeight * t;
        return `rgb(0 0 0 / ${index === 0 ? 0 : (alpha / 0.08).toFixed(4)}) ${position.toFixed(2)}px`;
      });
      const mask = `linear-gradient(to bottom, ${stops.join(", ")}, #000 ${layerHeight}px)`;
      heroFade.style.setProperty("-webkit-mask-image", mask);
      heroFade.style.setProperty("mask-image", mask);
    };

    const showEverything = () => {
      observer?.disconnect();
      root.removeAttribute("data-motion-ready");
      revealElements.forEach((element) => { element.dataset.revealed = "true"; });
      heroPhoto?.style.setProperty("--hero-drift-y", "0px");
    };

    const revealVisibleElements = () => {
      replayFrame = 0;
      revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const visibleWidth = Math.max(0, Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0));
        const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
        const area = Math.max(1, rect.width * rect.height);
        if ((visibleWidth * visibleHeight) / area >= revealThreshold) element.dataset.revealed = "true";
      });
    };

    const setMotionReady = () => {
      if (reducedMotion.matches || !("IntersectionObserver" in window)) {
        showEverything();
        return;
      }

      revealElements.forEach((element) => { delete element.dataset.revealed; });
      root.dataset.motionReady = "true";
      observer?.disconnect();
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.intersectionRatio >= revealThreshold) element.dataset.revealed = "true";
          else if (entry.intersectionRatio === 0) delete element.dataset.revealed;
        });
      }, { threshold: [0, revealThreshold] });
      revealElements.forEach((element) => observer?.observe(element));
    };

    const updateDrift = () => {
      driftFrame = 0;
      if (!hero || !heroPhoto || reducedMotion.matches) return;
      const bounds = hero.getBoundingClientRect();
      if (bounds.bottom > 0 && bounds.top < window.innerHeight) {
        const offset = (window.innerHeight / 2) - (bounds.top + bounds.height / 2);
        const drift = Math.max(-200, Math.min(200, offset * 0.2));
        heroPhoto.style.setProperty("--hero-drift-y", `${drift}px`);
      }
    };

    const scheduleDrift = () => {
      if (!driftFrame) driftFrame = window.requestAnimationFrame(updateDrift);
    };

    const onReplay = () => {
      if (reducedMotion.matches) {
        window.scrollTo(0, 0);
        showEverything();
        return;
      }
      if (replayFrame) window.cancelAnimationFrame(replayFrame);
      revealElements.forEach((element) => { delete element.dataset.revealed; });
      heroPhoto?.style.setProperty("--hero-drift-y", "0px");
      window.scrollTo(0, 0);
      revealElements.forEach((element) => { void getComputedStyle(element).opacity; });
      replayFrame = window.requestAnimationFrame(revealVisibleElements);
    };

    const onMotionPreferenceChange = () => {
      setMotionReady();
      if (reducedMotion.matches) {
        if (driftFrame) window.cancelAnimationFrame(driftFrame);
        driftFrame = 0;
        heroPhoto?.style.setProperty("--hero-drift-y", "0px");
      } else scheduleDrift();
    };

    setMotionReady();
    updateFadeMask();
    scheduleDrift();
    window.addEventListener("scroll", scheduleDrift, { passive: true });
    window.addEventListener("resize", updateFadeMask, { passive: true });
    window.addEventListener("resize", scheduleDrift, { passive: true });
    window.addEventListener("pearl:replay-intro", onReplay);
    reducedMotion.addEventListener("change", onMotionPreferenceChange);

    return () => {
      window.removeEventListener("scroll", scheduleDrift);
      window.removeEventListener("resize", updateFadeMask);
      window.removeEventListener("resize", scheduleDrift);
      window.removeEventListener("pearl:replay-intro", onReplay);
      reducedMotion.removeEventListener("change", onMotionPreferenceChange);
      observer?.disconnect();
      if (driftFrame) window.cancelAnimationFrame(driftFrame);
      if (replayFrame) window.cancelAnimationFrame(replayFrame);
      heroPhoto?.style.setProperty("--hero-drift-y", "0px");
    };
  }, []);

  return null;
}
