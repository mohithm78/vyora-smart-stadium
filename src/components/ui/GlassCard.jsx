import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export default function GlassCard({
  children,
  className = '',
  hover = true,
  padding = 'p-6',
  onClick,
  animate = true,
}) {
  const Component = animate ? motion.div : 'div';
  const motionProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
      }
    : {};

  return (
    <Component
      className={cn(
        'glass',
        hover && 'glass-hover transition-all duration-300',
        padding,
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </Component>
  );
}
