import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [topic, setTopic] = useState('');
  const [messages, setMessages] = useState([]);
  const ws = useRef(null);

  useEffect(() => {
    // Open websocket connection once component mounts
    ws.current = new WebSocket('ws://localhost:8000/ws');

    ws.current.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    ws.current.onclose = () => {
      console.log('WebSocket closed');
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const sendTopic = () => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(topic);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Subscribe to NATS Topic</h1>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter topic"
      />
      <button onClick={sendTopic}>Subscribe</button>
      <div style={{ marginTop: 20 }}>
        <h2>Messages:</h2>
        <ul>
          {messages.map((msg, idx) => (
            <li key={idx}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

