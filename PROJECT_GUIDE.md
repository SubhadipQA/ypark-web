# YPark Project Guide

This document explains how the YPark web project is structured, what each page is responsible for, and where someone should make changes without needing to reverse-engineer the whole codebase first.

The goal of this file is practical clarity:

- what the site is
- what routes exist
- how the homepage is composed
- where styling lives
- where content lives
- what parts are still incomplete

## 1. Project Purpose

YPark Web is the public-facing marketing and product website for YPark.

The site currently serves four main purposes:

1. explain YPark to parking owners and operators
2. present YAdmin as the multi-zone operating layer
3. prepare the driver-facing story for future rollout
4. provide legal pages and a working newsletter subscription flow

This is not a dashboard app. It is a branded marketing site built with App Router pages and section-based landing content.

## 2. Current Stack

- Next.js 16 App Router
- React 19
- ESLint 9
- Tailwind CSS 4 integration
- `next/font` for DM Sans and DM Mono
- Resend for newsletter emails

Global fonts, metadata, and document shell setup live in `app/layout.tsx`.

## 3. High-Level Route Map

### Public pages

- `/` homepage
- `/partners` parking owner / partner landing page
- `/yadmin` multi-zone admin landing page
- `/find-parking` coming-soon page for drivers
- `/privacy` privacy policy
- `/terms` terms of service
- `/cookie-policy` cookie policy

### API routes

- `/api/subscribe` implemented and active
- `/api/contact` file exists but is empty
- `/api/notify` file exists but is empty

## 4. Homepage Structure

Homepage route file:

- `app/page.js`

The homepage is assembled from extracted section components.

Current order:

1. `Navbar`
2. `Hero`
3. `Problem`
4. `ForOwners`
5. `HowItWorks`
6. `Features`
7. `AppDownload`
8. `FAQ`
9. `Footer`

These sections come from `components/sections/`.

Important note:

The navbar contains anchor links such as:

- `#how-it-works`
- `#features`
- `#faq`

If someone changes or removes a homepage section, they also need to verify that the matching `id` still exists. Otherwise the nav will appear broken.

## 5. Components And Section Files

Main section directory:

- `components/sections/`

Current files:

- `Navbar.js`
- `Hero.js`
- `Problem.js`
- `ForOwners.js`
- `HowItWorks.js`
- `Features.js`
- `AppDownload.js`
- `FAQ.js`
- `Footer.js`
- `Cities.js`
- `ForDrivers.js`

### What is actively used on the homepage

Used now:

- `Navbar.js`
- `Hero.js`
- `Problem.js`
- `ForOwners.js`
- `HowItWorks.js`
- `Features.js`
- `AppDownload.js`
- `FAQ.js`
- `Footer.js`

Currently not wired into the homepage:

- `Cities.js`
- `ForDrivers.js`

Those two files exist as possible future sections, but they are not currently part of the live homepage flow.

## 6. Partners Page Structure

Partners page route:

- `app/partners/page.js`

This page is not composed from many extracted section files. Instead, it is mostly one large route file with multiple internal section functions.

Current page shape:

1. hero
2. who it is for
3. parking types
4. how it works
5. features
6. app download
7. FAQ
8. footer

Practical rule:

If a change is specific to the Partners page, check `app/partners/page.js` first, not `components/sections/`.

## 7. YAdmin Page Structure

YAdmin route:

- `app/yadmin/page.js`

Like the Partners page, YAdmin is mostly an in-route page with local section functions rather than many extracted shared components.

Current page shape:

1. hero
2. who it is for
3. what it does / features
4. how it works
5. request demo CTA
6. FAQ
7. footer

This route is focused on multi-zone operators, parking companies, and government-style operations.

## 8. Legal Page Structure

Legal routes:

- `app/privacy/page.js`
- `app/terms/page.js`
- `app/cookie-policy/page.js`

These pages follow the same general structure:

- dark hero area
- light main body section
- sidebar with legal document links and contact/help block
- repeated helper components defined inside the file

Examples of repeated helper patterns:

- `LegalHero`
- `LegalBody`
- `LegalSection`
- `LegalP`
- `LegalList`

Important maintenance note:

These legal pages duplicate a lot of layout logic. If someone plans a major redesign, it would be worth extracting a shared legal layout component. For normal copy updates, editing each page directly is faster and safer.

## 9. Shared Styling System

Global styling file:

- `app/globals.css`

The project uses a hybrid styling approach:

- shared global helpers in `globals.css`
- inline `style` objects inside JSX
- small local `<style>` blocks for hover and responsive rules

This means visual edits are often split between section files and the global stylesheet.

### Most important shared classes

- `.section-wrap` controls max width and horizontal padding
- `.section-pad` controls shared top and bottom section spacing
- `.section-pad-hero` controls homepage hero top offset
- `.section-label` controls small uppercase section labels
- `.section-heading` controls large section headings
- `.section-sub` controls section intro/body copy
- `.btn-primary` and `.btn-secondary` control main CTA button styling

Practical rule:

- If spacing feels off across many sections, check `globals.css`
- If spacing feels off in only one section, check that section file first

## 10. Shared Content And Navigation

Shared static content file:

- `lib/constants.js`

This file currently contains:

- `cities`
- `ownerFaqs`
- `driverFaqs`
- `navLinks`

If the navbar labels, FAQ content, or shared text blocks change, this is one of the first files to inspect.

The navbar reads from `navLinks`, so broken anchor behavior is usually caused by a missing section `id`, not by the navbar component itself.

## 11. Metadata, Fonts, And Branding

Root config file:

- `app/layout.tsx`

This file currently controls:

- DM Sans and DM Mono loading through `next/font`
- default page title template
- global SEO description and keywords
- Open Graph metadata
- Twitter metadata
- robots settings
- manifest reference

If the brand name, SEO defaults, or site-wide metadata should change, edit `app/layout.tsx`.

## 12. Newsletter Flow

Newsletter endpoint:

- `app/api/subscribe/route.js`

Current behavior:

1. validate submitted email
2. send internal notification email
3. send welcome email to the subscriber

Expected environment variables:

- `RESEND_API_KEY`
- `CONTACT_EMAIL`

If subscription is failing, check:

1. environment variables
2. Resend API setup
3. footer form integration in `components/sections/Footer.js`

## 13. Known Incomplete Areas

These parts still need work if the product expands:

- `app/api/contact/route.js` is empty
- `app/api/notify/route.js` is empty
- `find-parking` is a polished placeholder page, not a complete user flow
- `Cities.js` exists but is not connected
- `ForDrivers.js` exists but is not connected

## 14. How To Edit This Project Safely

### If you need to change homepage content

Edit:

- `app/page.js`
- `components/sections/*.js`

### If you need to change global spacing or typography

Edit:

- `app/globals.css`

### If you need to change partner-specific content

Edit:

- `app/partners/page.js`

### If you need to change YAdmin-specific content

Edit:

- `app/yadmin/page.js`

### If you need to change legal content

Edit:

- the specific legal route page directly

### If you need to change navigation labels or shared FAQs

Edit:

- `lib/constants.js`

## 15. Recommended Future Cleanup

If this codebase continues growing, the most valuable cleanup items would be:

1. extract shared legal layout components
2. extract repeated card / CTA patterns from large route files
3. implement `contact` and `notify` API routes if those forms go live
4. decide whether `Cities` and `ForDrivers` should be completed or removed
5. reduce inline styles if the team wants more maintainable long-term styling

## 16. Bottom Line

Anyone new to this project should understand it this way:

- the homepage is section-component based
- Partners and YAdmin are mostly route-local landing pages
- legal pages are standalone but structurally similar
- `globals.css` controls the shared layout system
- `constants.js` controls shared navigation/content values
- `subscribe` works, `contact` and `notify` do not yet

That is the current state of the project.

Anyone working on the project should treat these as incomplete implementation areas.

## 13. Important Implementation Pattern To Remember

This repo currently mixes two patterns:

### Pattern A: homepage sections stored as reusable section files

Examples:

- `Hero.js`
- `Problem.js`
- `ForOwners.js`
- `HowItWorks.js`
- `AppDownload.js`
- `FAQ.js`

### Pattern B: route page built inline inside one file

Examples:

- `/app/partners/page.js`
- `/app/privacy/page.js`
- `/app/terms/page.js`

Before changing anything, first check which pattern the page uses.

That avoids editing the wrong file.

## 14. How To Modify Common Things

### Change homepage order

Edit:

- `/app/page.js`

### Change homepage section content

Edit the matching file in:

- `/components/sections/`

### Change navbar links

Check:

- `/lib/constants.js`
- `/components/sections/Navbar.js`

### Change footer newsletter behavior

Check:

- `/components/sections/Footer.js`
- `/app/api/subscribe/route.js`

### Change shared page spacing or section rhythm

Edit:

- `/app/globals.css`

Focus on:

- `.section-wrap`
- `.section-pad`
- `.section-pad-hero`

### Change legal page content

Edit directly:

- `/app/privacy/page.js`
- `/app/terms/page.js`

### Change legal page layout or sidebar design

Edit the helper functions inside those route files unless they are refactored into shared components later.

### Change partner page content

Edit:

- `/app/partners/page.js`

## 15. Practical Recommendations For Future Work

If the project grows, these are sensible next improvements:

1. move repeated legal layout into reusable shared components
2. split partner page sections into reusable files instead of keeping everything in one route file
3. implement the empty `find-parking`, `contact`, and `notify` flows
4. add a small environment variable section to the README
5. create a clear naming convention for which pages use inline sections vs reusable section components

## 16. Quick Orientation For A New Developer

If someone opens this project for the first time, this is the fastest way to understand it:

1. read `/app/layout.tsx` to understand fonts and global metadata
2. read `/app/globals.css` to understand layout and design helpers
3. read `/app/page.js` to understand the homepage composition
4. read `/components/sections/` for the main reusable sections
5. read `/app/partners/page.js` for the owner-focused route
6. read `/app/privacy/page.js` and `/app/terms/page.js` for legal structure
7. read `/app/api/subscribe/route.js` for the only active email-based backend flow

## 17. Final Note

This guide is meant to stay practical.

Whenever a new page, route, section, or integration is added, this file should be updated so the next person can understand the project quickly without reverse-engineering the whole codebase.