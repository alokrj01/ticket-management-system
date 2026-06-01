# Changelog

All notable changes to this project will be documented in this file.

---

## [0.3.0] - 2026-06-01

### Added

#### Ticket Management Module

- Ticket schemas
- Ticket status validation using enums
- Ticket priority validation using enums
- Create Ticket API (`POST /tickets`)
- Get User Tickets API (`GET /tickets`)
- Get Ticket Details API (`GET /tickets/{id}`)
- Update Ticket Status API (`PATCH /tickets/{id}`)
- Ticket ownership validation
- Protected ticket endpoints
- Ticket priority support
- Automatic ticket-user association

### Validation

- Ticket status enum validation
- Ticket priority enum validation
- Ticket existence validation
- Ticket ownership authorization

### Error Handling

- 404 Ticket Not Found handling
- Unauthorized access prevention
- Invalid status validation

### Verified

- Ticket creation working
- Ticket listing working
- Ticket details retrieval working
- Ticket status updates working
- Ownership validation working
- Status validation working
- 404 handling working

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

## Upcoming [0.4.0]

### Role-Based Access Control (RBAC)

- Admin role dependency
- Admin-only routes
- View all tickets
- Update any ticket
- Admin ticket management

### Future

- Search & Filters
- Pagination
- Frontend Integration
- Docker Support
- CI/CD Pipeline
- Email Notifications
- File Attachments
- Analytics Dashboard