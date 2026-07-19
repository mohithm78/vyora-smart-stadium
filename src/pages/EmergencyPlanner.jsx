import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Flame,
  Users,
  Heart,
  CloudLightning,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Brain,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';
import { emergencyScenarios, emergencyResources } from '../data/mockData';

const iconMap = { Flame, Users, Heart, CloudLightning };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function EmergencyPlanner() {
  const [expandedScenario, setExpandedScenario] = useState(null);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Status Banner */}
      <motion.div variants={itemVariants}>
        <GlassCard animate={false} className="border-success/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-success" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-primary">System Status: All Clear</h3>
                <p className="text-xs text-text-secondary">No active emergencies. All response teams on standby.</p>
              </div>
            </div>
            <Badge variant="success" dot>Normal Operations</Badge>
          </div>
        </GlassCard>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Response Teams', value: '28', sub: 'Ready', icon: Users, color: 'text-success' },
          { label: 'Avg Response Time', value: '2.4 min', sub: 'Target: 3 min', icon: Clock, color: 'text-accent-light' },
          { label: 'Evacuation Routes', value: '12', sub: 'All clear', icon: Shield, color: 'text-success' },
          { label: 'AI Confidence', value: '98.1%', sub: 'Emergency Model', icon: Brain, color: 'text-accent-secondary' },
        ].map((stat, i) => (
          <motion.div key={i} variants={itemVariants}>
            <GlassCard animate={false} padding="p-4">
              <div className="flex items-center gap-3">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <div>
                  <p className="text-xs text-text-secondary">{stat.label}</p>
                  <p className="text-lg font-bold text-text-primary">{stat.value}</p>
                  <p className="text-[10px] text-text-muted">{stat.sub}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Emergency Scenarios */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <h3 className="text-sm font-semibold text-text-primary mb-4">Emergency Response Plans</h3>
          <div className="space-y-3">
            {emergencyScenarios.map((scenario) => {
              const Icon = iconMap[scenario.icon];
              const isExpanded = expandedScenario === scenario.id;

              return (
                <GlassCard
                  key={scenario.id}
                  animate={false}
                  padding="p-0"
                  className="overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedScenario(isExpanded ? null : scenario.id)}
                    className="w-full p-5 flex items-center justify-between text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          scenario.severity === 'critical'
                            ? 'bg-danger/10 border border-danger/20'
                            : 'bg-warning/10 border border-warning/20'
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            scenario.severity === 'critical' ? 'text-danger' : 'text-warning'
                          }`}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text-primary">{scenario.title}</p>
                        <p className="text-xs text-text-secondary">{scenario.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={scenario.severity}>{scenario.severity}</Badge>
                      <div className="flex items-center gap-1 text-xs text-text-muted">
                        <Clock className="w-3 h-3" />
                        {scenario.responseTime}
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-text-muted" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-text-muted" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 border-t border-border pt-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Brain className="w-4 h-4 text-accent-light" />
                            <p className="text-xs font-medium text-accent-light">AI-Generated Response Plan</p>
                          </div>
                          <div className="space-y-2.5">
                            {scenario.steps.map((step, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-[10px] font-bold text-accent-light">
                                  {i + 1}
                                </div>
                                <p className="text-xs text-text-secondary pt-1">{step}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              );
            })}
          </div>
        </motion.div>

        {/* Resource Allocation */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Resource Allocation</h3>
            <GlassCard animate={false}>
              <div className="space-y-4">
                {emergencyResources.map((resource) => (
                  <div key={resource.type}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-text-secondary">{resource.type}</span>
                      <span className="text-xs text-text-primary font-medium">
                        {resource.deployed}/{resource.total} deployed
                      </span>
                    </div>
                    <ProgressBar
                      value={resource.deployed}
                      max={resource.total}
                      showValue={false}
                      color={resource.deployed / resource.total > 0.5 ? 'warning' : 'accent'}
                    />
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Evacuation Status */}
          <GlassCard animate={false}>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Evacuation Routes</h3>
            <div className="space-y-2.5">
              {[
                { route: 'Gate 1 — Main Exit', status: 'clear', capacity: '8,000/hr' },
                { route: 'Gate 3 — North Exit', status: 'clear', capacity: '6,000/hr' },
                { route: 'Gate 5 — East Exit', status: 'clear', capacity: '5,500/hr' },
                { route: 'Gate 7 — South Exit', status: 'clear', capacity: '7,000/hr' },
                { route: 'Emergency Tunnel A', status: 'clear', capacity: '3,000/hr' },
                { route: 'Emergency Tunnel B', status: 'clear', capacity: '3,000/hr' },
              ].map((route, i) => (
                <div key={i} className="flex items-center justify-between glass p-2.5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                    <span className="text-xs text-text-primary">{route.route}</span>
                  </div>
                  <span className="text-[10px] text-text-muted">{route.capacity}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
