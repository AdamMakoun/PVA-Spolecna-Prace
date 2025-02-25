"use client"
import { useState } from "react";
const SendMessage = () => {
    const [message, setMessage] = useState("");
    
    function sendMessage() {
        fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        })
    }

    return (
        <>
            <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Type your message here..." className="w-full p-2 border border-gray-400 rounded text-black" />
            <button onClick={sendMessage} className="ml-2 p-2 bg-blue-500 text-white rounded">Send</button>
        </>
    );
}

export default SendMessage;