import React, { useState } from "react";

export default function ChatApp() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

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
        <div className="flex-1 p-4 overflow-auto flex flex-col gap-2">
          {messages.map((msg, index) => (
            <div key={index} className="max-w-xs p-2 bg-blue-500 text-white rounded-lg self-end">
              {msg}
            </div>
          ))}
        </div>
        
        {/* Input Box */}
        <div className="border-t border-black p-4 bg-gray-200 flex">
          <input 
            type="text" 
            className="w-full p-2 border border-black rounded" 
            placeholder="Type a message..." 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button 
            className="ml-2 p-2 bg-blue-500 text-white rounded" 
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}