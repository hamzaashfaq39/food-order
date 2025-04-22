"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error occurred:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="mb-4 text-3xl font-bold">Something went wrong</h1>
      <p className="mb-6 text-gray-600">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <button
        className="px-4 py-2 text-white bg-blue-600 rounded transition-colors hover:bg-blue-700"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
