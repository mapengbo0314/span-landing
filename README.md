# Landing Prototype

This is a standalone static landing-page prototype for `Span`.

It is designed to:

- run without the main backend
- work on GitHub Pages
- show a waitlist modal when users click `Sign In` or `Join Now`
- collect real subscriber emails through EmailJS

## Recommended Waitlist Setup

This landing app now sends waitlist submissions directly through EmailJS from the browser.

Create a local env file:

```bash
cp .env.example .env
```

Set or confirm:

```bash
VITE_EMAILJS_PUBLIC_KEY=HTKc-BpLMf1jIJbF_
VITE_EMAILJS_SERVICE_ID=service_vwsws69
VITE_EMAILJS_TEMPLATE_ID=template_5c4o1dm
VITE_EMAILJS_FROM_EMAIL=mapengbo111@gmail.com
VITE_EMAILJS_FROM_NAME=Span
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## How the Waitlist Works

When a user clicks a CTA:

- a modal opens
- they see: "We love your interest, the app is currently under development, please subscribe to get updated!"
- they can submit name + email
- the site sends the payload to EmailJS

Submitted fields include:

- `name`
- `email`
- `source`
- `message`
- `support_email`

## GitHub Pages Notes

This project already uses:

- Vite
- `base: './'` in `vite.config.js`

That makes it straightforward to deploy the built `dist/` output to GitHub Pages.

## Next Step

Once you create a dedicated GitHub repo for this folder, you can either:

- deploy `dist/` manually
- add a GitHub Actions workflow for automatic GitHub Pages deployment
