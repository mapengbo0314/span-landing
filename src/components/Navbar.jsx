function PrototypeButton({ children, filled = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        filled
          ? 'px-5 py-2.5 rounded-full bg-primary-container text-on-primary-container text-sm font-headline font-bold transition-transform hover:scale-[1.02]'
          : 'px-5 py-2.5 rounded-full text-sm font-headline font-bold text-on-surface transition-colors hover:bg-surface-container-high'
      }
    >
      {children}
    </button>
  );
}

export default function Navbar({ onOpenWaitlist }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-headline font-extrabold text-2xl text-on-surface italic">
          Span
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { to: '#top', label: 'Home' },
            { to: '#create', label: 'Create' },
            { to: '#reward', label: 'Reward' },
            { to: '#about', label: 'About' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="font-body text-sm font-medium text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <PrototypeButton onClick={() => onOpenWaitlist('navbar-signin')}>Sign In</PrototypeButton>
          <PrototypeButton filled onClick={() => onOpenWaitlist('navbar-join')}>Join Now</PrototypeButton>
        </div>
      </div>
    </nav>
  );
}
