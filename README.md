# Ticket Management System

A production-oriented Ticket Management System built with FastAPI, PostgreSQL, SQLAlchemy, Alembic, and JWT Authentication.

---

## Project Status

🚧 Currently in active development

Current Version:

```text
v0.3.0
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

In Progress:

- Role-Based Access Control (RBAC)

---

## Features

### Authentication ✅

- User Registration
- Login
- Password Hashing (bcrypt)
- JWT Authentication
- Protected Endpoints
- Current User Endpoint

### Ticket Management ✅

- Create Ticket
- View User Tickets
- View Ticket Details
- Update Ticket Status
- Priority Management
- Status Validation
- Ownership Validation

### Admin Features (Upcoming)

- View All Tickets
- Manage All Tickets
- Update Any Ticket Status
- Role-Based Access Control

---

## Tech Stack

### Backend

- FastAPI
- SQLAlchemy 2.0
- PostgreSQL
- Alembic
- Pydantic v2
- JWT (python-jose)
- Passlib + bcrypt

### Database

- PostgreSQL
- Supabase

### Frontend (Planned)

- React
- TypeScript
- Tailwind CSS

---

## Project Structure

```text
ticket-management-system/

├── backend/
│   ├── alembic/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth.py
│   │   │   └── tickets.py
│   │   │
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   └── security.py
│   │   │
│   │   ├── db/
│   │   │   ├── database.py
│   │   │   └── dependencies.py
│   │   │
│   │   ├── models/
│   │   │   ├── user.py
│   │   │   └── ticket.py
│   │   │
│   │   ├── schemas/
│   │   │   ├── user.py
│   │   │   └── ticket.py
│   │   │
│   │   └── main.py
│   │
│   ├── .env.example
│   ├── alembic.ini
│   └── requirements.txt
│
├── frontend/
├── docs/
│
├── PROJECT_STATUS.md
├── ARCHITECTURE.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## API Endpoints

### Authentication

#### Register User

```http
POST /auth/register
```

#### Login

```http
POST /auth/login
```

#### Current User

```http
GET /auth/me
```

---

### Ticket Management

#### Create Ticket

```http
POST /tickets
```

#### Get User Tickets

```http
GET /tickets
```

#### Get Ticket Details

```http
GET /tickets/{id}
```

#### Update Ticket Status

```http
PATCH /tickets/{id}
```

---

### System

#### Database Health

```http
GET /health/db
```

---

## Authentication Flow

```text
Register
↓
Login
↓
Receive JWT Token
↓
Authorize Requests
↓
Access Protected Endpoints
```

---

## Local Development

### Clone Repository

```bash
git clone <repository-url>
cd ticket-management-system
```

### Create Virtual Environment

```bash
cd backend

python -m venv myenv

source myenv/bin/activate
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
```

### Run Application

```bash
uvicorn app.main:app --reload
```

---

## API Documentation

Swagger UI:

```text
http://127.0.0.1:8000/docs
```

ReDoc:

```text
http://127.0.0.1:8000/redoc
```

---

## Database Workflow

```text
SQLAlchemy Models
↓
Alembic Migration
↓
PostgreSQL
```

Create Migration:

```bash
alembic revision --autogenerate -m "migration_name"
```

Apply Migration:

```bash
alembic upgrade head
```

---

## Development Roadmap

### v0.1.0 ✅

- Foundation Setup

### v0.2.0 ✅

- Authentication Module

### v0.3.0 ✅

- Ticket Management Module

### v0.4.0 ⏳

- Role-Based Access Control
- Admin Ticket Management

### v0.5.0

- Search & Filters
- Pagination
- Improved API Responses

### v0.6.0

- Frontend Integration

### v1.0.0

- Production Deployment
- Docker
- CI/CD
- Monitoring
- Logging

---

## Author

Alok Ranjan

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.