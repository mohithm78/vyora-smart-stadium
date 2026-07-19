export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

export function formatCurrency(num, currency = '₹') {
  if (num >= 10000000) return currency + (num / 10000000).toFixed(1) + 'Cr';
  if (num >= 100000) return currency + (num / 100000).toFixed(1) + 'L';
  if (num >= 1000) return currency + (num / 1000).toFixed(1) + 'K';
  return currency + num.toString();
}

export function formatTime(date) {
  return new Date(date).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function getStatusColor(status) {
  const colors = {
    active: 'text-success',
    warning: 'text-warning',
    critical: 'text-danger',
    info: 'text-accent-light',
    resolved: 'text-text-secondary',
  };
  return colors[status] || 'text-text-secondary';
}

export function getStatusBg(status) {
  const colors = {
    active: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    critical: 'bg-danger/10 text-danger border-danger/20',
    info: 'bg-accent/10 text-accent-light border-accent/20',
    resolved: 'bg-surface text-text-secondary border-border',
    success: 'bg-success/10 text-success border-success/20',
    live: 'bg-danger/10 text-danger border-danger/20',
  };
  return colors[status] || 'bg-surface text-text-secondary border-border';
}
