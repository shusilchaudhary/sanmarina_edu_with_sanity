export default function ScholarshipsLoading() {
  return (
    <div className="min-h-[50vh] animate-pulse">
      <div className="h-64 bg-gray-200" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-8" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-48 bg-gray-200 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
