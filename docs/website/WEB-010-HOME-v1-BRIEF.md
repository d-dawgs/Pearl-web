# WEB-010-HOME v1 — Build the homepage designed so far

**Approved by Diego — October 27, 2026.** Diego replied 'approve' to the request to approve the entire WEB-010-HOME v1 brief. Every choice labeled proposed below is accepted for this module. This brief is the binding implementation contract; it is not proof that implementation is complete.

## Outcome

Build the complete current homepage design in standalone Pearl-web: desktop and phone headers, navigation motion, video placeholder, Welcome, three glossy portrait cards with selected motion, newsletter presentation and dark footer. This is the first module of the whole-website October 29 target. Other public pages remain explicit next modules; no designs or content for them are invented here.

Diego's “that's fine for now” accepts the latest phone preview and its six menu titles for this first build, including proposed 350ms fade and hamburger-to-X. It does not imply approval of the newly proposed details below until this complete brief is accepted.

## Repository, baseline and sources

Repository: /Users/diegobartra/Desktop/Builds/Pearl-web, d-dawgs/Pearl-web, intentionally public.
Local HEAD inspected October 27: 9762c48a8c5caa6cf9b95657a8acdc8693e0938c on main; blank app; only docs/website untracked. Last observed GitHub main: 89d6fd3fdbdd9f031e1e431847b3d45acfc213a4, which adds PRD/context changes. A new remote check was not performed in this preparation. Do not assume a cached tracking label proves freshness.

Read AGENTS.md, README.md, docs/PRD.md after safe synchronization, docs/CONTEXT.md, docs/DESIGN.md, docs/BUILD_PLAN.md, docs/website/REVIEW-2026-10-27.md, WEB-009-v2-BRIEF.md and SESSION_STATE.md. PRD remains a draft; this task approves only this explicit module, not the entire future product.

Read-only visual inputs:
1. /Users/diegobartra/.codex/visualizations/2026/10/26/01a1761b-aba7-7c53-b0f0-4becc359741c/pearl-island-color-combinations.html — Clean white structure, Welcome/newsletter/footer, social icon assets. Earlier cards and header font are superseded.
2. /Users/diegobartra/.codex/visualizations/2026/10/26/01a1761b-aba7-7c53-b0f0-4becc359741c/pearl-island-fonts-and-motion.html — exact selected card gradients/rim/shadow/gloss and pointer algorithm. Script fonts and default numeric motion values are superseded.
3. /Users/diegobartra/.codex/visualizations/2026/10/26/01a1761b-aba7-7c53-b0f0-4becc359741c/pearl-mobile-fullscreen-menu.html — accepted phone header/menu/350ms motion and existing Instagram/Facebook mask assets.

This brief consolidates the source precedence: its explicit choices win; phone reference wins for phone header/menu; focused card reference wins for cards; Clean white wins for remaining page organization. Preview controls, labels outside the depicted site, carousels, font selectors and overlay arrows are not website UI. The builder must compare against the relevant reference at equal widths and produce one coherent full-page result; it may not ask the old body-only implementation to serve as the reference.

## Complete visible design

### Foundation and typography — proposed resolutions

- White page, full-width header/hero/newsletter/footer; no surrounding dark software shell, global 64rem content box or Website/Catering/Account/Staff bar.
- Five UI colors only: #00A1CA cyan, #206B8D blue, #FFFFFF white, #383838 body, #1C1C1C near-black, plus derived opacity/gradients/shadows.
- Resolve Clean white placement: white header/body, blue name/current navigation/headings, charcoal ordinary text/icons, cyan newsletter with near-black text, near-black footer with white text.
- Temporary PEARL ISLAND name: uppercase Georgia bold, as in accepted phone preview. It is a documented placeholder for the original textured logo lettering, not an exact identified font or full circular logo replacement. No font download or Oleo/Pacifico.
- Arial/Helvetica/system sans for navigation/body/forms. Georgia regular for section headings, card titles and outlined Order Now text, following the studies. No new font library.
- Desktop heading/name scale can respond within the visual reference's established hierarchy; no typography redesign. Component spacing/size must adapt without clipping.

### Desktop/tablet header

- At widths 1100px and above, three balanced columns: Home/Menu/Catering/Our Story left; wordmark geometrically centered; Instagram camera, plain Facebook f and outlined Order Now right.
- Below 1100px use the accepted phone-style header/menu rather than squeezing/wrapping desktop navigation. This breakpoint is proposed for approval here.
- One blue underline at Home. On pointer hover or keyboard focus, the same line travels to the target and adapts to text width over 260ms cubic-bezier(.22,.61,.36,1). Focus takes precedence while keyboard focus remains in navigation; otherwise hovered item, otherwise Home. No second underline.
- Header remains in normal document flow while closed; no sticky/scrolling header behavior added.

### Phone menu

- White header, wordmark left, two-line hamburger right; no Order Now in the closed phone header.
- Opening creates a viewport-covering white menu over the page. Name stays left, close X right. Fade the overlay/content together over 350ms cubic-bezier(.22,.61,.36,1); morph the two lines into X over the same period. Reverse on close; no spring/slide/bounce/stagger.
- Links centered vertically in order: Home, Menu, Catering, Our Story, Pearl Island 2 Go, Community. Instagram/Facebook below; outlined Order Now near bottom. Gift Cards/Apply Here stay in footer.
- Fully open surface opaque. Lock background scroll and interaction; keyboard focus confined to controls; Escape and X close, restoring trigger focus. Respect safe areas; allow the menu itself to scroll on short screens so every control stays reachable. Changing to desktop closes the overlay and releases its scroll lock.
- Reduced motion: immediate open/close and icon state change. Preserve readable static state.

### Hero and Welcome

- Hero is full width with charcoal background and centered “Video placeholder”; no real video, copied JRK footage, stock imagery or network media.
- Proposed dimensions: desktop hero clamp(320px, 28vw, 520px); phone hero 110vw, capped at 500px. This preserves the taller phone framing in the supplied reference. No real-media crop behavior is implemented yet.
- Centered white Welcome section, compact spacing, heading “Welcome to Pearl Island”.
- Proposed exact two-sentence temporary copy: “Pearl Island serves Caribbean food in Charlottesville. Explore our carryout, catering, and the story behind it.”
- Outlined Order Now below the copy. Do not add invented menu items, prices, awards, hours, guarantees or testimonials.

### Destination cards

- Order: Menu, Catering, Our Story. Three equal columns at 900px+; a single centered stack below 900px, max card width 420px. Each stable outer stage has a 3:4 ratio. Proposed gutters: 32px desktop, 20px phone; desktop gap 25px, stacked gap 24px.
- Copy exact layered gradient material/rim/shadow from the focused reference. Rounded corners 22px, pale border/inset sheen, fixed leading gloss .07; no saturated replacement tile fills.
- Only white Georgia title at bottom center, no descriptions, arrows, badge or nested CTA; gradients are intentional image placeholders without big “Image placeholder” overlays.
- Native cursor. Center pivot; maximum 4.5 degrees per axis, 2px lift; 400ms smooth non-overshooting response. Reference alpha=1-exp(-3*dt/0.4), dt capped .032 seconds; perspective 1000px. Use untransformed outer pointer area, normalize coordinates, clamp tilt and return to neutral on leave/cancel.
- Touch/coarse pointers and reduced motion: no tilt or lift. No spotlight, cursor ball, spring or animation library.

### Newsletter and footer

- Cyan newsletter directly after cards: “Stay in the loop”, “Pearl Island updates”, white email field with “Email address” placeholder, near-black Sign Up button with white text. Desktop form row; stack below 600px.
- Signup remains inactive. Use a disabled email field and disabled Sign Up button with full-opacity styling and an accessible explanation that signup is not connected. No data stored or sent, no success message.
- Near-black footer follows immediately. Follow Clean white's three-column organization: page titles; Location with neutral placeholder lines and Pearl Island 2 Go; Contact with neutral placeholder line, socials, Gift Cards and Apply Here. Use decorative placeholder lines rather than inventing contact/address/hours. Place real verified details in a later content task.
- At widths below 600px, footer page-title group wraps across full width, then Location/Contact in two columns; at below 360px stack those columns. No extra promotional sections.

## Inactive actions

Only menu open/close, keyboard behavior, moving underline and card motion work in this task. All destination/order/social/gift-card/application actions remain unwired. Use buttons with aria-disabled=true and no navigation handler; do not set native disabled on desktop nav, because hover/focus is demonstrated. Include screen-reader descriptions for inactive actions. Card surfaces may be noninteractive articles until wiring.

No empty href, href=#, alert, fake route, placeholder page, provider call, order submission or fake newsletter result. Inactive styling stays visually faithful; no large developer banner or warnings. This follows Diego's page-by-page then wiring workflow. Future Square carryout and separate catering handoff are recorded in content/context only.

## Proposed Git preparation, separately included in this approval

Terminal Codex may inspect current status, fetch origin, fast-forward local main to origin/main, then create and switch to diego/homepage-design. This approval applies to the terminal task only; the translator does not perform it.

Conditions: remote URL must be d-dawgs/Pearl-web; tracked app files must still match the reviewed blank foundation; no conflicting local changes, divergent commits, changed applicable rules or changes to scoped app files. Preserve local untracked docs/website. If a fast-forward would overwrite any local material, if branch already exists with work, if the repo differs materially or history diverges, stop and report. No reset, clean, stash, force operation, merge commit, rebase, stage/commit/push or deletion. Do not code on main.

## Exact authored-file allowlist

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

Keep route wrapper thin; scope styles to website components; use existing TypeScript/React/Next and plain CSS. Root layout/globals are website-owned here, so edit them only as necessary for this approved page shell/accessibility/body reset. Header and footer should be reusable for later public pages.

Do not modify PRDs, AGENTS.md, root README, package/lock/configuration files, either sibling repository, old pi2go, Obsidian or read-only visual references. No new routes or downloaded production assets. Reuse the existing icon data from references; do not add an icon dependency.

## Ordered work and bounded discretion

1. Inspect rules/status and references, perform only approved conditional Git preparation, read local pinned Next documentation relevant to the implementation.
2. Build full-width shell and both headers; then hero/Welcome; then exact cards/motion; then newsletter/footer.
3. Implement menu focus/scroll/reduced-motion handling and inactive semantics, without destination wiring.
4. Verify, document results and update current/next tracker. Set Ready for Diego review; never Accepted/Done without Diego.

Routine discretion: component internals, semantic markup, CSS selectors, focus-management mechanics and responsive interpolation within specified scales/layout. No new design direction, copy, provider, dependency or expanded scope.

## Acceptance, verification and generated outputs

- The entire homepage is rendered, with correct full-width shell and section order. Compare each area against the corresponding reference at equal widths; final report must show complete desktop/phone screenshots, not only isolated components.
- Check 320/390/768/1100/1440px widths and a short phone height: no horizontal overflow or unreachable controls. At 390px the closed/open header matches accepted phone placement. At 1440px the name is centered independently of unequal side content.
- Verify one underline on hover/focus/return; stable card pointer area, bounded tilt/lift/reset; no motion on touch/reduced-motion; menu close/Escape/Tab loop/focus return/background scroll lock and desktop-resize cleanup.
- Instagram/Facebook icon shapes render correctly. Buttons remain outlined where specified; no TikTok or preview controls. Disabled destinations do not navigate or pretend to work.
- Run npm run lint, npm run typecheck, npm run build. Use npm run dev plus existing browser tooling for visual/interaction review. No dependency install or browser download is included; report missing tools rather than broadening scope.
- Expected generated outputs: .next build/dev files, Next-generated declarations and TypeScript cache files as needed. Screenshots go outside the repo under /private/tmp/pearl-web-home-review. Do not commit generated output. Stop the temporary server after verification.
- Report exact authored files, actual commands/results, before/after branch and revisions, comparison widths/screenshots, behavior evidence and remaining limitations. Meaningful interaction checks are appropriate; don't add a broad test framework or implementation-mirroring tests.
- Technical success means Ready for Diego review. Temporary lettering, hero/card photos and footer details remain explicit follow-up inputs, not a finished production-content claim.

Stop for missing references/accepted inputs, relevant baseline conflict, required outside-allowlist edit, dependency/provider requirement or changed instructions. Report unrelated failures without repairing unrelated code.

No commit/push, deployment, domain/visibility change, live signup/order/payment action or deletion is included. After acceptance, remaining website page designs/builds continue under the whole-site plan.


## Approval and prompt delivery check

Refreshed October 27 after explicit whole-brief approval: local main remains 9762c48a8c5caa6cf9b95657a8acdc8693e0938c, no tracked changes, only docs/website untracked. All three visual-reference files are accessible. All ten known Obsidian hashes still match, with no new notes. No fresh GitHub check is claimed; the approved terminal task performs the conditional fetch/fast-forward. The version-matched CODEX-PROMPT carries the exact authored allowlist, source precedence, accepted parameters, checks, generated-output expectations, stop conditions and Git/live-action limits. No application or Git action was performed by the translator.
