# Architecture

## Overview

Ticket Management System is a full-stack, production-oriented application designed for IT Support and Help Desk workflows.

Current Version:

```text
v0.6.0
```

---

## High-Level Architecture

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
├── API Validation Layer
│
▼

PostgreSQL (Supabase)
```

---

## System Components

```text
Frontend
│
├── Login
├── Register
├── User Dashboard
├── Admin Dashboard
├── Protected Routes
├── Ticket Search
├── Ticket Filters
│
▼

Backend
│
├── Auth Module
├── Ticket Module
├── Admin Module
├── JWT Security
├── RBAC
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
```

Responsibilities:

- Authentication UI
- User Dashboard
- Admin Dashboard
- Ticket Management
- Search & Filters
- Protected Routing

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
Store Token (Frontend)
↓
GET /auth/me
↓
Determine User Role
↓
Redirect User
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

## Role-Based Access Control (RBAC)

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

## Frontend Structure

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

### Relationship

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

GET  /health
GET  /health/db
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

---

## Search

```text
GET /tickets?search=laptop
```

---

## Filters

```text
GET /tickets?status=open

GET /tickets?priority=high
```

---

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
React Frontend
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
React UI Update
```

---

## Admin Ticket Flow

```text
Admin Login
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
Admin Dashboard
```

---

# Deployment Architecture

## Frontend

```text
Vercel (Planned)
```

---

## Backend

```text
Render (Planned)
```

---

## Database

```text
Supabase PostgreSQL
```

---

# Future Enhancements

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

Current Version: v0.6.0
```