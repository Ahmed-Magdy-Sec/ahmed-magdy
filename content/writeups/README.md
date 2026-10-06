Add writeups as `content/writeups/<slug>.md`, then add a matching entry in `lib/content.ts` (`writeups`).
To render them, add `app/writeups/[slug]/page.tsx` using a Markdown renderer with raw HTML disabled.
