"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { desktopPages, externalLinks, hrefFor, mobilePages, inactiveDescriptionId } from "./site-content";
import { SocialLinks } from "./social-links";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <nav className={styles.desktopNav} aria-label="Website pages">
          {desktopPages.map((page) => (
            <Link key={page} href={hrefFor(page)!} aria-current={pathname === hrefFor(page) ? "page" : undefined}>{page}</Link>
          ))}
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
