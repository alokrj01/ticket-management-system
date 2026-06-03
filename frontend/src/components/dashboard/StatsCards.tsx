interface Props {
  total: number;
  open: number;
  inProgress: number;
  closed: number;
}

function StatsCards({
  total,
  open,
  inProgress,
  closed,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <p className="text-gray-500">Total Tickets</p>
        <h2 className="text-4xl font-bold text-indigo-600">
          {total}
        </h2>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <p className="text-gray-500">Open</p>
        <h2 className="text-4xl font-bold text-green-600">
          {open}
        </h2>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <p className="text-gray-500">In Progress</p>
        <h2 className="text-4xl font-bold text-yellow-500">
          {inProgress}
        </h2>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <p className="text-gray-500">Closed</p>
        <h2 className="text-4xl font-bold text-red-500">
          {closed}
        </h2>
      </div>

    </div>
  );
}

export default StatsCards;