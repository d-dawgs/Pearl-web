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

  useEffect(() => {
    const viewport = viewportRef.current;
    const active = [...(rowRef.current?.querySelectorAll<HTMLButtonElement>("[role=tab]") ?? [])]
      .find((tab) => tab.dataset.categoryId === activeId);
    if (!viewport || !active) return;
    const left = active.offsetLeft;
    const right = left + active.offsetWidth;
    const behavior = matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
    if (left < viewport.scrollLeft) viewport.scrollTo({ left, behavior });
    else if (right > viewport.scrollLeft + viewport.clientWidth) {
      viewport.scrollTo({ left: right - viewport.clientWidth, behavior });
    }
  }, [activeId]);

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
    <div className={styles.viewport} ref={viewportRef}>
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
            aria-current={activeId === category.id ? "true" : undefined}
            aria-controls="menu-category-panel"
            tabIndex={activeId === category.id ? 0 : -1}
            onClick={() => onSelect(category.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >{category.label}</button>
        ))}
      </div>
    </div>
  );
}
