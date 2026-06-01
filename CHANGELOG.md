# Changelog

All notable changes to this project will be documented in this file.

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

### [0.2.0] Authentication Module 

- User registration
- Password hashing
- Login endpoint
- JWT access tokens
- Protected routes
- Current user endpoint

---

## Upcoming (0.2.0)

### Ticket CRUD APIs


### Future
- Role-Based Access Control
- Admin Dashboard APIs
- Pagination
- Search & Filters
- Deployment