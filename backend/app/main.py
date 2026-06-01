from fastapi import FastAPI
from sqlalchemy import text
from app.core.config import settings
from app.db.database import engine

from app.api.auth import router as auth_router


app = FastAPI(
  title=settings.APP_NAME
)

app.include_router(auth_router)


@app.get("/health/db")
def database_health():
  with engine.connect() as conn:
    conn.execute(text("SELECT 1"))

  return{
     "status": "connected"
  }