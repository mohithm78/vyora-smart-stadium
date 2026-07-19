import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Bell,
  Brain,
  Palette,
  Building,
  Key,
  Save,
  Mail,
  Shield,
  Globe,
  Clock,
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Toggle from '../components/ui/Toggle';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';
import {
  settingsProfile,
  notificationSettings as initialNotifications,
  aiModelSettings,
} from '../data/mockData';

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'ai', label: 'AI Models', icon: Brain },
  { id: 'stadium', label: 'Stadium', icon: Building },
  { id: 'api', label: 'API Keys', icon: Key },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState(initialNotifications);
  const [profile, setProfile] = useState(settingsProfile);

  const toggleNotification = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, enabled: !n.enabled } : n))
    );
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Tabs */}
      <motion.div variants={itemVariants} className="flex items-center gap-1 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-accent/10 text-accent-light border border-accent/20'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </motion.div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <GlassCard animate={false}>
              <h3 className="text-sm font-semibold text-text-primary mb-6">Profile Information</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    icon={User}
                  />
                  <Input
                    label="Email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    icon={Mail}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Role"
                    value={profile.role}
                    onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                    icon={Shield}
                  />
                  <Input
                    label="Timezone"
                    value={profile.timezone}
                    icon={Clock}
                    readOnly
                  />
                </div>
                <div className="flex justify-end pt-2">
                  <Button icon={Save}>Save Changes</Button>
                </div>
              </div>
            </GlassCard>
          </div>

          <GlassCard animate={false}>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full gradient-accent-secondary flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-text-primary">{profile.name}</h4>
              <p className="text-xs text-text-secondary mb-1">{profile.role}</p>
              <p className="text-xs text-text-muted">{profile.email}</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-text-muted mb-2">Stadium</p>
                <p className="text-sm font-medium text-text-primary">{profile.stadium}</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <motion.div variants={itemVariants}>
          <GlassCard animate={false}>
            <h3 className="text-sm font-semibold text-text-primary mb-6">Notification Preferences</h3>
            <div className="space-y-5">
              {notifications.map((notif) => (
                <div key={notif.id} className="glass p-4 rounded-xl">
                  <Toggle
                    enabled={notif.enabled}
                    onChange={() => toggleNotification(notif.id)}
                    label={notif.label}
                    description={notif.description}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <Button icon={Save}>Save Preferences</Button>
            </div>
          </GlassCard>
        </motion.div>
      )}

      {/* AI Models Tab */}
      {activeTab === 'ai' && (
        <motion.div variants={itemVariants}>
          <GlassCard animate={false}>
            <h3 className="text-sm font-semibold text-text-primary mb-6">AI Model Configuration</h3>
            <div className="space-y-4">
              {aiModelSettings.map((model) => (
                <div key={model.id} className="glass p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-accent-light" />
                      <div>
                        <p className="text-sm font-medium text-text-primary">{model.name}</p>
                        <p className="text-xs text-text-muted">Version: {model.version}</p>
                      </div>
                    </div>
                    <Badge variant="active" dot>{model.status}</Badge>
                  </div>
                  <ProgressBar
                    label="Accuracy"
                    value={model.accuracy}
                    color={model.accuracy > 95 ? 'success' : model.accuracy > 90 ? 'accent' : 'warning'}
                  />
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      )}

      {/* Stadium Tab */}
      {activeTab === 'stadium' && (
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GlassCard animate={false}>
            <h3 className="text-sm font-semibold text-text-primary mb-6">Stadium Configuration</h3>
            <div className="space-y-4">
              <Input label="Stadium Name" value={profile.stadium} icon={Building} readOnly />
              <Input label="Location" value="Mumbai, Maharashtra, India" icon={Globe} readOnly />
              <Input label="Total Capacity" value="55,000" icon={User} readOnly />
              <Input label="Year Built" value="2022" icon={Clock} readOnly />
            </div>
          </GlassCard>
          <GlassCard animate={false}>
            <h3 className="text-sm font-semibold text-text-primary mb-6">Venue Stats</h3>
            <div className="space-y-4">
              {[
                { label: 'Total Events (YTD)', value: '77' },
                { label: 'Avg Attendance', value: '42,000' },
                { label: 'Security Rating', value: 'A+' },
                { label: 'Safety Compliance', value: '100%' },
                { label: 'Energy Rating', value: 'LEED Gold' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between glass p-3 rounded-xl">
                  <span className="text-xs text-text-secondary">{stat.label}</span>
                  <span className="text-sm font-semibold text-text-primary">{stat.value}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      )}

      {/* API Keys Tab */}
      {activeTab === 'api' && (
        <motion.div variants={itemVariants}>
          <GlassCard animate={false}>
            <h3 className="text-sm font-semibold text-text-primary mb-6">API Key Management</h3>
            <div className="space-y-4">
              {[
                { name: 'Production API Key', key: 'vyo_prod_••••••••••••••••abcd', created: 'Jan 15, 2026', status: 'active' },
                { name: 'Staging API Key', key: 'vyo_stg_••••••••••••••••efgh', created: 'Mar 8, 2026', status: 'active' },
                { name: 'Development API Key', key: 'vyo_dev_••••••••••••••••ijkl', created: 'Jun 1, 2026', status: 'active' },
              ].map((apiKey) => (
                <div key={apiKey.name} className="glass p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Key className="w-4 h-4 text-accent-light" />
                      <p className="text-sm font-medium text-text-primary">{apiKey.name}</p>
                    </div>
                    <Badge variant="active">{apiKey.status}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="text-xs text-text-secondary bg-surface px-2 py-1 rounded font-mono flex-1">
                      {apiKey.key}
                    </code>
                    <Button variant="ghost" size="sm">Copy</Button>
                  </div>
                  <p className="text-[10px] text-text-muted mt-2">Created: {apiKey.created}</p>
                </div>
              ))}
              <div className="flex justify-end">
                <Button variant="secondary" icon={Key}>Generate New Key</Button>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      )}
    </motion.div>
  );
}
