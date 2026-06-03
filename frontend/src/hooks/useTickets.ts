import { useEffect, useState } from "react";
import { getTickets } from "../api/tickets";

import type {
  Ticket,
  TicketStatus,
  TicketPriority,
} from "../types/ticket";

export function useTickets(sort: string) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState<TicketStatus | "">("");

  const [priorityFilter, setPriorityFilter] =
    useState<TicketPriority | "">("");

  const fetchTickets = async () => {
    try {
      setLoading(true);

      const data = await getTickets(
        statusFilter,
        priorityFilter,
        search,
        sort,
        page
      );

      setTickets(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, [
    statusFilter,
    priorityFilter,
    search,
    sort,
    page,
  ]);

  return {
    tickets,
    loading,
    page,
    setPage,
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    priorityFilter,
    setPriorityFilter,
    fetchTickets,
  };
}