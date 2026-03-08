export default function BlogLoading() {
  return (
    <div className="min-h-[50vh] animate-pulse">
      <div className="h-64 bg-gray-200" />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-6" />
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-gray-200 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
