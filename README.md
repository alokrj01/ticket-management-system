# Ticket Management System

A production-oriented full-stack Ticket Management System built with FastAPI, PostgreSQL, SQLAlchemy, Alembic, React, TypeScript, and JWT Authentication.

---

## Live Demo

Frontend:
https://your-vercel-url.vercel.app

Backend API:
https://ticket-management-system-vear.onrender.com

API Docs:
https://ticket-management-system-vear.onrender.com/docs

---

## Application Preview

![TicketFlow Landing Page](https://github.com/alokrj01/ticket-management-system/blob/main/frontend/public/screenshots/Screenshot%20from%202026-06-03%2010-26-47.png)

---

# Project Status

🚀 Feature Deployed (MVP Complete)

Current Version:

```text
v0.7.1
```

Completed:

- FastAPI Setup
- PostgreSQL (Supabase)
- SQLAlchemy 2.0
- Alembic Migrations
- JWT Authentication
- User Registration
- Login API
- Protected Routes
- Ticket Management Module
- Role-Based Access Control (RBAC)
- Admin Module
- Pagination
- Search
- Filters
- Sorting
- React Frontend
- Login & Register Pages
- User Dashboard
- Admin Dashboard
- Protected Routes
- Admin Routes
- Frontend-Backend Integration
- Dashboard Statistics Cards
- Loading States
- Reusable Loading Spinner
- Toast Notifications
- Empty State UI
- Modern Landing Page
- Confirm Logout Modal
- Dashboard Component Architecture
- Custom Document Titles
- Responsive Dashboard UI
- Production deployment

Future Progress:

- UI/UX Improvements

---

# Features

## Authentication ✅

- User Registration
- User Login
- Password Hashing (bcrypt)
- JWT Authentication
- Protected Endpoints
- Current User Endpoint
- Frontend Authentication
- Role-based Redirects

---

## Ticket Management ✅

- Create Ticket
- View User Tickets
- View Ticket Details
- Update Ticket Status
- Ticket Priority Management
- Ticket Search
- Status Filtering
- Priority Filtering
- Pagination
- Sorting
- Ownership Validation

---

## Admin Features ✅

- View All Tickets
- Manage All Tickets
- Update Any Ticket Status
- Role-Based Access Control
- Admin-only Routes
- Admin Dashboard
- Admin Ticket Management

---

## Frontend Features ✅

- React + TypeScript + Vite
- Tailwind CSS
- Axios API Client
- React Router DOM

### Authentication

- Login Page
- Register Page
- JWT Authentication
- Protected Routes
- Admin Route Protection
- Role-based Redirects

### User Dashboard

- Create Ticket
- View Tickets
- Search Tickets
- Status Filtering
- Priority Filtering
- Pagination
- Ticket Statistics
- Empty State UI
- Loading States
- Logout Confirmation Modal

### Admin Dashboard

- View All Tickets
- Update Ticket Status
- Dashboard Statistics
- Loading States
- Logout Functionality

### UI / UX

- Modern Landing Page
- Responsive Design
- Toast Notifications
- Reusable Components
- Component-based Architecture

---

## API Quality Improvements ✅

- Pagination
- Status Filtering
- Priority Filtering
- Ticket Search
- Sorting
- Combined Query Support
- Query Validation

---

# Tech Stack

## Frontend

```text
React
TypeScript
Vite
Tailwind CSS
Axios
React Router DOM
```

---

## Backend

```text
FastAPI
SQLAlchemy 2.0
Alembic
Pydantic v2
python-jose (JWT)
Passlib + bcrypt
```

---

## Database

```text
PostgreSQL
Supabase
```

---

# Project Structure

```text
ticket-management-system/
├── backend/                        # FastAPI
│   ├── alembic/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth.py
│   │   │   ├── tickets.py
│   │   │   ├── admin.py
│   │   │   ├── dependencies.py
│   │   │   └── admin_dependencies.py
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   └── security.py
│   │   ├── db/
│   │   │   ├── database.py
│   │   │   └── dependencies.py
│   │   ├── models/
│   │   │   ├── user.py
│   │   │   └── ticket.py
│   │   ├── schemas/
│   │   │   ├── user.py
│   │   │   └── ticket.py
│   │   └── main.py
│   ├── .env.example
│   ├── requirements.txt
│   └── alembic.ini
│
├── frontend/                       # React + Vite
│   └── src/
│       ├── api/
│       ├── components/
│       │   ├── common/
│       │   │   └── LoadingSpinner.tsx
│       │   └── dashboard/
│       │       ├── DashboardHeader.tsx
│       │       ├── StatsCards.tsx
│       │       ├── CreateTicketForm.tsx
│       │       ├── Filters.tsx
│       │       ├── TicketsTable.tsx
│       │       └── LogoutModal.tsx
│       ├── hooks/
│       │   └── useTickets.ts
│       ├── utils/
│       │   └── ticketHelpers.ts
│       ├── pages/
│       ├── routes/
│       ├── types/
│       ├── App.tsx
│       └── main.tsx
│
├── PROJECT_STATUS.md
├── ARCHITECTURE.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

# API Endpoints

## Authentication

### Register User

```http
POST /auth/register
```

### Login User

```http
POST /auth/login
```

### Current User

```http
GET /auth/me
```

---

## Ticket Management

### Create Ticket

```http
POST /tickets
```

### Get User Tickets

```http
GET /tickets
```

### Get Ticket Details

```http
GET /tickets/{id}
```

### Update Ticket Status

```http
PATCH /tickets/{id}
```

---

## Admin

### Admin Test

```http
GET /admin/test
```

### Get All Tickets

```http
GET /admin/tickets
```

### Update Any Ticket

```http
PATCH /admin/tickets/{id}
```

---

## System

### Health Check

```http
GET /health
```

### Database Health

```http
GET /health/db
```

---

# API Features

## Pagination

```http
GET /tickets?page=1&limit=10
```

---

## Status Filter

```http
GET /tickets?status=open
```

---

## Priority Filter

```http
GET /tickets?priority=high
```

---

## Search

```http
GET /tickets?search=laptop
```

---

## Sorting

```http
GET /tickets?sort=created_at

GET /tickets?sort=-created_at

GET /tickets?sort=priority
```

---

## Combined Queries

```http
GET /tickets?status=open&priority=high&page=1&limit=5

GET /tickets?search=laptop&sort=-created_at
```

---

# Authentication Flow

```text
Register
↓
Login
↓
Receive JWT Token
↓
Store Token
↓
GET /auth/me
↓
Determine User Role
↓
Redirect User
↓
Access Protected Endpoints
```

---

# Frontend Flow

```text
Login
↓
Dashboard
↓
Create Ticket
↓
View Tickets
↓
Search Tickets
↓
Filter Tickets
↓
Logout
```

---

# Admin Flow

```text
Admin Login
↓
Admin Dashboard
↓
View All Tickets
↓
Update Ticket Status
↓
Manage System Tickets
```

---

# Local Development

## Clone Repository

```bash
git clone <repository-url>
cd ticket-management-system
```

---

## Backend Setup

### Create Virtual Environment

```bash
cd backend

python -m venv myenv
```

### Activate Virtual Environment

Linux/Mac:

```bash
source myenv/bin/activate
```

Windows:

```bash
myenv\Scripts\activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Configure Environment

Create:

```text
backend/.env
```

Example:

```env
APP_NAME=Ticket Management System API
APP_ENV=development
DEBUG=true

DATABASE_URL=postgresql://...

SECRET_KEY=your-secret-key

ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

BACKEND_CORS_ORIGINS=["http://localhost:5173"]
```

### Run Backend

```bash
uvicorn app.main:app --reload
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# API Documentation

## Swagger UI

```text
http://127.0.0.1:8000/docs
```

---

## ReDoc

```text
http://127.0.0.1:8000/redoc
```

---

# Database Workflow

```text
SQLAlchemy Models
↓
Alembic Migration
↓
PostgreSQL Database
```

### Create Migration

```bash
alembic revision --autogenerate -m "migration_name"
```

### Apply Migration

```bash
alembic upgrade head
```

---

# Development Roadmap

## v0.1.0 ✅

- Foundation Setup

## v0.2.0 ✅

- Authentication Module

## v0.3.0 ✅

- Ticket Management Module

## v0.4.0 ✅

- RBAC
- Admin Module

## v0.5.0 ✅

- Pagination
- Search
- Filters
- Sorting

## v0.6.0 ✅

- React Frontend
- Authentication UI
- User Dashboard
- Admin Dashboard
- Frontend-Backend Integration

## v0.7.0 ✅

- Loading States
- Toast Notifications
- Better Error Handling
- Dashboard Statistics
- UI Improvements
- Dashboard Statistics
- Loading States
- Toast Notifications
- Logout Confirmation Modal
- Empty States
- Responsive UI Improvements
- Component Refactoring

## v0.8.0 🚧

- React Query
- Form Validation
- Dark Mode
- Improved Error Handling
- Dashboard Charts

## v1.0.0 🎯

- Docker
- CI/CD
- Monitoring
- Logging
- Production Release

---

# Deployment

## Frontend
```text
Vercel
```
## Backend
```text
Render
```
## Database
```text
Supabase PostgreSQL
```

# Current Progress

```text
Backend Development      ██████████ 100%
Authentication           ██████████ 100%
Ticket Management        ██████████ 100%
RBAC                     ██████████ 100%
Admin Module             ██████████ 100%
Frontend Integration     ██████████ 100%
UI/UX Improvements       ████████░░ 80%
Code Refactoring         ███████░░░ 70%
Backend Deployment       ██████████ 100%
Frontend Deployment      ██████████ 100%

Overall Progress         ██████████ 95%
```

---

# Author

```text
Alok Ranjan 
```

---

# License

This project is licensed under the MIT License. See the LICENSE file for details.