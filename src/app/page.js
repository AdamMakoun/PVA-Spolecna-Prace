"use client";

import React from "react";

export default function InfoPage() {
  return (
    <div className="flex flex-col h-screen w-screen border border-black bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-black p-4 bg-gray-300">
        <div className="flex-1 text-center font-semibold text-black">Chat App Info</div>
        <div className="w-16 text-right">
          <a href="/login" className="block w-30 h-10 bg-blue-500 rounded-xl cursor-pointer text-white text-center leading-10">Login</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-white text-black">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Chat App</h1>
        <p className="mb-4">
          This chat application allows users to communicate with each other in real-time. You can join different groups or chat with individual users.
        </p>
        <h2 className="text-xl font-semibold mb-2">Features:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Real-time messaging</li>
          <li>Group chats</li>
          <li>Private messages</li>
          <li>User-friendly interface</li>
        </ul>
        <p>
          To start using the chat app, please <a href="/login" className="text-blue-500 underline">login</a> or <a href="/register" className="text-blue-500 underline">register</a> if you don't have an account yet.
        </p>
        <a href="/mainPage" className="text-blue-500 underline">sniggers</a>
      </div>
    </div>
  );
}