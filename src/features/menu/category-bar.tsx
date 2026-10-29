"use client";

import { useCallback, useLayoutEffect, useRef, type KeyboardEvent } from "react";
import styles from "./category-bar.module.css";

type CategoryBarProps<Id extends string> = {
  categories: readonly { id: Id; label: string }[];
  activeId: Id;
  onSelect: (id: Id) => void;
};

export function CategoryBar<Id extends string>({ categories, activeId, onSelect }: CategoryBarProps<Id>) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  const updateEdges = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.dataset.fadeLeft = String(viewport.scrollLeft > 1);
    viewport.dataset.fadeRight = String(viewport.scrollLeft + viewport.clientWidth < viewport.scrollWidth - 1);
  }, []);

  const measure = useCallback(() => {
    const row = rowRef.current;
    const viewport = viewportRef.current;
    const indicator = indicatorRef.current;
    const active = row && [...row.querySelectorAll<HTMLButtonElement>("[role=tab]")].find((tab) => tab.dataset.categoryId === activeId);
    if (!row || !viewport || !indicator || !active) return;

    indicator.style.width = `${active.offsetWidth}px`;
    indicator.style.transform = `translateX(${active.offsetLeft}px)`;
    indicator.dataset.ready = "true";

    const inset = 16;
    const start = active.offsetLeft;
    const end = start + active.offsetWidth;
    let left = viewport.scrollLeft;
    if (start < left + inset) left = Math.max(0, start - inset);
    else if (end > left + viewport.clientWidth - inset) left = end - viewport.clientWidth + inset;
    if (Math.abs(left - viewport.scrollLeft) > 1) {
      viewport.scrollTo({ left, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }
    updateEdges();
  }, [activeId, updateEdges]);

  useLayoutEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (rowRef.current) observer.observe(rowRef.current);
    let mounted = true;
    void document.fonts.ready.then(() => { if (mounted) measure(); });
    return () => { mounted = false; observer.disconnect(); };
  }, [measure]);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % categories.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + categories.length) % categories.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = categories.length - 1;
    else return;
    event.preventDefault();
    const tab = rowRef.current?.querySelectorAll<HTMLButtonElement>("[role=tab]")[next];
    tab?.focus({ preventScroll: true });
    onSelect(categories[next].id);
  };

  return (
    <div className={styles.bar}>
      <div className={styles.container}>
        <div className={styles.viewport} ref={viewportRef} onScroll={updateEdges}>
          <div className={styles.tabs} ref={rowRef} role="tablist" aria-label="Menu categories" aria-orientation="horizontal">
            {categories.map((category, index) => (
              <button
                className={styles.tab}
                key={category.id}
                id={`menu-category-${category.id}`}
                data-category-id={category.id}
                type="button"
                role="tab"
                aria-selected={activeId === category.id}
                aria-controls="menu-category-panel"
                tabIndex={activeId === category.id ? 0 : -1}
                onClick={() => onSelect(category.id)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >{category.label}</button>
            ))}
            <span className={styles.indicator} ref={indicatorRef} aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
