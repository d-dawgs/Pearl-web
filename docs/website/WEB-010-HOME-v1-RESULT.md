# WEB-010-HOME v1 — implementation result

**Status: Ready for Diego review, not Accepted/Done.** October 27, 2026.

## Scope delivered

Complete currently designed homepage: full-width white website shell; balanced desktop header with one moving underline; accepted animated phone menu with focus and scroll management; charcoal video placeholder; exact temporary Welcome copy; three 3:4 glossy gradient cards with bounded pointer motion; inactive cyan newsletter presentation; near-black footer with neutral contact/location placeholders. All destination, order, social, gift-card and application actions remain unwired. The newsletter field and button are disabled and state that signup is not connected for assistive technology.

The page follows the approved source precedence: WEB-010 brief, phone reference for phone navigation, focused card reference for material/motion, Clean white reference for remaining organization. At 390px, the phone header/menu was compared to the selected phone study. At desktop width, the card gradients, gloss, rim, shadow and title placement were compared with the focused card study; the full page was reviewed at 1440px against Clean white organization. The earlier font, short cards and preview controls were not used.

## Git and authored files

- Before: current checkout `Diego's-branch` and local `main` at `9762c48a8c5caa6cf9b95657a8acdc8693e0938c`; no tracked edits; pre-existing `docs/website/` notes untracked.
- Safe preparation: `git fetch origin` found one fast-forward commit. Its changed paths were only `AGENTS.md`, `README.md`, `docs/CONTEXT.md` and new `docs/PRD.md`; no untracked-path collision or app-file change. Switched to `main`, fast-forwarded to `89d6fd3fdbdd9f031e1e431847b3d45acfc213a4`, then created/switched to `diego/homepage-design`. The extra pre-existing branch was left unchanged.
- After: `diego/homepage-design` at base revision `89d6fd3fdbdd9f031e1e431847b3d45acfc213a4`, with uncommitted implementation. No stage, commit or push.

Authored application files:

- `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css`
- `src/features/website/site-header.tsx`, `site-header.module.css`, `site-footer.tsx`, `site-footer.module.css`, `site-content.ts`, `social-icons.tsx`, `home-page.tsx`, `home-page.module.css`, `destination-cards.tsx`, `destination-cards.module.css`

Authored notes: `docs/BUILD_PLAN.md`, `docs/DESIGN.md`, `docs/website/SESSION_STATE.md`, this result note. All were within the approved allowlist. Other website notes and the draft PRD were preserved.

## Checks and evidence

- `npm run lint` — passed.
- `npm run typecheck` — passed.
- `npm run build` — passed; `/` prerendered as static HTML by Next.js 16.4.2.
- Temporary `npm run dev` attempt found an already running local dev instance on port 3000. That instance was used for an initial look. Final screenshots and interaction checks used a temporary `npm run start -- -p 3002` server from the production build. The initial production browser load requested `/favicon.ico` and received a 404; there is no favicon in the approved file allowlist. No application runtime errors or warnings appeared during the final review.
- Full-page production screenshots at [320px](/private/tmp/pearl-web-home-review/final-home-320.png), [390px](/private/tmp/pearl-web-home-review/final-home-390.png), [768px](/private/tmp/pearl-web-home-review/final-home-768.png), [1100px](/private/tmp/pearl-web-home-review/final-home-1100.png) and [1440px](/private/tmp/pearl-web-home-review/final-home-1440.png). [Open 390px menu](/private/tmp/pearl-web-home-review/final-menu-390-open.png) and [scrolled 320×480 menu](/private/tmp/pearl-web-home-review/final-menu-320-short.png). Screenshots are outside the repository.
- At all five widths, document scroll width equaled viewport width. The desktop wordmark center was measured at x=550/720 for 1100/1440px. The phone header remained 88px high; the hero was 110vw (capped at 500px) below 1100px. Instagram and plain Facebook shapes rendered in header/menu/footer.
- One desktop underline moved from Home to hovered Catering and keyboard-focused Menu, then returned to Home. Its measured widths changed with labels (34.69px Home, 49.14px Catering, 32.53px Menu). The inactive Catering button kept the browser on `/`.
- Card pointer check observed `rotateX(-1.79deg) rotateY(2.69deg) translateY(-1.99px)`, within 4.5°/2px bounds, then movement toward neutral after leaving. Reduced-motion computed transform was `none`; a touch-emulated coarse pointer remained `none` after pointer movement. A touch event on a fine-pointer desktop also left the card static.
- Phone menu became opaque, locked body scroll and made main/footer inert. Opening focused Home. Shift+Tab reached the X then wrapped to Order Now; Escape restored trigger focus. Resizing to desktop closed the menu and released the lock. On 320×480, the menu scroll area was 392px tall with 496px content, and its Order Now button remained reachable at y=446 after scrolling. Reduced-motion menu/icon transition duration was 0s.
- Newsletter email field and Sign Up button were natively disabled; no submission or success state exists.

## Remaining inputs and limits

The Georgia uppercase name is temporary, not the original textured lettering. Hero/video and card gradients are placeholders pending approved media. Welcome copy and footer lines are temporary; business details and destination URLs/tab behavior require confirmation. Newsletter provider and live signup are undecided. Other public pages and link wiring remain separate approved modules under the whole-site plan. Diego's visual acceptance is still required.

No dependencies, new routes, external services, source from Catering/old pi2go, deployment, or Git publishing were introduced.
