# Pearl-web

Pearl Island's standalone public website. Repository owner and website lead: Diego Bartra. Source: https://github.com/d-dawgs/Pearl-web.

## Current state

An independent Next.js App Router, TypeScript and plain-CSS skeleton. `/` is intentionally a blank, white canvas. No website design, business integrations or catering software is implemented.

**PRD pending:** Diego is comparing separate drafts, including one prepared with Claude, and will add the merged website PRD later. No PRD or PRD placeholder file is included. Do not treat the build/design notes as an approved feature specification.

## Local development

Use Node.js 20.9 or later supported by the pinned dependencies. From this repository:

```sh
npm ci
npm run dev
```

Use the localhost address printed by Next.js. Checks:

```sh
npm run lint
npm run typecheck
npm run build
```

`npm run start` serves a successful production build. Dependencies and generated files are ignored. This app has no environment variables or external service requirement yet.

## Product boundary

This is the public marketing website. Its future Catering page explains the service and links to the separate catering product. Customer orders/accounts, staff tools and operational data belong to Catering. Carryout remains with Square. The two apps do not share source folders, styles, sessions or databases.

## Core documents and next step

- [Build plan](docs/BUILD_PLAN.md): current and next work.
- [Design direction](docs/DESIGN.md): selected direction and open visual decisions.
- [Context](docs/CONTEXT.md): product split and source limits.
- [Agent instructions](AGENTS.md): rules for work in this repository.

Next: review this skeleton, compare and merge the PRD drafts, then approve one consolidated desktop/mobile homepage design and a bounded coding task. No deployment or link activation is part of initialization. The old combined repository remains outside this app and is not required to run it; its deletion is separate work.
