
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-4xl font-bold text-sky-600 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Sorry, the page you're looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700"
      >
        Go Home
      </Link>
    </div>
  );
}
