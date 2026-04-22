# lehrer.uz Client — Frontend Development Guidelines

This file defines the rules all code in the `client/` directory must follow. The goal is **migration-friendly**, **scalable**, and **maintainable** code.

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 14+ (App Router) | SSR, routing, SEO |
| Language | TypeScript (strict mode) | Type safety |
| Styling | Tailwind CSS + shadcn/ui | UI components |
| Server State | TanStack Query | API caching, mutations |
| Client State | Zustand | Auth, cart, UI state |
| Forms | React Hook Form + Zod | Validation |
| HTTP | Axios (with interceptors) | API client |
| i18n | next-intl | Localization (uz/ru/en) |
| Video | Video.js or Plyr | HLS streaming |
| Real-time | Socket.io-client | Notifications, chat |
| Testing | Vitest + Playwright | Unit + E2E |

## Folder Structure

```
client/src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Login, register, forgot-password
│   ├── (public)/                 # Home, courses catalog, search
│   ├── (student)/                # Student dashboard, my-courses
│   ├── (instructor)/             # Instructor panel, course builder
│   ├── (admin)/                  # Admin panel (future separate app)
│   ├── api/                      # Next.js API routes (webhooks only)
│   ├── layout.tsx
│   └── middleware.ts             # Auth + role-based routing
│
├── features/                     # Feature modules (CRITICAL!)
│   ├── auth/
│   ├── courses/
│   ├── cart/
│   ├── checkout/
│   ├── video-player/
│   ├── reviews/
│   ├── instructor/
│   ├── admin/
│   └── notifications/
│
├── shared/                       # Shared code (future packages/)
│   ├── components/
│   │   ├── ui/                   # shadcn components
│   │   ├── layout/               # Header, Footer, Sidebar
│   │   └── common/               # Loader, ErrorBoundary, EmptyState
│   ├── hooks/                    # useDebounce, useMediaQuery
│   ├── lib/
│   │   ├── axios.ts              # API client
│   │   ├── query-client.ts       # React Query config
│   │   └── utils.ts              # cn(), formatters
│   ├── types/                    # Global types
│   ├── config/                   # env, constants
│   └── providers/                # App-level providers
│
├── styles/
│   └── globals.css
│
└── middleware.ts
```

## 🔴 STRICT RULES (Migration-Friendly)

Breaking these rules will make future migration to Turborepo painful.

### Rule 1: Feature Isolation

Each feature is an **independent module**. It must not reach into another feature's internals.

```typescript
// ❌ WRONG — importing internal files
import { CourseCard } from '@/features/courses/components/CourseCard';
import { useCourseApi } from '@/features/courses/hooks/useCourseApi';

// ✅ CORRECT — only via barrel export (index.ts)
import { CourseCard, useCourseApi } from '@/features/courses';
```

Every feature **must** have an `index.ts`:

```typescript
// features/courses/index.ts
export { CourseCard } from './components/CourseCard';
export { CourseGrid } from './components/CourseGrid';
export { useCourses } from './hooks/useCourses';
export type { Course, CourseFilters } from './types';
// Internal utilities are NOT exported
```

### Rule 2: Dependency Direction

Imports flow only **downward**:

```
app/        →  features/  →  shared/
 (top)         (middle)       (bottom)
```

- `shared/` **never** imports from `features/`
- `features/` **never** imports from `app/`
- One feature may import from another **only when necessary** (e.g., `checkout` needs `cart`)
- If two features share logic, extract it to `shared/`

### Rule 3: Path Aliases (tsconfig.json)

```json
{
  "compilerOptions": {
    "paths": {
      "@/app/*": ["./src/app/*"],
      "@/features/*": ["./src/features/*"],
      "@/shared/*": ["./src/shared/*"],
      "@/ui/*": ["./src/shared/components/ui/*"],
      "@/lib/*": ["./src/shared/lib/*"],
      "@/types/*": ["./src/shared/types/*"],
      "@/hooks/*": ["./src/shared/hooks/*"]
    }
  }
}
```

**Avoid relative imports** (`../../`) — they break during migration.

### Rule 4: Feature Internal Structure

```
features/courses/
├── api/                  # API layer
│   └── courses.api.ts
├── components/           # React components
│   ├── CourseCard.tsx
│   ├── CourseGrid.tsx
│   └── CourseFilters.tsx
├── hooks/                # Custom hooks
│   ├── useCourses.ts
│   └── useCourseDetail.ts
├── store/                # Zustand store (if needed)
│   └── courses.store.ts
├── types/                # Feature-specific types
│   └── index.ts
├── utils/                # Helper functions
│   └── formatters.ts
├── schemas/              # Zod validation schemas
│   └── course.schema.ts
└── index.ts              # Public API (barrel export)
```

### Rule 5: API Layer is Mandatory

**Never** call `fetch` or `axios` directly inside a component.

```typescript
// ❌ WRONG
function CoursePage() {
  useEffect(() => {
    fetch('/api/courses').then(...)
  }, []);
}

// ✅ CORRECT — API layer → hook → component
// features/courses/api/courses.api.ts
export const coursesApi = {
  getAll: (params) => apiClient.get('/courses', { params }),
};

// features/courses/hooks/useCourses.ts
export const useCourses = (filters) =>
  useQuery({
    queryKey: ['courses', filters],
    queryFn: () => coursesApi.getAll(filters),
  });

// features/courses/components/CourseList.tsx
function CourseList() {
  const { data } = useCourses(filters);
}
```

### Rule 6: Separate Role-Based Components

The admin panel will become a separate app. Therefore:

```typescript
// ❌ WRONG — role checks inside a shared component
function CourseCard({ course, userRole }) {
  return (
    <div>
      {userRole === 'admin' && <DeleteButton />}
      {userRole === 'instructor' && <EditButton />}
    </div>
  );
}

// ✅ CORRECT — dedicated components per role
// features/courses/components/CourseCard.tsx           (student)
// features/instructor/components/InstructorCourseCard.tsx
// features/admin/components/AdminCourseCard.tsx
```

If shared logic exists, extract a base component and compose on top of it.

### Rule 7: Environment Variables

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_STRIPE_KEY=pk_test_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

- `NEXT_PUBLIC_` prefix — exposed to browser
- Keep secrets server-side only (`.env` without prefix)
- Always keep `.env.example` up to date

## Naming Conventions

### Files

| Type | Format | Example |
|------|--------|---------|
| Component | PascalCase | `CourseCard.tsx` |
| Hook | camelCase + `use` prefix | `useCourses.ts` |
| Util | camelCase | `formatPrice.ts` |
| Type | camelCase + `.types.ts` | `course.types.ts` |
| API | camelCase + `.api.ts` | `courses.api.ts` |
| Schema | camelCase + `.schema.ts` | `course.schema.ts` |
| Store | camelCase + `.store.ts` | `auth.store.ts` |
| Constants | UPPER_SNAKE_CASE (inside file) | `API_ENDPOINTS` |

### Components

```typescript
// ✅ Correct structure
interface CourseCardProps {
  course: Course;
  onEnroll?: (id: string) => void;
}

export function CourseCard({ course, onEnroll }: CourseCardProps) {
  // ...
}
```

- Props always in a dedicated interface
- **No `export default`** — use named exports (easier to refactor, clearer imports)
- One component per file (small sub-components are an exception)

### Commit Messages

```
feat(courses): add course filtering by category
fix(auth): resolve token refresh race condition
refactor(cart): extract cart logic to useCart hook
docs(readme): update setup instructions
perf(video-player): lazy load HLS library
```

## State Management Rules

### Which state goes where?

| State type | Tool | Example |
|-----------|------|---------|
| Server data | TanStack Query | Course list, user profile |
| Global client | Zustand | Auth, cart, theme, UI sidebar |
| URL state | `useSearchParams` | Filters, pagination, search query |
| Form state | React Hook Form | Login, registration, course create |
| Local UI | `useState` | Modal open/close, accordion |

### Zustand Store Template

```typescript
// features/auth/store/auth.store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  user: User | null;
  token: string | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null, token: null }),
    }),
    { name: 'auth-storage' }
  )
);
```

### React Query Conventions

```typescript
// Query key structure — consistent array format
['courses']                          // All courses
['courses', { category: 'web' }]     // With filters
['courses', courseId]                // Single course
['courses', courseId, 'reviews']     // Related data

// Always define staleTime
useQuery({
  queryKey: ['courses'],
  queryFn: coursesApi.getAll,
  staleTime: 5 * 60 * 1000, // 5 minutes
});
```

## Component Rules

### 1. Component Size

- **Maximum:** 200 lines (JSX + logic combined)
- If > 200 lines — split into sub-components or extract a custom hook

### 2. Separating Logic

```typescript
// ❌ Bad — all logic inside the component
function CoursePage({ id }) {
  const [course, setCourse] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => { /* fetch logic */ }, [id]);
  const handleEnroll = async () => { /* enroll logic */ };
  // 300 lines of JSX...
}

// ✅ Good — logic in custom hooks
function CoursePage({ id }) {
  const { course, isLoading } = useCourseDetail(id);
  const { enroll, isEnrolling } = useEnrollment(id);
  
  if (isLoading) return <CourseSkeleton />;
  return <CourseDetails course={course} onEnroll={enroll} />;
}
```

### 3. Server vs Client Components

In Next.js App Router, **default is Server Component**. Only use `'use client'` when needed:

- State (`useState`, `useReducer`)
- Effects (`useEffect`)
- Browser APIs (localStorage, window)
- Event handlers (onClick, onChange)

Everything else stays as a Server Component (faster, better SEO, smaller bundle).

## Security Rules

1. **Never** hardcode secret keys in frontend code
2. XSS: avoid `dangerouslySetInnerHTML`; if required, use `DOMPurify`
3. Store API tokens in `httpOnly cookies` — **not** localStorage (XSS risk)
4. Every form must be validated with Zod
5. Never `console.log` sensitive data (passwords, tokens)

## Performance Rules

1. **Images:** always use `next/image`
2. **Fonts:** optimize with `next/font`
3. **Code splitting:** use `dynamic import` for heavy components

   ```typescript
   const VideoPlayer = dynamic(() => import('./VideoPlayer'), { ssr: false });
   ```

4. **Memoization:** `useMemo`, `useCallback` only when measured and proven necessary — don't pre-optimize
5. **Lists:** virtualize when rendering 100+ items (`@tanstack/react-virtual`)

## Adding a New Feature — Checklist

When creating a new feature:

- [ ] Create `features/[feature-name]/` folder
- [ ] Add subfolders: `api/`, `components/`, `hooks/`, `types/`
- [ ] Create `index.ts` barrel export
- [ ] Write types and Zod schemas
- [ ] Write API layer (`*.api.ts`)
- [ ] Write custom hooks (`use*`)
- [ ] Write components (with props interface)
- [ ] Add Zustand store if global state is needed
- [ ] Write tests (at minimum for hooks and key components)
- [ ] Export public API from `index.ts`
- [ ] Update relevant route in `app/`

## Forbidden Practices

❌ Calling `fetch` or axios directly inside a component
❌ Importing another feature's internal files (`features/a/components/X`)
❌ Using `any` type (only with `// @ts-expect-error` in rare, justified cases)
❌ Leaving `console.log` in production code
❌ Committing `.env` files
❌ Using relative imports (`../../shared/...`)
❌ Mixing admin logic into student components
❌ Writing components longer than 500 lines
❌ Using `export default` (named exports are mandatory)
❌ Hardcoded user-facing strings (use i18n)

## Migration Signals

When 2+ of these signals appear — it's time to migrate to Turborepo:

1. Team has 5+ developers and git conflicts are frequent
2. Admin panel needs independent deployment (separate subdomain, stricter access)
3. Build time exceeds 3 minutes
4. Mobile app (React Native) is being added
5. Admin panel pulls in heavy libraries that bloat the student bundle

No signals? Don't migrate. Follow YAGNI.

## Code Quality Tools

- **ESLint** — `eslint-config-next` + `eslint-plugin-import` (to enforce cross-feature import restrictions)
- **Prettier** — code formatting
- **Husky + lint-staged** — pre-commit hooks
- **TypeScript strict mode** — always enabled
- **Commitlint** — enforce conventional commits
- **TypeScript path restrictions** — block imports from feature internals via ESLint rules

## Useful Snippets

### API Layer Template

```typescript
// features/[name]/api/[name].api.ts
import { apiClient } from '@/shared/lib/axios';
import type { Course, CourseFilters, CreateCourseDto } from '../types';

export const coursesApi = {
  getAll: (params?: CourseFilters) =>
    apiClient.get<Course[]>('/courses', { params }).then(r => r.data),
    
  getById: (id: string) =>
    apiClient.get<Course>(`/courses/${id}`).then(r => r.data),
    
  create: (data: CreateCourseDto) =>
    apiClient.post<Course>('/courses', data).then(r => r.data),
    
  update: (id: string, data: Partial<CreateCourseDto>) =>
    apiClient.patch<Course>(`/courses/${id}`, data).then(r => r.data),
    
  delete: (id: string) =>
    apiClient.delete(`/courses/${id}`),
};
```

### Custom Hook Template

```typescript
// features/[name]/hooks/use[Name].ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { coursesApi } from '../api/courses.api';

export const useCourses = (filters?: CourseFilters) =>
  useQuery({
    queryKey: ['courses', filters],
    queryFn: () => coursesApi.getAll(filters),
    staleTime: 5 * 60 * 1000,
  });

export const useCreateCourse = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: coursesApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] });
    },
  });
};
```

### Barrel Export Template

```typescript
// features/courses/index.ts

// Components (public)
export { CourseCard } from './components/CourseCard';
export { CourseGrid } from './components/CourseGrid';
export { CourseFilters } from './components/CourseFilters';

// Hooks (public)
export { useCourses, useCourseDetail } from './hooks/useCourses';
export { useEnrollment } from './hooks/useEnrollment';

// Types (public)
export type { Course, CourseFilters as CourseFiltersType } from './types';

// Note: API and internal utils are NOT exported — they stay internal
```
