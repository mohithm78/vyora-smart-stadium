import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export default function ProgressBar({ value, max = 100, label, showValue = true, color = 'accent', className = '' }) {
  const percentage = Math.min((value / max) * 100, 100);

  const colorMap = {
    accent: 'from-accent to-accent-light',
    success: 'from-success to-emerald-400',
    warning: 'from-warning to-amber-400',
    danger: 'from-danger to-red-400',
    cyan: 'from-accent-secondary to-cyan-400',
  };

  return (
    <div className={cn('space-y-1.5', className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && <span className="text-xs text-text-secondary">{label}</span>}
          {showValue && <span className="text-xs font-medium text-text-primary">{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className="h-2 bg-surface-hover rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={cn('h-full rounded-full bg-gradient-to-r', colorMap[color] || colorMap.accent)}
        />
      </div>
    </div>
  );
}
