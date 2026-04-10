import { useEffect, useMemo, useState } from 'react';
import GlassCard from './ui/GlassCard';
import PrimaryButton from './ui/PrimaryButton';

const WAITLIST_ENDPOINT = import.meta.env.VITE_WAITLIST_FORM_ENDPOINT?.trim() || '';
const SUCCESS_MESSAGE =
  import.meta.env.VITE_WAITLIST_SUCCESS_MESSAGE?.trim() ||
  'Thanks for subscribing. We will keep you updated as the app gets closer to launch.';

export default function WaitlistModal({ open, source, onClose }) {
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const sourceLabel = useMemo(() => {
    switch (source) {
      case 'navbar-signin':
        return 'Sign In';
      case 'navbar-join':
        return 'Join Now';
      case 'hero':
        return 'Hero CTA';
      case 'creators':
        return 'Creator CTA';
      case 'brands':
        return 'Brand CTA';
      case 'footer':
        return 'Footer CTA';
      default:
        return 'Landing';
    }
  }, [source]);

  useEffect(() => {
    if (!open) {
      setForm({ name: '', email: '' });
      setSubmitting(false);
      setError('');
      setSuccess('');
    }
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!WAITLIST_ENDPOINT) {
      setError('Waitlist endpoint is not configured yet. Add VITE_WAITLIST_FORM_ENDPOINT in landing/.env.');
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch(WAITLIST_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          source: sourceLabel,
          message: `Waitlist signup from ${sourceLabel}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to save your subscription right now. Please try again.');
      }

      setSuccess(SUCCESS_MESSAGE);
      setForm({ name: '', email: '' });
    } catch (submitError) {
      setError(submitError.message || 'Unable to save your subscription right now. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-inverse-surface/45 px-4 py-8 backdrop-blur-sm">
      <button type="button" aria-label="Close modal" className="absolute inset-0 cursor-default" onClick={onClose} />
      <GlassCard className="relative w-full max-w-2xl bg-white/95">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant transition-colors hover:text-on-surface"
          aria-label="Close"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="max-w-xl pr-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-container/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <span className="material-symbols-outlined text-sm">mail</span>
            Early Access
          </span>
          <h2 className="mt-6 font-headline text-4xl font-extrabold text-on-surface">
            We love your interest.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
            The app is currently under development. Subscribe and we will keep you updated when new previews,
            openings, and launch details are ready.
          </p>
          <p className="mt-3 text-sm font-medium text-on-surface-variant">
            Triggered from: <span className="text-on-surface">{sourceLabel}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <Field
              id="waitlist_name"
              label="Name"
              value={form.name}
              onChange={(value) => setForm((current) => ({ ...current, name: value }))}
              placeholder="Your name"
            />
            <Field
              id="waitlist_email"
              label="Email"
              type="email"
              value={form.email}
              onChange={(value) => setForm((current) => ({ ...current, email: value }))}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="rounded-[1.5rem] bg-surface-container-low px-5 py-4 text-sm text-on-surface-variant">
            We will only use your email for launch and product updates.
          </div>

          {error ? <p className="text-sm font-medium text-error">{error}</p> : null}
          {success ? <p className="text-sm font-medium text-emerald-700">{success}</p> : null}

          <div className="flex flex-col gap-3 sm:flex-row">
            <PrimaryButton type="submit" loading={submitting} className="sm:min-w-[220px]">
              Subscribe for Updates
            </PrimaryButton>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full px-6 py-4 text-sm font-headline font-bold text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-on-surface"
            >
              Maybe Later
            </button>
          </div>
        </form>
      </GlassCard>
    </div>
  );
}

function Field({ id, label, value, onChange, placeholder, type = 'text', required = false }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-on-surface">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-[1.25rem] bg-surface-container-low px-4 py-4 text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary-container"
      />
    </div>
  );
}
