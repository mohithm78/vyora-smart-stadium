import { cn } from '../../lib/utils';

const variants = {
  success: 'bg-success/10 text-success border border-success/20',
  warning: 'bg-warning/10 text-warning border border-warning/20',
  danger: 'bg-danger/10 text-danger border border-danger/20',
  critical: 'bg-danger/10 text-danger border border-danger/20',
  info: 'bg-accent/10 text-accent-light border border-accent/20',
  active: 'bg-success/10 text-success border border-success/20',
  live: 'bg-danger/10 text-danger border border-danger/20',
  upcoming: 'bg-accent/10 text-accent-light border border-accent/20',
  scheduled: 'bg-surface-hover text-text-secondary border border-border',
  maintenance: 'bg-warning/10 text-warning border border-warning/20',
  resolved: 'bg-surface-hover text-text-secondary border border-border',
  default: 'bg-surface-hover text-text-secondary border border-border',
};

export default function Badge({ children, variant = 'default', dot = false, className = '' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium',
        variants[variant] || variants.default,
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full',
            variant === 'live' || variant === 'critical' || variant === 'danger'
              ? 'bg-danger animate-pulse'
              : variant === 'success' || variant === 'active'
              ? 'bg-success'
              : variant === 'warning'
              ? 'bg-warning'
              : 'bg-text-secondary'
          )}
        />
      )}
      {children}
    </span>
  );
}
