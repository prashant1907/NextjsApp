"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Error in profile page:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
      <p className="text-gray-700 mb-6">{error.message || "Failed to load profile."}</p>
      <button
        onClick={() => reset()}
        className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}
