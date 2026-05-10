# YPark Web

YPark Web is the public website for YPark, an India-focused parking platform. It explains the product, supports owner acquisition, introduces YAdmin for multi-zone operators, includes legal pages, and provides lightweight API endpoints for newsletter and future contact flows.

## What This Project Includes

- Homepage for the main YPark product story
- Partner landing page for parking owners and operators
- YAdmin landing page for multi-zone and government-style operations
- Driver-side placeholder page for future parking discovery flow
- Legal pages for privacy, terms, and cookie policy
- Newsletter subscription API using Resend

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript support in the project config
- ESLint 9
- Tailwind CSS 4 for base integration
- `next/font` with DM Sans and DM Mono

## Main Routes

- `/` homepage
- `/partners` partner / parking-owner landing page
- `/yadmin` multi-zone admin landing page
- `/find-parking` coming-soon page for drivers
- `/privacy` privacy policy
- `/terms` terms of service
- `/cookie-policy` cookie policy

## API Routes

- `/api/subscribe` active newsletter subscription endpoint
- `/api/contact` route file exists but is currently empty
- `/api/notify` route file exists but is currently empty

## Project Structure

```text
app/
	api/
		contact/route.js
		notify/route.js
		subscribe/route.js
	cookie-policy/page.js
	find-parking/page.js
	partners/page.js
	privacy/page.js
	terms/page.js
	yadmin/page.js
	globals.css
	layout.tsx
	page.js

components/
	sections/
		AppDownload.js
		FAQ.js
		Features.js
		Footer.js
		ForOwners.js
		Hero.js
		HowItWorks.js
		Navbar.js
		Problem.js

lib/
	constants.js

public/
	...images and brand assets
```

## Homepage Section Order

The homepage is assembled in `app/page.js` using shared section components.

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

This matters because the navbar uses section anchors such as `#how-it-works`, `#features`, and `#faq`.

## Styling Approach

This project does not use a heavy component library.

Most styling comes from:

- shared utilities in `app/globals.css`
- inline `style={{ ... }}` objects inside section files
- small local `<style>` blocks for responsive layout or hover states

Important shared layout helpers:

- `.section-wrap` for max width and horizontal padding
- `.section-pad` for vertical section spacing
- `.section-pad-hero` for the homepage hero top offset
- `.section-label`, `.section-heading`, `.section-sub` for section typography
- `.btn-primary` and `.btn-secondary` for shared CTA styling

## Shared Content

Common content and navigation live in `lib/constants.js`.

This currently includes:

- `cities`
- `ownerFaqs`
- `driverFaqs`
- `navLinks`

If a nav label or homepage anchor changes, check `lib/constants.js` first.

## Environment Variables

The active email flow uses Resend. These environment variables are expected for `/api/subscribe`:

- `RESEND_API_KEY`
- `CONTACT_EMAIL`

Without them, the subscription endpoint will fail at runtime.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

Run lint:

```bash
npm run lint
```

## Editing Guide

- Change homepage content in `components/sections/*.js` and `app/page.js`
- Change partner landing content in `app/partners/page.js`
- Change YAdmin content in `app/yadmin/page.js`
- Change legal content inside each legal route file
- Change global metadata and fonts in `app/layout.tsx`
- Change shared spacing or typography in `app/globals.css`

## Project Notes

- The site uses App Router route files under `app/`
- Some route pages are built as one large file with local helper sections instead of extracted components
- `find-parking` currently exists as a styled coming-soon page, not a completed driver product flow
- `contact` and `notify` API route files still need implementation if those forms are activated later

## Company

YPark is a product of Prothom Analytica India Pvt. Ltd.
