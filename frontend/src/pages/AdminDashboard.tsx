import { useEffect, useState } from "react";
import LoadingSpinner from "../components/common/LoadingSpinner";

import { getAllTickets, updateTicketStatus } from "../api/admin";

import type { Ticket } from "../types/ticket";

function AdminDashboard() {
  useEffect(() => {
    document.title = "Admin Dashboard | TicketFlow";
  }, []);

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTickets = async () => {
    try {
      setLoading(true);
      const data = await getAllTickets();

      setTickets(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleStatusUpdate = async (id: number, status: string) => {
    try {
      await updateTicketStatus(id, status);

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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-700";

      case "in_progress":
        return "bg-yellow-100 text-yellow-700";

      case "closed":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700";

      case "medium":
        return "bg-yellow-100 text-yellow-700";

      case "low":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const totalTickets = tickets.length;

  const openTickets = tickets.filter((t) => t.status === "open").length;

  const inProgressTickets = tickets.filter(
    (t) => t.status === "in_progress",
  ).length;

  const closedTickets = tickets.filter((t) => t.status === "closed").length;

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg shadow">
          <h3>Total Tickets</h3>
          <p className="text-3xl font-bold">{totalTickets}</p>
        </div>

        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h3>Open</h3>
          <p className="text-3xl font-bold">{openTickets}</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-lg shadow">
          <h3>In Progress</h3>
          <p className="text-3xl font-bold">{inProgressTickets}</p>
        </div>

        <div className="bg-red-100 p-4 rounded-lg shadow">
          <h3>Closed</h3>
          <p className="text-3xl font-bold">{closedTickets}</p>
        </div>
      </div>

      {/* Tickets Table */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border p-2">Title</th>

                <th className="border p-2">Status</th>

                <th className="border p-2">Priority</th>

                <th className="border p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="border p-2">{ticket.title}</td>

                  <td className="border p-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(
                        ticket.status,
                      )}`}
                    >
                      {ticket.status}
                    </span>
                  </td>

                  <td className="border p-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityBadge(
                        ticket.priority,
                      )}`}
                    >
                      {ticket.priority}
                    </span>
                  </td>

                  <td className="border p-2">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleStatusUpdate(ticket.id, "open")}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                      >
                        Open
                      </button>

                      <button
                        onClick={() =>
                          handleStatusUpdate(ticket.id, "in_progress")
                        }
                        className="bg-yellow-500 text-white px-2 py-1 rounded"
                      >
                        In Progress
                      </button>

                      <button
                        onClick={() => handleStatusUpdate(ticket.id, "closed")}
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
      )}
    </div>
  );
}

export default AdminDashboard;
