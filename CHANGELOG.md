# Changelog

All notable changes to this project will be documented in this file.

---

## [0.5.0] - 2026-06-01

### Added

#### API Quality Improvements

- Pagination support (`page`, `limit`)
- Status filtering (`?status=open`)
- Priority filtering (`?priority=high`)
- Search support (`?search=laptop`)
- Sorting support (`?sort=created_at`)
- Descending sorting (`?sort=-created_at`)
- Combined query support
- Query parameter validation

### Filtering

- Filter tickets by status
- Filter tickets by priority
- Search tickets by title
- Combine multiple filters in a single request

### Pagination

- Page-based pagination
- Configurable page size
- Offset-based query optimization

### Sorting

- Sort by creation date (ascending)
- Sort by creation date (descending)
- Sort by priority

### Verified

- Pagination working
- Status filtering working
- Priority filtering working
- Search functionality working
- Sorting functionality working
- Combined filters working
- Query parameters validated correctly

---

## [0.4.0] - 2026-06-01

### Added

#### Role-Based Access Control (RBAC)

- Admin role dependency (`require_admin`)
- Admin-only route protection
- Admin authentication and authorization
- Role-based endpoint access control

#### Admin Module

- Admin test endpoint (`GET /admin/test`)
- Get all tickets API (`GET /admin/tickets`)
- Update any ticket API (`PATCH /admin/tickets/{id}`)
- System-wide ticket management

### Security

- Admin role validation
- JWT-based role authorization
- Protected admin routes
- 403 Forbidden handling

### Verified

- Admin users can access admin endpoints
- Regular users cannot access admin endpoints
- Admin can view all tickets
- Admin can update any ticket
- Proper authorization checks working
- 403 Forbidden responses working

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

## Upcoming [0.6.0]

### Frontend Integration

- React Setup
- TypeScript Setup
- Authentication Pages
- User Dashboard
- Admin Dashboard
- API Integration

### Future

- Docker Support
- CI/CD Pipeline
- Email Notifications
- File Attachments
- Analytics Dashboard
- Audit Logs