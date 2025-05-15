export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen gap-3">
      <div className="h-6 w-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600">Loading product details...</p>
    </div>
  );
}
