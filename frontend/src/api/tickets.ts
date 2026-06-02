import { api } from "./client";

export const getTickets = async (
  status?: string,
  priority?: string,
  search?: string,
  sort?: string,
  page?: number
) => {
  const params: Record<string, string> = {};

  if (status) params.status = status;
  if (priority) params.priority = priority;
  if (search) params.search = search;
  if (sort) params.sort = sort;
  if (page) params.page = String(page);

  const response = await api.get("/tickets", {
    params,
  });

  return response.data;
};

export const createTicket = async (data: {
  title: string;
  description: string;
  priority: string;
}) => {
  const response = await api.post(
    "/tickets",
    data
  );

  return response.data;
};