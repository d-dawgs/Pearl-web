# Pearl-web — agent instructions

Help Diego build the public website only. This repository is independent of the Catering software and owns its own root layout and styles.

## Start here

- Read README.md, docs/CONTEXT.md, docs/BUILD_PLAN.md and docs/DESIGN.md.
- The PRD is intentionally absent while Diego compares drafts. Once he adds a merged PRD, read it and its approval state before feature work. Do not generate, import or publish a PRD without his instruction.
- Clarify substantial product/design choices, prepare a complete file-bounded brief and obtain approval before implementation. Follow Diego's design-first, page-by-page workflow.
- Check current local changes. Preserve work that is outside the task.

## Boundaries

- Public business content and marketing pages belong here. Customer ordering/account and staff software belong to the separate Catering product. Do not edit a sibling repository or import its source.
- The future public Catering page links to the separate customer software. Final URL/path/tab behavior is undecided. Square carryout is a different action.
- Feature UI should live in a relevant feature folder when built; keep route wrappers thin. Use TypeScript and plain, scoped CSS. No component library, auth/database/payment/AI provider or live signup integration without a separately approved need.
- Do not invent business claims, menu/prices, hours, dietary assurances or approved media. Do not claim an inactive action succeeded.
- Preserve the approved visual reference when implementing; do not substitute a different header, boxed frame or typography without review. Conversation controls/annotations are not website UI.
- Do not install dependencies, mutate Git, commit, push, deploy, invite collaborators or delete source unless separately authorized for the task. Initialization permission is not standing permission.

## Verification

Run npm run lint, npm run typecheck and npm run build for application changes, plus relevant desktop/mobile/keyboard checks. Report actual outcomes and unrelated failures without broadening scope. Documentation-only work needs document/link checks. Diego accepts completed work; do not mark it Done merely because checks pass.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
