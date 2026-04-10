# Email Setup

This landing site now sends waitlist submissions directly through EmailJS.

## Required Env Vars

Create `.env` from `.env.example` and set:

```env
VITE_EMAILJS_PUBLIC_KEY=HTKc-BpLMf1jIJbF_
VITE_EMAILJS_SERVICE_ID=service_vwsws69
VITE_EMAILJS_TEMPLATE_ID=template_5c4o1dm
VITE_EMAILJS_FROM_EMAIL=mapengbo111@gmail.com
VITE_EMAILJS_FROM_NAME=Span
VITE_EMAILJS_SUCCESS_MESSAGE=Thanks for subscribing to Span. We will update you with our beta program and early access news soon.
```

## Template Variables

The landing waitlist modal sends these EmailJS template params:

- `email`
- `contact_name`
- `support_email`
- `from_name`
- `from_email`
- `reply_to`
- `source`
- `message`

## Current Template Match

Your current EmailJS template already expects:

- `{{email}}`
- `{{contact_name}}`
- `{{support_email}}`

That means this landing repo is now aligned with the same EmailJS service and template IDs you already set up.

## Local Test

```bash
cp .env.example .env
npm install
npm run dev
```

Then open the site, submit the waitlist modal, and confirm that the autoresponse lands in the subscriber inbox.

## GitHub Pages

For GitHub Pages, add the same `VITE_EMAILJS_*` values as GitHub Actions secrets or bake them into your Pages build config.

These values are frontend-visible by design, so treat them as public integration identifiers rather than backend secrets.
