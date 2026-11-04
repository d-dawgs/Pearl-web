"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { desktopPages, externalLinks, hrefFor, mobilePages, inactiveDescriptionId } from "./site-content";
import { SocialLinks } from "./social-links";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const nav = navRef.current;
    const bar = barRef.current;
    if (!nav || !bar) return;
    const current = () => nav.querySelector<HTMLElement>('[aria-current="page"]');
    const place = (target: HTMLElement | null) => {
      if (!target) { bar.style.opacity = "0"; return; }
      bar.style.opacity = "1";
      bar.style.transform = `translateX(${target.offsetLeft}px) scaleX(${target.offsetWidth})`;
    };
    const restore = () => place(current());
    const resize = new ResizeObserver(restore);
    resize.observe(nav);
    nav.querySelectorAll("a").forEach((link) => resize.observe(link));
    document.fonts.ready.then(restore);
    restore();
    return () => resize.disconnect();
  }, [pathname]);
  const moveBar = (target: EventTarget | null) => {
    const link = target instanceof HTMLElement ? target.closest("a") : null;
    if (!link || !navRef.current?.contains(link) || !barRef.current) return;
    barRef.current.style.opacity = "1";
    barRef.current.style.transform = `translateX(${link.offsetLeft}px) scaleX(${link.offsetWidth})`;
  };
  const restoreBar = () => {
    const current = navRef.current?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!barRef.current) return;
    if (!current) { barRef.current.style.opacity = "0"; return; }
    barRef.current.style.transform = `translateX(${current.offsetLeft}px) scaleX(${current.offsetWidth})`;
  };
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <nav className={styles.desktopNav} ref={navRef} aria-label="Website pages" onPointerOver={(event) => moveBar(event.target)} onPointerLeave={restoreBar} onFocus={(event) => moveBar(event.target)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) restoreBar(); }}>
          {desktopPages.map((page) => (
            <Link key={page} href={hrefFor(page)!} aria-current={pathname === hrefFor(page) ? "page" : undefined}>{page}</Link>
          ))}
          <span className={styles.navBar} ref={barRef} aria-hidden="true" />
        </nav>
        <Link className={styles.wordmark} href="/" aria-label="Pearl Island home">PEARL ISLAND</Link>
        <div className={styles.actions}>
          <SocialLinks className={styles.socials} />
          <a className={styles.orderButton} href={externalLinks.orderUrl} target="_blank" rel="noopener noreferrer">Order Now<span className="sr-only"> (opens in a new tab)</span></a>
        </div>
        <nav className={styles.mobileNav} aria-label="Mobile website pages">
          {mobilePages.map((page) => {
            const href = hrefFor(page);
            return href
              ? <Link key={page} href={href} aria-current={pathname === href ? "page" : undefined}>{page}</Link>
              : <button key={page} type="button" aria-disabled="true" aria-describedby={inactiveDescriptionId}>{page}</button>;
          })}
        </nav>
      </div>
    </header>
  );
}
