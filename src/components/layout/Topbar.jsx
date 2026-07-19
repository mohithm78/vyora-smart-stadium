import { Bell, Search, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/dashboard': 'Dashboard',
  '/ai-command-center': 'AI Command Center',
  '/tournament-scheduler': 'Tournament Scheduler',
  '/crowd-intelligence': 'Crowd Intelligence',
  '/emergency-planner': 'Emergency Planner',
  '/fan-assistant': 'Fan Assistant',
  '/analytics': 'Analytics',
  '/settings': 'Settings',
};

export default function Topbar() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'Dashboard';

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-6 bg-primary/80 backdrop-blur-xl border-b border-border">
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-text-primary">{title}</h2>
        <p className="text-xs text-text-muted">Vyora International Arena</p>
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-surface border border-border rounded-xl">
          <Search className="w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none w-40"
          />
          <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-text-muted bg-surface-hover rounded">
            ⌘K
          </kbd>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors cursor-pointer">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full animate-pulse" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 pl-3 border-l border-border">
          <div className="w-8 h-8 rounded-full gradient-accent-secondary flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-text-primary leading-tight">Arjun Mehta</p>
            <p className="text-[10px] text-text-muted">Operations Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
}
