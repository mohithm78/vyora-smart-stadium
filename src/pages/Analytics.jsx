import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  Users,
  IndianRupee,
  Brain,
  Target,
  Zap,
  Calendar,
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import StatCard from '../components/ui/StatCard';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';
import AreaChartComponent from '../components/charts/AreaChart';
import BarChartComponent from '../components/charts/BarChart';
import LineChartComponent from '../components/charts/LineChart';
import {
  revenueAnalytics,
  attendanceTrends,
  operationalMetrics,
  aiPerformanceMetrics,
} from '../data/mockData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Analytics() {
  const [dateRange, setDateRange] = useState('7d');

  const totalRevenue = revenueAnalytics.reduce(
    (sum, m) => sum + m.ticketing + m.food + m.merchandise + m.sponsorship,
    0
  );

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
          <h1 className="text-xl font-bold text-text-primary">Analytics</h1>
          <p className="text-sm text-text-secondary">Comprehensive operational insights and AI performance</p>
        </div>
        <div className="flex items-center gap-2">
          {['7d', '30d', '90d', '1y'].map((range) => (
            <button
              key={range}
              onClick={() => setDateRange(range)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                dateRange === range
                  ? 'bg-accent/10 text-accent-light border border-accent/20'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={IndianRupee} label="Total Revenue (YTD)" value="₹87.2Cr" trend={12.4} delay={0} />
        <StatCard icon={Users} label="Total Attendance (YTD)" value="1.64M" trend={8.7} delay={0.05} />
        <StatCard icon={Calendar} label="Events Hosted" value="77" trend={15.2} delay={0.1} />
        <StatCard icon={Brain} label="AI Decisions" value="2.1M" trend={34.5} delay={0.15} />
      </div>

      {/* Revenue Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants}>
          <GlassCard animate={false}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-text-primary">Revenue Breakdown</h3>
                <p className="text-xs text-text-secondary">Monthly by category</p>
              </div>
            </div>
            <BarChartComponent
              data={revenueAnalytics}
              xAxisKey="month"
              dataKeys={[
                { key: 'ticketing', color: '#6366f1', name: 'Ticketing' },
                { key: 'food', color: '#06b6d4', name: 'Food & Bev' },
                { key: 'merchandise', color: '#22c55e', name: 'Merchandise' },
                { key: 'sponsorship', color: '#f59e0b', name: 'Sponsorship' },
              ]}
              height={280}
              showLegend
              stacked
            />
          </GlassCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GlassCard animate={false}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-text-primary">Attendance Trends</h3>
                <p className="text-xs text-text-secondary">Monthly attendance with event count</p>
              </div>
            </div>
            <AreaChartComponent
              data={attendanceTrends}
              xAxisKey="month"
              dataKeys={[
                { key: 'attendance', color: '#06b6d4', name: 'Attendance' },
              ]}
              height={280}
            />
          </GlassCard>
        </motion.div>
      </div>

      {/* Fan Engagement & Operational Efficiency */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Operational Metrics */}
        <motion.div variants={itemVariants}>
          <GlassCard animate={false}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-text-primary">Operational Efficiency</h3>
                <p className="text-xs text-text-secondary">Performance vs targets</p>
              </div>
              <Target className="w-5 h-5 text-accent-light" />
            </div>
            <div className="space-y-4">
              {operationalMetrics.map((metric) => (
                <div key={metric.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-text-secondary">{metric.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-text-primary">{metric.value}%</span>
                      <span className="text-[10px] text-text-muted">Target: {metric.target}%</span>
                    </div>
                  </div>
                  <ProgressBar
                    value={metric.value}
                    showValue={false}
                    color={metric.value >= metric.target ? 'success' : metric.value >= metric.target - 10 ? 'warning' : 'danger'}
                  />
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Fan Engagement */}
        <motion.div variants={itemVariants}>
          <GlassCard animate={false}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-text-primary">Fan Engagement</h3>
                <p className="text-xs text-text-secondary">Key engagement metrics</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'App Downloads', value: '284K', trend: '+18%', color: 'text-accent-light' },
                { label: 'Avg Session', value: '12.4 min', trend: '+5%', color: 'text-success' },
                { label: 'Social Mentions', value: '45.2K', trend: '+32%', color: 'text-accent-secondary' },
                { label: 'NPS Score', value: '72', trend: '+4', color: 'text-success' },
                { label: 'Repeat Visitors', value: '68%', trend: '+7%', color: 'text-warning' },
                { label: 'Merch Conversion', value: '12.3%', trend: '+2.1%', color: 'text-accent-light' },
              ].map((metric, i) => (
                <div key={i} className="glass p-4 rounded-xl">
                  <p className="text-xs text-text-muted mb-1">{metric.label}</p>
                  <p className={`text-lg font-bold ${metric.color}`}>{metric.value}</p>
                  <p className="text-[10px] text-success mt-1">{metric.trend}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* AI Performance */}
      <motion.div variants={itemVariants}>
        <GlassCard animate={false}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-text-primary">AI Model Performance</h3>
              <p className="text-xs text-text-secondary">Accuracy, latency, and uptime across all models</p>
            </div>
            <Brain className="w-5 h-5 text-accent-light" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-xs font-medium text-text-secondary">Model</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-text-secondary">Accuracy</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-text-secondary">Latency</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-text-secondary">Uptime</th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-text-secondary">Status</th>
                </tr>
              </thead>
              <tbody>
                {aiPerformanceMetrics.map((metric) => (
                  <tr key={metric.model} className="border-b border-border/50 hover:bg-surface-hover/50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-accent-light" />
                        <span className="text-text-primary font-medium">{metric.model}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-text-primary font-medium">{metric.accuracy}%</td>
                    <td className="py-3 px-4 text-text-secondary">{metric.latency}</td>
                    <td className="py-3 px-4 text-success font-medium">{metric.uptime}%</td>
                    <td className="py-3 px-4">
                      <Badge variant="active" dot>Active</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
