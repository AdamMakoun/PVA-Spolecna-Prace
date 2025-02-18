import React, { useState, useEffect, useRef } from "react";
import { IoSend } from "react-icons/io5";

export default function ChatApp() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    "User 1: Hello!",
    "User 2: Hi there!",
    "User 1: How are you?",
  ]);
  const chatEndRef = useRef(null);

  const sendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, `You: ${message}`]);
      setMessage("");
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-screen w-screen border border-black bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 border-r border-black p-4 bg-gray-200">
        <div className="font-bold mb-4 text-black">Groups/Users</div>
        <ul className="text-black space-y-4">
          <li className="flex items-center text-lg"><span className="w-8 h-8 bg-gray-500 rounded-full mr-4"></span>User 1</li>
          <li className="flex items-center text-lg"><span className="w-8 h-8 bg-gray-500 rounded-full mr-4"></span>User 2</li>
          <li className="flex items-center text-lg"><span className="w-8 h-8 bg-gray-500 rounded-full mr-4"></span>Group 1</li>
          <li className="flex items-center text-lg"><span className="w-8 h-8 bg-gray-500 rounded-full mr-4"></span>Group 2</li>
        </ul>
      </div>

      {/* Main Chat Section */}
      <div className="flex flex-col w-4/5">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-black p-4 bg-gray-300">
          <div className="flex-1 text-center font-semibold text-black">Name of the User/Group</div>
          <div className="w-16 text-right">
            <a href="/profile" className="block w-10 h-10 bg-blue-500 rounded-full cursor-pointer"></a>
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 p-4 overflow-auto bg-white text-black">
          {messages.map((msg, index) => {
            const isUser = msg.startsWith("You:");
            return (
              <div key={index} className={`mb-4 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-2 rounded-lg max-w-xs ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                  {msg.replace("You: ", "")}
                </div>
              </div>
            );
          })}
          <div ref={chatEndRef}></div>
        </div>

        {/* Input Box */}
        <div className="border-t border-black p-4 bg-gray-200 flex items-center">
          <input
            type="text"
            placeholder="Type your message here..."
            className="w-full p-2 border border-gray-400 rounded text-black"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage} className="ml-2 p-2 bg-blue-500 text-white rounded">
            <IoSend size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
