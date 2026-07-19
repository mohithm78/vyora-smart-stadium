import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatCard({ icon: Icon, label, value, trend, suffix = '', className = '', delay = 0 }) {
  const isPositive = trend > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={cn('glass glass-hover p-5 transition-all duration-300', className)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
          <Icon className="w-5 h-5 text-accent-light" />
        </div>
        {trend !== undefined && (
          <div
            className={cn(
              'flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full',
              isPositive ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
            )}
          >
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      <p className="text-sm text-text-secondary mb-1">{label}</p>
      <p className="text-2xl font-bold tracking-tight text-text-primary">
        {value}
        {suffix && <span className="text-sm font-normal text-text-secondary ml-1">{suffix}</span>}
      </p>
    </motion.div>
  );
}
