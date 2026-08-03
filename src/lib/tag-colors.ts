// src/lib/tag-colors.ts
export const TAG_COLORS = ['pink', 'violet', 'yellow', 'orange', 'red', 'green', 'cyan', 'blue'] as const;

export const TAG_COLOR_VARS: Record<typeof TAG_COLORS[number], string> = {
  pink: 'var(--pink)',
  violet: 'var(--violet)',
  yellow: 'var(--yellow)',
  orange: 'var(--orange)',
  red: 'var(--red)',
  green: 'var(--green)',
  cyan: 'var(--cyan)',
  blue: 'var(--blue)',
};
