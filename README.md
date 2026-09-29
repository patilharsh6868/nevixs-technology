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

The team profiles and portfolio screens are illustrative placeholders and should be replaced with approved company details and project screenshots.

## Contact form delivery (Cloudflare Pages Function)

The enquiry form posts to `/api/contact`, handled by [functions/api/contact.js](functions/api/contact.js), which sends the email server-side via [Resend](https://resend.com). This only works when deployed on Cloudflare Pages (the `next dev` server does not run Pages Functions).

Setup:

1. Verify the `nevixs.com` sending domain in your Resend account (required to send `from` an `@nevixs.com` address).
2. In the Cloudflare Pages project settings, add an environment variable/secret `RESEND_API_KEY` with your Resend API key. Never commit this key to the repo.
3. Deploy. Test locally with `npx wrangler pages dev` after `npm run build` if you need to exercise the Function before deploying.

The form includes a hidden honeypot field (`company`) and a 15s client-side timeout with a `mailto:` fallback if the request fails.

## Express API placeholder

The `server/` folder is an unused placeholder and is not wired into the deployed site.

PostgreSQL is intentionally not configured because dynamic content is optional for this initial site.
