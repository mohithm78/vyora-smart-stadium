import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Zap,
  Calendar,
  Users,
  Shield,
  MessageSquare,
  FileText,
  Building,
  ArrowRight,
  BarChart3,
  Brain,
  ChevronRight,
  Star,
  Globe,
  Cpu,
} from 'lucide-react';
import Button from '../components/ui/Button';

const features = [
  {
    icon: Calendar,
    title: 'AI Tournament Scheduler',
    description: 'Auto-generate conflict-free schedules optimized for venues, teams, and broadcast windows.',
  },
  {
    icon: Users,
    title: 'AI Crowd Prediction',
    description: 'Predict crowd density, flow patterns, and peak hours with 93%+ accuracy.',
  },
  {
    icon: Shield,
    title: 'AI Emergency Response',
    description: 'Real-time emergency plans with optimized evacuation routes and resource allocation.',
  },
  {
    icon: MessageSquare,
    title: 'AI Fan Assistant',
    description: 'Intelligent chatbot for directions, food, tickets, and real-time match updates.',
  },
  {
    icon: FileText,
    title: 'AI Match Reports',
    description: 'Auto-generated match reports with highlights, statistics, and performance analysis.',
  },
  {
    icon: Building,
    title: 'AI Stadium Ops',
    description: 'Optimize staffing, maintenance, energy, and vendor operations across the venue.',
  },
];

const stats = [
  { value: '120+', label: 'Stadiums Managed' },
  { value: '2.4M', label: 'Events Processed' },
  { value: '15B+', label: 'AI Decisions Made' },
  { value: '99.9%', label: 'Uptime SLA' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl gradient-accent-secondary flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight gradient-text">Vyora</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Features</a>
            <a href="#stats" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Platform</a>
            <a href="#cta" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Contact</a>
          </div>
          <Button onClick={() => navigate('/dashboard')} size="sm">
            Launch Dashboard
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <Cpu className="w-3.5 h-3.5 text-accent-light" />
              <span className="text-xs font-medium text-accent-light">Powered by Generative AI</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
              <span className="text-text-primary">Intelligence Behind</span>
              <br />
              <span className="gradient-text">Every Game</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              AI-powered Smart Stadium & Tournament Operations Platform. Manage sports events with
              real-time crowd intelligence, emergency response, and fan engagement — all driven by
              Generative AI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button onClick={() => navigate('/dashboard')} size="lg">
                <Brain className="w-5 h-5" />
                Open Dashboard
              </Button>
              <Button variant="secondary" size="lg" onClick={() => navigate('/ai-command-center')}>
                Explore AI Features
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 relative"
          >
            <div className="glass p-1 glow-accent">
              <div className="bg-surface rounded-[12px] p-6 border border-border">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Live Attendance', value: '42,850', icon: Users, color: 'text-accent-light' },
                    { label: 'AI Models Active', value: '6', icon: Brain, color: 'text-success' },
                    { label: 'Security Status', value: 'Secure', icon: Shield, color: 'text-success' },
                    { label: 'Revenue Today', value: '₹12.4M', icon: BarChart3, color: 'text-accent-secondary' },
                  ].map((item, i) => (
                    <div key={i} className="glass p-4 text-center">
                      <item.icon className={`w-6 h-6 mx-auto mb-2 ${item.color}`} />
                      <p className="text-lg font-bold text-text-primary">{item.value}</p>
                      <p className="text-xs text-text-secondary">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-accent/10 blur-2xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Six AI Engines.{' '}
              <span className="gradient-text">One Platform.</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              From scheduling to safety, every operation is enhanced by purpose-built AI models.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass glass-hover p-6 group cursor-pointer transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-accent-light" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass p-6 text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-sm text-text-secondary">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-text-muted mb-8 uppercase tracking-widest">Trusted by Leading Sports Organizations</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40">
            {['Indian Premier League', 'FIFA World Cup', 'Olympics 2028', 'Asian Games', 'Pro Kabaddi'].map((name, i) => (
              <div key={i} className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium text-text-secondary">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass p-12 glow-accent relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              <Star className="w-8 h-8 text-accent-light mx-auto mb-6" />
              <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-4">
                Ready to Transform Your Stadium?
              </h2>
              <p className="text-text-secondary mb-8 max-w-md mx-auto">
                Join 120+ stadiums already using Vyora to deliver smarter, safer, and more engaging sports experiences.
              </p>
              <Button onClick={() => navigate('/dashboard')} size="lg">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gradient-accent-secondary flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold gradient-text">Vyora</span>
          </div>
          <p className="text-xs text-text-muted">
            © 2026 Vyora Technologies. Intelligence Behind Every Game.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-text-secondary hover:text-text-primary transition-colors">Privacy</a>
            <a href="#" className="text-xs text-text-secondary hover:text-text-primary transition-colors">Terms</a>
            <a href="#" className="text-xs text-text-secondary hover:text-text-primary transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
