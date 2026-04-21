# lisanne-ui

A bold, editorial React + TypeScript design system — sharp corners, heavy borders, uppercase labels, and inverted card patterns. Built to grow over time.

[![npm version](https://img.shields.io/npm/v/lisanne-ui.svg)](https://www.npmjs.com/package/lisanne-ui)
[![Storybook](https://img.shields.io/badge/Storybook-live-ff4785?logo=storybook&logoColor=white)](https://69e1d4397970f5ff67cabe66-otaxrsqaiz.chromatic.com/)

- **npm**: <https://www.npmjs.com/package/lisanne-ui>
- **Storybook**: <https://69e1d4397970f5ff67cabe66-otaxrsqaiz.chromatic.com/>

## Install

```bash
npm install lisanne-ui
```

Import the stylesheet once at your app entry point, then use any component:

```tsx
import "lisanne-ui/styles.css";
import { Button, Card, Typography } from "lisanne-ui";

export function App() {
  return (
    <Card title="Hello" description="An editorial design system.">
      <Typography variant="body">Get started with lisanne-ui.</Typography>
      <Button variant="primary">Get started</Button>
    </Card>
  );
}
```

## Components

- `Button` — `primary` / `secondary` variants
- `Badge` — `new` / `beta` / `live` / `deprecated` / `draft`
- `Input` — labels, helper text, error states, accessible
- `Textarea` — same API as `Input`
- `Card` — `default` / `inverted` variants with eyebrow, title, tags
- `Modal` — accessible dialog built on the native `<dialog>` element
- `Tooltip` — hover/focus chip with placement control
- `Typography` — `display` / `headline` / `title` / `eyebrow` / `lead` / `body` / `caption`

Design tokens (`colors`, `spacing`, `typography`, `tokens`) are exported from the root too.

## Local development

```bash
npm install
npm run dev        # live preview app at src/main.tsx
npm run storybook  # component docs playground
```

## Scripts

- `npm run dev` — Vite dev server for the local preview app
- `npm run build` — build the library into `dist/` (ESM + CJS + types)
- `npm run storybook` — run Storybook locally
- `npm run build-storybook` — build static Storybook into `storybook-static/`
- `npm run test` — run Vitest tests (`test:watch` for watch mode)
- `npm run lint` — run ESLint
- `npm run format` / `format:write` — check / apply Prettier
- `npm run typecheck` — run `tsc --noEmit`
- `npm run chromatic` — publish Storybook to Chromatic (uses `.env`)

## Project structure

```text
src/
  components/
    Button/
      Button.tsx
      button.css
      Button.stories.tsx
      Button.test.tsx
      index.ts
    Badge/ Card/ Input/ Modal/ Textarea/ Tooltip/ Typography/
    index.ts
  tokens/
    colors.ts
    spacing.ts
    typography.ts
    tokens.ts
    index.ts
  styles.css
  index.ts
```

## Adding a new component

1. Create a folder in `src/components/<Name>/`.
2. Add `Name.tsx`, `name.css`, `Name.stories.tsx`, `Name.test.tsx`, and `index.ts`.
3. Re-export from `src/components/index.ts`.
4. Verify it's reachable from `src/index.ts`.
5. Add a demo to `src/main.tsx` inside the appropriate `PreviewSection`.

## Environment variables

Secrets are loaded from a local `.env` file (git-ignored). Copy the template:

```bash
cp .env.example .env
```

Then fill in your token(s):

```bash
CHROMATIC_PROJECT_TOKEN=chpt_yourToken
```

`npm run chromatic` reads this via `dotenv-cli`.

## Publishing Storybook (Chromatic)

Storybook is auto-published to [Chromatic](https://www.chromatic.com/) on every push to `main` and on every PR, via the workflow at `.github/workflows/chromatic.yml`.

- **Required secret**: `CHROMATIC_PROJECT_TOKEN` (set under *GitHub → Settings → Secrets and variables → Actions*).
- **PRs** get a preview-URL check with visual diffs against the `main` baseline.
- **Pushes to `main`** publish a new baseline.

Ad-hoc local publish:

```bash
npm run chromatic
```

## Publishing to npm

Releases are published manually from `main`:

```bash
npm version patch   # or minor / major
npm publish         # runs lint, tests, and build via prepublishOnly
git push --follow-tags
```

Then create a matching release on GitHub pointing at the new tag.

## License

MIT © Lisanne Ardern
