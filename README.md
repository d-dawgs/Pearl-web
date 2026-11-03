# Pearl-web

Pearl Island's standalone public website. Repository owner and website lead: Diego Bartra. Source: https://github.com/d-dawgs/Pearl-web.

## Current state

This independent Next.js App Router site has a built Home and Menu, plus blank, linked Catering and Our Story pages. Community remains inactive. The site is a presentation version for Diego and Sober to review, not an approved launch release. Carryout links to Square; catering software lives in a separate repository. See [PROJECT_HANDOFF.md](PROJECT_HANDOFF.md) for the current implementation and open launch inputs.

**PRD:** [docs/PRD.md](docs/PRD.md) is the website's requirements document. It is a draft for Diego and Kean review; do not treat it as approved scope until they accept it.

## Local development

Use Node.js 20.9 or later supported by the pinned dependencies. With dependencies already available, from this repository:

```sh
npm run dev
```

Use the localhost address printed by Next.js. Checks:

```sh
npm run lint
npm run typecheck
npm run build
```

`npm run start` serves a successful production build. Install dependencies only when authorized under AGENTS.md. Dependencies and generated files are ignored. The site has no environment variables; Square and Google Maps are external destinations.

## Product boundary

This is the public marketing website. Its future Catering page explains the service and links to the separate catering product. Customer orders/accounts, staff tools and operational data belong to Catering. Carryout remains with Square. The two apps do not share source folders, styles, sessions or databases.

## Core documents and next step

- [Build plan](docs/BUILD_PLAN.md): current and next work.
- [Design direction](docs/DESIGN.md): selected direction and open visual decisions.
- [Context](docs/CONTEXT.md): product split and source limits.
- [Agent instructions](AGENTS.md): rules for work in this repository.

Next: review the presentation version and the open facts, images and design direction in PROJECT_HANDOFF.md and docs/DESIGN.md. The old combined repository remains outside this app and is not required to run it.
