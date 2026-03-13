export default function ServicesLoading() {
  return (
    <div className="min-h-[50vh] animate-pulse">
      <div className="h-64 bg-gray-200" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-8" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-40 bg-gray-200 rounded-xl" />
          <div className="h-40 bg-gray-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
