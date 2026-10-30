# Website design direction

WEB-010-HOME v1 is implemented and **Ready for Diego review** as of October 27, 2026. The approved homepage brief supplies the consolidated desktop/phone choices for this first module. The remaining public pages still need their own design and approval. See (archived outside the repo).

## Structure and identity

- Public header: website links left, Pearl Island name centered, Instagram/Facebook icons plus outlined Order Now right. No TikTok. One underline moves from the current page to hover/keyboard focus and returns at rest.
- Header scroll behavior: flow layout fades linearly across the first 140px and lifts 14px; beyond it, 8px cumulative upward travel reveals one fixed header. It slides/fades over 320ms with the approved easing and a derived charcoal shadow; downward travel hides it.
- Header keeps its flow space reserved, remains visible while the phone menu or keyboard focus is inside, and switches instantly under reduced motion. The phone menu, safe-area sizing, and 1100px breakpoint remain unchanged.
- Header name should match the supplied logo's bold uppercase textured lettering. Oleo script was superseded. Exact original font/vector lettering is not identified; never present a substitute as an exact match.
- Broad hero video area, concise two/three-sentence Welcome and Order Now, three destination cards, newsletter block and dark footer. Keep the page compact.
- Footer arrangement: left page links and outlined Order Now, center Location, right Contact; on phones the measured sequence is page links, socials, Order Now, Location, Contact. Footer actions remain inactive.
- Desktop footer measurements: 3vw side margins, 47.52px vertical padding, and three columns about 330px wide. Page links and headings use 26.37px/30.88px; location text 19.46px/27.24px; contact lines 16px/22.4px; Order Now is 330.2×109.3px.
- Phone footer measurements at 390px: 6vw side margins and 27.85px vertical padding. Page links and headings use 22.08px/25.86px; location text 18.03px/25.24px; Order Now is 121.8×59px; social glyphs are 20px with 12px visual spacing.
- Footer page labels use bold Georgia with restrained negative tracking and a fine, offset static underline; contact and address details remain Arial.
- WEB-011-FOOTER v2 replaces footer typography only: self-hosted Lora 600 for links/headings at 26.368px/30.882px desktop and 22.077px/25.856px phone, plus Literata 400/500 for details and Order Now. Next.js fetches both from Google Fonts at build time and serves the font files locally.
- WEB-013-PHOTOS v1 uses a grayscale, contrast-adjusted Welcome photo in the existing placeholder box. Card photos fill the existing 3:4 panels under the fixed gloss and lower contrast layer; title, material and motion remain intact.
- WEB-015 v1 removes Pearl Island 2 Go from the phone and footer lists; community remains. Outlined actions fill near-black with white text on hover and keyboard focus in 100ms linear, with transitions removed for reduced motion. Footer Order Now inverts to white fill and near-black text.
- WEB-016-CARDS v1 (Giant type) keeps the three photos, 3:4 crop, card material and rounded corners. A full-card fade sits above each photo and below the fixed gloss and title.
- Titles replace the centered 25px treatment with bold white Georgia, bottom-left at 7% inset and 4% from the bottom: 20cqw for Menu/Catering and 16.7cqw for Our Story.
- Desktop tilt retains 4.5° maximum rotation and 2px lift; photos counter-drift up to 8px with the same smoothing, while titles float 20px forward. Touch and reduced motion stay static.
- Newsletter uses #F4F4F4 with #1C1C1C heading and #383838 text; Georgia heading and Arial form controls remain. JRK dimensions: section 594px desktop / 557px phone, vertical padding 95.04px / 55.704px, 280px field, 122×68px button, 12px desktop and 32px stacked phone gap.
- WEB-017-HERO-MOTION draws the static wave with `y = 94 - 20 × sin(2π × 2.5t + 0.6) × (0.85 + 0.15 × cos(2πt))`, 20px height and 2.5 cycles.
- The 120px wave and Welcome band share the `#e8f6fa` token; an opaque 8% fade uses a smoothstep ramp over up to 310px, reaching full alpha at the 46px wave crest line.
- Welcome text/photo, cards and newsletter fade up from 28px over 700ms; stagger delays are 0/150ms for Welcome and 0/130/260ms for cards.
- Photo wrappers zoom from 1.08→1 over 1400ms; the hero photo drifts down at 0.3× scroll. The footer stays static and reduced motion disables all new motion.
- WEB-018 aligns the desktop footer Order Now box and Contact-column icon/action group on one centered row, keeping the existing three-column layout and stacked phone layout.
- Reveals reset after leaving the viewport and play again on re-entry. Home and the wordmark dispatch `pearl:replay-intro` at `/`, resetting reveals and hero drift before the opening plays again; reduced motion jumps to the top without animation.
- Supplied external URLs were taken from Pearl Island's live website (Oct 28, 2026); verify them with Sober before launch. The blank `/menu` route reuses the `#e8f6fa` Welcome-band token; Community remains in the phone menu and is removed from the footer list.
- WEB-019 v5 uses a white 56px category bar: 14px Arial text, 28px gaps and one blue underline transitioning for 320ms; the hero ends with a clean edge.
- WEB-019 v6 menu images are transparent PNG cutouts on transparent stages, with no blend mode or visible surface behind them.
- WEB-019 v7 sets item names and prices on two left-aligned lines below the image, with 18px image-to-name spacing and 6px name-to-price spacing.
- WEB-021 places the shore between Welcome and the cards, with a Welcome-colored wave at its top and a white wave at its bottom.
- Shore photo drift now follows the shore's position relative to the viewport center, within ±200px.
- Menu items fade in and rise 6px over 420ms with a 35ms stagger (maximum 280ms); the category container only fades.
- The shore has 150px soft fades beneath both crisp waves: Welcome color above and white below (100px on phones).
- The item modal uses a minimal 24px × icon in an accessible 40px close button; its image and ordering layout stay intact.
- The new Visit & pickup section sits above the unchanged footer on #F7F2EB, with business details beside a Carlton Road map.
- Image dimensions come from each PNG; PLATTER, SIDE_TRAY, CUP, TALL and WIDE_TRAY classes set the desktop, tablet, phone and modal size limits.
- Every item image shares the same soft drop shadow, and TALL images also have a contact shadow beneath them.
- Shared category headers use Georgia 36px desktop / 28px phone with 48px / 32px top padding and 32px spacing before content; the wing eyebrow occupies reserved space.
- Menu content follows an 8px rhythm, white image surfaces, 18px Georgia names and 13px Arial prices; clean photos are contained, centered and capped below natural size even on hover.
- Platter Options retains its pale cyan band, with 15px Arial names, 32px Georgia prices, a hairline divider and equal-height cards; subsection headings share a 24px Georgia style.
- Category bodies fade out for 150ms and enter over 300ms from 8px, with 30ms item staggering capped at 300ms; hover is 1.03× / 400ms, cards lift 2px, and below-fold subsections reveal once from 12px. Reduced motion disables every effect.
- WEB-019 v4 uses the single Tropical Poster menu design: a `#206B8D` hero, shared category tabs, contained item gallery and editorial split modal; the temporary design switch is removed.
- Item photos use natural dimensions, contain fit and multiply blending; no image is enlarged beyond its source pixels, and HD protein and kale photos replace their earlier crops.
- The modal is a minimal editorial split: contained image at left, Georgia title and price/details at right, full-width Order Now, and a reachable Close control; the combo line is removed.
- Wing Wednesdays now leads with its two-photo gallery, followed by non-clickable serving and sauce options, then the Square ordering action.
- Remaining side, drink, product and wing photos are lower-resolution demo crops until HD versions arrive; demo images will be replaced with Pearl Island originals later.
- Footer links align at the top of the Location and Contact headings with 12px rhythm; footer Order Now is 220×64px desktop and 180×52px phone.
- Website owns its entire page shell. Do not reproduce the old software navigation, dark surrounding frame or boxed body workaround.

## Selected inputs

UI palette: cyan `#00A1CA`, active/navigation blue `#206B8D`, white `#FFFFFF`, body charcoal `#383838`, near-black `#1C1C1C`. Transparency/shadows derived from these are allowed. Reference sites supplied layout/material inspiration, not their branding, copy or production media. Color-role/mobile/copy details require the consolidated design review.

Cards: Menu, Catering, Our Story; 3:4 full-media portrait panels, title only, no descriptions/arrows/badges/inner buttons. Keep the restrained dark layered material, pale edge/inset sheen and subtle shadow from the latest study, not the earlier short/top-title tiles or saturated replacement fills. The Giant type option supersedes the former centered small title.

Selected motion: normal cursor, center pivot, maximum 4.5 degrees per axis, lift 2px, 400ms smooth non-overshooting follow and fixed leading gloss opacity 0.07. No spring, ball cursor or cursor-following spotlight. Use an untransformed outer pointer area; reduced-motion/touch receives a static treatment. Exact implementation belongs to the approved feature brief.

## Inputs and review discipline

Production video, approved Pearl Island photos to replace the current placeholders, original name lettering, verified business details and destination URLs remain open. The WEB-010 brief approves a temporary Georgia wordmark, exact temporary Welcome copy, phone layout and inactive controls for review. Do not import another business's assets or the rejected implementation. Chat carousel controls, overlay arrows and annotation UI are not part of the page. Diego's visual acceptance is still required; build success alone does not complete review.

## Palette

- `--cyan: #00A1CA` — legacy only; no new UI. `--blue: #206B8D` — brand headings, links, prices and active states.
- `--ink: #1C1C1C` — near-black text, actions and footer. `--body: #383838` — body text. `--white: #FFFFFF` — white surfaces and text.
- `--welcome-band: #E8F6FA` — Welcome and light tint. `--warm: #F7F2EB` — Visit & pickup. `--newsletter: #F4F4F4` — newsletter.
- No new hex colors; use tokens. `#00A1CA` is legacy only.
