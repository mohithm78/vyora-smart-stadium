import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass p-3 !rounded-lg text-xs">
      <p className="text-text-secondary mb-1">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} className="font-medium" style={{ color: entry.color }}>
          {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
        </p>
      ))}
    </div>
  );
};

export default function AreaChartComponent({
  data,
  dataKeys = [{ key: 'value', color: '#6366f1', name: 'Value' }],
  xAxisKey = 'name',
  height = 300,
  showGrid = true,
  showYAxis = true,
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsAreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
        <defs>
          {dataKeys.map((dk, i) => (
            <linearGradient key={i} id={`gradient-${dk.key}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={dk.color} stopOpacity={0.3} />
              <stop offset="95%" stopColor={dk.color} stopOpacity={0} />
            </linearGradient>
          ))}
        </defs>
        {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />}
        <XAxis dataKey={xAxisKey} stroke="#71717a" fontSize={11} tickLine={false} axisLine={false} />
        {showYAxis && <YAxis stroke="#71717a" fontSize={11} tickLine={false} axisLine={false} />}
        <Tooltip content={<CustomTooltip />} />
        {dataKeys.map((dk, i) => (
          <Area
            key={i}
            type="monotone"
            dataKey={dk.key}
            name={dk.name || dk.key}
            stroke={dk.color}
            fill={`url(#gradient-${dk.key})`}
            strokeWidth={2}
          />
        ))}
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
}
