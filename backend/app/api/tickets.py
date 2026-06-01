from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.dependencies import get_db
from app.models.ticket import Ticket
from app.models.user import User

#from typing import Optional
from fastapi import Query

from app.schemas.ticket import (
    TicketCreate,
    TicketUpdate,
    TicketResponse,
    TicketStatus,
    TicketPriority
)

from app.api.dependencies import (
    get_current_user
)

router = APIRouter(
    prefix="/tickets",
    tags=["Tickets"]
)

@router.post(
    "",
    response_model=TicketResponse,
    status_code=201
)
def create_ticket(
    ticket_data: TicketCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    ticket = Ticket(
        title=ticket_data.title,
        description=ticket_data.description,
        priority=ticket_data.priority,
        user_id=current_user.id
    )

    db.add(ticket)
    db.commit()
    db.refresh(ticket)

    return ticket


@router.get(
    "",
    response_model=list[TicketResponse]
)
def get_tickets(
    page: int = Query(1, ge=1),
    limit: int = Query(10, ge=1, le=100),

    status: TicketStatus | None = None,
    priority: TicketPriority | None = None,
    search: str | None = None,

    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    
    query = db.query(Ticket).filter(
        Ticket.user_id == current_user.id
        )
    
    if status:
        query = query.filter(
            Ticket.status == status
        )

    if priority:
        query = query.filter(
            Ticket.priority == priority
        )

    if search:
        query = query.filter(
            Ticket.title.ilike(f"%{search}%")
        )

    offset = (page - 1) * limit

    tickets = (
        query
        .order_by(Ticket.created_at.desc())
        .offset(offset)
        .limit(limit)
        .all()
    )

    return tickets


@router.get(
    "/{ticket_id}",
    response_model=TicketResponse
)
def get_ticket(
    ticket_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    ticket = (
        db.query(Ticket)
        .filter(
            Ticket.id == ticket_id,
            Ticket.user_id == current_user.id
        )
        .first()
    )

    if not ticket:
        raise HTTPException(
            status_code=404,
            detail="Ticket not found"
        )

    return ticket


@router.patch(
    "/{ticket_id}",
    response_model=TicketResponse
)
def update_ticket(
    ticket_id: int,
    ticket_data: TicketUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    ticket = (
        db.query(Ticket)
        .filter(
            Ticket.id == ticket_id,
            Ticket.user_id == current_user.id
        )
        .first()
    )

    if not ticket:
        raise HTTPException(
            status_code=404,
            detail="Ticket not found"
        )

    ticket.status = ticket_data.status

    db.commit()
    db.refresh(ticket)

    return ticket