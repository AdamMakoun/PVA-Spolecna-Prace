import React from "react";

export default function ChatApp() {
  return (
    <div className="flex h-screen w-screen border border-black bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 border-r border-black p-4 bg-gray-200">
        <div className="font-bold mb-4 text-black">Groups/Users</div>
        <ul className="text-black">
          <li>User 1</li>
          <li>User 2</li>
          <li>Group 1</li>
          <li>Group 2</li>
        </ul>
      </div>

      {/* Main Chat Section */}
      <div className="flex flex-col w-4/5">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-black p-4 bg-gray-300">
          <div className="flex-1 text-center font-semibold text-black">Name of the User/Group</div>
          <div className="w-16 text-right text-black">Profile</div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 p-4 overflow-auto bg-white text-black">
          <div className="mb-4">User 1: Hello!</div>
          <div className="mb-4">User 2: Hi there!</div>
          <div className="mb-4">User 1: How are you?</div>
        </div>

        {/* Input Box */}
        <div className="border-t border-black p-4 bg-gray-200">
          <input
            type="text"
            placeholder="Type your message here..."
            className="w-full p-2 border border-gray-400 rounded text-black"
          />
        </div>
      </div>
    </div>
  );
}