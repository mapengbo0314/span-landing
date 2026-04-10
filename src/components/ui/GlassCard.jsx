export default function GlassCard({ children, className = '', padding = 'p-10', ...props }) {
  return (
    <div
      {...props}
      className={`glass-panel ${padding} rounded-3xl sun-shadow border border-white/80 ${className}`}
    >
      {children}
    </div>
  );
}
