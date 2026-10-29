# Homepage layout change: match the JRK homepage layout

Request from Diego for the Pearl Island website translator · October 27, 2026
Attach with this file: screenshots of the current Pearl Island homepage and the JRK homepage (eatjrk.com).

## What I want

Use the **extract-design** skill to copy the **layout of the JRK homepage only** onto our existing homepage. Specifically:

- **Section lengths:** each section's height and spacing should match JRK's, so the page has a similar overall length and rhythm.
- **Title placement:** headings and text should be positioned the way JRK positions them.
- **Cards:** our 3 cards (Menu, Catering, Our Story) replace JRK's photo-grid section.

Everything else stays ours. I'm keeping all my current components, colors, fonts, copy and behavior. This is a layout change, not a redesign.

## Where things stand

- Repo: /Users/diegobartra/Desktop/Builds/Pearl-web, branch diego/homepage-design. The homepage work is uncommitted.
- WEB-010-HOME v1 is built and Ready for Diego review. I haven't accepted it yet. This request changes its layout.
- Homepage files: src/features/website/home-page.tsx, home-page.module.css, destination-cards.module.css, site-header.module.css and site-footer.module.css.

## Section-by-section mapping

| JRK section | Our component | What changes |
| --- | --- | --- |
| Header: links left, logo center, socials and Order Now right | Our header (same structure) | Match JRK's header height and spacing only. No TikTok. |
| Full-width hero photo | Our video placeholder | Match JRK's hero height. |
| Welcome: two columns. Left side has the heading, paragraph and Order Now, left-aligned and vertically centered. Right side has a large photo, on a tinted background band. | Our Welcome (currently centered, one column) | Move to JRK's two-column placement, with heading, text and button left-aligned in the left column. Match the section's height and padding. |
| Photo grid: square photos, 3 columns, several rows | Our 3 cards | Put our 3 cards here. Match JRK's grid side margins, gaps and top/bottom spacing. Keep our card look and motion. |
| Background photo section (palm trees) | None | Skip it. Don't add anything. |
| Newsletter (centered) | Our newsletter | See open question 4. |
| Footer (multi-column) | Our footer | See open question 4. |

## Keep exactly as is

- All components and their content: wordmark, nav links, icons, Order Now, video placeholder, Welcome copy, cards, newsletter and footer.
- The five colors and current fonts.
- Card gradients, 3:4 shape (unless I change it in question 3), tilt motion and title at bottom center.
- The moving underline, phone menu, inactive buttons and accessibility behavior approved in WEB-010.

## Don't copy from JRK

Their colors (cream, green), fonts, logo, photos, text, TikTok icon, code, palm section and location columns. Layout and structure only, as the PRD says.

## How I want the skill used (proposed steps)

1. **Measure only, no code changes.** Codex runs `$extract-design` on https://eatjrk.com at desktop (1440px) and phone (390px) widths, with screenshots. Raw output and screenshots go outside the repo, e.g. /private/tmp/jrk-extract.
2. **Fill gaps the skill misses.** The skill mainly captures spacing and size tokens. Codex should measure section heights, padding, content width, column split and heading positions in the browser for anything the skill doesn't report.
3. **Write one reference file.** Codex writes docs/website/JRK-LAYOUT-REFERENCE.md: for each mapped section, its height, padding, content width and side margins, columns and heading alignment, at both widths. No colors, fonts or content. Then it stops.
4. **I review the measurements.**
5. **Build.** Codex applies only those layout values to our homepage components, compares the result against JRK at equal widths with screenshots, and runs lint, typecheck and build. Status goes to Ready for Diego review.

## Open questions to ask me before writing the brief

1. **Welcome right column:** JRK has a photo there and we don't. Should it be a gray placeholder block (like the hero's video placeholder), text only left-aligned with no right column, or something else?
2. **Welcome background:** JRK uses a tinted band. Should ours stay white, or use a light tint from our five colors?
3. **Cards:** keep our 3:4 portrait shape or switch to JRK's square tiles? With 3 cards we only fill one row, so this section will be shorter than JRK's multi-row grid. Is that fine, or should the cards be larger?
4. **Newsletter and footer:** match JRK's heights and spacing too, or leave them as they are?
5. **Phone layout:** match JRK's phone layout as well, or desktop only for now?
6. **Running the skill:** extract-design downloads and runs a third-party npm package (designlang) when it runs. Is that approved, or should Codex measure with existing browser tooling only? Also confirm the skill shows up in my Codex session.
7. **Checkpoint:** commit WEB-010 v1 before this change, so it's easy to go back?

## What I need from the translator

1. Confirm you understand the request.
2. Ask me the open questions above, each with options plus "type your own".
3. Write a complete versioned brief for this change, e.g. WEB-010-HOME v2. It needs an exact file allowlist, what changes and what stays, and the measure-first steps.
4. Once I approve the brief, write the terminal Codex prompts as two separate prompts: first measure and stop, then build. Each prompt needs standing guardrails, a done-when checklist and stop-and-ask triggers, delivered as one copy-paste block plus a 2-line change note.
