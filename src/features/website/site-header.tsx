"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { desktopPages, externalLinkDescriptionId, externalLinks, inactiveDescriptionId, mobilePages } from "./site-content";
import styles from "./site-header.module.css";

const instagramPath = "M46.91 25.816c-.073-1.597-.326-2.687-.697-3.641-.383-.986-.896-1.823-1.73-2.657-.834-.834-1.67-1.347-2.657-1.73-.954-.371-2.045-.624-3.641-.697C36.585 17.017 36.074 17 32 17s-4.585.017-6.184.09c-1.597.073-2.687.326-3.641.697-.986.383-1.823.896-2.657 1.73-.834.834-1.347 1.67-1.73 2.657-.371.954-.624 2.045-.697 3.641C17.017 27.415 17 27.926 17 32s.017 4.585.09 6.184c.073 1.597.326 2.687.697 3.641.383.986.896 1.823 1.73 2.657.834.834 1.67 1.347 2.657 1.73.954.371 2.045.624 3.641.697C27.415 46.983 27.926 47 32 47s4.585-.017 6.184-.09c1.597-.073 2.687-.326 3.641-.697.986-.383 1.823-.896 2.657-1.73.834-.834 1.347-1.67 1.73-2.657.371-.954.624-2.045.697-3.641C46.983 36.585 47 36.074 47 32s-.017-4.585-.09-6.184Zm-2.7 12.245c-.067 1.462-.311 2.257-.516 2.785-.272.7-.597 1.2-1.122 1.725-.525.525-1.025.85-1.725 1.122-.529.205-1.323.45-2.785.516-1.581.072-2.056.087-6.061.087s-4.48-.015-6.061-.087c-1.462-.067-2.257-.311-2.785-.516-.7-.272-1.2-.597-1.725-1.122-.525-.525-.85-1.025-1.122-1.725-.205-.529-.45-1.323-.516-2.785-.072-1.582-.087-2.056-.087-6.061s.015-4.48.087-6.061c.067-1.462.311-2.257.516-2.785.272-.7.597-1.2 1.122-1.725.525-.525 1.025-.85 1.725-1.122.529-.205 1.323-.45 2.785-.516 1.582-.072 2.056-.087 6.061-.087s4.48.015 6.061.087c1.462.067 2.257.311 2.785.516.7.272 1.2.597 1.725 1.122.525.525.85 1.025 1.122 1.725.205.529.45 1.323.516 2.785.072 1.582.087 2.056.087 6.061s-.015 4.48-.087 6.061ZM32 24.297c-4.254 0-7.703 3.449-7.703 7.703s3.449 7.703 7.703 7.703 7.703-3.449 7.703-7.703-3.449-7.703-7.703-7.703ZM32 37c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5Zm8.007-14.807c-.994 0-1.8.806-1.8 1.8s.806 1.8 1.8 1.8 1.8-.806 1.8-1.8-.806-1.8-1.8-1.8Z";
const facebookPath = "M34.1 47V33.3h4.6l.7-5.3h-5.3v-3.4c0-1.5.4-2.6 2.6-2.6h2.8v-4.8c-.5-.1-2.2-.2-4.1-.2-4.1 0-6.9 2.5-6.9 7V28H24v5.3h4.6V47h5.5Z";

function SocialLinks({ className, linkClassName, onClick }: { className: string; linkClassName: string; onClick?: () => void }) {
  return (
    <div className={className} aria-label="Social media">
      <a className={linkClassName} href={externalLinks.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Pearl Island on Instagram" aria-describedby={externalLinkDescriptionId} onClick={onClick}>
        <svg viewBox="17 17 30 30" width="23" height="23" fill="currentColor" aria-hidden="true"><path d={instagramPath} /></svg>
      </a>
      <a className={linkClassName} href={externalLinks.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Pearl Island on Facebook" aria-describedby={externalLinkDescriptionId} onClick={onClick}>
        <svg viewBox="17 17 30 30" width="23" height="23" fill="currentColor" aria-hidden="true"><path d={facebookPath} /></svg>
      </a>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const currentPage = pathname === "/menu" ? "Menu" : pathname === "/" ? "Home" : null;
  const currentIndex = currentPage ? desktopPages.indexOf(currentPage) : 0;
  const [hovered, setHovered] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [scrollMode, setScrollMode] = useState<"flow" | "focus-flow" | "pinned" | "hidden">("flow");
  const [scrollProgress, setScrollProgress] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const navButtons = useRef<(HTMLElement | null)[]>([]);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollModeRef = useRef<"flow" | "focus-flow" | "pinned" | "hidden">("flow");
  const focusWithinRef = useRef(false);
  const openRef = useRef(false);
  const modeBeforeFocusRef = useRef<"flow" | "focus-flow" | "pinned" | "hidden">("flow");
  const lastYRef = useRef(0);
  const upwardDistanceRef = useRef(0);

  const changeScrollMode = useCallback((next: "flow" | "focus-flow" | "pinned" | "hidden") => {
    scrollModeRef.current = next;
    setScrollMode((current) => current === next ? current : next);
  }, []);

  const setMenuOpen = useCallback((next: boolean) => {
    openRef.current = next;
    setOpen(next);
    if (next) changeScrollMode(window.scrollY >= 140 ? "pinned" : "focus-flow");
  }, [changeScrollMode]);

  const placeIndicator = useCallback(() => {
    const nav = navRef.current;
    const indicator = indicatorRef.current;
    const item = navButtons.current[focused ?? hovered ?? currentIndex];
    if (!nav || !indicator || !item) return;
    const navBox = nav.getBoundingClientRect();
    const textBox = item.querySelector("span")?.getBoundingClientRect();
    if (!textBox) return;
    indicator.style.transform = `translateX(${textBox.left - navBox.left}px) scaleX(${textBox.width})`;
    indicator.dataset.ready = "true";
  }, [focused, hovered, currentIndex]);

  useLayoutEffect(() => {
    placeIndicator();
    window.addEventListener("resize", placeIndicator);
    return () => window.removeEventListener("resize", placeIndicator);
  }, [placeIndicator]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1100px)");
    const onChange = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, [setMenuOpen]);

  useEffect(() => {
    let frame = 0;
    let resizePending = false;
    const applyPosition = (trackDirection: boolean) => {
      const y = window.scrollY;
      setScrollProgress(Math.min(y / 140, 1));
      if (y < 140) {
        upwardDistanceRef.current = 0;
        changeScrollMode(focusWithinRef.current || openRef.current ? "focus-flow" : "flow");
      } else if (focusWithinRef.current || openRef.current) {
        upwardDistanceRef.current = 0;
        changeScrollMode("pinned");
      } else if (trackDirection) {
        const delta = y - lastYRef.current;
        if (delta > 0) { upwardDistanceRef.current = 0; changeScrollMode("hidden"); }
        else if (delta < 0) {
          upwardDistanceRef.current += -delta;
          if (upwardDistanceRef.current >= 8) changeScrollMode("pinned");
        } else if (scrollModeRef.current === "flow" || scrollModeRef.current === "focus-flow") changeScrollMode("hidden");
      } else if (scrollModeRef.current !== "pinned") changeScrollMode("hidden");
      lastYRef.current = y;
    };
    const schedule = (trackDirection: boolean) => {
      if (!trackDirection) resizePending = true;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const resized = resizePending;
        resizePending = false;
        applyPosition(trackDirection && !resized);
      });
    };
    lastYRef.current = window.scrollY;
    applyPosition(false);
    if (window.scrollY >= 140 && !focusWithinRef.current) changeScrollMode("hidden");
    const onScroll = () => schedule(true);
    const onResize = () => schedule(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [changeScrollMode]);

  useEffect(() => {
    if (!open) return;
    const oldOverflow = document.body.style.overflow;
    const background = [document.querySelector("main"), document.querySelector("footer")].filter(
      (element): element is HTMLElement => element instanceof HTMLElement,
    );
    const previous = background.map((element) => element.inert);
    document.body.style.overflow = "hidden";
    background.forEach((element) => { element.inert = true; });
    overlayRef.current?.querySelector<HTMLElement>("nav a, nav button")?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key !== "Tab") return;
      const controls = [toggleRef.current, ...Array.from(overlayRef.current?.querySelectorAll<HTMLElement>("a, button") ?? [])]
        .filter((control): control is HTMLElement => Boolean(control));
      if (controls.length === 0) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = oldOverflow;
      background.forEach((element, index) => { element.inert = previous[index]; });
    };
  }, [open, setMenuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  };

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    event.preventDefault();
    window.dispatchEvent(new Event("pearl:replay-intro"));
  };

  const renderPageLink = (label: (typeof mobilePages)[number], index: number, mobile = false) => {
    const isCurrent = label === currentPage;
    const className = mobile ? (isCurrent ? styles.currentMobile : undefined) : styles.navButton;
    const handleClick = label === "Home" ? handleHomeClick : undefined;
    if (label === "Home" || label === "Menu") {
      return (
        <Link
          key={`${mobile ? "mobile" : "desktop"}-${label}`}
          ref={(element) => { if (!mobile) navButtons.current[index] = element; }}
          href={label === "Home" ? "/" : "/menu"}
          className={className}
          aria-current={isCurrent ? "page" : undefined}
          onClick={(event) => { handleClick?.(event); if (mobile) closeMenu(); }}
          onMouseEnter={mobile ? undefined : () => setHovered(index)}
          onFocus={mobile ? undefined : () => setFocused(index)}
        ><span>{label}</span></Link>
      );
    }
    return (
      <button
        key={`${mobile ? "mobile" : "desktop"}-${label}`}
        ref={(element) => { if (!mobile) navButtons.current[index] = element; }}
        type="button"
        className={className}
        aria-disabled="true"
        aria-describedby={inactiveDescriptionId}
        onMouseEnter={mobile ? undefined : () => setHovered(index)}
        onFocus={mobile ? undefined : () => setFocused(index)}
      ><span>{label}</span></button>
    );
  };

  return (
    <div className={`${styles.headerSlot} ${open ? styles.menuOpen : ""}`}>
      <header
        className={`${styles.header} ${scrollMode === "focus-flow" ? styles.focusRevealed : ""} ${scrollMode === "pinned" ? styles.pinned : ""} ${scrollMode === "hidden" ? styles.hidden : ""} ${open ? styles.open : ""}`}
        style={{ "--scroll-offset": `${scrollProgress * -14}px`, "--scroll-opacity": 1 - scrollProgress } as CSSProperties}
        onFocusCapture={() => {
          if (!focusWithinRef.current) modeBeforeFocusRef.current = scrollModeRef.current;
          focusWithinRef.current = true;
          changeScrollMode(window.scrollY >= 140 ? "pinned" : "focus-flow");
        }}
        onBlurCapture={(event) => {
          if (event.currentTarget.contains(event.relatedTarget as Node | null)) return;
          focusWithinRef.current = false;
          if (openRef.current) return;
          if (window.scrollY < 140) changeScrollMode("flow");
          else changeScrollMode(modeBeforeFocusRef.current === "hidden" ? "hidden" : "pinned");
        }}
      >
        <nav ref={navRef} className={styles.desktopNav} aria-label="Website pages" onMouseLeave={() => setHovered(null)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(null); }}>
          {desktopPages.map((label, index) => renderPageLink(label, index))}
          <span ref={indicatorRef} className={styles.indicator} aria-hidden="true" />
        </nav>
        <Link href="/" className={styles.wordmark} aria-label="Pearl Island home" onClick={(event) => { handleHomeClick(event); if (open) closeMenu(); }}>PEARL ISLAND</Link>
        <div className={styles.desktopActions}>
          <SocialLinks className={styles.socials} linkClassName={styles.socialButton} />
          <a href={externalLinks.orderUrl} target="_blank" rel="noopener noreferrer" className={styles.orderButton} aria-describedby={externalLinkDescriptionId}>Order Now</a>
        </div>
        <button ref={toggleRef} type="button" className={styles.toggle} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-website-menu" onClick={() => open ? closeMenu() : setMenuOpen(true)}>
          <span /><span />
        </button>
      </header>
      <div ref={overlayRef} id="mobile-website-menu" className={styles.overlay} aria-hidden={!open} inert={!open}>
        <div className={styles.menuContent}>
          <nav className={styles.mobileNav} aria-label="Mobile website pages">
            {mobilePages.map((label, index) => renderPageLink(label, index, true))}
          </nav>
          <div className={styles.mobileBottom}>
            <SocialLinks className={styles.mobileSocials} linkClassName={styles.socialButton} onClick={closeMenu} />
            <a href={externalLinks.orderUrl} target="_blank" rel="noopener noreferrer" className={styles.mobileOrder} aria-describedby={externalLinkDescriptionId} onClick={closeMenu}>Order Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}
