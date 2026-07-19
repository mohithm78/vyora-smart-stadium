import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import AICommandCenter from './pages/AICommandCenter';
import TournamentScheduler from './pages/TournamentScheduler';
import CrowdIntelligence from './pages/CrowdIntelligence';
import EmergencyPlanner from './pages/EmergencyPlanner';
import FanAssistant from './pages/FanAssistant';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Landing */}
        <Route path="/" element={<Landing />} />

        {/* App Pages with Sidebar Layout */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ai-command-center" element={<AICommandCenter />} />
          <Route path="/tournament-scheduler" element={<TournamentScheduler />} />
          <Route path="/crowd-intelligence" element={<CrowdIntelligence />} />
          <Route path="/emergency-planner" element={<EmergencyPlanner />} />
          <Route path="/fan-assistant" element={<FanAssistant />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
