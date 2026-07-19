import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Brain,
  Trophy,
  Users,
  Shield,
  MessageSquare,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { cn } from '../../lib/utils';

const iconMap = {
  LayoutDashboard,
  Brain,
  Trophy,
  Users,
  Shield,
  MessageSquare,
  BarChart3,
  Settings,
};

const navItems = [
  { label: 'Dashboard', icon: 'LayoutDashboard', path: '/dashboard' },
  { label: 'AI Command Center', icon: 'Brain', path: '/ai-command-center' },
  { label: 'Tournament', icon: 'Trophy', path: '/tournament-scheduler' },
  { label: 'Crowd Intel', icon: 'Users', path: '/crowd-intelligence' },
  { label: 'Emergency', icon: 'Shield', path: '/emergency-planner' },
  { label: 'Fan Assistant', icon: 'MessageSquare', path: '/fan-assistant' },
  { label: 'Analytics', icon: 'BarChart3', path: '/analytics' },
  { label: 'Settings', icon: 'Settings', path: '/settings' },
];

export default function Sidebar({ collapsed, onToggle }) {
  const location = useLocation();

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 72 : 260 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed left-0 top-0 bottom-0 z-40 flex flex-col bg-surface/80 backdrop-blur-xl border-r border-border"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-border">
        <div className="flex items-center justify-center w-9 h-9 rounded-xl gradient-accent-secondary shrink-0">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <h1 className="text-lg font-bold tracking-tight gradient-text">Vyora</h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto no-scrollbar">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = location.pathname === item.path;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-accent/10 text-accent-light border border-accent/20 glow-accent'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
              )}
            >
              <Icon className={cn('w-5 h-5 shrink-0', isActive && 'text-accent-light')} />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>
          );
        })}
      </nav>

      {/* Toggle Button */}
      <div className="p-3 border-t border-border">
        <button
          onClick={onToggle}
          className="flex items-center justify-center w-full p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors cursor-pointer"
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>
    </motion.aside>
  );
}
