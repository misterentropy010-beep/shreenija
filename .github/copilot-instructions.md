# Shreenija Transportation Management System

## Project Overview
Cross-platform transportation and booking management system with multiple user roles:
- General Users: OAuth login, cab/hotel booking
- Company Staff: Admin, Team Leader, Manager, Driver roles
- Corporate Clients: Service tracking and management

## Architecture
- **Frontend Web**: React + Vite + TypeScript
- **Mobile App**: Expo React Native + TypeScript  
- **Backend**: Django + Django REST Framework
- **Database**: PostgreSQL
- **Authentication**: JWT + OAuth (Google)
- **AI Integration**: LLM APIs for scheduling and analytics

## Development Guidelines
- Use TypeScript for all frontend code
- Follow Django REST API conventions
- Implement role-based access control (RBAC)
- Use React Query for state management
- Follow atomic design principles for UI components
- Include comprehensive error handling and validation