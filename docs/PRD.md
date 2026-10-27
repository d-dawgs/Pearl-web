# Pearl-web — Pearl Island Website PRD

**Version:** 0.3 · **Updated:** October 26, 2026 · **Status:** Draft for Diego and Kean review
**Owners:** Diego and Kean, co-founders. Both products are joint. Diego leads the website build; Kean leads the catering build; both work on both.
**Client:** Sober Pierre, Pearl Island (Charlottesville)
**Repo:** d-dawgs/Pearl-web (private) · local: ~/Desktop/Builds/Pearl-web
**Related:** Catering PRD · Build plan · Design · Context · website decision log (C01–C40)
**Source of truth:** This PRD replaces the website parts of the combined PRD v0.4 and the earlier WEBSITE_PRD drafts (v0.1, v0.2) where they differ. Business facts still need Sober's confirmation.

**Make it obvious how to order from Pearl Island, and make it feel like Pearl Island.**

## 1. Summary

Rebuild Pearl Island's public website so it feels like Pearl Island (Caribbean food, family and warmth) and makes the next step obvious: order catering, order carryout, or get in touch.

The website is its own product, with its own repo, design and release cycle. It explains catering and sends customers to the separate catering software. It doesn't take orders, hold accounts or show anything staff use. It can be offered to Sober as its own product, separately from the catering software.

**Current state:**
- A homepage design is being refined in preview.
- A first homepage build was rejected because it didn't match that design.
- No pages are approved yet.
- The new repo starts as a clean skeleton.

## 2. Context

### Pearl Island today

- **What it sells:** Caribbean catering (corporate and private events) and Pearl Island 2 Go carryout. It runs from the B.E.A.C.O.N. shared kitchen on Carlton Road, not a dine-in café.
- **Current website:** Squarespace, at pearlislandcatering.com.
- **Where orders and sign-ups happen:**
  - Carryout and gift cards: Square
  - Catering: Spoonfed
  - Job applications: a Google Form
- **How Sober reaches customers:** Instagram, Facebook, branded vehicles, and Square email blasts to past customers.

### What Sober told us

- **His first priority is making it easier for current and new customers to spend money with Pearl Island.** Marketing and reaching customers is a close second. (Oct 14 email)
- **Customers' most common question is "how do I cater?"** Not everyone can find where to order. (Oct 20)
- **He wants people to feel like they're on a beach eating his food:** authentic cuisine, family memories, good vibes. (Oct 20)
- **He wants Pearl Island to be more technology-centered**, with less manual work and more time for family and customers. (Oct 20)
- **He isn't sure his social media pays off.** (Oct 6)

### What's wrong with the current site (Oct 22 review)

- There's no ordering action on the first screen.
- The meal card loops to /cafe, which repeats the homepage.
- The catering "Learn more" link points back to its own page.
- The quote invitation has no form.
- Text is large and thin with loose spacing, which makes it hard to scan on phones.

## 3. Goals and non-goals

### Goals

1. **A visitor understands who Pearl Island is and what it serves within one screen.** Why: atmosphere comes before any clear task today.
2. **Every service has one clear path.** Catering goes to the catering software, carryout and gift cards to Square, jobs to the Google Form, and contact to phone/email. Why: "how do I cater?" calls, and the current dead ends.
3. **It feels unmistakably Pearl Island, on phones first.** Why: Sober's beach-feeling vision, and the team direction to keep the brand while modernizing.
4. **It has no broken links, dead ends or invented facts.** Why: the current site's issues, and our rule never to claim what isn't confirmed.
5. **Hours, links and contact details are easy to update from one place.** Why: they appear on several pages and must stay consistent.

### Non-goals

- Taking catering orders, holding accounts or showing staff tools (the Catering product does that)
- Carryout checkout (stays on Square)
- A blog or online store (selling packaged products could come later, as a separate decision)
- A flashy design showcase or generic SaaS look

## 4. Success measures

**Success metrics** (agree targets with Sober before launch):
- Clicks through to catering and to Square carryout
- Fewer "how do I order catering?" calls than his current count
- Newsletter sign-ups, once that feature is active

**Guardrail metrics:**
- Zero broken links
- No horizontal scrolling on phones
- Page load stays fast on a phone (the hero video must not slow it)
- No unconfirmed claims on the site

## 5. Who it's for

- **New catering customers** (offices, event hosts) need to learn that Pearl Island caters, what it offers and how to start.
- **Carryout customers** need hours, pickup/delivery info and Order Now.
- **Returning customers** need a fast way to order again and a reason to stay in touch.
- **The community, press and job applicants** need the story, community work and the application link.

## 6. Scope and ownership

- **In scope:** all public pages, the header and footer, brand presentation, content and links out to Square, Spoonfed (for now), the catering software, Google Forms and social media.
- **Who builds it:** Diego leads the build. Kean contributes and reviews. Product decisions are made by both, with Sober confirming business facts and assets.
- **Relationship to Catering:** the Catering page's button opens the catering software's customer entrance. No code, styles, logins or data are shared.

## 7. Visitor journeys

1. **Catering:** Home → Catering card or link → Catering page (services, sample menu, how it works) → "Start a catering order" → catering software.
2. **Carryout:** any page → Order Now (header, Welcome or footer) → Square carryout.
3. **Learn and trust:** Home → Our Story or Community → back to an order action.
4. **Practical info:** footer or Pearl Island 2 Go page → hours, address, phone, email.
5. **Other actions:** Gift Cards → Square gift cards; Apply Here → Google Form; Instagram/Facebook icons → social pages.

## 8. Sitemap

The seven existing destinations stay, and Menu becomes its own page. Exact URLs, and page-vs-section choices, are still open.

| Destination | Type | What it does | Status |
| --- | --- | --- | --- |
| Home | Page | Brand intro, hero, three cards, newsletter | Designing now |
| Menu | Page | Illustrated menu with photos | Planned; needs approved menu and photos |
| Catering | Page | Services, sample menu, how ordering works, "Start a catering order" | Planned |
| Pearl Island 2 Go | Page | Hours, pickup/delivery info, address/map, Order Now → Square | Planned |
| Our Story | Page | Sober and family's story | Planned; verify claims |
| Community | Page or section | Community programs and events | Planned; confirm what's still active |
| Gift Cards | External link | Square gift cards | Link only |
| Apply Here | External link | Google Form | Link only |
| Contact | Footer (plus a page if needed) | Phone, email, address, socials | Footer |

Old Squarespace URLs (/catering, /2go, /community-outreach, /ourstory, /cafe) redirect to their new equivalents at launch.

## 9. Requirements by release

### Release 0 — Clean skeleton (SPLIT-001 v2)

A blank app, with this PRD as `docs/PRD.md`. The rejected homepage code isn't carried over; its decisions are captured here and in the design doc.

### Release 1 — Homepage

**Learning goals**

1. Does Sober recognize Pearl Island in it?
2. Can someone new tell how to order catering and carryout within a few seconds?

**Homepage, top to bottom**

1. **Header (public site only):**
   - Page links on the left.
   - "PEARL ISLAND" centered, in bold uppercase textured lettering matching the circular logo. Oleo is dropped; the original font or vector is still needed.
   - Instagram and Facebook icons and an outlined Order Now on the right. No TikTok.
   - A single underline marks the current page, slides to whichever link is hovered or focused, and returns when the pointer leaves.
2. **Hero:** wide video. Footage not yet supplied.
3. **Welcome:** two or three sentences on who Pearl Island is and what it serves, plus Order Now.
4. **Three portrait cards, in order: Menu, Catering, Our Story.**
   - 3:4 ratio, full photo, title only at the bottom center, with no descriptions, arrows or buttons.
   - On hover: up to 4.5° tilt, 2px lift, a smooth 400ms follow, 0.07 gloss, the normal cursor and no spring.
   - Static on touch devices and with reduced motion.
5. **Newsletter signup.** Shown but inactive until its tool is chosen; it never fakes a sign-up.
6. **Dark footer:** page links, Order Now, address, contact, hours and socials.

Order Now always means Square carryout. Catering is one card and one page, not the homepage's main focus (C14).

**Visual direction**

- **Palette (C26):** #00A1CA brand cyan, #206B8D active blue, #FFFFFF background, #383838 body text, #1C1C1C outlines/near-black. Proposed placement: white header, cyan newsletter, near-black footer.
- **Keep:** the logo, warm food and people photography, Caribbean character and friendly display type. Earlier team direction mentioned orange/yellow accents; they aren't in the approved palette, though the logo artwork can keep its own colors.
- **Avoid:** a generic SaaS look, long promotional sections, and the old site's huge thin text and loose spacing.
- **Reference:** JRK (eatjrk.com) for layout and structure only, never its branding, photos or text.

### Release 2 — Remaining pages, one at a time

Order: Catering and Pearl Island 2 Go first, because they carry the money paths. Then Menu, Our Story and Community.

**Catering page**

- What Pearl Island caters: corporate lunches and private events, with boxed lunches, buffet, family-style or plated service.
- A sample menu and how ordering works, in three short steps.
- Who to contact for custom or very large events. Lead-time wording appears only after Sober confirms the rule.
- **"Start a catering order"** opens the catering software's customer entrance. The address is one setting in the content file.
- **Until the new catering software is live for Pearl Island, the button points to the current Spoonfed link.** The website can launch without waiting for the catering software.
- No customer data in links. Staff never go through the website.

**Pearl Island 2 Go page:** hours, pickup and delivery info, address and map, entrance directions, and Order Now to Square.

**Menu, Our Story and Community:** each gets a short page brief and a desktop and mobile design approved before it's built.

### Release 3 — Wiring and content

- Real links on every action
- The newsletter connected to its chosen tool
- All facts confirmed by Sober and final assets in place
- Page titles, descriptions and share images, plus local business details for search

### Release 4 — Launch

Domain and hosting, redirects from the old Squarespace URLs, a full device and accessibility check, and Sober's sign-off.

## 10. Content, facts and assets

All business facts live in one content file used across the site.

**Verify with Sober before launch** (all as currently published):

- Hours: Tuesday–Friday, 11 a.m.–3 p.m., preorders only, pickup and delivery
- Address: B.E.A.C.O.N. Shared Kitchen, 221 Carlton Road #1, Charlottesville, VA 22902
- Phone (434) 466-0092 and info@pearlislandcatering.com
- Community programs (Around Town, On Reserve) and whether they're still active
- The 2018 award claim on Our Story
- Pantry/pikliz products and the pearlislandfoods.com link
- The current catering menu PDF

**Assets needed from Sober:** original logo files (vector if possible), the source of the logo lettering, hero video, photos for the three cards and the Menu page, and permission to use them.

## 11. Approaches and tradeoffs

**A. Catering handoff**
- An info page on the website, then "Start an order": sells the service and answers basic questions before the form, but adds one extra click.
- Link straight to the software: fastest, but customers land in a form without context.

Selected: the info page (Diego, Oct 26).

**B. Hero**
- Video: carries the "beach" feeling best, but needs footage and careful compression.
- Photo: easy and fast to load, but less atmosphere.

Selected: video (Diego, Oct 26). Fallback: a still poster image until footage exists.

**C. Newsletter**
- Feed the list Sober already emails from (Square): one list for him to manage. Needs checking that it's feasible.
- A new email tool: more features, but another tool and bill for Sober.
- Off at launch: nothing to manage, but no list growth.

Selected: **not decided.**

**D. Domain and hosting**
- Move pearlislandcatering.com to the new site on Vercel: full control and faster changes, but Sober must give access and drop or downgrade Squarespace.
- A new domain: avoids touching the old site, but loses existing search ranking and links.

Selected: **not decided.** Recommended: the first.

## 12. Acceptance criteria

| ID | Requirement | Done when |
| --- | --- | --- |
| WEB-R01 | Independent app | Builds, runs and deploys from its own repo, with no code, styles, cookies or data shared with Catering or the old pi2go repo. |
| WEB-R02 | Agreed sitemap | Every destination in section 8 is marked as page, section or external link, with an approved URL. |
| WEB-R03 | Catering handoff | The Catering page's button opens the configured catering URL (Spoonfed until switched). No staff links and no personal data in URLs. |
| WEB-R04 | Carryout stays on Square | Every Order Now opens Square carryout, never the catering software. |
| WEB-R05 | Homepage matches design | The built page matches the approved desktop and mobile reference at the same width, including header and page width. No developer warnings, preview controls or old card variants. |
| WEB-R06 | Header behavior | As in Release 1, including keyboard focus and reduced motion. Mobile menu behavior is approved before it's built. |
| WEB-R07 | Cards | As in Release 1, with a static fallback on touch and with reduced motion. |
| WEB-R08 | Accurate content | Every business fact and claim is confirmed by Sober or left out. |
| WEB-R09 | Accessible | WCAG 2.2 AA contrast, full keyboard use, visible focus, alt text on meaningful images, and reduced-motion support. |
| WEB-R10 | Phone-first | No horizontal scroll at 320px; checked at 390, 768 and 1280+. |
| WEB-R11 | Fast and findable | The hero video is compressed, with a poster image, and doesn't block the page. Each page has a title, description and share image. |
| WEB-R12 | Honest inactive states | Unwired features never pretend to work: no fake "subscribed" message and no empty links. |
| WEB-R13 | Own docs | README, agent instructions, build plan and decision log describe this website only. Old shared-repo rules are marked historical. |

## 13. Out of scope

- **Ordering, accounts, staff tools, payments, the catering assistant:** these live in the Catering product.
- **Carryout checkout:** Square already does this well.
- **Moving data out of Spoonfed:** it belongs to the catering switch, not the website.
- **Sober's idea of selling his restaurant know-how:** a separate opportunity.
- **Changes inside Square, Spoonfed or Google Forms:** we link to them; we don't edit them.

## 14. Timeline and risks

**Timeline:** no estimates yet.
- October 29 was the earlier homepage demo target; reconfirm it after the split.
- Team goal (Nov 15 roadmap): a product in real use by a client. The website can go live before the catering software, because its button points to Spoonfed until then, so it may be the faster route to that goal.

**Risks**

- No hero footage, card photos or original logo lettering yet, which blocks a finished homepage.
- Sober hasn't approved the redesign or discussed pricing for it.
- Launch needs Sober to give access to the domain and Squarespace.
- Published facts (hours, programs, awards) may be out of date.
- The design has already needed one rebuild, so approve a full reference before coding each page.

## 15. Open decisions

| Decision | Notes | Owner | Needed by |
| --- | --- | --- | --- |
| Final URLs; Community as page or section | Section 8 | Diego, with Kean | Release 2 |
| Color placement | White header / cyan newsletter / dark footer proposed | Diego, with Kean | Release 1 |
| Logo lettering source | Original font or vector from Sober; no lookalike passed off as exact | Diego + Sober | Release 1 |
| Mobile menu behavior | Design before build | Diego, with Kean | Release 1 |
| Newsletter destination | Section 11C | Diego + Kean, with Sober | Release 3 |
| Analytics tool | Needed for success measures | Diego + Kean | Release 3 |
| Domain and hosting | Section 11D; who pays for hosting | Diego + Kean, with Sober | Release 4 |
| Catering link switch | Spoonfed until the catering pilot starts | Diego + Kean | Catering V3 |
| Pricing and support for the website | Not discussed with Sober yet | Diego + Kean | Before the launch pitch |

## 16. Decision log

- **Oct 25:** Team direction. Keep turquoise, the logo, warmth, food and people photos, and the seven destinations; modernize layout, navigation and accessibility; carryout goes to Square.
- **Oct 25–26:** Homepage decisions C14–C40:
  - A homepage plus public pages; catering isn't the homepage's focus.
  - The five-color palette.
  - The header layout and moving underline.
  - Card settings: 4.5° tilt, 2px lift, 400ms follow, 0.07 gloss.
  - Logo-style lettering in place of Oleo.
- **Oct 26:** First homepage build rejected: it didn't match the design, and the header and full width were missing.
- **Oct 26:** Split into two products and repos, Pearl-web and Catering (Diego + Kean). Diego and Kean co-own both products.
- **Oct 26:** Diego chose the following; Kean confirms in review:
  - The website gets a Catering info page that links to the software.
  - The old repo will be archived rather than deleted.

## 17. Sources

- Sober meetings: Oct 6 call and Oct 20 in-person; Oct 14 email priorities (Obsidian: Clients/Active/Pearl Island)
- Team direction, Oct 25 (Obsidian: Plan/2026-10-25 - High-level transformation direction)
- Website decision log C01–C40, homepage direction and the Oct 22 current-site review (pi2go stash: docs/website)
- Combined PRD v0.4 (pi2go main: playbook/PRD.md)
- PRD format: combined PRD v0.4 and the Spec Doc example (Obsidian: Internal Strategy/Templates)
