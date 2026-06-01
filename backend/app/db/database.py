from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import sessionmaker

from app.core.config import settings

#DATABASE_URL = "postgresql://postgres:P9e81VYoaeQHxEQi@db.mskmbvoskmkumjpwxicl.supabase.co:5432/postgres"

engine = create_engine(
  settings.DATABASE_URL,
  pool_pre_ping=True
  )

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

class Base(DeclarativeBase):
  pass