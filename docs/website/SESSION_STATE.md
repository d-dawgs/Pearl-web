# Website session state — October 27, 2026

**Status: WEB-018 v1 — Ready for Diego review. WEB-017-HERO-MOTION v1, WEB-016-CARDS v1 (Giant type), WEB-015 v1, WEB-013-PHOTOS v1, WEB-011-FOOTER v2, WEB-012-HEADER-SCROLL v1, WEB-011-FOOTER v1 and WEB-010-HOME v1 remain Ready for Diego review.**

## Last accepted

Independent blank website foundation, technically checked October 26. The draft website PRD is now local at `docs/PRD.md` after an authorized safe fast-forward. The draft PRD does not approve all future website requirements.

## Current

WEB-013-PHOTOS v1 adds the grayscale Welcome image and the three card photos while preserving their existing material, layering and motion. Welcome, Menu and Catering photos are temporary placeholders; Our Story photo is low-resolution. WEB-011-FOOTER v2 applies Lora to footer links and headings and Literata to footer details and Order Now, using JRK's measured sizes. WEB-011-FOOTER v1 adds the measured dark footer layout and Google-listing contact details. The listing facts remain unverified and no destinations are active.

WEB-016-CARDS v1 (Giant type) changes the card title scale and placement, fixes the readability fade order, adds pointer-synchronized photo drift, and floats the title while preserving the rounded clip.

WEB-017-HERO-MOTION v1 adds a crisp static wave filled with the shared `#e8f6fa` Welcome band token and an 8% smoothstep fade. Welcome, cards and newsletter reveal once with the approved stagger; photos zoom from 1.08 to 1 over 1400ms, and the hero image drifts at 0.3× scroll. The footer stays static; reduced-motion and no-JavaScript views remain visible and still.

WEB-018 v1 wires Order Now, gift cards, Apply Here and social links to the URLs supplied from Pearl Island's live website (Oct 28, 2026; verify with Sober before launch), adds a blank Menu page, removes Community from the footer only, and makes reveals repeat on re-entry and replay on Home/wordmark clicks.

Oct 27: Diego dropped the Pearl Island 2 Go page/link (Order Now covers carryout). Hours and pickup info will go in the footer once Sober confirms them; Order Now will open Square when wired. This differs from the draft PRD sitemap. Newsletter background changed to light neutral #F4F4F4 (Diego, Oct 27).

The complete designed homepage module is implemented on `diego/homepage-design`; it includes the full-width desktop header, moving underline, accepted phone menu, beach photo, Welcome, three selected portrait cards and motion, inactive newsletter presentation and dark footer. No destination or external service is active.

The approved visual reference precedence remains: WEB-010 brief; accepted phone menu for phone navigation; focused card study for card material/motion; Clean white study for the remaining composition. The temporary Georgia wordmark, copy and placeholders are only for this module's review.

## Next

Diego reviews the full desktop/phone screenshots and interaction evidence. Record his acceptance or requested changes. Then continue the whole public website page by page under separately approved briefs; do not treat Home as the whole-site delivery. The October 29 whole-site presentation remains the target recorded in the approved brief.

## Inputs and limits

Original textured lettering, production video and card photos, verified business details, approved final URLs/tab behavior and newsletter provider remain open. The catering customer software remains separate from this public website; Square carryout is a distinct action. No commit, push, deployment, live integration, sibling-repo change, source deletion or PRD edit occurred in WEB-010.

- Footer facts from Google listing (Oct 27): kitchen name, address, phone, email — verify with Sober before launch. Hours shown elsewhere later.
- Welcome, Menu and Catering photos are temporary placeholders (source/license unknown), git-ignored and not published; replace with Pearl Island's own photos before launch. Note: they will be missing on any deployed build.
- Our Story photo is a low-resolution social-media image with text removed; ask Sober for the original.
- Hero beach photo (already committed and pushed): source/license still unconfirmed.
