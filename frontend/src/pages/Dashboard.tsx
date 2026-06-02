import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { createTicket } from "../api/tickets";

import type { TicketPriority } from "../types/ticket";

import { useTickets } from "../hooks/useTickets";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";
import CreateTicketForm from "../components/dashboard/CreateTicketForm";
import Filters from "../components/dashboard/Filters";
import TicketsTable from "../components/dashboard/TicketsTable";
import LogoutModal from "../components/dashboard/LogoutModal";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Dashboard | TicketFlow";
  }, []);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [creating, setCreating] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [priority, setPriority] =
    useState<TicketPriority>("medium");

  const [sort, setSort] =
    useState("-created_at");

  const {
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
  } = useTickets(sort);

  const handleCreateTicket = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setError("");
      setSuccess("");

      setCreating(true);

      const toastId =
        toast.loading("Creating ticket...");

      await createTicket({
        title,
        description,
        priority,
      });

      setTitle("");
      setDescription("");
      setPriority("medium");

      await fetchTickets();

      toast.success(
        "Ticket created successfully",
        {
          id: toastId,
        }
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to create ticket"
      );
    } finally {
      setCreating(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    toast.success(
      "Logged out successfully"
    );

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const totalTickets = tickets.length;

  const openTickets = tickets.filter(
    (ticket) =>
      ticket.status === "open"
  ).length;

  const inProgressTickets =
    tickets.filter(
      (ticket) =>
        ticket.status ===
        "in_progress"
    ).length;

  const closedTickets =
    tickets.filter(
      (ticket) =>
        ticket.status === "closed"
    ).length;

  const isFiltering =
    search ||
    statusFilter ||
    priorityFilter;

  return (
    <div className="min-h-screen bg-slate-50 max-w-7xl mx-auto p-6">

      {success && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
          {success}
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}

      <DashboardHeader
        onLogout={() =>
          setShowLogoutModal(true)
        }
      />

      <StatsCards
        total={totalTickets}
        open={openTickets}
        inProgress={
          inProgressTickets
        }
        closed={closedTickets}
      />

      <CreateTicketForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={
          setDescription
        }
        priority={priority}
        setPriority={setPriority}
        sort={sort}
        setSort={setSort}
        creating={creating}
        onSubmit={
          handleCreateTicket
        }
      />

      <Filters
        search={search}
        setSearch={setSearch}
        statusFilter={
          statusFilter
        }
        setStatusFilter={
          setStatusFilter
        }
        priorityFilter={
          priorityFilter
        }
        setPriorityFilter={
          setPriorityFilter
        }
      />

      <TicketsTable
        loading={loading}
        tickets={tickets}
        page={page}
        setPage={setPage}
        isFiltering={
          !!isFiltering
        }
      />

      <LogoutModal
        open={showLogoutModal}
        onClose={() =>
          setShowLogoutModal(false)
        }
        onConfirm={handleLogout}
      />
    </div>
  );
}

export default Dashboard;