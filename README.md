# Nevixs Technologies

A responsive company website for Nevixs Technologies, built with Next.js App Router, React, Tailwind CSS, Framer Motion, and Lucide icons.

## Requirements

- Node.js 20.9 or newer
- npm

## Run the website

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

The site defaults to light mode for new visitors. The theme toggle saves the visitor's
choice locally and restores it before the page paints on subsequent visits.

## Routes

- `/` Home
- `/about` Company, mission, vision, and values
- `/erp` NEVIXS Business OS: ERP, CRM, HR, and payroll
- `/services` Business apps, customer applications, and software services
- `/contact` Enquiry form, email, and location
- `/blog` Insights and upcoming article previews

NEVIXS Business OS is available at `https://app.nevixs.com`. The marketing site links to the app and accepts demo enquiries.

## Search visibility

Each public page has a canonical URL. Inner pages use shared metadata in
`src/lib/metadata.js` for unique titles, descriptions, Open Graph URLs, and Twitter
summary cards. Visible breadcrumbs include matching `BreadcrumbList` structured
data. The root layout identifies Nevixs Technologies and its genuine alternate
brand names; it does not target unrelated brands or misspellings.

After deploying to `https://nevixs.com`:

1. Verify the domain in Google Search Console and Bing Webmaster Tools using their provided verification instructions.
2. Submit `https://nevixs.com/sitemap.xml` in both services.
3. Inspect the homepage and important inner pages, check the selected canonical URLs, and request indexing where needed.
4. Validate structured data with Google's Rich Results Test and Schema Markup Validator. SoftwareApplication data describes the product; it does not promise a rich result.
5. Monitor indexing and search queries, keep product information accurate, and publish useful original content when ready. Insights previews are not published articles.

The site exports `robots.txt` and `sitemap.xml`. The contact enquiry query string
canonicalizes to `/contact`, rather than creating duplicate indexed pages.
Search engines choose rankings, displayed titles, site names, and sitelinks;
metadata and structured data cannot guarantee them or visibility for similar spellings.

## Contact form delivery (Cloudflare Pages Function)

The enquiry form posts to `/api/contact`, handled by [functions/api/contact.js](functions/api/contact.js), which sends the email server-side via [Resend](https://resend.com). This only works when deployed on Cloudflare Pages (the `next dev` server does not run Pages Functions).

Setup:

1. Verify the `nevixs.com` sending domain in your Resend account (required to send `from` an `@nevixs.com` address).
2. In the Cloudflare Pages project settings, add an environment variable/secret `RESEND_API_KEY` with your Resend API key. Never commit this key to the repo.
3. Deploy. Test locally with `npx wrangler pages dev` after `npm run build` if you need to exercise the Function before deploying.

The form includes a hidden honeypot field (`company`) and a 15s client-side timeout with a `mailto:` fallback if the request fails.

ERP enquiry links use `/contact?topic=erp` to preselect the Business OS option.
The selected enquiry type is included in both the delivered email and the mailto fallback.
Requests from older forms without an enquiry type are treated as general enquiries.

## Express API placeholder

The `server/` folder is an unused placeholder and is not wired into the deployed site.

PostgreSQL is intentionally not configured because dynamic content is optional for this initial site.
