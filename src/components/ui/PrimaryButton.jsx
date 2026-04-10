export default function PrimaryButton({ children, className = '', icon, onClick, type = 'button', loading = false, disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`group relative overflow-hidden rounded-full bg-gradient-to-br from-primary-fixed to-primary px-10 py-5 text-on-primary-fixed font-headline font-extrabold text-lg transition-all hover:scale-[1.02] active:scale-95 sun-shadow disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 ${className}`}
    >
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      <span className="relative flex items-center justify-center gap-3">
        {loading ? <span className="material-symbols-outlined animate-spin">progress_activity</span> : children}
        {!loading && icon ? <span className="material-symbols-outlined">{icon}</span> : null}
      </span>
    </button>
  );
}
