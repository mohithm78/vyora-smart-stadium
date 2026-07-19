import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Send,
  UtensilsCrossed,
  MapPin,
  Ticket,
  DoorOpen,
  Search,
  Phone,
  Bot,
  ChevronDown,
  ChevronUp,
  Star,
  ThumbsUp,
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import BarChartComponent from '../components/charts/BarChart';
import { fanChatMessages, fanQuickActions, fanFAQs, fanSatisfactionData } from '../data/mockData';

const iconMap = { UtensilsCrossed, MapPin, Ticket, DoorOpen, Search, Phone };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FanAssistant() {
  const [messages, setMessages] = useState(fanChatMessages);
  const [input, setInput] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const handleSend = (text) => {
    const content = text || input;
    if (!content.trim()) return;
    const userMsg = { id: Date.now(), role: 'user', content };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTimeout(() => {
      const aiMsg = {
        id: Date.now() + 1,
        role: 'ai',
        content: `Thank you for your query! I'm here to help. Based on your question about "${content}", here's what I found:\n\nOur stadium offers comprehensive services for all attendees. You can find more details at the information kiosk near Gate 2, or I can assist you with specific directions, ticket information, or facility locations.\n\nIs there anything else I can help you with? 😊`,
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 800);
  };

  const satisfactionChartData = fanSatisfactionData.map((d) => ({
    name: d.category,
    score: d.score,
  }));

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Active Chats', value: '247', color: 'text-accent-light' },
          { label: 'Avg Response', value: '1.2s', color: 'text-success' },
          { label: 'Satisfaction', value: '4.4/5', color: 'text-warning' },
          { label: 'Queries Today', value: '3,847', color: 'text-accent-secondary' },
        ].map((stat, i) => (
          <motion.div key={i} variants={itemVariants}>
            <GlassCard animate={false} padding="p-4">
              <p className="text-xs text-text-secondary">{stat.label}</p>
              <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <GlassCard animate={false}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full gradient-accent-secondary flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary">Vyora Fan Assistant</h3>
                  <p className="text-[10px] text-success flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
                    Online • Avg response: 1.2s
                  </p>
                </div>
              </div>
              <Badge variant="active" dot>AI Active</Badge>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mb-4">
              {fanQuickActions.map((action) => {
                const Icon = iconMap[action.icon];
                return (
                  <button
                    key={action.id}
                    onClick={() => handleSend(action.label)}
                    className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-full text-xs text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors cursor-pointer"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {action.label}
                  </button>
                );
              })}
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto no-scrollbar space-y-4 mb-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'gradient-accent text-white rounded-br-md'
                        : 'glass text-text-primary rounded-bl-md'
                    }`}
                  >
                    {msg.role === 'ai' && (
                      <div className="flex items-center gap-2 mb-2">
                        <Bot className="w-4 h-4 text-accent-light" />
                        <span className="text-xs font-medium text-accent-light">Fan Assistant</span>
                      </div>
                    )}
                    <p className="whitespace-pre-line">{msg.content}</p>
                    {msg.role === 'ai' && (
                      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-border">
                        <button className="text-[10px] text-text-muted hover:text-text-primary flex items-center gap-1 cursor-pointer">
                          <ThumbsUp className="w-3 h-3" /> Helpful
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about directions, food, tickets, facilities..."
                className="flex-1 bg-surface border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50"
              />
              <Button onClick={() => handleSend()} icon={Send}>
                Send
              </Button>
            </div>
          </GlassCard>
        </motion.div>

        {/* Sidebar */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* FAQ */}
          <GlassCard animate={false}>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Frequently Asked</h3>
            <div className="space-y-2">
              {fanFAQs.map((faq, i) => (
                <div key={i} className="glass rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                    className="w-full px-3 py-2.5 flex items-center justify-between text-left cursor-pointer"
                  >
                    <span className="text-xs text-text-primary pr-2">{faq.question}</span>
                    {expandedFAQ === i ? (
                      <ChevronUp className="w-3.5 h-3.5 text-text-muted shrink-0" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-text-muted shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {expandedFAQ === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-3 pb-3 text-xs text-text-secondary leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Satisfaction */}
          <GlassCard animate={false}>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Fan Satisfaction</h3>
            <BarChartComponent
              data={satisfactionChartData}
              xAxisKey="name"
              dataKeys={[{ key: 'score', color: '#6366f1', name: 'Score' }]}
              height={200}
            />
            <div className="flex items-center justify-center gap-1 mt-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${star <= 4 ? 'text-warning fill-warning' : 'text-text-muted'}`}
                />
              ))}
              <span className="text-sm font-semibold text-text-primary ml-2">4.4</span>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
