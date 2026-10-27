"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { desktopPages, inactiveDescriptionId, mobilePages } from "./site-content";
import { SocialIcons } from "./social-icons";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const navButtons = useRef<(HTMLButtonElement | null)[]>([]);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const placeIndicator = useCallback(() => {
    const nav = navRef.current;
    const indicator = indicatorRef.current;
    const button = navButtons.current[focused ?? hovered ?? 0];
    if (!nav || !indicator || !button) return;
    const navBox = nav.getBoundingClientRect();
    const textBox = button.querySelector("span")?.getBoundingClientRect();
    if (!textBox) return;
    indicator.style.width = `${textBox.width}px`;
    indicator.style.transform = `translateX(${textBox.left - navBox.left}px)`;
    indicator.dataset.ready = "true";
  }, [focused, hovered]);

  useLayoutEffect(() => {
    placeIndicator();
    window.addEventListener("resize", placeIndicator);
    return () => window.removeEventListener("resize", placeIndicator);
  }, [placeIndicator]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1100px)");
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const oldOverflow = document.body.style.overflow;
    const background = [document.querySelector("main"), document.querySelector("footer")].filter(
      (element): element is HTMLElement => element instanceof HTMLElement,
    );
    const previous = background.map((element) => element.inert);
    document.body.style.overflow = "hidden";
    background.forEach((element) => { element.inert = true; });
    overlayRef.current?.querySelector<HTMLButtonElement>("nav button")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key !== "Tab") return;
      const controls = [toggleRef.current, ...Array.from(overlayRef.current?.querySelectorAll<HTMLButtonElement>("button") ?? [])]
        .filter((control): control is HTMLButtonElement => Boolean(control));
      if (controls.length === 0) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = oldOverflow;
      background.forEach((element, index) => { element.inert = previous[index]; });
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <header className={`${styles.header} ${open ? styles.open : ""}`}>
      <nav
        ref={navRef}
        className={styles.desktopNav}
        aria-label="Website pages"
        onMouseLeave={() => setHovered(null)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setFocused(null);
        }}
      >
        {desktopPages.map((label, index) => (
          <button
            key={label}
            ref={(button) => { navButtons.current[index] = button; }}
            type="button"
            className={styles.navButton}
            aria-current={index === 0 ? "page" : undefined}
            aria-disabled="true"
            aria-describedby={inactiveDescriptionId}
            onMouseEnter={() => setHovered(index)}
            onFocus={() => setFocused(index)}
          >
            <span>{label}</span>
          </button>
        ))}
        <span ref={indicatorRef} className={styles.indicator} aria-hidden="true" />
      </nav>

      <div className={styles.wordmark}>PEARL ISLAND</div>

      <div className={styles.desktopActions}>
        <SocialIcons className={styles.socials} buttonClassName={styles.socialButton} />
        <button type="button" className={styles.orderButton} aria-disabled="true" aria-describedby={inactiveDescriptionId}>Order Now</button>
      </div>

      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-website-menu"
        onClick={() => open ? closeMenu() : setOpen(true)}
      >
        <span /><span />
      </button>

      <div
        ref={overlayRef}
        id="mobile-website-menu"
        className={styles.overlay}
        aria-hidden={!open}
        inert={!open}
      >
        <div className={styles.menuContent}>
          <nav className={styles.mobileNav} aria-label="Mobile website pages">
            {mobilePages.map((label, index) => (
              <button
                key={label}
                type="button"
                className={index === 0 ? styles.currentMobile : undefined}
                aria-current={index === 0 ? "page" : undefined}
                aria-disabled="true"
                aria-describedby={inactiveDescriptionId}
              >{label}</button>
            ))}
          </nav>
          <div className={styles.mobileBottom}>
            <SocialIcons className={styles.mobileSocials} buttonClassName={styles.socialButton} />
            <button type="button" className={styles.mobileOrder} aria-disabled="true" aria-describedby={inactiveDescriptionId}>Order Now</button>
          </div>
        </div>
      </div>
    </header>
  );
}
