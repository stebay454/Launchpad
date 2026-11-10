# launchpad

A React + TypeScript starter template with the tooling already wired up and verified: linting, formatting, git hooks, tests, and CI.

## What's included

| Area               | Tool                                                                     |
| ------------------ | ------------------------------------------------------------------------ |
| Build / dev server | Vite                                                                     |
| UI                 | React + TypeScript + Tailwind CSS                                        |
| Package manager    | pnpm (version pinned via `packageManager`)                               |
| Node version       | Pinned in `.nvmrc`                                                       |
| Linting            | ESLint (flat config) + typescript-eslint, React hooks and jsx-a11y rules |
| Formatting         | Prettier + eslint-config-prettier                                        |
| Git hooks          | Husky + lint-staged (runs on every commit)                               |
| Unit tests         | Vitest                                                                   |
| Env check          | Node script (`--env-file`) + tests with `node:test`                      |
| CI                 | GitHub Actions (format, lint, typecheck, tests, build)                   |
| Maintenance        | Dependabot (weekly), `CHANGELOG.md`                                      |

## Prerequisites

- Node (use the version in `.nvmrc`)
- pnpm (version is set in `package.json` under `packageManager`; enable it with `corepack enable`)
- Git

## Start a new project from this template

1. Click **Use this template** at the top of this repo, then **Create a new repository**.
2. Clone your new repo and enter the folder.
3. Install dependencies:

   ```bash
   pnpm install
   ```

   This also installs the Husky git hooks.

4. Create your local env file:

   ```bash
   cp .env.example .env
   ```

   On Windows PowerShell: `Copy-Item .env.example .env`

5. Start the dev server:

   ```bash
   pnpm dev
   ```

6. Update `name` in `package.json`, reset `CHANGELOG.md`, and replace this README.

## Scripts

| Command             | What it does                                            |
| ------------------- | ------------------------------------------------------- |
| `pnpm dev`          | Start the Vite dev server                               |
| `pnpm build`        | Production build                                        |
| `pnpm typecheck`    | Type-check the project                                  |
| `pnpm lint`         | Run ESLint                                              |
| `pnpm format`       | Format files with Prettier                              |
| `pnpm format:check` | Check formatting without changing files                 |
| `pnpm test`         | Run Vitest (watch mode locally)                         |
| `pnpm test:node`    | Run the Node test runner tests in `scripts/`            |
| `pnpm env:check`    | Verify required env vars are set (needs a local `.env`) |

## Environment variables

- Real values live in `.env`, which is git-ignored and must never be committed.
- `.env.example` lists every variable the project expects, with fake values. Keep it up to date when you add one.
- `pnpm env:check` fails with a clear message and exit code `1` if a required variable is missing or empty.
- Any variable prefixed with `VITE_` is embedded in the browser bundle and is publicly readable. Never put secrets in a `VITE_` variable.

To require a new variable, add its name to the `required` list in `scripts/check-env.js` and to `.env.example`.

## Git hooks

On every commit, lint-staged runs on the staged files. A commit with lint or format errors is blocked. If hooks aren't running in a fresh clone, run `pnpm install` again.

## CI

GitHub Actions runs on every pull request and on pushes to `main`: install with a frozen lockfile, format check, lint, typecheck, tests, Node tests, and build. `pnpm env:check` is intentionally not run in CI because there is no `.env` there.

Recommended: in your repo's settings, add a ruleset that requires the CI check to pass before merging into `main`.

## Dependency updates

Dependabot opens weekly PRs for outdated or vulnerable dependencies (see `.github/dependabot.yml`).

## Versioning

Changes are recorded in [CHANGELOG.md](./CHANGELOG.md). Releases are tagged (`v0.1.0` and onward).
