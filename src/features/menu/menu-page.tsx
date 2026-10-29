"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type MouseEvent, type ReactNode } from "react";
import { externalLinkDescriptionId } from "@/features/website/site-content";
import { CategoryBar } from "./category-bar";
import { menuCopy, menuData, type MenuCategoryId, type MenuEntry } from "./menu-data";
import styles from "./menu-page.module.css";

function OrderLink({ solid = false, modal = false, label = "Order Now" }: { solid?: boolean; modal?: boolean; label?: string }) {
  return <a className={`${styles.orderNow} ${solid ? styles.solidOrder : ""} ${modal ? styles.modalOrder : ""}`} href={menuData.orderUrl} target="_blank" rel="noopener noreferrer" aria-describedby={externalLinkDescriptionId}>{label}<span className="sr-only"> (opens in a new tab)</span></a>;
}

function MenuImage({ item, kind = "gallery", preload = false, alt = "" }: { item: MenuEntry; kind?: "gallery" | "dialog" | "wing"; preload?: boolean; alt?: string }) {
  const photoStyle = {
    "--natural-width": `${item.naturalWidth ?? 1}px`,
    "--natural-height": `${item.naturalHeight ?? 1}px`,
  } as CSSProperties;
  const shapeClass = item.shape ? styles[item.shape] : "";
  return <span className={`${styles.imageSlot} ${kind === "dialog" ? styles.dialogImageSlot : kind === "wing" ? styles.wingImageSlot : styles.galleryImageSlot} ${item.shape === "TALL" ? styles.tallStage : ""}`}>
    {item.image && item.naturalWidth && item.naturalHeight ? <Image className={`${styles.photo} ${shapeClass}`} src={item.image} alt={alt} width={item.naturalWidth} height={item.naturalHeight} quality={90} sizes={kind === "dialog" ? "(min-width: 900px) 420px, 90vw" : "(min-width: 900px) 280px, 45vw"} style={photoStyle} preload={preload} /> : <span className={styles.monogram} aria-hidden="true">PI</span>}
  </span>;
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches || el.getBoundingClientRect().top < innerHeight) return;
    el.dataset.reveal = "waiting";
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { el.dataset.reveal = "shown"; observer.disconnect(); } }, { threshold: .08 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`${styles.reveal} ${className}`}>{children}</div>;
}

function OrderingRow({ note = menuCopy.finalSelections, wing = false }: { note?: string; wing?: boolean }) {
  return <div className={styles.orderingRow}><p>{note}</p><OrderLink solid={wing} label={wing ? "ORDER ONLINE" : "ORDER NOW"} /></div>;
}

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>("platters");
  const [shownCategory, setShownCategory] = useState<MenuCategoryId>("platters");
  const [leaving, setLeaving] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuEntry | null>(null);
  const switchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const entries: readonly MenuEntry[] = shownCategory === "platters" ? menuData.proteins : shownCategory === "sides" ? menuData.sides : shownCategory === "salads" ? menuData.salads : shownCategory === "drinks" ? menuData.drinks : shownCategory === "pearl-island-products" ? menuData.products : [];
  useEffect(() => () => { if (switchTimer.current) clearTimeout(switchTimer.current); }, []);
  useEffect(() => {
    if (!selectedItem || !dialogRef.current) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialogRef.current.open) dialogRef.current.showModal();
    return () => { document.body.style.overflow = overflow; };
  }, [selectedItem]);
  const setCategory = (id: string) => {
    if (id === activeCategory) return;
    setActiveCategory(id as MenuCategoryId);
    if (switchTimer.current) clearTimeout(switchTimer.current);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setShownCategory(id as MenuCategoryId); setLeaving(false); return; }
    setLeaving(true);
    switchTimer.current = setTimeout(() => { setShownCategory(id as MenuCategoryId); setLeaving(false); }, 150);
  };
  const openItem = (item: MenuEntry, event: MouseEvent<HTMLButtonElement>) => { returnFocusRef.current = event.currentTarget; setSelectedItem(item); };
  const closeItem = () => { setSelectedItem(null); requestAnimationFrame(() => returnFocusRef.current?.focus({ preventScroll: true })); };
  const trapDialogTab = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== "Tab" || !dialogRef.current) return;
    const list = [...dialogRef.current.querySelectorAll<HTMLElement>('button, a[href]')];
    if (event.shiftKey && document.activeElement === list[0]) { event.preventDefault(); list.at(-1)?.focus(); }
    else if (!event.shiftKey && document.activeElement === list.at(-1)) { event.preventDefault(); list[0]?.focus(); }
  };
  return <div className={styles.menuPage}>
    <header className={styles.hero}><span className={styles.heroRings} aria-hidden="true" /><div className={styles.container}><p className={styles.heroEyebrow}>{menuCopy.hero.eyebrow}</p><h1>{menuCopy.hero.headline}</h1><p className={styles.heroSubtitle}>{menuCopy.hero.subtitle}</p></div></header>
    <CategoryBar categories={menuData.categories} activeId={activeCategory} onSelect={setCategory} />
    <section id="menu-category-panel" role="tabpanel" aria-labelledby={`menu-category-${shownCategory}`} aria-busy={leaving} className={styles.categoryPanel}>
      <header className={`${styles.container} ${styles.categoryHeader}`} data-category-header>
        <div className={styles.eyebrowSpace}>{shownCategory === "wing-wednesdays" && <p>{menuCopy.wingEyebrow}</p>}</div>
        <h2>{menuCopy.categoryHeading[shownCategory]}</h2><p className={styles.categorySubtitle}>{menuCopy.categoryIntro[shownCategory]}</p>
      </header>
      <div key={shownCategory} className={`${styles.categoryBody} ${leaving ? styles.leaving : styles.entering}`} data-category-body inert={leaving}>
        {shownCategory === "platters" ? <>
          <div className={styles.container}><ItemGrid items={entries} onOpen={openItem} /></div>
          <Reveal className={styles.platterSection}><div className={styles.container}><h3 className={styles.subheading}>{menuCopy.platterHeading}</h3><p className={styles.supporting}>{menuCopy.platterIntro}</p><div className={styles.platterGrid}>{menuData.platters.map(platter => <article className={styles.platterCard} key={platter.id}><h4>{platter.name}</h4><p className={styles.platterDescription}>{platter.description}</p><p className={styles.platterPrice}>{platter.price}</p><div className={styles.comboRow}><span><strong>{menuCopy.comboHeading}</strong><i>{menuCopy.comboDescription}</i></span><b>{menuCopy.comboPrice}</b></div></article>)}</div><OrderingRow note={menuCopy.platterDisclaimer} /></div></Reveal>
        </> : shownCategory === "wing-wednesdays" ? <WingWednesday /> : <div className={styles.container}>
          {shownCategory === "family-style" || shownCategory === "oxtail" ? <div className={styles.textCard}><h3>{shownCategory === "family-style" ? menuData.familyStyle.name : menuData.oxtail.name}</h3><p>{shownCategory === "family-style" ? menuData.familyStyle.detail : menuData.oxtail.detail}</p><span>{shownCategory === "family-style" ? menuData.familyStyle.price : menuData.oxtail.price}</span></div> : shownCategory === "sides" ? <><h3 className={styles.subheading}>{menuCopy.sideGroups.cafe}</h3><ItemGrid items={entries.slice(0, 12)} onOpen={openItem} /><Reveal className={styles.subsection}><h3 className={styles.subheading}>{menuCopy.sideGroups.addOns}</h3><ItemGrid items={entries.slice(12)} onOpen={openItem} /></Reveal></> : <ItemGrid items={entries} onOpen={openItem} />}
          <OrderingRow />
        </div>}
      </div>
    </section>
    <dialog ref={dialogRef} className={styles.itemDialog} aria-labelledby="item-dialog-title" onClick={event => { if (event.target === dialogRef.current) dialogRef.current?.close(); }} onKeyDown={trapDialogTab} onClose={closeItem}>{selectedItem && <><button type="button" aria-label="Close" className={styles.dialogClose} onClick={() => dialogRef.current?.close()}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 5 19 19M19 5 5 19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" /></svg></button><div className={styles.dialogLayout}><MenuImage item={selectedItem} kind="dialog" /><div className={styles.dialogText}><h2 id="item-dialog-title">{selectedItem.name}</h2><p className={styles.dialogPrice}>{selectedItem.price}</p><p className={styles.dialogDescription}>{selectedItem.description}</p><OrderLink solid modal /></div></div></>}</dialog>
  </div>;
}

function ItemGrid({ items, onOpen }: { items: readonly MenuEntry[]; onOpen: (item: MenuEntry, event: MouseEvent<HTMLButtonElement>) => void }) {
  return <div className={styles.itemGrid}>{items.map((item, i) => <button key={item.id} className={styles.menuItem} style={{ "--item-delay": `${Math.min(i * 35, 280)}ms` } as CSSProperties} type="button" onClick={event => onOpen(item, event)} aria-label={`${item.name}, ${item.price}`}><MenuImage item={item} preload={i < 3} /><span className={styles.itemText}><span className={styles.itemName}>{item.name}</span><span className={styles.itemPrice}>{item.price}</span></span></button>)}</div>;
}

function WingWednesday() {
  return <div className={styles.container}><p className={styles.wingIntro}>{menuCopy.wingIntro}</p><div className={styles.wingGallery}>{menuData.wingPhotos.map(item => <article key={item.id} className={styles.wingGalleryItem}><MenuImage item={item} kind="wing" alt="Pearl Island wings" /><h3 className={styles.itemName}>{item.name}</h3><p>{item.description}</p></article>)}</div>
    <Reveal className={styles.subsection}><h3 className={styles.subheading}>{menuCopy.wingServingHeading}</h3><p className={styles.supporting}>{menuCopy.wingServingIntro}</p><div className={styles.wingServingGrid}>{menuData.wingServings.map(item => <article className={styles.wingServingCard} key={item.name}><div className={styles.servingName}><h4>{item.name}</h4><strong>{item.price}</strong></div><p><b>{item.pieces}</b></p><p>{item.description}</p></article>)}</div></Reveal>
    <Reveal className={styles.subsection}><h3 className={styles.subheading}>{menuCopy.wingSauceHeading}</h3><p className={styles.supporting}>{menuCopy.wingSauces}</p></Reveal><OrderingRow note={menuCopy.wingOrderingNote} wing />
  </div>;
}
