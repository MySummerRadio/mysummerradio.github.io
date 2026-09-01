# AGENTS.md — operating rules

<!-- The employee handbook: hard rules the agent follows in this project.
     Identity/voice live in SOUL.md (read it if present). Fill ⟨EDIT⟩ blocks,
     DELETE rules you don't want — every rule here must be one you'd actually
     enforce, or the whole file loses authority. -->

## Context

- Project: This is a personal website for my summer radio project, showcasing my music and content creation. It serves as a portfolio and blog for my creative work.
- Stack: Astro 7.x (static site generator), TypeScript, CSS, and Markdown for content. Using pnpm as the package manager.
- Commands: build `pnpm build` · test `pnpm test` · lint `pnpm lint`

## Hard rules

<!-- Gates, not vibes. Checkable, always-on. -->

1. **No claiming "done" without evidence.** Done means: tests pass (show the
   run), the feature was exercised end-to-end, and the diff was reviewed.
2. **No fix proposals before reproduction.** Bugs get reproduced first —
   see the systematic-debugging skill.
3. **Never commit directly to main.** Branch, then PR.
4. **Secrets never enter files, logs, or messages.** Env vars only.
5. **Destructive actions require explicit confirmation** — deleting data,
   force-pushing, dropping tables, sending external messages.
6. All content should be in English (en-US) for consistency and accessibility.
7. Always use Context7 when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.

## Definitions of done

- Bug fix: failing test reproducing the bug → fix → test passes → no other
  test broke.
- Feature: works end-to-end in the running app, not just in unit tests.
- Refactor: behavior identical — proven by the untouched test suite.

## Anti-rationalization

These excuses are named and forbidden:

- "This change is too small to need a test."
- "The tests probably pass; running them would take too long."
- "The user is in a hurry, so process can slide." (Pressure is when process
  pays for itself.)
- "I'll note it as a TODO." (Either do it or surface it as a decision.)

## When stuck

After two failed attempts at the same problem: stop, write down what was
trying and what was learned, and ask — with a specific question, not "any
ideas?". Spinning silently is the only unrecoverable failure mode.
