"use client";
import React, { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Add your register logic here
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-black">
      <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 border border-gray-400 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-400 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-400 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleRegister}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
}