# WEB-009 v2 — Whole-website presentation brief

**Draft — awaiting decisions and approval of the complete revised brief. Not an executable coding prompt.**

Target: October 29, 2026. Product: d-dawgs/Pearl-web. Diego leads website; Diego and Kean make product decisions. Scope is the entire public website, delivered page by page. Production launch is separate.

## Baseline and sources

October 27: local main 9762c48a8c5caa6cf9b95657a8acdc8693e0938c; remote main 89d6fd3fdbdd9f031e1e431847b3d45acfc213a4. Remote adds the draft PRD and updated README/AGENTS/CONTEXT; app is blank. Synchronization/feature branch require their own authorization. Recheck actual baseline before any final coding prompt.

Sources read: complete uploaded website PRD v0.3; current independent app and DESIGN/BUILD_PLAN; remote instructions/context; direct October 26–27 choices; October 25 team direction. Ten known Obsidian notes are unchanged. See REVIEW-2026-10-27.md for limitations/conflicts.

References outside the old repo:
- /Users/diegobartra/.codex/visualizations/2026/10/26/01a1761b-aba7-7c53-b0f0-4becc359741c/pearl-island-color-combinations.html — whole-page structure/white option; earlier font/cards are superseded.
- /Users/diegobartra/.codex/visualizations/2026/10/26/01a1761b-aba7-7c53-b0f0-4becc359741c/pearl-island-fonts-and-motion.html — current card material; selected numbers below override defaults; script name is superseded.
- /Users/diegobartra/.codex/visualizations/2026/10/26/01a1761b-aba7-7c53-b0f0-4becc359741c/pearl-mobile-navigation.html — two unapproved mobile proposals.

Consolidate one complete desktop/mobile reference rather than asking a builder to reconcile competing studies. Chat carousel controls/arrows/font selectors/annotations are not website UI.

## Proposed whole-site sequence

| Module | Proposed route | Visible result | State |
| --- | --- | --- | --- |
| Foundation + Home | / | Public header, full-width shell, hero, Welcome, cards, newsletter, footer | Planning |
| Catering | /catering | Service explanation, approved offerings/how it works, handoff toward separate software | Not started |
| Pearl Island 2 Go | /2go | Carryout information, verified practical details, Square action | Not started |
| Menu | /menu | Illustrated menu breakdown; no invented items/prices | Not started |
| Our Story | /our-story | Concise sourced story | Not started |
| Community | /community | Confirmed community content; page versus section still to accept | Not started |
| Other destinations | External/footer | Gift Cards, Apply Here, contact information | Not started |
| Wiring + full-site review | All accepted routes | Approved internal links, confirmed external actions, presentation rehearsal | Not started |

Routes and Community as a page are proposals. Order Now means Square carryout. Website Catering is marketing, not ordering/accounts/staff. Exact external destinations, tab behavior and demo handoff remain to approve. The PRD proposes Spoonfed for production until the new Catering app is live; don't silently switch a real customer destination to a demo.

## Recorded homepage choices

- Public website fills the viewport width; no old software navigation, surrounding dark frame or boxed-body workaround. Own root layout/header/styles in this independent repo.
- Desktop left: Home/Menu/Catering/Our Story. Center: PEARL ISLAND. Right: Instagram camera, Facebook f, outlined Order Now; no TikTok. Other destinations available through agreed footer/menu.
- One underline marks the current page, moves to hovered/focused navigation text, returns when neither interaction remains. Never two simultaneous underlines; reduced-motion fallback.
- Name should resemble the supplied bold uppercase textured logo lettering. Exact source font/vector is unknown. Diego permits a documented temporary uppercase wordmark; don't claim exact identity, return to Oleo/Pacifico or replace it with the full circular logo silently.
- Wide hero VIDEO area, initially placeholder. Concise two/three-sentence Welcome explains who/what they serve, plus Order Now. Exact copy still needs approval.
- Three Menu/Catering/Our Story cards, 3:4 portrait, full-media selected dark layered gradients until photos arrive. Pale edge/inset sheen/subtle shadow; title only bottom center. No descriptions/arrows/badges/inner buttons.
- Motion: max 4.5 degrees per axis around center; 2px lift; smooth non-overshooting 400ms follow; fixed leading gloss 0.07; normal cursor; no spring/spotlight/ball. Stable untransformed pointer area, neutral return on leave, static touch/reduced-motion. Reference response alpha = 1 - exp(-3 * dt / 0.4), dt capped at 0.032 seconds.
- Newsletter then dark footer directly after cards. Five UI colors: #00A1CA, #206B8D, #FFFFFF, #383838, #1C1C1C and derived transparency/shadows. White header/cyan newsletter/near-black footer placement is still a proposal to confirm. JRK informs organization only, not branding/media/text/yellow/green/cream.
- Initial controls unwired until wiring approved. No fake signup success or empty/hash destinations. Status explanations belong in review notes, not a prominent developer banner changing the design. Accessible inactive behavior needs explicit agreement.

Approved October 27: gradient cards, video placeholder and documented temporary uppercase wordmark. Missing production media no longer blocks that initial phase. A specific temporary font is not yet selected.

## Outstanding decisions

1. Mobile pattern selected by Diego: reference-style full-screen overlay described below. Confirm proposed motion timing and menu link inventory; cards stack/hero sizing/footer pattern still need consolidation.
2. Accept/revise proposed routes and Community page versus section.
3. Approve complete homepage reference, palette placement, temporary font and exact copy. For each later page, approve sections, content and placeholder treatment before building it. PRD facts marked unverified are not automatically publishable.
4. Decide when navigation becomes active; confirm actual Square/social/gift-card/application/catering links and same/new-tab behavior. Decide whether presentation needs hosting or can run locally. Deployment remains separate.
5. Review PRD draft status/conflicts with Kean. Do not rewrite PRD without instruction.

## Proposed exact file boundaries

These paths are a proposal for planning. Approve the appropriate subset for each module; this draft is not permission to edit them.

Existing potential edits:
- src/app/page.tsx
- src/app/layout.tsx
- src/app/globals.css
- docs/BUILD_PLAN.md
- docs/CONTEXT.md
- docs/DESIGN.md

New homepage/shared files:
- src/features/website/site-header.tsx
- src/features/website/site-header.module.css
- src/features/website/site-footer.tsx
- src/features/website/site-footer.module.css
- src/features/website/site-content.ts
- src/features/website/home-page.tsx
- src/features/website/home-page.module.css
- src/features/website/destination-cards.tsx
- src/features/website/destination-cards.module.css

Later page files, each needing its own accepted design/brief:
- src/app/catering/page.tsx; src/features/website/catering-page.tsx; src/features/website/catering-page.module.css
- src/app/2go/page.tsx; src/features/website/carryout-page.tsx; src/features/website/carryout-page.module.css
- src/app/menu/page.tsx; src/features/website/menu-page.tsx; src/features/website/menu-page.module.css
- src/app/our-story/page.tsx; src/features/website/story-page.tsx; src/features/website/story-page.module.css
- src/app/community/page.tsx; src/features/website/community-page.tsx; src/features/website/community-page.module.css

Notes: preserve docs/website/WEB-009-v1-BRIEF.md; create docs/website/WEB-009-v3-BRIEF.md for the next consolidation and docs/website/SESSION_STATE.md for progress. No PRD/AGENTS rewrite or unspecified asset/font download is included. Name additional files in a revised brief rather than a wildcard.

Protected: all sibling/old-repo sources, Obsidian, dependencies/lockfiles/configuration, unapproved routes, data/auth/payment/AI/email/calendar/newsletter providers. No cross-repo shared package. Keep routes thin and feature CSS scoped.

## Implementation sequence after approval

1. Authorized safe synchronization and chosen feature branch; preserve local notes/other work. No reset/stash/overwrite shortcut.
2. Resolve remaining choices and approve a consolidated full desktop/mobile reference plus named homepage brief.
3. Within homepage task: shell/header → hero/Welcome → cards/motion → newsletter/footer. Review complete Home before next page.
4. Repeat content/design → file-bounded brief approval → build → evidence → Diego acceptance for each remaining page.
5. Wire accepted internal pages, then explicitly approved external actions. Newsletter integration is separate.
6. Whole-site device/keyboard/content checks, demonstration rehearsal and blocker fixes. A page placeholder alone is not a completed page.

Proposed schedule: Oct 27 establish whole-site scope/reference and build accepted foundation/Home; Oct 28 approved remaining pages and wiring; Oct 29 rehearsal/fixes. This is a sequence recommendation, not a time estimate or guarantee. Report missing content/approval/time constraints against the full target and let Diego decide; don't silently reduce it.

## Acceptance, checks and report

- One visible tracker: last accepted, current, next, blockers. States: Not started → In progress → Ready for Diego review → Accepted, or Blocked with reason. Only Diego accepts completion.
- All agreed destinations explicitly accounted for. No invented business claims/menu/prices, false successful actions or live integration claims.
- Match approved full desktop/mobile reference at equal widths: shell, header, type, section order, card material/proportions, newsletter/footer. No previous rejected variants or preview controls.
- Check 320/390/768/1280+ widths: no horizontal overflow, usable navigation, headings/focus/keyboard, suitable contrast. Chosen mobile menu must open/close and manage focus appropriately.
- Verify single underline hover/focus/return; cards track/lift/return without overshoot; touch/reduced-motion static.
- After wiring, check all internal paths and approved external destinations. Carryout and catering remain distinct. Newsletter cannot pretend to subscribe.
- Application changes: npm run lint, npm run typecheck, npm run build plus relevant visual/interaction checks. Normal .next/TypeScript generated outputs may occur; no automatic commit. Report unrelated failures without fixing outside scope.
- Evidence: exact authored files, commands actually run/results, screenshots/reference widths, interaction checks, outstanding assets/content, and Ready for Diego review status.

Proposed low-level discretion: internal component structure, semantic markup, selectors and requestAnimationFrame code inside accepted appearance/behavior/files. No discretion to replace branding, choose business rules/assets/providers or broaden scope. Stop for relevant baseline conflicts, missing accepted inputs, outside-file dependencies or changed requirements.

No Git mutations/commit/push, installs, deployment/domain/live actions or deletion are authorized by this draft. Diego chooses checkpoints. Recommendations and option previews are not decisions until accepted.


## October 27 revision — selected phone navigation

Direct source: Diego supplied six screenshots from a mobile JRK recording and explicitly requested that phone layout and an animation. This supersedes the earlier Compact menu/Visible links proposals. The older carousel selections are not renewed approval of Oleo or a complete task.

Selected visual structure:
- Phone header: Pearl Island wordmark LEFT, two horizontal menu strokes RIGHT. This is the phone-specific exception to the centered desktop name. No Order Now button in the closed phone header, following the supplied reference.
- Opening the menu covers the website viewport with an opaque white navigation surface. Wordmark stays top left; the menu button becomes an X top right.
- Large, vertically arranged navigation titles sit centrally. Instagram and Facebook icons sit below; outlined Order Now near the bottom. No TikTok. Keep Pearl Island palette/identity, not JRK green/cream/logo/photos/copy.
- Header location does not jump as the menu opens/closes. The background becomes visible through the menu only DURING the transition; fully open menu is opaque, not a permanently translucent layer.
- Real implementation must prevent scrolling/interacting behind the open menu, support Escape/close/focus return, keep keyboard focus in the menu controls, respect safe-area insets and accommodate short screens without cutting off links or Order Now. Demo preview is a contained phone, not evidence of production viewport/body-scroll behavior.

Animation PROPOSAL, awaiting Diego review:
- 350ms ease-out fade in/out of the white overlay, links/socials/CTA together. The two hamburger lines rotate into X and reverse, over the same duration.
- No spring, bounce, sliding drawer or staggered entrance added. Still screenshots do not establish JRK's exact timing/easing/sequence; none is claimed as measured.
- Reduced motion: immediate open/close with no animated travel/fade.
- The preview offers a duration control so Diego can adjust the feel before selecting it.

Link inventory PROPOSAL in the preview: Home, Menu, Catering, Our Story, Pearl Island 2 Go, Community. Gift Cards/Apply Here remain footer destinations in this proposal. Confirm this inventory; the reference business's Locations submenu does not authorize adding our own submenu.

New preview: /Users/diegobartra/.codex/visualizations/2026/10/26/01a1761b-aba7-7c53-b0f0-4becc359741c/pearl-mobile-fullscreen-menu.html. It demonstrates opening/closing only; destination actions remain unwired, consistent with the staged build. Temporary wordmark is not the original identified font.

Read-only refresh: local website HEAD remains 9762c48a8c5caa6cf9b95657a8acdc8693e0938c; only docs/website was untracked before this update. All ten known Obsidian source hashes still match; no new Markdown sources. No new GitHub refresh is claimed in this visual revision. No app code, PRD, AGENTS, sibling repo, Obsidian, Git state or deployment changed.
