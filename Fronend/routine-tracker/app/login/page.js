"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // For navigation

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Initialize router

  const handleLogin = async () => {
    setError(""); // Clear previous errors

    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Welcome, ${username}!`);
        // Redirect or store token (if applicable)
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (error) {
      setError("Network error. Try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="relative w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
        <h1 className="text-2xl font-bold text-center mb-4 text-white">Login</h1>

        {error && <p className="text-red-400 text-center mb-3">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition mb-4"
        >
          Login
        </button>

        {/* Small Sign Up button at the bottom right */}
        <button
          onClick={() => router.push("/signup")}
          className="absolute bottom-4 right-4 text-sm text-blue-400 hover:text-blue-500 transition"
        >
          Create an account
        </button>
      </div>
    </div>
  );
}
