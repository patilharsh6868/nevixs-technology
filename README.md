# Nevixs Technology

A responsive company website for Nevixs Technology, built with Next.js App Router, React, Tailwind CSS, Framer Motion, and Lucide icons.

## Requirements

- Node.js 20.9 or newer
- npm

## Run the website

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Routes

- `/` Home
- `/about` Company, mission, vision, and values
- `/services` Business, customer, enterprise, and innovation solutions
- `/portfolio` Sample invoice and leave-management prototypes
- `/contact` Enquiry form, social links, and location
- `/blog` Insights placeholder

The contact form currently demonstrates client-side submission only; connect it to a delivery service or the API before launch. The team profiles and portfolio screens are illustrative placeholders and should be replaced with approved company details and project screenshots.

## Express API placeholder

The API is independent of the website and can be started in another terminal:

```bash
cd server
npm install
npm run dev
```

- `GET http://localhost:4000/api/health` returns a health status.
- `POST http://localhost:4000/api/contact` currently returns `501` until contact delivery is integrated.

PostgreSQL is intentionally not configured because dynamic content is optional for this initial site.
