interface LogoutModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

function LogoutModal({
  open,
  onClose,
  onConfirm,
}: LogoutModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">
        <h2 className="text-2xl font-bold mb-3">
          Confirm Logout
        </h2>

        <p className="text-slate-600 mb-6">
          Are you sure you want to logout?
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl border"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-xl bg-red-500 text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;