// src/lib/tag-colors.ts
export const TAG_COLORS = ['pink', 'yellow', 'green', 'blue'] as const;

export const TAG_COLOR_VARS: Record<typeof TAG_COLORS[number], string> = {
  pink: 'var(--pink)',
  yellow: 'var(--yellow)',
  green: 'var(--green)',
  blue: 'var(--blue)',
};
