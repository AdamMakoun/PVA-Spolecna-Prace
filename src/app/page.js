import React, { useState } from "react";

export default function ChatApp() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex h-screen w-screen border border-black bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 border-r border-black p-4 bg-gray-200">groups/users</div>
      
      {/* Main Chat Section */}
      <div className="flex flex-col w-4/5">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-black p-4 bg-gray-300">
          <div className="flex-1 text-center font-semibold">name of the user/group</div>
          <div className="w-16 h-16 border border-black bg-gray-400 flex items-center justify-center cursor-pointer">
            profile
          </div>
        </div>
        
        {/* Chat Window */}
        <div className="flex-1 p-4 overflow-auto">Chat messages go here</div>
        
        {/* Input Box */}
        <div className="border-t border-black p-4 bg-gray-200">
          <input 
            type="text" 
            className="w-full p-2 border border-black rounded" 
            placeholder="Type a message..." 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
