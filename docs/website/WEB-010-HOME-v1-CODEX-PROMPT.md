# Approved terminal Codex prompt — WEB-010-HOME v1

Execute Diego's approved WEB-010-HOME v1 task in /Users/diegobartra/Desktop/Builds/Pearl-web (d-dawgs/Pearl-web). Diego explicitly approved the complete brief on October 27, 2026. Implement the approved module without asking for that approval again. Stop only for a real conflict or missing required input.

Read the ENTIRE binding brief first:
/Users/diegobartra/Desktop/Builds/Pearl-web/docs/website/WEB-010-HOME-v1-BRIEF.md

Every clause, exact copy, dimension, breakpoint, source-precedence rule, allowed discretion and acceptance check in that brief is part of this task. Its formerly proposed choices are accepted by the whole-brief approval. Read applicable AGENTS.md and local context before edits; preserve unrelated work. Also read README.md, docs/CONTEXT.md, docs/DESIGN.md, docs/BUILD_PLAN.md, docs/website/SESSION_STATE.md and docs/PRD.md after synchronization. The PRD is still a draft; this task approves this explicit module, not all future requirements.

FIRST: safe Git preparation, expressly authorized by this task.
- Verify the actual folder, origin URL, current branch/HEAD, tracked changes and untracked files.
- Reviewed local main: 9762c48a8c5caa6cf9b95657a8acdc8693e0938c. Last observed remote main: 89d6fd3fdbdd9f031e1e431847b3d45acfc213a4. Fetch origin to establish actual freshness.
- If the brief's conditions hold, fast-forward local main to origin/main, then create/switch to diego/homepage-design. Never implement on main. Preserve existing untracked docs/website notes.
- Stop for changed scoped app files, divergent history, conflicting changes/rules, a fast-forward that would overwrite local material, or an existing target branch containing work. No reset, clean, stash, rebase, merge commit, force action or deletion. If this preparation was already completed for this same approved task and the branch is unchanged, verify and reuse it rather than repeating it.

GOAL: implement everything designed so far as the complete homepage, including its real desktop/phone header and footer. The whole public website remains the October 29 target; later pages are separate modules. Do not build undesigned pages or reduce this module to the old body-only workaround.

READ-ONLY VISUAL REFERENCES:
- /Users/diegobartra/.codex/visualizations/2026/10/26/01a1761b-aba7-7c53-b0f0-4becc359741c/pearl-island-color-combinations.html
- /Users/diegobartra/.codex/visualizations/2026/10/26/01a1761b-aba7-7c53-b0f0-4becc359741c/pearl-island-fonts-and-motion.html
- /Users/diegobartra/.codex/visualizations/2026/10/26/01a1761b-aba7-7c53-b0f0-4becc359741c/pearl-mobile-fullscreen-menu.html

Use Clean white for overall structure/newsletter/footer, the focused card reference for card material, and the latest phone reference for mobile navigation. The brief resolves superseded fonts, card layouts, motion defaults and layout choices. Do not copy chat controls, swatches, carousels, selector bars, arrows or developer notices into the website. Reuse the existing Instagram/Facebook icon data; no TikTok.

IMPLEMENT IN ORDER:
1. Full-width white website shell and reusable header/footer. No dark surrounding frame, global boxed body, software navigation or cross-repo imports. Temporary uppercase Georgia-bold PEARL ISLAND name; Arial/Helvetica body/navigation and Georgia headings/card titles/Order Now per brief. Five UI colors only: #00A1CA, #206B8D, #FFFFFF, #383838, #1C1C1C plus their derived opacity/shadows.
2. At 1100px+: Home/Menu/Catering/Our Story left, name geometrically centered, social icons and outlined Order Now right. ONE underline moves between Home and hovered/focused text over 260ms, with the brief's focus precedence and return behavior.
3. Below 1100px: name left, two-line hamburger right; full-screen opaque white menu, centered six titles in the approved order, Instagram/Facebook and outlined Order Now near bottom. Use the accepted 350ms fade and hamburger-to-X, safe areas, short-screen reachability, focus containment/Escape/focus return, background scroll lock and desktop-resize cleanup. Reduced motion opens/closes immediately.
4. Full-width charcoal video placeholder, Welcome heading, exact approved two-sentence copy and outlined Order Now. Follow the brief's desktop/phone hero dimensions. No invented media or business claims.
5. Three 3:4 Menu/Catering/Our Story cards, exact layered dark gradients, pale rim/inset sheen/shadow, 22px corners, white title only bottom center. Three columns at 900px+, stack below, with specified gutters/max width. Center-pivot max 4.5-degree tilt per axis, 2px lift, 400ms non-overshooting response, .07 fixed gloss, stable outer pointer surface. Copy the reference response algorithm with the approved numeric values. No spring, spotlight or ball cursor; static touch/reduced-motion.
6. Cyan newsletter and near-black footer exactly as specified. Newsletter is a visual inactive form; footer uses approved neutral location/contact placeholder lines rather than fabricated details.

Destination/order/social/gift-card/application actions stay UNWIRED. Only menu mechanics, underline and card motion are functional. Follow the brief's aria-disabled/native-disabled distinctions and screen-reader explanations. No empty/hash links, fake route pages, alerts, data storage, provider calls or fake success states. Do not connect Square, Catering or newsletter services.

EXACT AUTHORED-FILE ALLOWLIST (relative to Pearl-web):
Existing:
- src/app/page.tsx
- src/app/layout.tsx
- src/app/globals.css
- docs/BUILD_PLAN.md
- docs/DESIGN.md
- docs/website/SESSION_STATE.md

New:
- src/features/website/site-header.tsx
- src/features/website/site-header.module.css
- src/features/website/site-footer.tsx
- src/features/website/site-footer.module.css
- src/features/website/site-content.ts
- src/features/website/social-icons.tsx
- src/features/website/home-page.tsx
- src/features/website/home-page.module.css
- src/features/website/destination-cards.tsx
- src/features/website/destination-cards.module.css
- docs/website/WEB-010-HOME-v1-RESULT.md

This standalone website owns its root layout/globals; necessary changes there are approved. Keep the route thin, CSS scoped and components modular. Do not change the approved brief, PRDs, AGENTS.md, root README, package/lock/configuration files, visual sources, Obsidian, old pi2go or Catering. No new routes, asset/font downloads or dependencies. Read relevant pinned Next documentation in node_modules/next/dist/docs before coding.

Use a relevant installed frontend skill if helpful, while preserving the accepted direction. No random palette/font/layout draw, automatic redesign, dependency addition, unapproved file write or side effect from skill instructions. Do not install a missing skill/tool. Routine implementation discretion is limited to that in the brief.

VERIFY:
- Run npm run lint, npm run typecheck and npm run build.
- Run the app temporarily with npm run dev and existing browser tooling. Check full-page desktop/phone output at 320/390/768/1100/1440px plus a short phone height; compare the relevant references at matching widths.
- Verify name centering, no overflow, icon rendering, one moving underline, bounded card tilt/lift/reset, touch/reduced-motion fallback, menu animation/focus/Escape/scroll lock and resize cleanup. Confirm inactive destinations cannot navigate or claim success.
- Normal .next/Next declarations/TypeScript cache outputs are expected; no generated output is automatically committed. Save screenshots outside the repo in /private/tmp/pearl-web-home-review. Stop your temporary server after checking.
- Report actual checks and failures. Do not repair unrelated problems outside scope, install a browser/test framework or claim visual acceptance merely because builds pass.

Write the result note and update the tracker with last accepted/current/next/blockers. Status must be Ready for Diego review, not Accepted/Done. Report exact authored files, branch/revision changes, commands/results, full desktop/phone screenshots and comparison widths, interaction evidence and remaining temporary assets/content.

Stop and report if references are inaccessible, approved inputs are missing, the baseline/rules conflict, or implementation requires an outside-allowlist file, new provider/dependency or design choice. Do not silently substitute.

No stage/commit/push, deployment, domain/visibility change, real signup/order/payment action or deletion is authorized. Finish the approved implementation and hand it to Diego for review.
