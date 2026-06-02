function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center py-12">

      <div
        className="
        w-12
        h-12
        border-4
        border-indigo-200
        border-t-indigo-600
        rounded-full
        animate-spin
        mb-4
        "
      />

      <p className="text-slate-500">
        Loading...
      </p>

    </div>
  );
}

export default LoadingSpinner;