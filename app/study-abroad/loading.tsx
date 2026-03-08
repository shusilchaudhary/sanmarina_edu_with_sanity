export default function StudyAbroadLoading() {
  return (
    <div className="min-h-[60vh] animate-pulse">
      <div className="h-[400px] bg-gray-200" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-6" />
        <div className="h-4 bg-gray-200 rounded w-full mb-2" />
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-4/6 mb-8" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-48 bg-gray-200 rounded-xl" />
          <div className="h-48 bg-gray-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
