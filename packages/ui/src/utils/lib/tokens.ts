/**
 * Design Tokens
 * Export color, spacing, typography values for programmatic use
 */

export const colors = {
  background: "var(--color-background)",
  foreground: "var(--color-foreground)",
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  muted: "var(--color-muted)",
  accent: "var(--color-accent)",
  destructive: "var(--color-destructive)",
} as const;

export const spacing = {
  xs: "var(--spacing-xs)",
  sm: "var(--spacing-sm)",
  md: "var(--spacing-md)",
  lg: "var(--spacing-lg)",
  xl: "var(--spacing-xl)",
} as const;

export const radius = {
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
} as const;
