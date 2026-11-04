"use client";

import { useEffect, useRef, type KeyboardEvent } from "react";
import styles from "./category-bar.module.css";

type CategoryBarProps<Id extends string> = {
  categories: readonly { id: Id; label: string }[];
  activeId: Id;
  onSelect: (id: Id) => void;
};

export function CategoryBar<Id extends string>({ categories, activeId, onSelect }: CategoryBarProps<Id>) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  const place = (target: HTMLButtonElement | null) => {
    const bar = barRef.current;
    if (!bar || !target) return;
    bar.style.transform = `translateX(${target.offsetLeft}px) scaleX(${target.offsetWidth})`;
  };
  const activeTab = () => [...(rowRef.current?.querySelectorAll<HTMLButtonElement>("[role=tab]") ?? [])]
    .find((tab) => tab.getAttribute("aria-selected") === "true") ?? null;
  const updateEdges = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const max = viewport.scrollWidth - viewport.clientWidth;
    viewport.dataset.left = viewport.scrollLeft > 1 ? "true" : "false";
    viewport.dataset.right = viewport.scrollLeft < max - 1 ? "true" : "false";
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    const active = activeTab();
    if (!viewport || !active) return;
    place(active);
    const left = Math.max(0, Math.min(viewport.scrollWidth - viewport.clientWidth, active.offsetLeft - (viewport.clientWidth - active.offsetWidth) / 2));
    const behavior = matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
    viewport.scrollTo({ left, behavior });
    updateEdges();
  }, [activeId]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const row = rowRef.current;
    if (!viewport || !row) return;
    const resize = new ResizeObserver(() => { place(activeTab()); updateEdges(); });
    resize.observe(viewport);
    resize.observe(row);
    row.querySelectorAll("[role=tab]").forEach((tab) => resize.observe(tab));
    document.fonts.ready.then(() => { place(activeTab()); updateEdges(); });
    updateEdges();
    return () => resize.disconnect();
  }, []);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % categories.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + categories.length) % categories.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = categories.length - 1;
    else return;
    event.preventDefault();
    rowRef.current?.querySelectorAll<HTMLButtonElement>("[role=tab]")[next]?.focus({ preventScroll: true });
    onSelect(categories[next].id);
  };

  return (
    <div className={styles.viewport} ref={viewportRef} onScroll={updateEdges}>
      <div className={styles.tabs} ref={rowRef} role="tablist" aria-label="Menu categories" aria-orientation="horizontal" onPointerOver={(event) => { const tab = (event.target as HTMLElement).closest<HTMLButtonElement>("[role=tab]"); if (tab) place(tab); }} onPointerLeave={() => place(activeTab())} onFocus={(event) => { const tab = (event.target as HTMLElement).closest<HTMLButtonElement>("[role=tab]"); if (tab) place(tab); }} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) place(activeTab()); }}>
        {categories.map((category, index) => (
          <button
            className={styles.tab}
            key={category.id}
            id={`menu-category-${category.id}`}
            data-category-id={category.id}
            type="button"
            role="tab"
            aria-selected={activeId === category.id}
            aria-current={activeId === category.id ? "true" : undefined}
            aria-controls="menu-category-panel"
            tabIndex={activeId === category.id ? 0 : -1}
            onClick={() => onSelect(category.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >{category.label}</button>
        ))}
        <span className={styles.bar} ref={barRef} aria-hidden="true" />
      </div>
    </div>
  );
}
