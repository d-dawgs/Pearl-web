# Website build plan

Status: WEB-016-CARDS v1 (Giant type) — Ready for Diego review. WEB-012-HEADER-SCROLL v1 — Ready for Diego review. WEB-011-FOOTER v1 and WEB-010-HOME v1 remain Ready for Diego review. The standalone foundation remains the last accepted work; the website PRD is still a draft.

## Current and next

- Last accepted: independent blank foundation, technically checked October 26.
- Current: WEB-016-CARDS v1 (Giant type) replaces the centered small card title with large bottom-left type, a visible photo fade, synchronized drift and title float; it preserves the selected photos, card material and tilt motion. Diego has not accepted the homepage modules yet; see [homepage result evidence](website/WEB-010-HOME-v1-RESULT.md).
- Next: Diego reviews WEB-010; then approve and build remaining public pages one by one, beginning with their content and designs. Wiring and production activation remain later steps.
- Blockers/inputs: production lettering, hero/card media, verified business details, destination URLs and newsletter provider. Footer facts from Google listing (Oct 27): kitchen name, address, phone, email — verify with Sober before launch. Hours shown elsewhere later. The old rejected homepage implementation was not imported.

## Design-first path

| Step | Work | Ready for review when |
| --- | --- | --- |
| 1 | Review skeleton and merged PRD | Diego accepts the repository setup and records the approved product scope. |
| 2 | Sitemap and visitor actions | Each destination is a public page, section or external link; catering software and Square carryout are distinct. |
| 3 | Content and media | Copy/business facts/assets have sources and approval states; missing inputs are explicit. |
| 4 | Whole-site visual foundation | Typography, palette roles, spacing, header/footer and responsive patterns are reviewed. Exact logo lettering remains an input. |
| 5 | Consolidated homepage design | One desktop/mobile reference includes the full page, latest portrait cards, media treatment and inactive/active states. |
| 6 | Homepage task brief and build | WEB-010-HOME v1 brief approved; implementation Ready for Diego review, pending his visual acceptance. |
| 7 | Remaining public pages | Build each approved page separately, including the Catering marketing page. Review before moving on. |
| 8 | Wire approved destinations | Internal navigation, external catering customer URL, Square/gift-card/hiring/social links are verified. Newsletter is a separately approved integration. |
| 9 | Cross-device/content/access review | Relevant technical checks, phone/desktop screenshots, keyboard flow and accurate content pass; limitations are recorded. |
| 10 | Production activation | Domain/redirects/assets/content, live links, release/rollback and Sober review are separately agreed. |

Statuses: Not started → In progress → Ready for Diego review → Done only after Diego accepts. Record last accepted work, current work, next step and blockers as work progresses. Diego decides commit/push milestones; this plan does not schedule automatic Git or deployment actions.
