import { useState } from 'react';
import AmbientSparks from '../components/ui/AmbientSparks';
import GlassCard from '../components/ui/GlassCard';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function Landing({ onOpenWaitlist }) {
  const [roleView, setRoleView] = useState('creator');

  return (
    <div className="relative min-h-screen overflow-hidden pt-20">
      <AmbientSparks />

      <section id="top" className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="font-headline text-6xl md:text-7xl font-extrabold text-on-surface leading-tight mb-6">
          Ignite your brand&apos;s <em className="not-italic text-primary">potential</em>
        </h1>
        <p className="text-xl text-on-surface-variant font-body max-w-2xl mx-auto mb-12 leading-relaxed">
          Connecting visionary brands with the world&apos;s most creative minds. Build deep resonance, drive
          sustainable growth, and celebrate collaborative success.
        </p>
        <div className="flex items-center justify-center gap-4 mb-24">
          <PrimaryButton icon="arrow_forward" onClick={() => onOpenWaitlist('hero')}>Join Now</PrimaryButton>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden sun-shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop"
            alt="Team collaboration"
            className="w-full h-80 object-cover"
          />
        </div>
      </section>

      <section id="create" className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-8">
        <GlassCard className="bg-gradient-to-br from-white to-primary-container/10">
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="material-symbols-outlined text-sm">palette</span>
              For Creators
            </span>
            <h2 className="font-headline text-3xl font-extrabold text-on-surface">
              Monetize your creativity.
            </h2>
            <p className="text-on-surface-variant font-body leading-relaxed">
              Transform your passion into a sustainable income. Partner with brands that align with your values and
              audience.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {['Street Style', 'Fitness', 'Tech Reviews', 'Lifestyle', 'Food'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-primary-container/20 text-primary text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop"
                alt="Creative community"
                className="w-full h-48 object-cover"
              />
            </div>
            <PrimaryButton className="self-start mt-2" onClick={() => onOpenWaitlist('creators')}>Get Started</PrimaryButton>
          </div>
        </GlassCard>

        <GlassCard className="bg-gradient-to-br from-inverse-surface via-inverse-surface to-slate-900 text-white border-0">
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-container">
              <span className="material-symbols-outlined text-sm">storefront</span>
              For Brands
            </span>
            <h2 className="font-headline text-3xl font-extrabold text-white">
              Scale with authenticity.
            </h2>
            <p className="text-slate-300 font-body leading-relaxed">
              Connect with genuine creators who resonate with your audience. AI-powered matching ensures every
              partnership is impactful.
            </p>
            <ul className="flex flex-col gap-3 mt-2 text-slate-300 font-body text-sm">
              {[
                'AI-powered product extraction from your website',
                'Custom product brief configurations per product',
                'Real-time analytics and attribution tracking',
                'Flexible reward models: Fixed, Revenue Share, or Hybrid',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary-container text-sm mt-0.5">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => onOpenWaitlist('brands')}
              className="self-start mt-4 px-8 py-4 rounded-full border-2 border-white/20 text-white font-headline font-bold hover:bg-white/10 transition-colors"
            >
              Scale Now →
            </button>
          </div>
        </GlassCard>
      </section>

      <section id="reward" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-6">
            Rewarding <em className="not-italic text-primary">Success</em>
          </h2>
          <p className="text-on-surface-variant font-body max-w-2xl mx-auto leading-relaxed mb-10">
            Choose the reward model that fits your goals. From guaranteed payouts to high-growth revenue shares, we
            empower both sides to win.
          </p>

          <div className="inline-flex items-center p-1 bg-surface-container-low rounded-full sun-shadow border border-white/80">
            <button
              type="button"
              onClick={() => setRoleView('creator')}
              className={`px-8 py-2.5 rounded-full text-sm font-headline font-bold transition-all ${
                roleView === 'creator' ? 'bg-white sun-shadow text-on-surface' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Creator Benefits
            </button>
            <button
              type="button"
              onClick={() => setRoleView('brand')}
              className={`px-8 py-2.5 rounded-full text-sm font-headline font-bold transition-all ${
                roleView === 'brand' ? 'bg-white sun-shadow text-on-surface' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Brand Benefits
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard className="h-full border-white/40">
            <div className="flex flex-col h-full">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">payments</span>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Fixed Amount</h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6 flex-1">
                {roleView === 'creator'
                  ? 'Guarantee your income for every content deliverable. No market uncertainty, just fair compensation for your creative expertise.'
                  : 'Simple, predictable budgeting for your product briefs. Pay a set fee for verified assets and reach, with guaranteed results.'}
              </p>
              <div className="pt-6 border-t border-outline-variant/10">
                <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  {roleView === 'creator' ? 'Guaranteed Payout' : 'Fixed Budgeting'}
                </span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="h-full border-white/40">
            <div className="flex flex-col h-full">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-6">trending_up</span>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Revenue Share</h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6 flex-1">
                {roleView === 'creator'
                  ? 'Earn as you grow. Get a percentage of every sale driven by your authentic resonance. Unlimited upside for high-impact content.'
                  : 'Performance-driven advertising at scale. Only pay when your products sell, ensuring a positive ROI for every partnership.'}
              </p>
              <div className="pt-6 border-t border-outline-variant/10">
                <span className="text-xs font-bold uppercase tracking-widest text-tertiary flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  {roleView === 'creator' ? 'Unlimited Upside' : 'Performance ROI'}
                </span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="h-full border-white/40">
            <div className="flex flex-col h-full">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">stars</span>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Self-agency</h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6 flex-1">
                {roleView === 'creator'
                  ? 'Take full control of the distribution. Act as your own agency, advertising for the brand while earning maximum revenue shares.'
                  : 'Partner with elite creators who handle their own strategy and distribution, serving as hyper-efficient brand ambassadors.'}
              </p>
              <div className="pt-6 border-t border-outline-variant/10">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  {roleView === 'creator' ? 'Full Creative Control' : 'Elite Distribution'}
                </span>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-3xl bg-gradient-to-r from-tertiary-container/20 to-tertiary-container/5 p-12 text-center sun-shadow border border-white/80">
          <span className="material-symbols-outlined text-5xl text-tertiary mb-4">group</span>
          <h2 className="font-headline text-3xl font-extrabold text-on-surface mb-3">
            Community <em className="not-italic text-tertiary">Driven</em>
          </h2>
          <p className="text-on-surface-variant font-body max-w-lg mx-auto leading-relaxed">
            We believe the best partnerships are built on mutual respect, shared values, and open communication. Join
            a community that celebrates collaborative success.
          </p>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="rounded-3xl bg-gradient-to-br from-primary-container/30 to-primary-container/5 p-16 sun-shadow border border-white/80">
          <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">
            Ready to start your journey?
          </h2>
          <p className="text-on-surface-variant font-body mb-10 max-w-md mx-auto leading-relaxed">
            Whether you&apos;re a creator or a brand, Span is the bridge to your next big thing.
          </p>
          <PrimaryButton icon="arrow_forward" onClick={() => onOpenWaitlist('footer')}>Join Now - It&apos;s Free</PrimaryButton>
        </div>
      </section>

      <footer className="relative z-10 border-t border-surface-container-high py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-headline font-extrabold text-lg text-on-surface-variant italic">Span</span>
          <div className="flex items-center gap-6 text-sm text-on-surface-variant font-body">
            <a href="#top" className="hover:text-on-surface transition-colors">Privacy</a>
            <a href="#top" className="hover:text-on-surface transition-colors">Terms</a>
            <a href="#top" className="hover:text-on-surface transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
