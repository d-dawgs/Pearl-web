"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from "react";
import { CategoryBar } from "./category-bar";
import { menuCopy, menuData, type MenuCategoryId, type MenuEntry } from "./menu-data";
import styles from "./menu-page.module.css";

const platterIncludes = ["Rice & pigeon peas", "Kale salad", "Plantains", "Aioli", "Pikliz"] as const;
const platterProteinCount: Record<string, number> = { "half-platter": 1, platter: 1, "half-and-half-platter": 2, "trifecta-platter": 3 };

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
      <span className={styles.itemBody}>
        <MenuImage item={item} />
        <span className={styles.itemName}>{item.name}</span>
        <span className={styles.itemPrice}>{item.price}</span>
      </span>
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
  const [selected, setSelected] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const targets = [...(rootRef.current?.querySelectorAll<HTMLElement>("[data-wing-reveal]") ?? [])];
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("is-in"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const current = menuData.wingPhotos[selected];
  return <div className={styles.wingPanel} ref={rootRef}>
    <div className={styles.wingHead} data-wing-reveal>
      <h2>PI x MK Halal Wings</h2>
      <p className={styles.wingCollab}>PEARL ISLAND <span>×</span> MINT KITCHEN</p>
      <p className={styles.wingHeadIntro}>{menuCopy.wingIntro}</p>
    </div>
    <div className={styles.wingPhotoRow} data-wing-reveal>
      <div className={styles.wingStage}>
        {menuData.wingPhotos.map((item, index) => <span className={styles.wingStagePhoto} data-selected={selected === index} aria-hidden={selected !== index} key={item.id}>
          <Image src={item.image!} alt={item.name} width={item.naturalWidth!} height={item.naturalHeight!} sizes="(max-width: 760px) 90vw, 55vw" quality={90} />
        </span>)}
      </div>
      <div className={styles.wingChoice}>
        <div className={styles.wingSelectors} role="group" aria-label="Choose wings">
          {menuData.wingPhotos.map((item, index) => <button type="button" className={styles.wingSelector} key={item.id} aria-pressed={selected === index} onClick={() => setSelected(index)}>
            <Image src={item.image!} alt="" width={item.naturalWidth!} height={item.naturalHeight!} sizes="64px" quality={90} />
            <span>{index === 0 ? "CHICKEN" : "VEGAN"}</span>
          </button>)}
        </div>
        <div className={styles.wingCaption} aria-live="polite">
          <h3>{current.name}</h3>
          <p>{current.description}</p>
        </div>
      </div>
    </div>
    <div className={styles.wingSizes} data-wing-reveal>
      {menuData.wingServings.map((item) => <article className={styles.wingSize} key={item.name}>
        <h3>{item.name}</h3><strong className={styles.wingSizePrice}>{item.price}</strong>
        <p><strong>{item.pieces}</strong> · {item.description.charAt(0).toLowerCase() + item.description.slice(1)}</p>
      </article>)}
    </div>
    <p className={styles.wingSauces}><strong>SAUCES</strong>{menuCopy.wingSauces.split(" · ").map((sauce, index) => <span key={sauce}>{index > 0 && <i aria-hidden="true">·</i>}{sauce}</span>)}</p>
    <SquareLink className={styles.wingOrder}>Order Now</SquareLink>
  </div>;
}

function PlatterBar() {
  return <section className={styles.platterBar} data-reveal aria-labelledby="build-platter-heading">
    <div className={styles.container}>
      <div className={styles.platterLayout}>
        <div className={styles.platterLead}>
          <h2 id="build-platter-heading">BUILD A PLATTER</h2>
          <div><p className={styles.platterLabel}>INCLUDED WITH EVERY PLATTER</p><ul className={styles.platterIncludes}>{platterIncludes.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
        <div className={styles.platterGrid}>
          {menuData.platters.map((platter) => <article className={styles.platterCard} key={platter.id}>
            <h3>{platter.name}</h3>
            <div className={styles.platterDetail}><span className={styles.proteinDiamonds} aria-hidden="true">{[0, 1, 2].map((index) => <i key={index} className={index < platterProteinCount[platter.id] ? styles.filledDiamond : ""} />)}</span><p>{platter.description}</p></div>
            <strong>{platter.price}</strong>
          </article>)}
        </div>
      </div>
      <div className={styles.platterFooter}>
        <div className={styles.comboTag}><strong>{menuCopy.comboHeading}</strong><span>{menuCopy.comboDescription}</span><b>{menuCopy.comboPrice}</b></div>
        <p>Base prices. Some proteins and drinks cost extra.</p>
      </div>
    </div>
  </section>;
}

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>("platters");
  const [selectedItem, setSelectedItem] = useState<MenuEntry | null>(null);
  const panelRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const lastViewedRef = useRef<HTMLElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    const frame = requestAnimationFrame(() => { if (dialogRef.current) dialogRef.current.dataset.open = "true"; });
    return () => { cancelAnimationFrame(frame); document.body.style.overflow = previousOverflow; };
  }, [selectedItem]);

  useEffect(() => {
    const clearLast = (event: Event) => {
      if (lastViewedRef.current && !lastViewedRef.current.contains(event.target as Node)) {
        delete lastViewedRef.current.dataset.lastViewed;
        lastViewedRef.current = null;
      }
    };
    document.addEventListener("click", clearLast);
    return () => { document.removeEventListener("click", clearLast); if (closeTimerRef.current) clearTimeout(closeTimerRef.current); };
  }, []);

  const openItem = (item: MenuEntry, event: MouseEvent<HTMLButtonElement>) => {
    if (lastViewedRef.current) delete lastViewedRef.current.dataset.lastViewed;
    lastViewedRef.current = null;
    returnFocusRef.current = event.currentTarget;
    setSelectedItem(item);
  };
  const finishClose = () => {
    delete dialogRef.current?.dataset.open;
    setSelectedItem(null);
    const item = returnFocusRef.current;
    if (item) { item.dataset.lastViewed = "true"; lastViewedRef.current = item; }
    requestAnimationFrame(() => item?.focus({ preventScroll: true, focusVisible: false } as FocusOptions & { focusVisible: boolean }));
  };
  const requestClose = () => {
    const dialog = dialogRef.current;
    if (!dialog?.open || closeTimerRef.current) return;
    delete dialog.dataset.open;
    const delay = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 520;
    closeTimerRef.current = setTimeout(() => { closeTimerRef.current = null; dialog.close(); }, delay);
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
          {activeCategory !== "wing-wednesdays" && <>
            <h2>{menuCopy.categoryHeading[activeCategory]}</h2>
            <p className={styles.categoryIntro}>{menuCopy.categoryIntro[activeCategory]}</p>
          </>}
          <div key={activeCategory} className={styles.categoryContent}>
            {activeCategory === "wing-wednesdays" ? <WingWednesday />
              : activeCategory === "family-style" ? <TextItem {...menuData.familyStyle} />
              : activeCategory === "oxtail" ? <TextItem {...menuData.oxtail} />
              : activeCategory === "sides" ? <>
                <ItemGrid items={entries.slice(0, 12)} onOpen={openItem} />
                <section className={styles.extraSection}>
                  <h3 className={styles.extraHeading}>{menuCopy.sideGroups.addOns}</h3>
                  <ItemGrid items={entries.slice(12)} onOpen={openItem} />
                </section>
              </>
              : <ItemGrid items={entries} onOpen={openItem} />}
          </div>
          {activeCategory !== "wing-wednesdays" && <div className={styles.orderRow}>
            <SquareLink className={styles.orderNow}>Order Now</SquareLink>
          </div>}
        </section>
      </div>
    </section>
    <PlatterBar />
    <dialog ref={dialogRef} className={styles.itemDialog} aria-labelledby="item-dialog-title" onClick={(event) => { if (event.target === dialogRef.current) requestClose(); }} onKeyDown={trapDialogTab} onCancel={(event) => { event.preventDefault(); requestClose(); }} onClose={finishClose}>
      {selectedItem && <>
        <button type="button" aria-label="Close" className={styles.dialogClose} onClick={requestClose}>×</button>
        <div className={styles.dialogLayout}>
          <MenuImage item={selectedItem} dialog />
          <div className={styles.dialogText}>
            <p className={styles.dialogEyebrow}>{menuData.categories.find((category) => category.id === activeCategory)?.label}</p>
            <h2 id="item-dialog-title">{selectedItem.name}</h2>
            <p className={styles.dialogPrice}>{selectedItem.price}</p>
            <p className={styles.dialogDescription}>{selectedItem.description}</p>
            <div className={styles.dialogActions}><SquareLink className={styles.dialogOrder}>Order Now</SquareLink><button type="button" className={styles.backButton} onClick={requestClose}>Back to menu</button></div>
          </div>
        </div>
      </>}
    </dialog>
  </div>;
}
