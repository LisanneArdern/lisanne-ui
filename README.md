# lisanne-ui

A React + TypeScript design system starter, built to grow over time.

## Quick start

```bash
npm install
npm run storybook
```

## Scripts

- `npm run dev` - local Vite development.
- `npm run build` - build the component library into `dist`.
- `npm run test` - run Vitest tests.
- `npm run lint` - run ESLint.
- `npm run storybook` - run Storybook docs playground.

## Project structure

```text
src/
  components/
    Button/
      Button.tsx
      Button.stories.tsx
      Button.test.tsx
      index.ts
  tokens/
    colors.ts
    spacing.ts
  index.ts
```

## How to add new components

1. Create a folder in `src/components`.
2. Add the component file, story, and test.
3. Export it from the component `index.ts`.
4. Re-export from `src/components/index.ts`.
5. Ensure it is available through `src/index.ts`.
