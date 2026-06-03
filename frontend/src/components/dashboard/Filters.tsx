import type {
  TicketStatus,
  TicketPriority,
} from "../../types/ticket";

type FiltersProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  statusFilter: TicketStatus | "";
  setStatusFilter: React.Dispatch<
    React.SetStateAction<TicketStatus | "">
  >;

  priorityFilter: TicketPriority | "";
  setPriorityFilter: React.Dispatch<
    React.SetStateAction<TicketPriority | "">
  >;
};

function Filters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
}: FiltersProps) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-lg
        p-6
        mb-8
        border
        border-slate-100
      "
    >
      <h3 className="text-lg font-semibold mb-4">
        Filters
      </h3>

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search tickets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-xl"
        />

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(
              e.target.value as TicketStatus | ""
            )
          }
          className="border p-3 rounded-xl"
        >
          <option value="">All Status</option>
          <option value="open">Open</option>
          <option value="in_progress">
            In Progress
          </option>
          <option value="closed">Closed</option>
        </select>

        <select
          value={priorityFilter}
          onChange={(e) =>
            setPriorityFilter(
              e.target.value as TicketPriority | ""
            )
          }
          className="border p-3 rounded-xl"
        >
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;