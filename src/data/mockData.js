// ─── Dashboard Mock Data ─────────────────────────────────────────────

export const liveAttendance = {
  current: 42850,
  capacity: 55000,
  trend: +2.4,
  sparkline: [32000, 35000, 38000, 40000, 41200, 42000, 42850],
};

export const crowdDensityZones = [
  { zone: 'North Stand', density: 92, status: 'critical', capacity: 12000 },
  { zone: 'South Stand', density: 78, status: 'warning', capacity: 12000 },
  { zone: 'East Wing', density: 65, status: 'active', capacity: 8000 },
  { zone: 'West Wing', density: 71, status: 'active', capacity: 8000 },
  { zone: 'VIP Lounge', density: 45, status: 'active', capacity: 5000 },
  { zone: 'General Area', density: 88, status: 'warning', capacity: 10000 },
];

export const parkingData = {
  occupied: 78,
  total: 5000,
  available: 1100,
  sections: [
    { name: 'Lot A', occupied: 95, total: 1500 },
    { name: 'Lot B', occupied: 82, total: 1500 },
    { name: 'Lot C', occupied: 60, total: 1000 },
    { name: 'Lot D', occupied: 55, total: 1000 },
  ],
};

export const weatherData = {
  temp: 28,
  condition: 'Partly Cloudy',
  humidity: 65,
  wind: '12 km/h',
  feelsLike: 31,
  uv: 6,
};

export const revenueData = {
  today: 12400000,
  trend: +5.2,
  weekly: [
    { day: 'Mon', revenue: 8200000 },
    { day: 'Tue', revenue: 9100000 },
    { day: 'Wed', revenue: 7800000 },
    { day: 'Thu', revenue: 10500000 },
    { day: 'Fri', revenue: 11200000 },
    { day: 'Sat', revenue: 14800000 },
    { day: 'Sun', revenue: 12400000 },
  ],
};

export const matchSchedule = [
  {
    id: 1,
    teamA: 'Mumbai Strikers',
    teamB: 'Delhi Warriors',
    sport: 'Cricket',
    time: '14:00',
    date: '2026-07-18',
    venue: 'Main Stadium',
    status: 'live',
  },
  {
    id: 2,
    teamA: 'Chennai FC',
    teamB: 'Kolkata United',
    sport: 'Football',
    time: '18:30',
    date: '2026-07-18',
    venue: 'Arena B',
    status: 'upcoming',
  },
  {
    id: 3,
    teamA: 'Bangalore Racers',
    teamB: 'Hyderabad Hawks',
    sport: 'Basketball',
    time: '21:00',
    date: '2026-07-18',
    venue: 'Indoor Court',
    status: 'upcoming',
  },
];

export const securityAlerts = [
  { id: 1, message: 'Unauthorized access attempt at Gate 4', severity: 'critical', time: '2 min ago' },
  { id: 2, message: 'Crowd surge detected in North Stand', severity: 'warning', time: '8 min ago' },
  { id: 3, message: 'Suspicious package reported near Lot B', severity: 'critical', time: '15 min ago' },
  { id: 4, message: 'CCTV offline in corridor B-12', severity: 'warning', time: '22 min ago' },
];

export const medicalAlerts = [
  { id: 1, message: 'Heat exhaustion case — Section G, Row 14', severity: 'warning', time: '5 min ago' },
  { id: 2, message: 'Cardiac emergency — VIP Box 3', severity: 'critical', time: '12 min ago' },
];

export const aiInsights = [
  {
    id: 1,
    title: 'Crowd Surge Predicted',
    description: 'AI predicts 15% crowd increase in North Stand within 30 minutes. Recommend opening Gate 7.',
    type: 'warning',
    confidence: 94,
  },
  {
    id: 2,
    title: 'Revenue Opportunity',
    description: 'Food court sales trending 22% below average. Suggest flash promotion on beverages.',
    type: 'info',
    confidence: 87,
  },
  {
    id: 3,
    title: 'Optimal Staffing',
    description: 'Security coverage can be reduced in East Wing. Reassign 4 personnel to North Stand.',
    type: 'active',
    confidence: 91,
  },
  {
    id: 4,
    title: 'Weather Alert',
    description: 'Rain probability increasing to 60% by 17:00. Prepare covered area protocols.',
    type: 'warning',
    confidence: 78,
  },
  {
    id: 5,
    title: 'Parking Optimization',
    description: 'Lot A nearing capacity. Redirect incoming traffic to Lot C and D.',
    type: 'active',
    confidence: 96,
  },
];

// ─── AI Command Center ──────────────────────────────────────────────

export const aiFeatures = [
  {
    id: 'tournament-scheduler',
    title: 'AI Tournament Scheduler',
    description: 'Automatically generate conflict-free match schedules optimized for venue availability, team rest periods, and broadcast windows.',
    icon: 'Calendar',
    status: 'active',
    lastRun: '2 hours ago',
    accuracy: 96.8,
    route: '/tournament-scheduler',
  },
  {
    id: 'crowd-prediction',
    title: 'AI Crowd Prediction',
    description: 'Predict crowd density, flow patterns, and peak hours using historical data and real-time sensor inputs.',
    icon: 'Users',
    status: 'active',
    lastRun: '5 min ago',
    accuracy: 93.2,
    route: '/crowd-intelligence',
  },
  {
    id: 'emergency-planner',
    title: 'AI Emergency Response',
    description: 'Generate real-time emergency response plans with optimized evacuation routes and resource allocation.',
    icon: 'Shield',
    status: 'active',
    lastRun: '1 hour ago',
    accuracy: 98.1,
    route: '/emergency-planner',
  },
  {
    id: 'fan-assistant',
    title: 'AI Fan Assistant',
    description: 'Intelligent chatbot for fans — directions, food ordering, ticket upgrades, facility info, and real-time updates.',
    icon: 'MessageSquare',
    status: 'active',
    lastRun: 'Real-time',
    accuracy: 89.5,
    route: '/fan-assistant',
  },
  {
    id: 'match-report',
    title: 'AI Match Report Generator',
    description: 'Auto-generate detailed match reports with key highlights, statistics, and performance analysis.',
    icon: 'FileText',
    status: 'active',
    lastRun: '30 min ago',
    accuracy: 91.7,
    route: '/analytics',
  },
  {
    id: 'stadium-ops',
    title: 'AI Stadium Operations',
    description: 'Optimize staffing, maintenance schedules, energy usage, and vendor operations across the venue.',
    icon: 'Building',
    status: 'active',
    lastRun: '15 min ago',
    accuracy: 94.3,
    route: '/dashboard',
  },
];

export const aiRecentActions = [
  { id: 1, action: 'Generated tournament schedule for Round 3', model: 'Vyora-Scheduler v2', time: '2 hours ago', status: 'success' },
  { id: 2, action: 'Crowd prediction updated for North Stand', model: 'Vyora-Crowd v3', time: '5 min ago', status: 'success' },
  { id: 3, action: 'Emergency plan revised for weather scenario', model: 'Vyora-Safety v1', time: '1 hour ago', status: 'success' },
  { id: 4, action: 'Fan query response: parking directions', model: 'Vyora-Assistant v2', time: '3 min ago', status: 'success' },
  { id: 5, action: 'Match report generated for Game 12', model: 'Vyora-Reporter v1', time: '30 min ago', status: 'success' },
];

export const aiChatMessages = [
  { id: 1, role: 'user', content: 'What is the current crowd density in the North Stand?' },
  { id: 2, role: 'ai', content: 'The North Stand is currently at 92% capacity with 11,040 of 12,000 seats occupied. This is flagged as critical density. I recommend opening Gate 7 to redirect incoming crowds to the East Wing which is at 65% capacity.' },
  { id: 3, role: 'user', content: 'Generate an emergency evacuation plan for a fire scenario.' },
  { id: 4, role: 'ai', content: 'Emergency Evacuation Plan generated:\n\n1. Activate fire alarm system immediately\n2. Deploy security teams to Gates 1, 3, 5, 7\n3. Evacuate North Stand first (highest density)\n4. Direct crowds to Assembly Points A and B\n5. Medical teams on standby at all exits\n6. Estimated full evacuation time: 12 minutes\n\nPlan confidence: 98.1%' },
];

// ─── Tournament Scheduler ───────────────────────────────────────────

export const tournamentMatches = [
  { id: 1, round: 'Quarter Final 1', teamA: 'Mumbai Strikers', teamB: 'Delhi Warriors', date: '2026-07-18', time: '14:00', venue: 'Main Stadium', sport: 'Cricket', status: 'live' },
  { id: 2, round: 'Quarter Final 2', teamA: 'Chennai FC', teamB: 'Kolkata United', date: '2026-07-18', time: '18:30', venue: 'Arena B', sport: 'Football', status: 'upcoming' },
  { id: 3, round: 'Quarter Final 3', teamA: 'Bangalore Racers', teamB: 'Hyderabad Hawks', date: '2026-07-19', time: '15:00', venue: 'Indoor Court', sport: 'Basketball', status: 'upcoming' },
  { id: 4, round: 'Quarter Final 4', teamA: 'Pune Titans', teamB: 'Jaipur Royals', date: '2026-07-19', time: '19:00', venue: 'Main Stadium', sport: 'Cricket', status: 'upcoming' },
  { id: 5, round: 'Semi Final 1', teamA: 'TBD', teamB: 'TBD', date: '2026-07-21', time: '16:00', venue: 'Main Stadium', sport: 'Cricket', status: 'scheduled' },
  { id: 6, round: 'Semi Final 2', teamA: 'TBD', teamB: 'TBD', date: '2026-07-22', time: '16:00', venue: 'Main Stadium', sport: 'Cricket', status: 'scheduled' },
  { id: 7, round: 'Final', teamA: 'TBD', teamB: 'TBD', date: '2026-07-25', time: '18:00', venue: 'Main Stadium', sport: 'Cricket', status: 'scheduled' },
];

export const venues = [
  { name: 'Main Stadium', capacity: 55000, sport: 'Cricket / Football', status: 'active' },
  { name: 'Arena B', capacity: 25000, sport: 'Football', status: 'active' },
  { name: 'Indoor Court', capacity: 8000, sport: 'Basketball / Badminton', status: 'active' },
  { name: 'Training Ground', capacity: 2000, sport: 'Multi-sport', status: 'maintenance' },
];

// ─── Crowd Intelligence ─────────────────────────────────────────────

export const crowdPredictionData = [
  { time: '08:00', predicted: 5000, actual: 4800 },
  { time: '09:00', predicted: 12000, actual: 11500 },
  { time: '10:00', predicted: 22000, actual: 23100 },
  { time: '11:00', predicted: 30000, actual: 29800 },
  { time: '12:00', predicted: 35000, actual: 36200 },
  { time: '13:00', predicted: 40000, actual: 39500 },
  { time: '14:00', predicted: 45000, actual: 42850 },
  { time: '15:00', predicted: 48000, actual: null },
  { time: '16:00', predicted: 50000, actual: null },
  { time: '17:00', predicted: 47000, actual: null },
  { time: '18:00', predicted: 42000, actual: null },
];

export const entryExitFlow = [
  { time: '08:00', entries: 2800, exits: 200 },
  { time: '09:00', entries: 7500, exits: 300 },
  { time: '10:00', entries: 10200, exits: 500 },
  { time: '11:00', entries: 8000, exits: 800 },
  { time: '12:00', entries: 5500, exits: 1200 },
  { time: '13:00', entries: 5200, exits: 1500 },
  { time: '14:00', entries: 4800, exits: 2000 },
];

// ─── Emergency Planner ──────────────────────────────────────────────

export const emergencyScenarios = [
  {
    id: 'fire',
    title: 'Fire Emergency',
    icon: 'Flame',
    severity: 'critical',
    description: 'Structural fire detected in stadium infrastructure',
    responseTime: '3 min',
    steps: [
      'Activate fire alarm system',
      'Deploy fire response teams to affected zones',
      'Initiate phased evacuation starting from nearest exits',
      'Coordinate with fire department',
      'Medical teams on standby at assembly points',
      'Post-evacuation headcount and accountability',
    ],
  },
  {
    id: 'stampede',
    title: 'Crowd Stampede',
    icon: 'Users',
    severity: 'critical',
    description: 'Uncontrolled crowd movement creating crush risk',
    responseTime: '2 min',
    steps: [
      'Deploy crowd control barriers at choke points',
      'Open all emergency exits simultaneously',
      'PA system: calm crowd with clear instructions',
      'Security teams create buffer zones',
      'Medical teams positioned at high-risk areas',
      'Monitor CCTV for secondary surge events',
    ],
  },
  {
    id: 'medical',
    title: 'Mass Medical',
    icon: 'Heart',
    severity: 'warning',
    description: 'Multiple simultaneous medical emergencies',
    responseTime: '4 min',
    steps: [
      'Activate all medical response teams',
      'Set up triage zones at designated points',
      'Request external ambulance support',
      'Deploy first-aid kits to all sections',
      'Coordinate with nearby hospitals',
      'Track patient count and status in real-time',
    ],
  },
  {
    id: 'weather',
    title: 'Severe Weather',
    icon: 'CloudLightning',
    severity: 'warning',
    description: 'Severe thunderstorm or extreme weather conditions',
    responseTime: '10 min',
    steps: [
      'Monitor weather radar updates',
      'Activate covered area protocols',
      'Redirect outdoor crowds to sheltered zones',
      'Suspend outdoor activities if lightning detected',
      'Prepare for potential power outages',
      'Issue updates via PA and mobile notifications',
    ],
  },
];

export const emergencyResources = [
  { type: 'Medical Teams', available: 12, deployed: 4, total: 16 },
  { type: 'Security Personnel', available: 85, deployed: 45, total: 130 },
  { type: 'Fire Response Units', available: 6, deployed: 2, total: 8 },
  { type: 'Ambulances', available: 4, deployed: 1, total: 5 },
  { type: 'Evacuation Marshals', available: 20, deployed: 8, total: 28 },
];

// ─── Fan Assistant ──────────────────────────────────────────────────

export const fanChatMessages = [
  { id: 1, role: 'user', content: 'Where can I find the nearest food court?' },
  { id: 2, role: 'ai', content: 'The nearest food court is located at Level 2, Gate 5 entrance. It\'s approximately a 3-minute walk from your current section. You\'ll find a variety of options including:\n\n🍕 Pizza Corner\n🍔 Burger Station\n🥤 Fresh Juice Bar\n🍜 Asian Kitchen\n\nWould you like directions or want to pre-order?' },
  { id: 3, role: 'user', content: 'Can I upgrade my ticket to VIP?' },
  { id: 4, role: 'ai', content: 'Yes! VIP upgrades are available for today\'s match. Here are your options:\n\n⭐ Premium Box — ₹4,500 (includes F&B)\n👑 Diamond Lounge — ₹8,000 (all-inclusive)\n🏆 Platinum Suite — ₹12,000 (private viewing)\n\nAll upgrades include complimentary parking. Shall I proceed with an upgrade?' },
];

export const fanQuickActions = [
  { id: 1, label: 'Find Food', icon: 'UtensilsCrossed' },
  { id: 2, label: 'Get Directions', icon: 'MapPin' },
  { id: 3, label: 'Ticket Info', icon: 'Ticket' },
  { id: 4, label: 'Restrooms', icon: 'DoorOpen' },
  { id: 5, label: 'Lost & Found', icon: 'Search' },
  { id: 6, label: 'Emergency', icon: 'Phone' },
];

export const fanFAQs = [
  { question: 'What are the stadium entry timings?', answer: 'Gates open 2 hours before the match starts. We recommend arriving at least 1 hour early to avoid queues.' },
  { question: 'Is outside food allowed?', answer: 'Small snacks and sealed water bottles are allowed. Large food items and glass containers are not permitted.' },
  { question: 'Where is the parking lot?', answer: 'Parking is available in Lots A through D. Follow the digital signage for available spots. Pre-booked parking is in Lot A.' },
  { question: 'How can I contact lost & found?', answer: 'Visit the Lost & Found desk at Gate 1 entrance, or call +91-XXX-XXX-XXXX. Items are stored for 30 days.' },
  { question: 'Are there wheelchair accessible areas?', answer: 'Yes, accessible seating is available in all stands. Please contact our assistance desk at Gate 2 for support.' },
];

export const fanSatisfactionData = [
  { category: 'Overall Experience', score: 4.5 },
  { category: 'Food Quality', score: 4.1 },
  { category: 'Facilities', score: 4.3 },
  { category: 'Safety', score: 4.7 },
  { category: 'Staff Helpfulness', score: 4.4 },
];

// ─── Analytics ──────────────────────────────────────────────────────

export const revenueAnalytics = [
  { month: 'Jan', ticketing: 45000000, food: 12000000, merchandise: 8000000, sponsorship: 22000000 },
  { month: 'Feb', ticketing: 52000000, food: 14000000, merchandise: 9500000, sponsorship: 22000000 },
  { month: 'Mar', ticketing: 48000000, food: 13000000, merchandise: 7800000, sponsorship: 24000000 },
  { month: 'Apr', ticketing: 61000000, food: 18000000, merchandise: 12000000, sponsorship: 26000000 },
  { month: 'May', ticketing: 58000000, food: 16500000, merchandise: 11000000, sponsorship: 25000000 },
  { month: 'Jun', ticketing: 72000000, food: 21000000, merchandise: 15000000, sponsorship: 28000000 },
  { month: 'Jul', ticketing: 68000000, food: 19500000, merchandise: 13500000, sponsorship: 27000000 },
];

export const attendanceTrends = [
  { month: 'Jan', attendance: 185000, events: 8 },
  { month: 'Feb', attendance: 210000, events: 10 },
  { month: 'Mar', attendance: 195000, events: 9 },
  { month: 'Apr', attendance: 248000, events: 12 },
  { month: 'May', attendance: 232000, events: 11 },
  { month: 'Jun', attendance: 290000, events: 14 },
  { month: 'Jul', attendance: 275000, events: 13 },
];

export const operationalMetrics = [
  { name: 'Energy Efficiency', value: 87, target: 90 },
  { name: 'Staff Utilization', value: 92, target: 85 },
  { name: 'Waste Reduction', value: 74, target: 80 },
  { name: 'Water Conservation', value: 81, target: 85 },
  { name: 'Response Time', value: 95, target: 90 },
];

export const aiPerformanceMetrics = [
  { model: 'Crowd Prediction', accuracy: 93.2, latency: '120ms', uptime: 99.8 },
  { model: 'Schedule Optimizer', accuracy: 96.8, latency: '340ms', uptime: 99.9 },
  { model: 'Emergency Planner', accuracy: 98.1, latency: '85ms', uptime: 100.0 },
  { model: 'Fan Assistant', accuracy: 89.5, latency: '45ms', uptime: 99.7 },
  { model: 'Report Generator', accuracy: 91.7, latency: '520ms', uptime: 99.5 },
];

// ─── Settings ───────────────────────────────────────────────────────

export const settingsProfile = {
  name: 'Arjun Mehta',
  email: 'arjun.mehta@vyora.io',
  role: 'Stadium Operations Manager',
  stadium: 'Vyora International Arena',
  timezone: 'Asia/Kolkata (IST)',
};

export const notificationSettings = [
  { id: 'security', label: 'Security Alerts', description: 'Critical and warning security notifications', enabled: true },
  { id: 'medical', label: 'Medical Alerts', description: 'Medical emergency notifications', enabled: true },
  { id: 'crowd', label: 'Crowd Alerts', description: 'Crowd density and surge warnings', enabled: true },
  { id: 'weather', label: 'Weather Updates', description: 'Severe weather alerts and forecasts', enabled: true },
  { id: 'revenue', label: 'Revenue Reports', description: 'Daily and weekly revenue summaries', enabled: false },
  { id: 'ai', label: 'AI Insights', description: 'AI-generated operational recommendations', enabled: true },
];

export const aiModelSettings = [
  { id: 'crowd-model', name: 'Crowd Prediction Model', version: 'v3.2', status: 'active', accuracy: 93.2 },
  { id: 'schedule-model', name: 'Schedule Optimizer', version: 'v2.1', status: 'active', accuracy: 96.8 },
  { id: 'emergency-model', name: 'Emergency Planner', version: 'v1.5', status: 'active', accuracy: 98.1 },
  { id: 'fan-model', name: 'Fan Assistant', version: 'v2.0', status: 'active', accuracy: 89.5 },
  { id: 'report-model', name: 'Report Generator', version: 'v1.3', status: 'active', accuracy: 91.7 },
];

// ─── Navigation ─────────────────────────────────────────────────────

export const navigationItems = [
  { label: 'Dashboard', icon: 'LayoutDashboard', path: '/dashboard' },
  { label: 'AI Command Center', icon: 'Brain', path: '/ai-command-center' },
  { label: 'Tournament', icon: 'Trophy', path: '/tournament-scheduler' },
  { label: 'Crowd Intel', icon: 'Users', path: '/crowd-intelligence' },
  { label: 'Emergency', icon: 'Shield', path: '/emergency-planner' },
  { label: 'Fan Assistant', icon: 'MessageSquare', path: '/fan-assistant' },
  { label: 'Analytics', icon: 'BarChart3', path: '/analytics' },
  { label: 'Settings', icon: 'Settings', path: '/settings' },
];
