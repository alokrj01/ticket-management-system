from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text

from app.core.config import settings
from app.db.database import engine

from app.api.auth import router as auth_router
from app.api.tickets import router as ticket_router
from app.api.admin import router as admin_router

app = FastAPI(
    title=settings.APP_NAME
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=[
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE",
        "OPTIONS",
    ],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(ticket_router)
app.include_router(admin_router)

@app.get("/")
def root():
    return {
        "message": "Ticket Management System API"
    }

@app.get("/health")
def health_check():
    return {
        "status": "ok"
    }

@app.get("/health/db")
def database_health():
  with engine.connect() as conn:
    conn.execute(text("SELECT 1"))

  return{
     "status": "connected"
  }