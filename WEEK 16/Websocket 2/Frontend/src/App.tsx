import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState(["Hi there", "Hello"]);

  useEffect(() => {
    const ws = new WebSocket("http://localhost:3000");
    ws.onmessage = (event) => {
      setMessages((m) => [...m, event.data]);
    };
  });

  return (
    <div className="h-screen bg-black ">
      <br />
      <br />
      <div className="h-[95vh]">
        {messages.map((message) => (
          <div className="m-8">
            <span className="bg-white text-black rounded p-4">{message}</span>
          </div>
        ))}
      </div>
      <div className="w-full bg-white flex">
        <input
          className="flex-1 p-4 rounded bg-white text-black"
          type="text"
          placeholder="Message"
        />
        <button className="bg-purple-600 text-white">Send Message</button>
      </div>
    </div>
  );
}

export default App;
