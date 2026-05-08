# YPark Project Guide

This file is a working guide for the YPark web project.

The goal is simple:

- help any developer understand what has already been built
- show how pages and sections are connected
- explain where content and styling should be modified
- reduce confusion when future changes are needed

## 1. Project Summary

YPark Web is a Next.js App Router project used as a marketing and product site for YPark.

The current site covers:

- the main landing page
- a dedicated partners / parking owners page
- legal pages for privacy and terms
- newsletter subscription flow
- placeholder support for future contact, notify, and driver-facing flows

## 2. Core Stack

- Next.js 16 App Router
- React 19
- ESLint 9
- Tailwind CSS 4
- `next/font` for DM Sans and DM Mono

Main global layout and metadata are defined in `/app/layout.tsx`.

## 3. Current Route Structure

### Main routes

- `/` → homepage
- `/partners` → parking owners / partner page
- `/find-parking` → currently exists but is still empty / placeholder
- `/privacy` → privacy policy page
- `/terms` → terms of service page

### API routes

- `/api/subscribe` → active and used by the footer newsletter form
- `/api/contact` → file exists but currently empty
- `/api/notify` → file exists but currently empty

## 4. Homepage Structure

Homepage file:

- `/app/page.js`

Current homepage order:

1. `Navbar`
2. `Hero`
3. `Problem`
4. `ForOwners`
5. `HowItWorks`
6. `AppDownload`
7. `FAQ`
8. `Footer`

These are imported from:

- `/components/sections/Navbar.js`
- `/components/sections/Hero.js`
- `/components/sections/Problem.js`
- `/components/sections/ForOwners.js`
- `/components/sections/HowItWorks.js`
- `/components/sections/AppDownload.js`
- `/components/sections/FAQ.js`
- `/components/sections/Footer.js`

## 5. Section Files In `components/sections`

### Active section files

- `Navbar.js`
- `Hero.js`
- `Problem.js`
- `ForOwners.js`
- `HowItWorks.js`
- `AppDownload.js`
- `FAQ.js`
- `Footer.js`

### Existing but currently unused / incomplete section files

- `Cities.js`
- `ForDrivers.js`

These files exist, but the homepage currently does not import them.

If someone wants to add them later, they must:

1. complete the section file content
2. import the section into `/app/page.js`
3. insert it into the homepage order
4. verify navigation anchor links if needed

## 6. Partners Page Structure

Partners page file:

- `/app/partners/page.js`

Important note:

Unlike the homepage, the partners page is mostly built as one large file with multiple local section functions inside the same file.

Current high-level partners page structure:

1. `Navbar`
2. `PartnersHero`
3. `WhoIsItFor`
4. `ParkingTypes`
5. `HowItWorks`
6. `Features`
7. `AppDownload`
8. `Footer`

This means future changes to the partners page should usually be made directly in:

- `/app/partners/page.js`

Do not look in `/components/sections` first for those partner-specific subsections, because they are currently inlined inside the route file.

## 7. Legal Pages Structure

### Privacy page

- `/app/privacy/page.js`

### Terms page

- `/app/terms/page.js`

Both legal pages currently contain:

- route-level metadata
- a legal hero section
- main content body
- sidebar with legal links and contact block
- shared helper components inside the same file, such as:
  - `LegalHero`
  - `LegalBody`
  - `LegalSection`
  - `LegalP`
  - `LegalList`

Important maintenance note:

The privacy page and terms page currently duplicate a lot of structure.

If legal pages need bigger design changes later, a good refactor would be:

1. move shared legal layout into a reusable component file
2. keep only the page-specific content inside each route page

## 8. Shared Styling System

Global styles live in:

- `/app/globals.css`

This file currently defines the shared visual system, including:

- colors
- typography helpers
- spacing helpers
- buttons
- cards
- badges
- input styles
- reveal classes
- responsive helpers
- dot pattern background

### Most important shared layout helpers

- `.section-wrap` → shared left/right page padding and max width
- `.section-pad` → shared vertical section spacing
- `.section-pad-hero` → hero-specific top spacing helper
- `.section-label` → small teal uppercase label style
- `.section-heading` → shared section title style
- `.section-sub` → shared section paragraph style
- `.btn-primary` and `.btn-secondary` → shared button styling

If a section feels misaligned horizontally, check whether it uses `.section-wrap`.

If a section feels inconsistent vertically, check whether it uses `.section-pad`.

## 9. Shared Content Source

Shared static content lives in:

- `/lib/constants.js`

Currently this file includes:

- `cities`
- `ownerFaqs`
- `driverFaqs`
- `navLinks`

If FAQ content or navbar anchor labels need to change, this is one of the first files to check.

## 10. Fonts and Metadata

Root setup lives in:

- `/app/layout.tsx`

This file currently handles:

- global font loading with DM Sans and DM Mono
- default SEO metadata
- Open Graph and Twitter metadata
- robots settings
- icons and manifest references

If global SEO, title template, or site-wide branding text must change, edit `/app/layout.tsx`.

## 11. Newsletter / Email Flow

Newsletter subscription endpoint:

- `/app/api/subscribe/route.js`

This route currently:

- validates the submitted email
- sends an internal notification email via Resend
- sends a welcome email to the subscriber

Environment variables implied by current implementation:

- `RESEND_API_KEY`
- `CONTACT_EMAIL`

If newsletter subscription stops working, check:

1. the environment variables
2. the Resend configuration
3. the footer subscription UI in `/components/sections/Footer.js`

## 12. Known Placeholder / Incomplete Areas

These areas still need future work or confirmation:

- `/app/find-parking/page.js` is empty
- `/app/api/contact/route.js` is empty
- `/app/api/notify/route.js` is empty
- `Cities.js` exists but is not connected
- `ForDrivers.js` exists but is not connected

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