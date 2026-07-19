# 🏗️ System Architecture

```mermaid
flowchart TB

%% ============================
%% USERS
%% ============================
subgraph USERS["👥 Users"]
    A1["🎯 Stadium Operations Manager"]
    A2["🛡️ Security Team"]
    A3["🏟️ Tournament Organizer"]
    A4["🙋 Fans & Visitors"]
end

%% ============================
%% FRONTEND
%% ============================
subgraph FRONTEND["🌐 Vyora Smart Stadium Platform"]
    B1["🏠 Landing Page"]
    B2["📊 Dashboard"]
    B3["🤖 AI Command Center"]
    B4["🏆 Tournament Scheduler"]
    B5["👥 Crowd Intelligence"]
    B6["🚨 Emergency Planner"]
    B7["💬 Fan Assistant"]
    B8["📈 Analytics"]
    B9["⚙️ Settings"]
end

%% ============================
%% AI LAYER
%% ============================
subgraph AI["🧠 AI Intelligence Layer"]
    C1["Gemini 2.5 Flash API"]
    C2["AI Match Scheduler"]
    C3["Crowd Prediction Engine"]
    C4["Emergency Response AI"]
    C5["AI Report Generator"]
    C6["Fan Support AI"]
end

%% ============================
%% DATA
%% ============================
subgraph DATA["📡 Stadium Intelligence Layer"]
    D1["Attendance"]
    D2["Crowd Density"]
    D3["Parking Status"]
    D4["Revenue"]
    D5["Weather"]
    D6["Security Alerts"]
    D7["Match Schedule"]
    D8["Medical Incidents"]
end

%% ============================
%% VISUALIZATION
%% ============================
subgraph VIS["📊 Visualization Layer"]
    E1["Interactive Charts"]
    E2["Real-Time KPI Cards"]
    E3["Heat Maps"]
    E4["AI Recommendations"]
end

%% ============================
%% DEPLOYMENT
%% ============================
subgraph DEPLOY["☁️ Deployment"]
    F1["GitHub Repository"]
    F2["Vercel Hosting"]
end

%% ============================
%% CONNECTIONS
%% ============================

A1 --> B2
A2 --> B6
A3 --> B4
A4 --> B7

B2 --> C1
B3 --> C1
B4 --> C2
B5 --> C3
B6 --> C4
B7 --> C6
B8 --> C5

C1 --> D1
C1 --> D2
C1 --> D3
C1 --> D4
C1 --> D5
C1 --> D6
C1 --> D7
C1 --> D8

D1 --> E1
D2 --> E3
D3 --> E2
D4 --> E2
D5 --> E4
D6 --> E4
D7 --> E1
D8 --> E4

B1 --> F2
F2 --> F1
```

---

## 🏛️ Architecture Overview

Vyora is an AI-powered Smart Stadium Operations Platform designed to improve operational efficiency, crowd safety, tournament management, and fan engagement.

### Frontend Layer
- React 19
- Vite
- Tailwind CSS
- Framer Motion
- Recharts
- React Router

### AI Layer
- Google Gemini 2.5 Flash
- Natural Language Processing
- AI Scheduling
- Crowd Prediction
- Emergency Planning
- Fan Assistance
- Report Generation

### Intelligence Layer
- Live Attendance
- Crowd Density
- Parking Occupancy
- Revenue Monitoring
- Weather Information
- Security Alerts
- Match Scheduling
- Medical Alerts

### Visualization Layer
- Interactive Dashboards
- Real-Time KPIs
- Live Charts
- AI Recommendations

### Deployment
- GitHub
- Vercel
