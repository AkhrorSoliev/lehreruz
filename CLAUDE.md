# lehrer.uz — Project Guidelines

This file provides project-wide context for AI assistants (Claude Code, Cursor) and new developers joining the team.

## About the Project

**Name:** lehrer.uz — Online Learning Platform
**Domain:** lehrer.uz
**Purpose:** A full-stack web application where users can purchase and take courses, instructors can create and sell courses, and admins can manage the entire platform.

**User Roles:**

- `student` — purchases courses, learns, earns certificates
- `instructor` — creates courses, uploads videos, earns revenue
- `admin` — manages users, courses, payments, and moderation

## Tech Stack

**Frontend (`client/`):**

- Next.js 14+ (App Router) + TypeScript (strict mode)
- Tailwind CSS + shadcn/ui
- Zustand (global state) + TanStack Query (server state)
- React Hook Form + Zod (validation)
- Axios (with interceptors)
- next-intl (i18n: uz/ru/en)

**Backend (`server/`)** — planned:

- NestJS + PostgreSQL + Prisma
- JWT authentication with refresh tokens
- Stripe (payments)
- AWS S3 / Cloudflare R2 (video storage)
- Redis (cache, sessions)
- BullMQ (background jobs: video transcoding, emails)

## Architecture Strategy

This project follows a **"Monorepo-Ready Single App"** approach:

**Current phase:** `client/` is a single Next.js app with route groups (`(student)`, `(instructor)`, `(admin)`).

**Future phase:** When scaling signals appear, the project will migrate to Turborepo:

```
apps/
  ├── web/           (public + student + instructor)
  └── admin/         (Vite + React SPA)
packages/
  ├── ui/            (shared shadcn components)
  ├── api-client/    (shared axios + endpoints)
  ├── types/         (shared TypeScript types)
  ├── utils/         (formatters, validators)
  └── config/        (ESLint, TS, Tailwind presets)
```

**Therefore, all code must follow "migration-friendly" rules from day one.** Detailed rules are in `client/CLAUDE.md`.

## Root Folder Structure

```
lehrer.uz/
├── client/              # Next.js frontend (active development)
├── server/              # Backend (to be added later)
├── docs/                # Documentation, ERD, API specs
├── .gitignore
├── README.md
└── CLAUDE.md            # This file
```

## General Rules

### 1. Git Workflow

- **Branch naming:** `feature/course-detail`, `fix/login-redirect`, `refactor/api-client`, `chore/update-deps`
- **Commits:** Conventional Commits — `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `test:`, `chore:`, `perf:`
- **Pull Requests:** Keep PRs small (< 500 lines). Code review is required before merge.
- **Main branches:** `main` (production), `develop` (integration), feature branches off `develop`.

### 2. Environment Variables

- **Never** commit `.env` files to git
- Maintain an `.env.example` file listing all required variables with placeholder values
- Frontend variables must use `NEXT_PUBLIC_` prefix to be exposed to the browser
- Secret keys (API secrets, DB credentials) stay server-side only

### 3. Current Development Phase

- **Active:** `client/` (frontend)
- **Deferred:** `server/` (backend comes later)
- While backend is unavailable, frontend uses **mock data** or **MSW (Mock Service Worker)** for API simulation
- TypeScript types are the "source of truth" for API contracts until backend catches up

### 4. API Contract

- Frontend and backend teams agree on the API contract in `docs/api-spec.md`
- TypeScript types live in `client/src/shared/types/api.ts`
- Any API change requires updating both the spec and types

## Critical Guidelines

⚠️ **No cross-directory imports:** Code in `client/` must not import from `server/` (and vice versa). Shared types will be extracted to `packages/types` during migration.

⚠️ **Before adding any new feature:** Read the "Adding a New Feature" checklist in `client/CLAUDE.md`.

⚠️ **Admin panel will become a separate app:** Keep admin code strictly isolated from student/instructor code. No shared components with role-based `if` statements.

⚠️ **Localization:** All user-facing strings must go through the i18n layer. Never hardcode strings in components. Default language: Uzbek (`uz`).

## Useful Links

- Design: (Figma link — TBD)
- API Docs: (Swagger link — TBD, when backend is ready)
- Task Tracker: (Jira/Linear link — TBD)
- Domain: <https://lehrer.uz>
