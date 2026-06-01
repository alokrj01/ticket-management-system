# Ticket Management System

A production-oriented Ticket Management System built with FastAPI, PostgreSQL, SQLAlchemy, Alembic, and JWT Authentication.

---

## Project Status

🚧 Currently in active development

Current Version:

```text
v0.2.0
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

In Progress:

- Ticket Management Module

---

## Features

### Authentication

- User Registration
- Login
- Password Hashing (bcrypt)
- JWT Authentication
- Protected Endpoints
- Current User Endpoint

### Ticket Management (Upcoming)

- Create Ticket
- View Tickets
- Ticket Details
- Update Ticket Status
- Priority Management

### Admin Features (Upcoming)

- View All Tickets
- Assign Tickets
- Update Ticket Status
- User Management

---

## Tech Stack

### Backend

- FastAPI
- SQLAlchemy 2.0
- PostgreSQL
- Alembic
- Pydantic v2
- JWT
- Passlib

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
│   │   ├── core/
│   │   ├── db/
│   │   ├── models/
│   │   ├── schemas/
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

#### Database Health

```http
GET /health/db
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

Models are managed using:

```text
SQLAlchemy
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

### v0.2.0

- Authentication Module ✅

### v0.3.0

- Ticket CRUD APIs
- Ticket Status Management
- Priority Levels

### v0.4.0

- Role-Based Access Control
- Admin Ticket Dashboard

### v0.5.0

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