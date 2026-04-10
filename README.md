# Landing Prototype

This is a standalone static landing-page prototype for `Span`.

It is designed to:

- run without the main backend
- work on GitHub Pages
- show a waitlist modal when users click `Sign In` or `Join Now`
- collect real subscriber emails through a hosted form endpoint

## Recommended Waitlist Setup

For a static GitHub Pages site, the simplest option is a hosted form endpoint such as Formspree.

Create a form endpoint there, then add a local env file:

```bash
cp .env.example .env
```

Set:

```bash
VITE_WAITLIST_FORM_ENDPOINT=https://formspree.io/f/your-form-id
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
- the site sends the payload to `VITE_WAITLIST_FORM_ENDPOINT`

Submitted fields include:

- `name`
- `email`
- `source`
- `message`

## GitHub Pages Notes

This project already uses:

- Vite
- `base: './'` in `vite.config.js`

That makes it straightforward to deploy the built `dist/` output to GitHub Pages.

## Next Step

Once you create a dedicated GitHub repo for this folder, you can either:

- deploy `dist/` manually
- add a GitHub Actions workflow for automatic GitHub Pages deployment
