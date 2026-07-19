import { cn } from '../../lib/utils';
import { ChevronDown } from 'lucide-react';

export default function Select({ label, options = [], value, onChange, className = '', ...props }) {
  return (
    <div className={cn('space-y-1.5', className)}>
      {label && <label className="text-sm font-medium text-text-secondary">{label}</label>}
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className={cn(
            'w-full bg-surface border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary',
            'appearance-none cursor-pointer',
            'focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20',
            'transition-colors duration-200'
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={typeof opt === 'string' ? opt : opt.value} value={typeof opt === 'string' ? opt : opt.value}>
              {typeof opt === 'string' ? opt : opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
      </div>
    </div>
  );
}
