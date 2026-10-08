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

The site defaults to dark mode for new visitors. The theme toggle saves the visitor's
choice locally and restores it before the page paints on subsequent visits.

## Routes

- `/` Home
- `/about` Company, mission, vision, and values
- `/erp` Early-stage multi-business ERP information
- `/services` Business apps, customer applications, and software services
- `/contact` Enquiry form, email, and location
- `/blog` Insights and upcoming article previews

Nevixs ERP is in an early stage. Product screens and figures are concepts with sample data, not a live product or customer results.

## Contact form delivery (Cloudflare Pages Function)

The enquiry form posts to `/api/contact`, handled by [functions/api/contact.js](functions/api/contact.js), which sends the email server-side via [Resend](https://resend.com). This only works when deployed on Cloudflare Pages (the `next dev` server does not run Pages Functions).

Setup:

1. Verify the `nevixs.com` sending domain in your Resend account (required to send `from` an `@nevixs.com` address).
2. In the Cloudflare Pages project settings, add an environment variable/secret `RESEND_API_KEY` with your Resend API key. Never commit this key to the repo.
3. Deploy. Test locally with `npx wrangler pages dev` after `npm run build` if you need to exercise the Function before deploying.

The form includes a hidden honeypot field (`company`) and a 15s client-side timeout with a `mailto:` fallback if the request fails.

ERP enquiry links use `/contact?topic=erp` to preselect the upcoming ERP option.
The selected enquiry type is included in both the delivered email and the mailto fallback.
Requests from older forms without an enquiry type are treated as general enquiries.

## Express API placeholder

The `server/` folder is an unused placeholder and is not wired into the deployed site.

PostgreSQL is intentionally not configured because dynamic content is optional for this initial site.
