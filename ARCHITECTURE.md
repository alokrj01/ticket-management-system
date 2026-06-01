# Architecture

## Overview

Ticket Management System is a production-oriented backend application designed for IT Support and Help Desk workflows.

Current Version:

```text
v0.2.0
```

---

## System Architecture

```text
Client
│
├── Swagger UI
├── React Frontend (Planned)
│
▼

FastAPI Application
│
├── Authentication Layer
├── Business Logic Layer
├── Database Layer
│
▼

PostgreSQL (Supabase)
```

---

## Technology Stack

### Frontend (Planned)

```text
React
TypeScript
Tailwind CSS
```

Purpose:

- Dashboard UI
- Authentication UI
- Ticket Management UI
- Admin Panel

---

### Backend

```text
FastAPI
```

Responsibilities:

- Authentication
- Authorization
- Ticket Management
- API Documentation
- Request Validation

---

### Database

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
- Audit Data (Future)

---

### ORM

```text
SQLAlchemy 2.0
```

Purpose:

- Database Models
- Queries
- Relationships
- Session Management

---

### Database Migrations

```text
Alembic
```

Workflow:

```text
Models
↓
Migration
↓
Database Schema
```

---

## Authentication Architecture

### Current

```text
User Registration
↓
Password Hashing (bcrypt)
↓
Database Storage
↓
User Login
↓
JWT Access Token
↓
Protected Routes
```

### Components

```text
Passlib
bcrypt
python-jose
HTTPBearer
JWT
```

---

## Project Structure

```text
backend/

app/
├── api/
│   └── auth.py
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
│   └── user.py
│
└── main.py
```

---

## Database Schema

### Users

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

### Tickets

```text
tickets

id
title
description
status
user_id
created_at
```

---

## API Architecture

### Public Routes

```text
POST /auth/register
POST /auth/login
GET  /health/db
```

### Protected Routes

```text
GET /auth/me
```

Authentication Method:

```text
Bearer Token (JWT)
```

---

## Current Flow

```text
Register
↓
Login
↓
Receive JWT
↓
Authorize
↓
Access Protected Routes
```

---

## Deployment Architecture

### Backend

```text
Render (Planned)
```

### Frontend

```text
Vercel (Planned)
```

### Database

```text
Supabase PostgreSQL
```

---

## Upcoming Architecture Changes (v0.3.0)

### Ticket Module

```text
POST   /tickets
GET    /tickets
GET    /tickets/{id}
PATCH  /tickets/{id}
```

Features:

- Ticket Creation
- Ticket Listing
- Ticket Status Updates
- Priority Management

---

## Future Enhancements

### Authorization

```text
User
Admin
```

Role-Based Access Control (RBAC)

### Infrastructure

```text
Docker
CI/CD
Logging
Monitoring
Caching
```

### Product Features

```text
Ticket Assignment
Email Notifications
File Attachments
Search
Filters
Pagination
Analytics Dashboard
```