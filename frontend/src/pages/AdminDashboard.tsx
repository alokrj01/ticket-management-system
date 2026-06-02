import { useEffect, useState } from "react";

import {
  getAllTickets,
  updateTicketStatus,
} from "../api/admin";

import type { Ticket } from "../types/ticket";

function AdminDashboard() {
  const [tickets, setTickets] =
    useState<Ticket[]>([]);

  const fetchTickets = async () => {
    try {
      const data =
        await getAllTickets();

      setTickets(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleStatusUpdate = async (
    id: number,
    status: string
  ) => {
    try {
      await updateTicketStatus(
        id,
        status
      );

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
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

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

            <th className="border p-2">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {tickets.map((ticket) => (
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

              <td className="border p-2">
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      handleStatusUpdate(
                        ticket.id,
                        "open"
                      )
                    }
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Open
                  </button>

                  <button
                    onClick={() =>
                      handleStatusUpdate(
                        ticket.id,
                        "in_progress"
                      )
                    }
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    In Progress
                  </button>

                  <button
                    onClick={() =>
                      handleStatusUpdate(
                        ticket.id,
                        "closed"
                      )
                    }
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Closed
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;