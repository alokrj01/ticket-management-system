from datetime import datetime
from enum import Enum
from pydantic import BaseModel

class TicketStatus(str, Enum):
    open = "open"
    in_progress = "in_progress"
    closed = "closed"

class TicketPriority(str, Enum):
    low = "low"
    medium = "medium"
    high = "high"

class TicketCreate(BaseModel):
    title: str
    description: str
    priority: TicketPriority = TicketPriority.medium


class TicketUpdate(BaseModel):
    status: TicketStatus


class TicketResponse(BaseModel):
    id: int
    title: str
    description: str
    status: TicketStatus
    priority: TicketPriority
    user_id: int
    created_at: datetime

    model_config = {
        "from_attributes": True
    }