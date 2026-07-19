import { motion } from 'framer-motion';
import {
  Users,
  Car,
  CloudSun,
  IndianRupee,
  ShieldAlert,
  HeartPulse,
  Brain,
  TrendingUp,
  AlertTriangle,
  Clock,
  MapPin,
  Thermometer,
  Wind,
  Droplets,
  Sun,
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import StatCard from '../components/ui/StatCard';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';
import AreaChartComponent from '../components/charts/AreaChart';
import PieChartComponent from '../components/charts/PieChart';
import {
  liveAttendance,
  crowdDensityZones,
  parkingData,
  weatherData,
  revenueData,
  matchSchedule,
  securityAlerts,
  medicalAlerts,
  aiInsights,
} from '../data/mockData';
import { formatCurrency } from '../lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Dashboard() {
  const parkingPieData = parkingData.sections.map((s) => ({
    name: s.name,
    value: s.occupied,
  }));

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Users}
          label="Live Attendance"
          value={liveAttendance.current.toLocaleString()}
          suffix={`/ ${(liveAttendance.capacity / 1000).toFixed(0)}K`}
          trend={liveAttendance.trend}
          delay={0}
        />
        <StatCard
          icon={Car}
          label="Parking Occupancy"
          value={`${parkingData.occupied}%`}
          suffix={`${parkingData.available} spots left`}
          trend={-3.2}
          delay={0.05}
        />
        <StatCard
          icon={IndianRupee}
          label="Revenue Today"
          value={formatCurrency(revenueData.today)}
          trend={revenueData.trend}
          delay={0.1}
        />
        <StatCard
          icon={ShieldAlert}
          label="Active Alerts"
          value={securityAlerts.length + medicalAlerts.length}
          suffix="total"
          trend={-12}
          delay={0.15}
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <GlassCard animate={false}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-text-primary">Revenue Trend</h3>
                <p className="text-xs text-text-secondary">Last 7 days</p>
              </div>
              <Badge variant="success" dot>
                +{revenueData.trend}%
              </Badge>
            </div>
            <AreaChartComponent
              data={revenueData.weekly}
              xAxisKey="day"
              dataKeys={[{ key: 'revenue', color: '#6366f1', name: 'Revenue' }]}
              height={220}
            />
          </GlassCard>
        </motion.div>

        {/* Weather Widget */}
        <motion.div variants={itemVariants}>
          <GlassCard animate={false} className="h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-text-primary">Weather</h3>
              <CloudSun className="w-5 h-5 text-warning" />
            </div>
            <div className="text-center py-4">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Thermometer className="w-5 h-5 text-warning" />
                <span className="text-4xl font-bold text-text-primary">{weatherData.temp}°C</span>
              </div>
              <p className="text-sm text-text-secondary mb-6">{weatherData.condition}</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="glass p-3 rounded-xl">
                  <Droplets className="w-4 h-4 text-accent-secondary mx-auto mb-1" />
                  <p className="text-xs font-medium text-text-primary">{weatherData.humidity}%</p>
                  <p className="text-[10px] text-text-muted">Humidity</p>
                </div>
                <div className="glass p-3 rounded-xl">
                  <Wind className="w-4 h-4 text-accent-light mx-auto mb-1" />
                  <p className="text-xs font-medium text-text-primary">{weatherData.wind}</p>
                  <p className="text-[10px] text-text-muted">Wind</p>
                </div>
                <div className="glass p-3 rounded-xl">
                  <Sun className="w-4 h-4 text-warning mx-auto mb-1" />
                  <p className="text-xs font-medium text-text-primary">UV {weatherData.uv}</p>
                  <p className="text-[10px] text-text-muted">Index</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Crowd Density */}
        <motion.div variants={itemVariants}>
          <GlassCard animate={false} className="h-full">
            <h3 className="text-sm font-semibold text-text-primary mb-4">Crowd Density</h3>
            <div className="space-y-3">
              {crowdDensityZones.map((zone) => (
                <ProgressBar
                  key={zone.zone}
                  label={zone.zone}
                  value={zone.density}
                  color={zone.density > 85 ? 'danger' : zone.density > 70 ? 'warning' : 'accent'}
                />
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Parking */}
        <motion.div variants={itemVariants}>
          <GlassCard animate={false} className="h-full">
            <h3 className="text-sm font-semibold text-text-primary mb-2">Parking</h3>
            <PieChartComponent
              data={parkingPieData}
              dataKey="value"
              nameKey="name"
              height={180}
              innerRadius={50}
              outerRadius={75}
            />
            <div className="grid grid-cols-2 gap-2 mt-2">
              {parkingData.sections.map((s, i) => (
                <div key={s.name} className="flex items-center gap-2 text-xs">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: ['#6366f1', '#06b6d4', '#22c55e', '#f59e0b'][i] }}
                  />
                  <span className="text-text-secondary">{s.name}</span>
                  <span className="text-text-primary font-medium ml-auto">{s.occupied}%</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Match Schedule */}
        <motion.div variants={itemVariants}>
          <GlassCard animate={false} className="h-full">
            <h3 className="text-sm font-semibold text-text-primary mb-4">Match Schedule</h3>
            <div className="space-y-3">
              {matchSchedule.map((match) => (
                <div
                  key={match.id}
                  className="glass p-3 rounded-xl flex items-center justify-between"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary truncate">
                      {match.teamA} vs {match.teamB}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-text-muted" />
                      <span className="text-xs text-text-secondary">{match.time}</span>
                      <MapPin className="w-3 h-3 text-text-muted" />
                      <span className="text-xs text-text-secondary">{match.venue}</span>
                    </div>
                  </div>
                  <Badge variant={match.status} dot={match.status === 'live'}>
                    {match.status === 'live' ? 'LIVE' : match.status.charAt(0).toUpperCase() + match.status.slice(1)}
                  </Badge>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Security Alerts */}
        <motion.div variants={itemVariants}>
          <GlassCard animate={false} className="h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-text-primary">Security Alerts</h3>
              <Badge variant="danger" dot>{securityAlerts.length} Active</Badge>
            </div>
            <div className="space-y-2.5">
              {securityAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start gap-3 glass p-3 rounded-xl">
                  <AlertTriangle
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      alert.severity === 'critical' ? 'text-danger' : 'text-warning'
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-text-primary leading-snug">{alert.message}</p>
                    <p className="text-[10px] text-text-muted mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Medical Alerts */}
        <motion.div variants={itemVariants}>
          <GlassCard animate={false} className="h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-text-primary">Medical Alerts</h3>
              <Badge variant="warning" dot>{medicalAlerts.length} Active</Badge>
            </div>
            <div className="space-y-2.5">
              {medicalAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start gap-3 glass p-3 rounded-xl">
                  <HeartPulse
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      alert.severity === 'critical' ? 'text-danger' : 'text-warning'
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-text-primary leading-snug">{alert.message}</p>
                    <p className="text-[10px] text-text-muted mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 glass p-3 rounded-xl text-center">
              <p className="text-xs text-text-secondary">Medical team response time</p>
              <p className="text-lg font-bold text-success mt-1">2.4 min avg</p>
            </div>
          </GlassCard>
        </motion.div>

        {/* AI Insights */}
        <motion.div variants={itemVariants}>
          <GlassCard animate={false} className="h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-text-primary">AI Insights</h3>
              <Brain className="w-5 h-5 text-accent-light" />
            </div>
            <div className="space-y-2.5 max-h-[340px] overflow-y-auto no-scrollbar">
              {aiInsights.map((insight) => (
                <div key={insight.id} className="glass p-3 rounded-xl">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-xs font-medium text-text-primary">{insight.title}</p>
                    <span className="text-[10px] text-accent-light font-medium">{insight.confidence}%</span>
                  </div>
                  <p className="text-[11px] text-text-secondary leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
