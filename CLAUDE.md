# Toronto Flooring Installers — Project Context

## What this is
Marketing website for **Toronto Flooring Installers** — a flooring contractor at 2061 McCowan Rd, Scarborough, ON M1S 3Y6, serving the Greater Toronto Area. The site exists to generate local leads: phone calls and quote-form submissions from homeowners and commercial clients searching for flooring services in the GTA.

This Next.js codebase IS the production site at flooringinstallerstoronto.com (originally scaffolded in Bolt). Changes that ship to `main` and deploy via Netlify are live to real visitors.

This site is part of a broader local SEO + Google Ads strategy run by **Local Rank**. SEO and conversion performance matter more than fancy features.

Public domain (per `metadataBase` in `app/layout.tsx`): `https://flooringinstallerstoronto.com`
Phone: `(647) 905-0050`. Public-facing email: `info@flooringinstallerstoronto.com`. Lead-form notifications currently route to `abduljaafar10@gmail.com` (set in `app/api/contact/route.ts`).

## Tech stack (verified against package.json)
- **Framework:** Next.js 14.2.29 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Icons:** lucide-react
- **Database:** Supabase (`@supabase/supabase-js`)
- **Transactional email:** Resend
- **Deployment:** Netlify (`netlify.toml`, `@netlify/plugin-nextjs`)
- **No Framer Motion** — not installed; don't add it without asking.

## Commands
- `npm run dev` — local dev server at http://localhost:3000
- `npm run build` — production build (`next build`)
- `npm run start` — run the production build locally
- `npm run lint` — ESLint check

> Note: `scripts/generate-sitemap.js` exists but is NOT wired into the build script. App also has `app/sitemap.ts` (Next.js native sitemap) — see "Known issues" below.

## Repo layout (important: there are TWO components folders)
- `app/` — App Router routes
  - `api/contact/route.ts` — POST handler that emails leads via Resend
  - `services/[slug]/`, `locations/[slug]/`, `neighborhoods/[slug]/`, `blog/[slug]/` — dynamic pages
  - `sitemap.ts`, `robots.ts` — Next.js native SEO files (use these, not the `.xml`/`.txt` static copies)
- `src/components/` — **the live components folder.** Layout imports from here (`@/src/components/...`).
  - `home/` — homepage sections (Hero, Services, WhyChooseUs, Projects, ServiceAreas, FAQ, Quote)
  - `ui/` — Breadcrumbs, CTASection, MapEmbed, MobileStickyCTA, TrustBar
  - `Header.tsx`, `Footer.tsx`, `LeadForm.tsx`, `HeroLeadForm.tsx`, `ContactForm.tsx`, `FloatingCTA.tsx`
- `src/constants/` — page data (services, locations, blogPosts, faqs, contact, images, service-schema-data)
- `src/lib/` — `supabase.ts` (client), `schema.ts` (LocalBusiness/Service JSON-LD)
- `lib/` — `services-data.ts`, `locations-data.ts` (older data files, used by some routes)
- `supabase/functions/send-lead-notification/` — Supabase edge function (alternate lead-notification path)
- `supabase/migrations/` — DB schema (leads, content, neighborhoods, reviews tables)
- `components/Header.tsx`, `components/Footer.tsx` — **dead code, do not edit.** Layout uses the `src/components` versions.

## Project conventions
- App Router only — no `pages/` directory.
- Server Components by default. Add `"use client"` only when needed (form state, hooks, browser APIs).
- Tailwind for all styling. No CSS modules, no styled-components, no inline styles unless dynamic.
- Images: use `next/image`. Local images live in `/public`.
- Per-route SEO via the `metadata` export or `generateMetadata`.
- Lead form posts to `/api/contact` (the App Router route handler). Do not assume the Supabase edge function is wired up — verify before touching either path.

## Environment variables (create `.env.local` — don't commit it)
Required for local dev and production:
- `RESEND_API_KEY` — Resend API key (transactional email for lead notifications). Used in `app/api/contact/route.ts` and the Supabase edge function. **The previous key was revoked on 2026-05-01; generate a new one and put it here only.**
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL (safe to expose)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase anon key (safe to expose)

In Netlify, set these in **Site settings → Environment variables**. They are not auto-synced from `.env.local`.

## Design priorities (in order)
1. **Conversion** — clear CTAs, phone visible above the fold, quote form on every key page.
2. **Local SEO** — proper H1s, schema markup, location/service keywords in copy, fast LCP.
3. **Mobile first** — most traffic is mobile. Test every change at 375px width.
4. **Trust signals** — reviews, badges, before/after photos, years in business.

## SEO requirements (don't break these)
- Each page has a unique `<title>` and meta description (set via `metadata` export).
- H1 is unique per page and includes the primary keyword + Toronto/GTA where natural.
- LocalBusiness schema on the homepage (via `getLocalBusinessSchema()` in `src/lib/schema.ts`).
- Service schema on service pages (via data in `src/constants/service-schema-data.ts`).
- All images have descriptive alt text.
- Internal linking between service pages and location pages.
- No client-side-only rendering for content that needs to be indexed.
- Don't change URL structure of existing pages — it'll tank rankings.

## Don'ts
- Don't add new UI libraries (shadcn, MUI, Chakra, Framer Motion, etc.) without asking — Tailwind only.
- Don't change URL slugs of existing service/location/neighborhood/blog pages.
- Don't remove or rename meta tags / JSON-LD schema without checking.
- Don't edit anything in the top-level `/components` folder — it's dead code (the live ones are in `/src/components`).
- Don't push directly to `main`. Work on a branch.
- Don't add heavy client-side JS to mostly-static content pages.

## Current state (as of 2026-05-01, fresh from Bolt)
- All page routes exist: home, about, contact, blog (+ 6 posts), 5 service pages, 7 location pages, 10 neighborhood pages, plus terms/privacy/disclaimer.
- Lead form posts to `/api/contact` (Resend → email to `abduljaafar10@gmail.com`).
- HomeAndConstructionBusiness JSON-LD on homepage (`getLocalBusinessSchema()` in `src/lib/schema.ts` — function name is misleading, type is HomeAndConstructionBusiness). Service + FAQ + Breadcrumb schemas on service pages.
- Sitemap and robots.txt generated by App Router (`app/sitemap.ts`, `app/robots.ts`).

## Known issues to clean up (do these before "real" feature work)
- [ ] **Map placeholder**: `src/components/ui/MapEmbed.tsx` uses literal `'YOUR_GOOGLE_MAPS_API_KEY'` — the map won't render. Either add a real key (env var) or use a free embed without API key.
- [ ] **Dead components**: `components/Header.tsx` and `components/Footer.tsx` at repo root are not imported anywhere — delete them.
- [ ] **Duplicate Tailwind config**: both `tailwind.config.js` and `tailwind.config.ts` exist — keep one, delete the other.
- [ ] **Vite leftover in sitemap script**: `scripts/generate-sitemap.js` reads `process.env.VITE_SUPABASE_ANON_KEY` (Bolt scaffold remnant). Either delete the script (App Router's `app/sitemap.ts` already covers sitemap) or fix it to use `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- [ ] **Stale doc**: `SITEMAP_OPTIMIZATION_SUMMARY.md` claims build runs `vite build`. Actual build is `next build`. Update or delete the doc.
- [ ] **Duplicate sitemaps/robots**: `app/sitemap.xml`, `app/sitemap/`, `app/robots.txt` exist alongside the live `app/sitemap.ts` / `app/robots.ts`. Delete the static duplicates so search engines see one canonical version.
- [ ] **`.next/` checked into git**: build artifacts shouldn't be committed. Add `.next` to `.gitignore` and remove from the repo.
- [ ] **Resend sender domain**: `app/api/contact/route.ts` sends from `onboarding@resend.dev` (Resend sandbox). Verify the production domain in Resend and switch to e.g. `noreply@flooringinstallerstoronto.com`.
- [ ] **Two lead pipelines**: both `app/api/contact/route.ts` and `supabase/functions/send-lead-notification/index.ts` exist. Confirm which the form actually calls and delete the unused one.
- [ ] **Domain inconsistency**: `metadataBase` uses `flooringinstallerstoronto.com`; `SITEMAP_OPTIMIZATION_SUMMARY.md` references `torontoflooringinstallers.com`. Confirm the real production domain and align everything.

## Open questions for the user
- Which domain is the real production domain — `flooringinstallerstoronto.com` or `torontoflooringinstallers.com`?
- Is the form actually wired through `app/api/contact` or the Supabase edge function?
- Is Google Tag Manager / GA4 set up yet? (No GTM/GA snippet found in `app/layout.tsx`.)
- Is the Supabase project already provisioned and the migrations applied, or do migrations still need to run?
