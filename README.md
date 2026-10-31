# Arcadia Feeder Co. — arcadiafeeder.com

The website for Arcadia Feeder Co., three middle schoolers in Arcadia, CA breeding reptile feeders.
Originally built in Lovable, now hosted on **Netlify** from this GitHub repo.

## How it works
- Built with React + TanStack Start + Tailwind. Every page is pre-rendered to plain HTML at build time,
  so Netlify serves it as a fast static site (no server or database needed).
- **Hosting:** Netlify builds the site automatically every time a change is pushed to the `main` branch.
- **Forms:** The *Join the List* (`/join`) and *Reptile Club* (`/club`) forms use **Netlify Forms**.
  Submissions show up in Netlify → your site → **Forms** (`join` and `club`), and Netlify can email
  each one to arcadiafeederco@gmail.com (Forms → Form notifications → Email notification).

## Where things live
| What | Where |
|---|---|
| Home page | `src/routes/index.tsx` |
| FAQ | `src/routes/faq.tsx` + questions in `src/data/faq.ts` |
| Reptile 101 articles | `src/data/reptile101.ts` (add an entry here to publish a new article) |
| Join form / Club form | `src/routes/join.tsx`, `src/routes/club.tsx` |
| Header, footer | `src/components/site/` |
| Logos and team photos | `src/assets/` |
| Favicon, share image, sitemap, robots.txt | `public/` |
| Colors and fonts | `src/styles.css` (Fraunces for headings, Inter for body) |
| Netlify form definitions | `public/__forms.html` (if you add or rename a form field, update it here too) |
| Netlify build settings | `netlify.toml` |

## Running it on your computer
Requires Node.js 22+.
```bash
npm install
npm run dev      # opens a local preview at http://localhost:8080
npm run build    # builds the static site into dist/client
```
(Forms only submit for real on the Netlify-hosted site, not in local preview.)

## Making a change
Edit the file, commit, and push to `main` on GitHub. Netlify rebuilds and publishes in about a minute.
If you add a new article to Reptile 101, also add its URL to `public/sitemap.xml`.
