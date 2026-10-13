# Muniba — Portfolio

Next.js 16 + Tailwind v4, fully static. Dark theme with amber and teal accents.

## Edit content

Everything you'll want to change lives in **`src/content/site.ts`**: name, links, stats, projects, hackathons, teaching, YouTube and ventures.
Any field left as `""` is hidden on the site, so placeholder text never goes live.

To finish it off, fill in:

- `links.email` (this also turns on the contact form), `links.linkedin` and `links.upwork`
- `repo` / `live` for each project (the Code and Live buttons appear automatically)
- `profile.photo`: put `profile.jpg` in `/public`, then set it to `"/profile.jpg"`
- `profile.resumeUrl`: put `resume.pdf` in `/public`, then set it to `"/resume.pdf"`
- `youtube.featured`: add video IDs to embed your best videos
- `profile.siteUrl` once you have a custom domain (Vercel's URL is picked up automatically until then)

Colors and fonts are set in `src/app/globals.css` under `@theme`.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

## Deploy on Vercel

1. Push this folder to a new GitHub repo.
2. In Vercel, choose New Project, import the repo and deploy. No settings or environment variables are needed.
