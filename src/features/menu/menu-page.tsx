"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from "react";
import { CategoryBar } from "./category-bar";
import { menuCopy, menuData, type MenuCategoryId, type MenuEntry } from "./menu-data";
import styles from "./menu-page.module.css";

function SquareLink({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <a className={`${styles.squareButton} ${className}`} href={menuData.orderUrl} target="_blank" rel="noopener noreferrer">{children}<span className="sr-only"> (opens in a new tab)</span></a>;
}

function MenuImage({ item, dialog = false, alt = "" }: { item: MenuEntry; dialog?: boolean; alt?: string }) {
  return <span className={`${styles.imageBox} ${dialog ? styles.dialogImageBox : ""}`}>
    {item.image && item.naturalWidth && item.naturalHeight
      ? <Image className={styles.photo} src={item.image} alt={alt} width={item.naturalWidth} height={item.naturalHeight} quality={90} sizes={dialog ? "(min-width: 700px) 420px, 90vw" : "(min-width: 701px) 230px, 45vw"} />
      : <span className={styles.monogram} aria-hidden="true">PI</span>}
  </span>;
}

function ItemGrid({ items, onOpen }: { items: readonly MenuEntry[]; onOpen: (item: MenuEntry, event: MouseEvent<HTMLButtonElement>) => void }) {
  return <div className={styles.itemGrid}>
    {items.map((item, index) => <button
      key={item.id}
      className={styles.menuItem}
      type="button"
      data-reveal
      style={{ transitionDelay: `${index % 5 * .08}s` }}
      onClick={(event) => onOpen(item, event)}
      aria-label={`${item.name}, ${item.price}`}
    >
      <MenuImage item={item} />
      <span className={styles.itemName}>{item.name}</span>
      <span className={styles.itemPrice}>{item.price}</span>
    </button>)}
  </div>;
}

function TextItem({ name, detail, price }: { name: string; detail: string; price: string }) {
  return <div className={styles.itemGrid}>
    <article className={styles.menuItem} data-reveal>
      <span className={styles.imageBox}><span className={styles.monogram} aria-hidden="true">PI</span></span>
      <h3 className={styles.itemName}>{name}</h3>
      <p className={styles.textDetail}>{detail}</p>
      <span className={styles.itemPrice}>{price}</span>
    </article>
  </div>;
}

function WingWednesday() {
  return <>
    <p className={styles.wingIntro}>{menuCopy.wingIntro}</p>
    <div className={styles.wingGallery}>
      {menuData.wingPhotos.map((item) => <article className={styles.wingGalleryItem} key={item.id} data-reveal>
        <MenuImage item={item} alt="Pearl Island wings" />
        <h3 className={styles.itemName}>{item.name}</h3>
        <p>{item.description}</p>
      </article>)}
    </div>
    <section className={styles.extraSection} data-reveal>
      <h3 className={styles.extraHeading}>{menuCopy.wingServingHeading}</h3>
      <p>{menuCopy.wingServingIntro}</p>
      <div className={styles.wingServingGrid}>
        {menuData.wingServings.map((item) => <article className={styles.wingServingCard} key={item.name}>
          <h4>{item.name}</h4><strong>{item.price}</strong><p>{item.pieces}</p><p>{item.description}</p>
        </article>)}
      </div>
    </section>
    <section className={styles.extraSection} data-reveal>
      <h3 className={styles.extraHeading}>{menuCopy.wingSauceHeading}</h3>
      <p>{menuCopy.wingSauces}</p>
      <p>{menuCopy.wingOrderingNote}</p>
    </section>
  </>;
}

function PlatterBar() {
  return <section className={styles.platterBar} data-reveal aria-labelledby="build-platter-heading">
    <div className={styles.container}>
      <div className={styles.platterLayout}>
        <div className={styles.platterLead}>
          <h2 id="build-platter-heading">BUILD A PLATTER</h2>
          <p className={styles.platterDescription}>{menuCopy.platterIntro}</p>
        </div>
        <div className={styles.platterGrid}>
          {menuData.platters.map((platter) => <article className={styles.platterCard} key={platter.id}>
            <h3>{platter.name}</h3>
            <p>{platter.description}</p>
            <strong>{platter.price}</strong>
          </article>)}
        </div>
      </div>
      <div className={styles.comboStrip}>
        <strong>{menuCopy.comboHeading}</strong><span>{menuCopy.comboDescription}</span><b>{menuCopy.comboPrice}</b>
      </div>
      <p className={styles.platterDisclaimer}>{menuCopy.platterDisclaimer}</p>
    </div>
  </section>;
}

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>("platters");
  const [selectedItem, setSelectedItem] = useState<MenuEntry | null>(null);
  const panelRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("category");
    const match = menuData.categories.find((category) => category.id === requested);
    if (!match) return;
    const frame = requestAnimationFrame(() => setActiveCategory(match.id));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const targets = [...panel.querySelectorAll<HTMLElement>("[data-reveal]")];
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("is-in"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-in"); observer.unobserve(entry.target); } });
    }, { rootMargin: "0px 0px -10% 0px" });
    const frame = requestAnimationFrame(() => targets.forEach((target) => observer.observe(target)));
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [activeCategory]);

  useEffect(() => {
    if (!selectedItem || !dialogRef.current) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialogRef.current.open) dialogRef.current.showModal();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [selectedItem]);

  const openItem = (item: MenuEntry, event: MouseEvent<HTMLButtonElement>) => {
    returnFocusRef.current = event.currentTarget;
    setSelectedItem(item);
  };
  const closeItem = () => {
    setSelectedItem(null);
    requestAnimationFrame(() => returnFocusRef.current?.focus({ preventScroll: true }));
  };
  const trapDialogTab = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== "Tab" || !dialogRef.current) return;
    const controls = [...dialogRef.current.querySelectorAll<HTMLElement>("button, a[href]")];
    if (event.shiftKey && document.activeElement === controls[0]) { event.preventDefault(); controls.at(-1)?.focus(); }
    else if (!event.shiftKey && document.activeElement === controls.at(-1)) { event.preventDefault(); controls[0]?.focus(); }
  };

  const entries: readonly MenuEntry[] = activeCategory === "platters" ? menuData.proteins
    : activeCategory === "sides" ? menuData.sides
    : activeCategory === "salads" ? menuData.salads
    : activeCategory === "drinks" ? menuData.drinks
    : activeCategory === "pearl-island-products" ? menuData.products : [];

  return <div className={styles.menuPage}>
    <section className={styles.menuSection} aria-labelledby="menu-page-title">
      <div className={styles.container}>
        <p className={styles.eyebrow}>THE MENU</p>
        <h1 id="menu-page-title">THE MENU</h1>
        <CategoryBar categories={menuData.categories} activeId={activeCategory} onSelect={setActiveCategory} />
        <section ref={panelRef} id="menu-category-panel" role="tabpanel" aria-labelledby={`menu-category-${activeCategory}`} className={styles.categoryPanel}>
          {activeCategory === "wing-wednesdays" && <p className={styles.wingEyebrow}>{menuCopy.wingEyebrow}</p>}
          <h2>{menuCopy.categoryHeading[activeCategory]}</h2>
          <p className={styles.categoryIntro}>{menuCopy.categoryIntro[activeCategory]}</p>
          <div key={activeCategory} className={styles.categoryContent}>
            {activeCategory === "wing-wednesdays" ? <WingWednesday />
              : activeCategory === "family-style" ? <TextItem {...menuData.familyStyle} />
              : activeCategory === "oxtail" ? <TextItem {...menuData.oxtail} />
              : activeCategory === "sides" ? <>
                <h3 className={styles.extraHeading}>{menuCopy.sideGroups.cafe}</h3>
                <ItemGrid items={entries.slice(0, 12)} onOpen={openItem} />
                <section className={styles.extraSection}>
                  <h3 className={styles.extraHeading}>{menuCopy.sideGroups.addOns}</h3>
                  <ItemGrid items={entries.slice(12)} onOpen={openItem} />
                </section>
              </>
              : <ItemGrid items={entries} onOpen={openItem} />}
          </div>
          <div className={styles.orderRow}>
            <SquareLink>Order on Square</SquareLink>
            <p>{menuCopy.finalSelections}</p>
          </div>
        </section>
      </div>
    </section>
    <PlatterBar />
    <dialog ref={dialogRef} className={styles.itemDialog} aria-labelledby="item-dialog-title" onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current?.close(); }} onKeyDown={trapDialogTab} onClose={closeItem}>
      {selectedItem && <>
        <button type="button" aria-label="Close" className={styles.dialogClose} onClick={() => dialogRef.current?.close()}>×</button>
        <div className={styles.dialogLayout}>
          <MenuImage item={selectedItem} dialog />
          <div className={styles.dialogText}>
            <h2 id="item-dialog-title">{selectedItem.name}</h2>
            <p className={styles.dialogPrice}>{selectedItem.price}</p>
            <p className={styles.dialogDescription}>{selectedItem.description}</p>
            <SquareLink>Order Now</SquareLink>
          </div>
        </div>
      </>}
    </dialog>
  </div>;
}
