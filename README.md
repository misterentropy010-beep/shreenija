# Shreenija Transportation Management System

A comprehensive cross-platform solution for transportation and booking management with multi-role support.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm 9+
- Python 3.11+
- Docker (optional)

### Installation
```bash
# Install all dependencies
npm run install:all

# Or install individually
npm install
cd web && npm install
cd ../mobile && npm install  
cd ../backend && pip install -r requirements.txt
```

### Development
```bash
# Start web + backend
npm run dev

# Start mobile app
npm run dev:mobile

# Backend only
cd backend && python manage.py runserver
```

## 📱 Features

### User Roles
- **General Users**: OAuth login, cab/hotel booking
- **Admin**: Analytics, team management, financial controls
- **Team Leader**: Task allocation, trip management, payroll
- **Manager**: Team oversight, reporting to admin
- **Driver**: Trip details, earnings, navigation
- **Corporate**: Service tracking and management

### Core Functionality
- Multi-platform authentication (OAuth + company login)
- Real-time booking and trip management
- Automated payslip and invoice generation
- KYC document management and approvals
- Financial analytics and reporting
- AI-powered scheduling and insights

## 🏗 Architecture

```
shreenija/
├── web/          # React web application
├── mobile/       # Expo React Native app
├── backend/      # Django REST API
└── docs/         # Documentation
```

### Tech Stack
- **Frontend**: React + Vite + TypeScript
- **Mobile**: Expo + React Native + TypeScript
- **Backend**: Django + DRF + PostgreSQL
- **Auth**: JWT + OAuth2 (Google)
- **AI**: OpenAI/Anthropic APIs

## 🔧 Development Guidelines
- Use TypeScript for all frontend code
- Follow atomic design principles for UI
- Implement comprehensive error handling
- Use React Query for state management
- Follow Django REST API conventions

## 📊 System Design
Built following clean architecture principles with:
- Role-based access control (RBAC)
- Microservice-ready architecture
- Event-driven notifications
- Scalable database design
- AI integration points

## 🤖 AI Features
- Automated trip scheduling optimization
- Anomaly detection in bookings
- Intelligent route suggestions
- Predictive analytics for demand
- Automated customer support responses

## 📄 License
MIT License - see LICENSE file for details.