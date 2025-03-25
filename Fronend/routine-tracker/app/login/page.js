"use client";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Logging in as ${username}`);
    // Add authentication logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 border-2 border-amber-50">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <input
        type="text"
        placeholder="Username"
        className="mb-2 p-2 border border-gray-300 rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      
      <input
        type="password"
        placeholder="Password"
        className="mb-2 p-2 border border-gray-300 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md"
      >
        Login
      </button>
    </div>
  );
}
