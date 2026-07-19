import { motion } from 'framer-motion';
import {
  Users,
  TrendingUp,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Brain,
  Activity,
  Eye,
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import StatCard from '../components/ui/StatCard';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';
import AreaChartComponent from '../components/charts/AreaChart';
import BarChartComponent from '../components/charts/BarChart';
import {
  crowdDensityZones,
  crowdPredictionData,
  entryExitFlow,
  liveAttendance,
} from '../data/mockData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function CrowdIntelligence() {
  const peakHour = '14:00';
  const predictedPeak = 50000;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label="Current Crowd" value={liveAttendance.current.toLocaleString()} trend={liveAttendance.trend} delay={0} />
        <StatCard icon={TrendingUp} label="Predicted Peak" value={predictedPeak.toLocaleString()} suffix="at 16:00" delay={0.05} />
        <StatCard icon={Activity} label="Avg Density" value="74%" trend={-2.1} delay={0.1} />
        <StatCard icon={Eye} label="AI Accuracy" value="93.2%" suffix="today" delay={0.15} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Prediction Chart */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <GlassCard animate={false}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-text-primary">Crowd Prediction vs Actual</h3>
                <p className="text-xs text-text-secondary">Real-time comparison with AI predictions</p>
              </div>
              <Badge variant="active" dot>Live Tracking</Badge>
            </div>
            <AreaChartComponent
              data={crowdPredictionData}
              xAxisKey="time"
              dataKeys={[
                { key: 'predicted', color: '#6366f1', name: 'Predicted' },
                { key: 'actual', color: '#06b6d4', name: 'Actual' },
              ]}
              height={280}
            />
          </GlassCard>
        </motion.div>

        {/* Zone Density */}
        <motion.div variants={itemVariants}>
          <GlassCard animate={false} className="h-full">
            <h3 className="text-sm font-semibold text-text-primary mb-4">Zone Density</h3>
            <div className="space-y-4">
              {crowdDensityZones.map((zone) => (
                <div key={zone.zone}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-text-secondary">{zone.zone}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-text-primary">{zone.density}%</span>
                      {zone.density > 85 ? (
                        <ArrowUpRight className="w-3 h-3 text-danger" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3 text-success" />
                      )}
                    </div>
                  </div>
                  <ProgressBar
                    value={zone.density}
                    showValue={false}
                    color={zone.density > 85 ? 'danger' : zone.density > 70 ? 'warning' : 'accent'}
                  />
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Entry/Exit Flow */}
        <motion.div variants={itemVariants}>
          <GlassCard animate={false}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-text-primary">Entry / Exit Flow</h3>
                <p className="text-xs text-text-secondary">Hourly gate traffic analysis</p>
              </div>
            </div>
            <BarChartComponent
              data={entryExitFlow}
              xAxisKey="time"
              dataKeys={[
                { key: 'entries', color: '#22c55e', name: 'Entries' },
                { key: 'exits', color: '#ef4444', name: 'Exits' },
              ]}
              height={250}
              showLegend
            />
          </GlassCard>
        </motion.div>

        {/* AI Crowd Predictions */}
        <motion.div variants={itemVariants}>
          <GlassCard animate={false}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-text-primary">AI Predictions</h3>
                <p className="text-xs text-text-secondary">Next 4 hours forecast</p>
              </div>
              <Brain className="w-5 h-5 text-accent-light" />
            </div>
            <div className="space-y-3">
              {crowdPredictionData
                .filter((d) => d.actual === null)
                .map((d, i) => (
                  <div key={d.time} className="glass p-3 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-text-muted" />
                      <div>
                        <p className="text-sm font-medium text-text-primary">{d.time}</p>
                        <p className="text-xs text-text-secondary">
                          Predicted: {d.predicted.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <Badge variant={d.predicted > 45000 ? 'warning' : 'active'}>
                      {((d.predicted / 55000) * 100).toFixed(0)}% capacity
                    </Badge>
                  </div>
                ))}
            </div>

            <div className="mt-4 glass p-4 rounded-xl border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-4 h-4 text-accent-light" />
                <p className="text-xs font-medium text-accent-light">AI Recommendation</p>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Peak crowd expected at 16:00 (~50,000). Recommend activating additional entry gates
                at 15:30 and deploying extra security to North Stand and General Area zones.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Peak Hour Analysis */}
      <motion.div variants={itemVariants}>
        <GlassCard animate={false}>
          <h3 className="text-sm font-semibold text-text-primary mb-4">Peak Hour Analysis</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'Peak Entry Hour', value: '09:00 - 10:00', metric: '10,200 entries' },
              { label: 'Peak Exit Hour', value: '14:00 - 15:00', metric: '2,000 exits' },
              { label: 'Highest Density', value: 'North Stand', metric: '92% capacity' },
              { label: 'Lowest Density', value: 'VIP Lounge', metric: '45% capacity' },
              { label: 'Avg Dwell Time', value: '4.2 hours', metric: 'Per attendee' },
            ].map((item, i) => (
              <div key={i} className="glass p-4 rounded-xl text-center">
                <p className="text-xs text-text-muted mb-1">{item.label}</p>
                <p className="text-sm font-semibold text-text-primary">{item.value}</p>
                <p className="text-[10px] text-accent-light mt-1">{item.metric}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
