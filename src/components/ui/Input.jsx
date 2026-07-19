import { cn } from '../../lib/utils';

export default function Input({ label, icon: Icon, className = '', ...props }) {
  return (
    <div className={cn('space-y-1.5', className)}>
      {label && <label className="text-sm font-medium text-text-secondary">{label}</label>}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
        )}
        <input
          className={cn(
            'w-full bg-surface border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary',
            'placeholder:text-text-muted',
            'focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20',
            'transition-colors duration-200',
            Icon && 'pl-10'
          )}
          {...props}
        />
      </div>
    </div>
  );
}
