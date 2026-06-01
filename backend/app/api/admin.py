from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.dependencies import get_db
from app.models.ticket import Ticket
from app.models.user import User

from app.schemas.ticket import (
    TicketResponse,
    TicketUpdate
)

from app.api.admin_dependencies import require_admin

router = APIRouter(
    prefix="/admin",
    tags=["Admin"]
)


@router.get("/test")
def admin_test(
    current_user: User = Depends(require_admin)
):
    return {
        "message": "Admin access granted"
    }

@router.get(
    "/tickets",
    response_model=list[TicketResponse]
)
def get_all_tickets(
    db: Session = Depends(get_db),
    current_user: User = Depends(require_admin)
):
    tickets = (
        db.query(Ticket)
        .order_by(Ticket.created_at.desc())
        .all()
    )

    return tickets

@router.patch(
    "/tickets/{ticket_id}",
    response_model=TicketResponse
)
def update_any_ticket(
    ticket_id: int,
    ticket_data: TicketUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_admin)
):
    ticket = (
        db.query(Ticket)
        .filter(Ticket.id == ticket_id)
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