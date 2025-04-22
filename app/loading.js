"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        {/* Loading spinner */}
        <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-blue-600 animate-spin"></div>

        {/* Accessible loading text (visually hidden) */}
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
