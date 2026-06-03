interface Props {
  onLogout: () => void;
}

function DashboardHeader({
  onLogout,
}: Props) {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 rounded-3xl p-8 mb-8 text-white shadow-xl">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            My Tickets
          </h1>

          <p className="text-indigo-100">
            Manage and track all your support requests
          </p>
        </div>

        <button
          onClick={onLogout}
          className="bg-white/20 px-5 py-3 rounded-xl"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default DashboardHeader;