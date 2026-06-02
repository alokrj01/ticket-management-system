export type TicketStatus =
  | "open"
  | "in_progress"
  | "closed";

export type TicketPriority =
  | "low"
  | "medium"
  | "high";


export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  created_at: string;
}