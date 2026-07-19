import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Trophy,
  Sparkles,
  Filter,
  ChevronRight,
  Users,
  Zap,
  AlertCircle,
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Select from '../components/ui/Select';
import { tournamentMatches, venues } from '../data/mockData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function TournamentScheduler() {
  const [sportFilter, setSportFilter] = useState('All');
  const [showAISuggestion, setShowAISuggestion] = useState(false);

  const filteredMatches =
    sportFilter === 'All'
      ? tournamentMatches
      : tournamentMatches.filter((m) => m.sport === sportFilter);

  const rounds = [...new Set(tournamentMatches.map((m) => m.round.split(' ')[0] + ' ' + m.round.split(' ')[1]))];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-text-primary">Tournament Scheduler</h1>
          <p className="text-sm text-text-secondary">AI-optimized scheduling with conflict detection</p>
        </div>
        <div className="flex items-center gap-3">
          <Select
            value={sportFilter}
            onChange={(e) => setSportFilter(e.target.value)}
            options={['All', 'Cricket', 'Football', 'Basketball']}
          />
          <Button
            icon={Sparkles}
            onClick={() => setShowAISuggestion(!showAISuggestion)}
          >
            AI Schedule
          </Button>
        </div>
      </motion.div>

      {/* AI Suggestion Banner */}
      {showAISuggestion && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <GlassCard animate={false} className="border-accent/20 glow-accent">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-accent-light" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-text-primary mb-1">AI Schedule Optimization</h4>
                <p className="text-xs text-text-secondary leading-relaxed mb-3">
                  Based on team rest periods, venue availability, and broadcast windows, I recommend the following changes:
                </p>
                <div className="space-y-2 mb-3">
                  {[
                    { change: 'Move Semi Final 2 from Jul 22 to Jul 23', reason: 'Ensures 48hr rest for qualifying teams' },
                    { change: 'Swap Arena B → Main Stadium for QF2', reason: 'Higher expected crowd (28K vs 18K predicted)' },
                    { change: 'Schedule Final at 19:00 instead of 18:00', reason: 'Better TV viewership slot (+15% predicted)' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Zap className="w-3.5 h-3.5 text-accent-light shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-text-primary">{item.change}</p>
                        <p className="text-[10px] text-text-muted">{item.reason}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm">Apply Changes</Button>
                  <Button size="sm" variant="ghost" onClick={() => setShowAISuggestion(false)}>Dismiss</Button>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Match List */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <h3 className="text-sm font-semibold text-text-primary mb-4">Match Schedule</h3>
          <div className="space-y-3">
            {filteredMatches.map((match, i) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard animate={false} padding="p-4" className="group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="hidden sm:flex w-16 h-16 rounded-xl bg-surface-hover items-center justify-center">
                        <div className="text-center">
                          <p className="text-xs font-bold text-text-primary">
                            {new Date(match.date).toLocaleDateString('en-IN', { day: 'numeric' })}
                          </p>
                          <p className="text-[10px] text-text-muted uppercase">
                            {new Date(match.date).toLocaleDateString('en-IN', { month: 'short' })}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-accent-light font-medium mb-0.5">{match.round}</p>
                        <p className="text-sm font-semibold text-text-primary">
                          {match.teamA} <span className="text-text-muted font-normal">vs</span> {match.teamB}
                        </p>
                        <div className="flex items-center gap-3 mt-1.5">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-text-muted" />
                            <span className="text-xs text-text-secondary">{match.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-text-muted" />
                            <span className="text-xs text-text-secondary">{match.venue}</span>
                          </div>
                          <Badge variant="info">{match.sport}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={match.status} dot={match.status === 'live'}>
                        {match.status === 'live'
                          ? 'LIVE'
                          : match.status.charAt(0).toUpperCase() + match.status.slice(1)}
                      </Badge>
                      <ChevronRight className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Venues & Stats */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Venue Allocation */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Venues</h3>
            <div className="space-y-3">
              {venues.map((venue) => (
                <GlassCard key={venue.name} animate={false} padding="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-text-primary">{venue.name}</p>
                    <Badge variant={venue.status}>{venue.status}</Badge>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-text-secondary">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{venue.capacity.toLocaleString()}</span>
                    </div>
                    <span className="text-text-muted">•</span>
                    <span>{venue.sport}</span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Tournament Stats */}
          <GlassCard animate={false}>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Tournament Summary</h3>
            <div className="space-y-3">
              {[
                { label: 'Total Matches', value: tournamentMatches.length },
                { label: 'Completed', value: 0 },
                { label: 'Live', value: tournamentMatches.filter((m) => m.status === 'live').length },
                { label: 'Upcoming', value: tournamentMatches.filter((m) => m.status !== 'live').length },
                { label: 'Conflicts Detected', value: 0 },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="text-xs text-text-secondary">{stat.label}</span>
                  <span className="text-sm font-semibold text-text-primary">{stat.value}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
