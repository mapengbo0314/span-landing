# Email Setup

This landing prototype already submits waitlist emails from the modal.

To send an actual follow-up email to the subscriber, you need to connect the site to an email form provider and configure its autoresponse feature.

## Current Frontend Behavior

The site submits these fields:

- `name`
- `email`
- `source`
- `message`

That means the app is ready for providers that support:

- static-site form submissions
- automatic confirmation emails

## Recommended Provider: Formspree

Formspree works well for a GitHub Pages site because it does not require your own backend.

Set your endpoint in `landing/.env`:

```env
VITE_WAITLIST_FORM_ENDPOINT=https://formspree.io/f/your-form-id
VITE_WAITLIST_SUCCESS_MESSAGE=Thanks for subscribing to Span. We will update you with our beta program and early access news soon.
```

Then run:

```bash
cd landing
npm run dev
```

## Important Formspree Limitation

Formspree's official docs say its Auto Response / confirmation email feature is available on Professional and Business plans.

Source:

- https://help.formspree.io/hc/en-us/articles/360025007233-Sending-a-confirmation-or-response-email

So:

- the frontend is ready now
- the actual email reply template must be enabled in the Formspree dashboard
- if you stay on a free Formspree plan, the submission can still be collected, but the automatic follow-up email may not be available

## Formspree Dashboard Setup

After creating your form:

1. Open the form in Formspree.
2. Go to `Workflow`.
3. Add `Auto Response`.
4. Use the subscriber `email` field as the destination.
5. Save the autoresponse.

## Suggested Email Template

Use this as your confirmation email template:

Subject:

```text
Thanks for subscribing to Span
```

From name:

```text
Span Team
```

Message:

```text
Hi {{ name }},

Thanks for subscribing to Span.

We are currently building the platform and would love to keep you updated as we roll out our beta program, early access invitations, and product news.

You are now on our update list, and we will reach out as soon as the next beta milestone is ready.

Thanks again for your interest in Span.

- The Span Team
```

If your provider does not support `{{ name }}`, you can replace it with:

```text
Hi there,
```

## If You Want a Free Alternative

If you want automatic reply emails without relying on Formspree's paid autoresponse feature, a browser-first option is EmailJS.

EmailJS official docs:

- https://www.emailjs.com/docs/user-guide/auto-reply/
- https://www.emailjs.com/docs/tutorial/prepare-auto-reply-template/

That route would require:

- an EmailJS account
- a service ID
- a main template
- a linked auto-reply template
- frontend env vars for the EmailJS public key and template IDs

## Recommendation

For the fastest path:

- keep the current landing code as-is
- use Formspree for submissions
- enable Formspree Auto Response if you are okay with their plan requirements

If you want, I can switch the landing project from generic form posting to a full EmailJS integration next so the auto-reply flow is driven directly from the frontend.
