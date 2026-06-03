import type {
  TicketPriority,
} from "../../types/ticket";

type Props = {
  title: string;
  setTitle: React.Dispatch<
    React.SetStateAction<string>
  >;

  description: string;
  setDescription: React.Dispatch<
    React.SetStateAction<string>
  >;

  priority: TicketPriority;
  setPriority: React.Dispatch<
    React.SetStateAction<TicketPriority>
  >;

  sort: string;
  setSort: React.Dispatch<
    React.SetStateAction<string>
  >;

  creating: boolean;

  onSubmit: (
    e: React.FormEvent
  ) => Promise<void>;
};

function CreateTicketForm({
  title,
  setTitle,
  description,
  setDescription,
  priority,
  setPriority,
  sort,
  setSort,
  creating,
  onSubmit,
}: Props) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        p-8
        mb-8
        shadow-xl
        border
        border-slate-100
      "
    >
      <h2 className="text-2xl font-semibold mb-6">
        Create New Ticket
      </h2>

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Ticket Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="border p-3 rounded-xl w-full"
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="border p-3 rounded-xl"
          rows={4}
          required
        />

        <select
          value={priority}
          onChange={(e) =>
            setPriority(
              e.target.value as TicketPriority
            )
          }
          className="border p-3 rounded-xl"
        >
          <option value="low">Low</option>
          <option value="medium">
            Medium
          </option>
          <option value="high">High</option>
        </select>

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
          className="border p-3 rounded-xl"
        >
          <option value="-created_at">
            Newest First
          </option>

          <option value="created_at">
            Oldest First
          </option>

          <option value="priority">
            Priority
          </option>
        </select>

        <button
          type="submit"
          disabled={creating}
          className="
            w-full
            bg-gradient-to-r
            from-indigo-600
            to-violet-600
            text-white
            py-4
            rounded-xl
            font-semibold
            hover:scale-[1.01]
            transition
            shadow-lg
            disabled:opacity-50
          "
        >
          {creating
            ? "Creating..."
            : "Create Ticket"}
        </button>
      </form>
    </div>
  );
}

export default CreateTicketForm;