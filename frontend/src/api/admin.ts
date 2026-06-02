import { api } from "./client";

export const getAllTickets = async () => {
  const response = await api.get(
    "/admin/tickets"
  );

  return response.data;
};

export const updateTicketStatus = async (
  id: number,
  status: string
) => {
  const response = await api.patch(
    `/admin/tickets/${id}`,
    { status }
  );

  return response.data;
};