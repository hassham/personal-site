# Wishlist

Ideas for later — not scheduled, just parked here so they don't get lost.

- [ ] **JSON-LD structured data** — Add a `Person` schema (schema.org) block to
      the About/Home page (name, job title, employer, `sameAs` links to
      GitHub/LinkedIn). Helps search engines index the site as a well-formed
      entity rather than inferring it from prose.
- [ ] **RSS feed** — Add `src/pages/rss.xml.js` using `@astrojs/rss`,
      generated from the existing `blog` content collection. Lets people
      subscribe via feed reader instead of checking the site manually.
- [ ] **llms.txt** — Add a `/llms.txt` file: a curated, plain-markdown
      summary of the site written for AI agents/crawlers to fetch directly
      (who you are, key pages, links) instead of parsing rendered HTML. An
      emerging convention, not yet a universal standard — treat as a bet,
      not a guaranteed win.
- [ ] **Case studies for real projects** — Expand the Broadcast Monitoring
      System and TV Audience Measurement entries from one-line descriptions
      into fuller write-ups (problem, approach, impact).
- [ ] **Custom 404 page** — Replace Astro's bare default with something
      branded, matching the site's design system.
- [ ] **Manual dark/light toggle** — Currently the theme only follows system
      preference (`prefers-color-scheme`); add a manual override switch.
- [ ] **Blog tags + search** — Categorize and make posts findable once
      there's more than one. Not urgent yet, but worth parking.
