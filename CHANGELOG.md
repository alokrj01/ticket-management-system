# Changelog

All notable changes to this project will be documented in this file.

---

## [0.2.0] - 2026-06-01

### Added

#### Authentication Module

- User registration endpoint (`POST /auth/register`)
- User login endpoint (`POST /auth/login`)
- Password hashing using bcrypt
- Password verification
- JWT access token generation
- JWT token validation
- Protected route support
- Current user endpoint (`GET /auth/me`)
- HTTPBearer authentication
- UserCreate schema
- UserResponse schema
- UserLogin schema
- Token schema
- Security module
- Authentication router

### Security

- Secure password storage using bcrypt
- JWT-based authentication
- Duplicate email validation
- Protected endpoint authorization

### Verified

- User registration working
- User login working
- JWT token generation working
- JWT authorization working
- Protected routes working
- Current authenticated user retrieval working

---

## [0.1.0] - 2026-06-01

### Added

#### Project Foundation

- Initialized Git repository
- Created production-oriented project structure
- Added project documentation files:
  - README.md
  - PROJECT_STATUS.md
  - ARCHITECTURE.md
  - CHANGELOG.md
- Added VS Code workspace configuration
- Added .editorconfig
- Added .gitignore
- Added .env.example

#### Backend Setup

- Initialized FastAPI application
- Added application configuration management using pydantic-settings
- Added environment variable support
- Added health check endpoint

#### Database

- Integrated PostgreSQL via Supabase
- Configured SQLAlchemy 2.0
- Added database engine and session management
- Added database dependency injection

#### Migrations

- Initialized Alembic
- Configured Alembic with SQLAlchemy metadata
- Generated first migration
- Applied initial migration successfully

#### Models

- Added User model
- Added Ticket model

### Database Schema

#### users

- id
- name
- email
- password_hash
- role
- created_at
- updated_at

#### tickets

- id
- title
- description
- status
- user_id
- created_at

### Verified

- FastAPI running successfully
- Supabase connection successful
- SQLAlchemy connection successful
- Alembic migrations working
- Tables created successfully

---

## Upcoming [0.3.0]

### Ticket Management Module

- Create Ticket API
- Get User Tickets API
- Get Ticket Details API
- Update Ticket Status API
- Ticket Priority Support

### Future

- Role-Based Access Control
- Admin Dashboard APIs
- Pagination
- Search & Filters
- Frontend Integration
- Deployment
- Docker Support
- CI/CD Pipeline