import { useEffect, useState } from "react";

import {
  getTickets,
  createTicket,
} from "../api/tickets";

import type {
  Ticket,
  TicketStatus,
  TicketPriority,
} from "../types/ticket";

function Dashboard() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [priority, setPriority] =
    useState<TicketPriority>("medium");

  const [statusFilter, setStatusFilter] =
    useState<TicketStatus | "">("");

  const [priorityFilter, setPriorityFilter] =
    useState<TicketPriority | "">("");

  const [search, setSearch] = useState("");

  const fetchTickets = async () => {
    try {
      const data = await getTickets(
        statusFilter,
        priorityFilter,
        search
      );

      setTickets(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, [statusFilter, priorityFilter, search]);

  const handleCreateTicket = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await createTicket({
        title,
        description,
        priority,
      });

      setTitle("");
      setDescription("");
      setPriority("medium");

      fetchTickets();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    
    window.location.href = "/login";
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          My Tickets
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Create Ticket Form */}
      <form
        onSubmit={handleCreateTicket}
        className="flex flex-col gap-4 mb-8"
      >
        <input
          type="text"
          placeholder="Ticket Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="border p-2 rounded"
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="border p-2 rounded"
          required
        />

        <select
          value={priority}
          onChange={(e) =>
            setPriority(
              e.target.value as TicketPriority
            )
          }
          className="border p-2 rounded"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
        >
          Create Ticket
        </button>
      </form>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search tickets..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border p-2 rounded"
        />

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(
              e.target.value as TicketStatus | ""
            )
          }
          className="border p-2 rounded"
        >
          <option value="">
            All Status
          </option>

          <option value="open">
            Open
          </option>

          <option value="in_progress">
            In Progress
          </option>

          <option value="closed">
            Closed
          </option>
        </select>

        <select
          value={priorityFilter}
          onChange={(e) =>
            setPriorityFilter(
              e.target.value as TicketPriority | ""
            )
          }
          className="border p-2 rounded"
        >
          <option value="">
            All Priorities
          </option>

          <option value="low">
            Low
          </option>

          <option value="medium">
            Medium
          </option>

          <option value="high">
            High
          </option>
        </select>
      </div>

      {/* Tickets Table */}
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">
              Title
            </th>

            <th className="border p-2">
              Status
            </th>

            <th className="border p-2">
              Priority
            </th>
          </tr>
        </thead>

        <tbody>
          {tickets.length === 0 ? (
            <tr>
              <td
                colSpan={3}
                className="border p-4 text-center"
              >
                No tickets found
              </td>
            </tr>
          ) : (
            tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="border p-2">
                  {ticket.title}
                </td>

                <td className="border p-2">
                  {ticket.status}
                </td>

                <td className="border p-2">
                  {ticket.priority}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;