export default function GlobalLoading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center" aria-label="Loading">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-3 border-[#001F3F] border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-gray-500 font-medium">Loading...</p>
      </div>
    </div>
  );
}
