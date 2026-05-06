export const spacing = {
  none: 0,
  "2xs": 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  "2xl": 32,
  "3xl": 40,
  "4xl": 48,
  section: 56,
  layout: 64,
  gutter: 24
} as const;

/** Same scale with explicit `px` units for inline styles */
export const spacingPx = Object.fromEntries(
  Object.entries(spacing).map(([k, v]) => [k, `${v}px`])
) as Record<keyof typeof spacing, string>;
