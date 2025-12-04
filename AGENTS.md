# Repository Guidelines

## Project Structure & Module Organization
- Root docs (`README.md`, `DEVELOPMENT_GUIDE.md`, deployment notes) describe current UX and roadmap; start there before touching UI.
- `client/` holds the Vite + React + TypeScript app. Key areas: `src/pages` for routed screens, `src/components` for shared UI (including `ui/` atoms and `layout/` wrappers), `src/contexts` for providers, `src/store` for Zustand stores, and `src/lib` for utilities/auth helpers.
- Domain bundles live under `client/src/apps` (physiology, histology MTO1/MTO2, sociology, flashcards, anatomy, body-development). Keep new domain code alongside its data and helpers to preserve cohesion.
- Data/config: `client/src/firebase` for client config, `client/public/subjects` for subject art, `client/src/apps/physiology/data` for question banks, and `client/src/apps/physiology-mto/data` for generated explanations. Shared styles sit in `client/src/index.css` and component-specific modules.
- Root-level `scripts/` contains Node utilities for content import/cleanup; run them from that folder to keep dependencies isolated.

## Build, Test, and Development Commands
- `cd client && npm install` — install front-end dependencies.
- `npm run dev` — start the Vite dev server (http://localhost:5173).
- `npm run build` — type-checks (`tsc -b`) then builds the production bundle.
- `npm run lint` — ESLint using the flat config (`eslint.config.js`); ensure a clean run before pushing.
- `npm run preview` — serve the built app for smoke testing the production output.

## Coding Style & Naming Conventions
- TypeScript-first for new shared code; legacy app islands may stay in `.jsx`, but prefer `.tsx` when extending.
- Functional components with hooks; contexts live in `src/contexts` and hooks use the `useX` naming.
- Components, pages, and stores use PascalCase filenames; utilities and data files stay camelCase or kebab-case per existing folder norms.
- Tailwind CSS is available; pair `clsx`/`tailwind-merge` for conditional classes. Keep styling local to components unless updating global tokens in `index.css`.
- Follow ESLint defaults (2-space indent, semicolons off); no Prettier config present—keep diffs minimal and run `npm run lint` before commits.

## Testing Guidelines
- Automated tests are sparse; add targeted coverage for new logic-heavy utilities or hooks. Prefer Vitest + React Testing Library (aligned with Vite) if introducing tests.
- For data-heavy features (e.g., MTO question flows), create fixture-driven tests to lock down parsing and navigation behavior. Keep fixtures in-domain folders.
- At minimum, manually verify critical paths: auth flow, dashboard load, and the relevant subject app you touched. Document any untested areas in the PR.

## Commit & Pull Request Guidelines
- Commit style follows `type(scope): summary` (e.g., `feat(dashboard): Redesign dashboard with cleaner layout`). Use `feat`, `fix`, `chore`, `docs`, or `refactor` with a meaningful scope.
- For PRs, include: concise summary, linked issue/trello equivalent, screenshots or short screen recordings for UI changes (light & dark modes), and notes on tests run (`npm run lint`, `npm run build`, manual checks).
- Keep PRs scoped; when touching multiple domains, note each app/page impacted and flag any data migrations or scripts that must be rerun.

## Security & Configuration Tips
- Do not commit secrets (.env, service keys). Firebase client config lives in `client/src/firebase/config.ts`; keep admin keys out of version control.
- When modifying Firestore/Storage rules, update both `client/firestore.rules` and root copies if applicable, and call out required deployments in the PR.
