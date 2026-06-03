# Architecture

## Overview

Ticket Management System is a production-oriented full-stack application designed for Help Desk and IT Support workflows.

Current Version:

```text
v0.7.1
```

---

# High-Level Architecture

```text
User
│
├── React Frontend
│
▼

FastAPI Backend
│
├── Authentication Layer
├── Authorization Layer (RBAC)
├── Ticket Management Layer
├── Admin Management Layer
├── Validation Layer
│
▼

PostgreSQL (Supabase)
```

---

# System Components

```text
Frontend
│
├── Authentication Pages
├── User Dashboard
├── Admin Dashboard
├── Protected Routes
├── Reusable Components
├── Custom Hooks
├── Ticket Search
├── Filters
├── Pagination
│
▼

Backend
│
├── Auth Module
├── Ticket Module
├── Admin Module
├── JWT Security
├── RBAC
├── Validation
│
▼

Database
│
├── Users
└── Tickets
```

---

# Technology Stack

## Frontend

```text
React
TypeScript
Vite
Tailwind CSS
Axios
React Router DOM
React Hot Toast
React Icons
```

Responsibilities:

- Authentication UI
- Dashboard UI
- Admin Dashboard
- Ticket Management
- Search & Filters
- Pagination
- Protected Routing
- API Communication
- State Management

---

## Backend

```text
FastAPI
```

Responsibilities:

- Authentication
- Authorization
- Ticket Management
- Admin Operations
- Request Validation
- API Documentation

---

## Database

```text
PostgreSQL
```

Hosted On:

```text
Supabase
```

Stores:

- Users
- Tickets

---

## ORM

```text
SQLAlchemy 2.0
```

Responsibilities:

- Models
- Relationships
- Query Building
- Session Management

---

## Database Migrations

```text
Alembic
```

Workflow:

```text
SQLAlchemy Models
↓
Alembic Migration
↓
PostgreSQL Schema
```

---

# Authentication Architecture

## Flow

```text
Register
↓
Password Hashing (bcrypt)
↓
Store User
↓
Login
↓
Generate JWT
↓
Store Token
↓
GET /auth/me
↓
Determine User Role
↓
Role-based Redirect
```

---

## Security Components

```text
bcrypt
Passlib
JWT
python-jose
HTTPBearer
```

---

# Authorization Architecture

## RBAC

Supported Roles:

```text
user
admin
```

### User Permissions

```text
Create Ticket
View Own Tickets
View Ticket Details
Update Own Ticket Status
```

### Admin Permissions

```text
View All Tickets
Update Any Ticket
Access Admin Dashboard
Manage System Tickets
```

---

# Frontend Architecture

## Routing

```text
/
│
├── /login
├── /register
├── /dashboard
└── /admin
```

---

## Route Protection

```text
ProtectedRoute
│
├── Dashboard
└── Authenticated Pages
```

```text
AdminRoute
│
└── Admin Dashboard
```

---

# Frontend Folder Structure

```text
frontend/src/

├── api/
│   ├── client.ts
│   ├── auth.ts
│   ├── tickets.ts
│   └── admin.ts
│
├── pages/
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Dashboard.tsx
│   └── AdminDashboard.tsx
│
├── components/
│   │
│   ├── dashboard/
│   │   ├── DashboardHeader.tsx
│   │   ├── StatsCards.tsx
│   │   ├── CreateTicketForm.tsx
│   │   ├── Filters.tsx
│   │   ├── TicketsTable.tsx
│   │   └── LogoutModal.tsx
│   │
│   └── common/
│       └── LoadingSpinner.tsx
│
├── hooks/
│   └── useTickets.ts
│
├── utils/
│   └── ticketHelpers.ts
│
├── routes/
│   ├── ProtectedRoute.tsx
│   └── AdminRoute.tsx
│
├── types/
│   ├── auth.ts
│   └── ticket.ts
│
├── App.tsx
└── main.tsx
```

---

# Component Architecture

## Dashboard Page

```text
Dashboard
│
├── DashboardHeader
├── StatsCards
├── CreateTicketForm
├── Filters
├── TicketsTable
├── LogoutModal
└── useTickets Hook
```

---

## Responsibilities

### DashboardHeader

```text
Page title
Logout button
```

### StatsCards

```text
Total Tickets
Open Tickets
In Progress Tickets
Closed Tickets
```

### CreateTicketForm

```text
Create Ticket
Priority Selection
Sorting Selection
Form Validation
```

### Filters

```text
Search
Status Filter
Priority Filter
```

### TicketsTable

```text
Table UI
Empty State
Pagination
Status Badges
Priority Badges
```

### LogoutModal

```text
Logout Confirmation
Cancel Action
Logout Action
```

### useTickets Hook

```text
Fetch Tickets
Pagination
Search
Filters
Loading State
Refresh Logic
```

---

# Backend Architecture

## Project Structure

```text
backend/

app/
├── api/
│   ├── auth.py
│   ├── tickets.py
│   ├── admin.py
│   ├── dependencies.py
│   └── admin_dependencies.py
│
├── core/
│   ├── config.py
│   └── security.py
│
├── db/
│   ├── database.py
│   └── dependencies.py
│
├── models/
│   ├── user.py
│   └── ticket.py
│
├── schemas/
│   ├── user.py
│   └── ticket.py
│
└── main.py
```

---

# Database Schema

## Users

```text
users

id
name
email
password_hash
role
created_at
updated_at
```

Relationship:

```text
One User
↓
Many Tickets
```

---

## Tickets

```text
tickets

id
title
description
status
priority
user_id
created_at
updated_at
```

---

## Ticket Status

```text
open
in_progress
closed
```

---

## Ticket Priority

```text
low
medium
high
```

---

# API Architecture

## Public Endpoints

```text
POST /auth/register
POST /auth/login

GET /health
GET /health/db
```

---

## Protected Endpoints

```text
GET   /auth/me

POST  /tickets
GET   /tickets
GET   /tickets/{id}
PATCH /tickets/{id}
```

---

## Admin Endpoints

```text
GET   /admin/test
GET   /admin/tickets
PATCH /admin/tickets/{id}
```

---

# Ticket Query Features

## Pagination

```text
GET /tickets?page=1&limit=10
```

## Search

```text
GET /tickets?search=laptop
```

## Filters

```text
GET /tickets?status=open

GET /tickets?priority=high
```

## Sorting

```text
GET /tickets?sort=created_at

GET /tickets?sort=-created_at

GET /tickets?sort=priority
```

---

# Request Lifecycle

## User Ticket Flow

```text
React Component
↓
Custom Hook
↓
Axios Request
↓
FastAPI Route
↓
JWT Validation
↓
Business Logic
↓
SQLAlchemy
↓
PostgreSQL
↓
Response
↓
React Re-render
```

---

## Admin Ticket Flow

```text
Admin Dashboard
↓
JWT Validation
↓
Role Validation
↓
Admin Endpoint
↓
Database Operation
↓
Response
↓
UI Update
```

---

# Production Architecture

## Frontend

```text
Vercel (Production)
```

---

## Backend

```text
Render (Production)
```

---

## Database

```text
Supabase PostgreSQL
```

---

```text
Users
│
▼
Vercel Frontend
(ticketflow.vercel.app)
│
▼
Render FastAPI Backend
(ticket-management-system.onrender.com)
│
▼
Supabase PostgreSQL
(Mumbai Region)
```
---

# Future Enhancements

## Frontend

```text
React Query
React Hook Form
Zod Validation
Dark Mode
Dashboard Charts
```

---

## Infrastructure

```text
Docker
Docker Compose
CI/CD
GitHub Actions
Monitoring
Centralized Logging
```

---

## Security

```text
Refresh Tokens
Rate Limiting
Audit Logs
Account Lockout
```

---

## Product Features

```text
Ticket Assignment
Email Notifications
File Attachments
Comments
Activity History
Analytics Dashboard
```

---

## Scalability

```text
Redis Caching
Background Tasks
Message Queues
Microservices Exploration
```

---

# Current Architecture Status

```text
✅ Authentication
✅ JWT Authorization
✅ Ticket Management
✅ RBAC
✅ Admin Module
✅ Search
✅ Filters
✅ Pagination
✅ Sorting
✅ React Frontend
✅ Protected Routes
✅ Admin Dashboard
✅ Reusable Components
✅ Custom Hooks
✅ Component-Based Architecture
✅ Dashboard Statistics
✅ Loading States
✅ Toast Notifications
✅ Logout Modal
✅ Backend Deployment (Render)
✅ Frontend Deployment (Vercel)
✅ Production Database (Supabase)
✅ Production Environment Variables

Current Version: v0.7.1
Architecture Maturity: Production Ready MVP
```