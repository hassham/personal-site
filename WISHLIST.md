# Wishlist

Ideas for later — not scheduled, just parked here so they don't get lost.

## JSON-LD structured data

Add a `Person` schema (schema.org) block to the About/Home page — name, job title,
employer, `sameAs` links to GitHub/LinkedIn. Helps search engines index the site
as a well-formed entity rather than inferring it from prose. Cheap to add (one
`<script type="application/ld+json">` block, no visual change, no new deps).

## RSS feed

Add `src/pages/rss.xml.js` using `@astrojs/rss`, generated from the existing
`blog` content collection. Lets people subscribe via feed reader instead of
checking the site manually. Zero ongoing upkeep once wired up — new posts show
up automatically. Payoff scales with how much real blog content exists, so
worth doing once there's more than the placeholder post.
