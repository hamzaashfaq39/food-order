"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
      <h2 className="mb-6 text-3xl font-semibold text-gray-700">
        Page Not Found
      </h2>
      <p className="max-w-md mb-8 text-gray-600">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 rounded border border-gray-300 transition-colors hover:bg-gray-50"
        >
          Go Back
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 text-white bg-blue-600 rounded transition-colors hover:bg-blue-700"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
