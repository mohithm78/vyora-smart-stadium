import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Brain,
  Send,
  Calendar,
  Users,
  Shield,
  MessageSquare,
  FileText,
  Building,
  Sparkles,
  CheckCircle2,
  Bot,
  Zap,
} from 'lucide-react';

import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { aiFeatures, aiRecentActions, aiChatMessages } from '../data/mockData';
import { askGemini } from '../lib/gemini';

const iconMap = {
  Calendar,
  Users,
  Shield,
  MessageSquare,
  FileText,
  Building,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function AICommandCenter() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState(aiChatMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const prompt = input;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: prompt,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const loadingId = Date.now() + 1;

    setMessages((prev) => [
      ...prev,
      {
        id: loadingId,
        role: 'ai',
        content: '🤖 Vyora AI is analyzing your request...',
      },
    ]);

    try {
      const response = await askGemini(`
You are Vyora AI.

You are an enterprise AI assistant for Smart Stadium Management.

Your responsibilities include:

- Tournament Scheduling
- Crowd Prediction
- Emergency Planning
- Fan Assistance
- Stadium Operations
- Security Monitoring

Always answer professionally.

If possible,
- provide bullet points,
- recommendations,
- risks,
- estimated impact,
- next actions.

User Request:

${prompt}
`);

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingId
            ? {
              ...msg,
              content: response,
            }
            : msg
        )
      );
    } catch (err) {
      console.error(err);

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === loadingId
            ? {
              ...msg,
              content:
                '❌ Unable to connect to Gemini AI. Please check your API key and internet connection.',
            }
            : msg
        )
      );
    }

    setLoading(false);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Header */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: 'AI Models Active',
            value: '6/6',
            icon: Brain,
            color: 'text-success',
          },
          {
            label: 'Avg Accuracy',
            value: '93.9%',
            icon: Sparkles,
            color: 'text-accent-light',
          },
          {
            label: 'Avg Latency',
            value: '185ms',
            icon: Zap,
            color: 'text-warning',
          },
          {
            label: 'Uptime',
            value: '99.8%',
            icon: CheckCircle2,
            color: 'text-success',
          },
        ].map((stat, i) => (
          <motion.div key={i} variants={itemVariants}>
            <GlassCard animate={false} padding="p-4">
              <div className="flex items-center gap-3">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <div>
                  <p className="text-xs text-text-secondary">{stat.label}</p>
                  <p className="text-lg font-bold text-text-primary">
                    {stat.value}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* AI Engines */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <h3 className="text-sm font-semibold text-text-primary mb-4">
            AI Engines
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aiFeatures.map((feature) => {
              const Icon = iconMap[feature.icon];

              return (
                <GlassCard
                  key={feature.id}
                  animate={false}
                  padding="p-5"
                  className="group cursor-pointer"
                  onClick={() => navigate(feature.route)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-accent-light" />
                    </div>

                    <Badge variant="active" dot>
                      Active
                    </Badge>
                  </div>

                  <h4 className="text-sm font-semibold text-text-primary mb-1">
                    {feature.title}
                  </h4>

                  <p className="text-xs text-text-secondary leading-relaxed mb-3">
                    {feature.description}
                  </p>

                  <div className="flex justify-between text-[10px] text-text-muted">
                    <span>Accuracy: {feature.accuracy}%</span>
                    <span>{feature.lastRun}</span>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </motion.div>

        {/* Recent Actions */}

        <motion.div variants={itemVariants}>
          <h3 className="text-sm font-semibold text-text-primary mb-4">
            Recent Actions
          </h3>

          <GlassCard animate={false}>
            <div className="space-y-3">
              {aiRecentActions.map((action) => (
                <div key={action.id} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  </div>

                  <div>
                    <p className="text-xs text-text-primary">
                      {action.action}
                    </p>

                    <p className="text-[10px] text-text-muted mt-1">
                      {action.model} • {action.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* AI Chat */}

      <motion.div variants={itemVariants}>
        <h3 className="text-sm font-semibold text-text-primary mb-4">
          AI Operations Assistant
        </h3>

        <GlassCard animate={false}>
          <div className="h-80 overflow-y-auto space-y-4 mb-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                  }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.role === 'user'
                      ? 'gradient-accent text-white'
                      : 'glass text-text-primary'
                    }`}
                >
                  {msg.role === 'ai' && (
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="w-4 h-4 text-accent-light" />
                      <span className="text-xs text-accent-light">
                        Vyora AI
                      </span>
                    </div>
                  )}

                  <p className="whitespace-pre-line">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              placeholder="Ask Vyora AI anything..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-surface border border-border rounded-xl px-4 py-3 text-sm"
            />

            <Button
              onClick={handleSend}
              icon={Send}
              disabled={loading}
            >
              {loading ? 'Thinking...' : 'Send'}
            </Button>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}