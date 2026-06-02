import { HiOutlineInbox } from "react-icons/hi";
import LoadingSpinner from "../common/LoadingSpinner";

import type { Ticket } from "../../types/ticket";

import { getStatusBadge, getPriorityBadge } from "../../utils/ticketHelpers";

type Props = {
  loading: boolean;
  tickets: Ticket[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isFiltering: boolean;
};

function TicketsTable({ loading, tickets, page, setPage, isFiltering }: Props) {
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div
      className="
        bg-white
        rounded-3xl
        shadow-xl
        border
        border-slate-100
        overflow-hidden
      "
    >
      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr>
              <th className="bg-slate-50 px-6 py-4 text-left font-semibold text-slate-700">
                Title
              </th>

              <th className="bg-slate-50 px-6 py-4 text-left font-semibold text-slate-700">
                Status
              </th>

              <th className="bg-slate-50 px-6 py-4 text-left font-semibold text-slate-700">
                Priority
              </th>
            </tr>
          </thead>

          <tbody>
            {tickets.length === 0 ? (
              <tr>
                <td colSpan={3} className="py-20 text-center">
                  <div className="flex flex-col items-center">
                    <HiOutlineInbox size={72} className="text-slate-300 mb-4" />

                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {isFiltering ? "No Matching Tickets" : "No Tickets Yet"}
                    </h3>

                    <p className="text-slate-500 max-w-md">
                      {isFiltering
                        ? "Try changing your filters or search query."
                        : "Create your first ticket and start managing support requests."}
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4 border-t border-slate-100">
                    {ticket.title}
                  </td>

                  <td className="px-6 py-4 border-t border-slate-100">
                    <span
                      className={`px-4 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(
                        ticket.status,
                      )}`}
                    >
                      {ticket.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 border-t border-slate-100">
                    <span
                      className={`px-4 py-1 rounded-full text-xs font-semibold border ${getPriorityBadge(
                        ticket.priority,
                      )}`}
                    >
                      {ticket.priority}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="flex items-center justify-center gap-4 py-6">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="
              px-4
              py-2
              rounded-xl
              bg-slate-100
              hover:bg-slate-200
              disabled:opacity-50
            "
          >
            Previous
          </button>

          <span className="font-medium">Page {page}</span>

          <button
            onClick={() => setPage(page + 1)}
            className="
              px-4
              py-2
              rounded-xl
              bg-slate-100
              hover:bg-slate-200
            "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default TicketsTable;
