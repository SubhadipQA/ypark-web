# YPark Web

YPark Web is the marketing and product website for YPark, an organized parking platform for India. It is built with Next.js App Router and covers the owner-facing product story, legal pages, and supporting landing flows.

## Overview

YPark is designed to help parking operators manage daily parking activity with a cleaner digital workflow.

Core themes in the site:

- parking zone onboarding for owners
- walk-in and monthly pass management
- staff and revenue tracking
- driver-side parking discovery messaging
- legal and informational pages

## Tech Stack

- Next.js 16
- React 19
- ESLint 9
- Tailwind CSS 4
- `next/font` with DM Sans and DM Mono

## Project Structure

```text
app/
	page.js
	partners/page.js
	find-parking/page.js
	privacy/page.js
	terms/page.js
	api/
		contact/route.js
		notify/route.js
components/
	sections/
lib/
	constants.js
public/
```

## Main Routes

- `/` - landing page
- `/partners` - owner / partner landing page
- `/find-parking` - driver-facing page
- `/privacy` - privacy policy
- `/terms` - terms of service

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Linting

Run lint for the project:

```bash
npm run lint
```

Run lint for a specific file:

```bash
npx eslint app/terms/page.js
```

## Development Notes

- App Router pages live inside `app/`
- Shared homepage and marketing sections live in `components/sections/`
- Reusable content like FAQs and city lists lives in `lib/constants.js`
- The current design system relies mostly on shared utility classes in `app/globals.css` plus inline section styles

## Deployment

Create a production build:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## Company

YPark is a product of Prothom Analytica India Pvt. Ltd.
