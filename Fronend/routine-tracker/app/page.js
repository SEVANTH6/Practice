"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold">Routine Tracker</h1>
      <p className="text-gray-600 mt-2">Track your daily tasks efficiently.</p>

      <button
        onClick={() => router.push("/login")}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md"
      >
        registration
      </button>
    </div>
  );
}
