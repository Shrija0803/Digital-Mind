import React, { useState } from "react";
import "./ChatbotPage.css";
import { useNavigate } from "react-router-dom";

function ChatbotPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey! I'm here for you. Tell me what's on your mind 💛" }
  ]);
  const [input, setInput] = useState("");

  // ----- SIMPLE REPLY SYSTEM -----
  const generateReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("sad") || msg.includes("upset") || msg.includes("down")) {
      return "I'm really sorry you're feeling this way. Want to talk about what happened?";
    }

    if (msg.includes("nervous") || msg.includes("anxious") || msg.includes("palpatic")) {
      return "I hear you. It can be overwhelming, but you’re safe. Try a 4-second breath in… hold for 2… and slowly out for 6. Want to share what triggered this feeling?";
    }

    if (msg.includes("stress") || msg.includes("tension") || msg.includes("depression")) {
      return "Stress can feel heavy... Try taking one slow deep breath right now. I'm here with you.";
    }

    if (msg.includes("happy") || msg.includes("good") || msg.includes("cheerful") || msg.includes("joyful")) {
      return "Awww that’s nice to hear! Tell me more 🌼";
    }

    if (msg.includes("angry") || msg.includes("furious")) {
      return "Being angry is okay… emotions are valid. Do you want to tell me why you feel this way?";
    }

    if (msg.includes("alone") || msg.includes("lonely")) {
      return "You’re not alone. I’m right here with you, and we can talk as long as you want 💛";
    }

    // default fallback
    return "I understand… tell me a little more so I can help you better.";
  };

  // ----- HANDLE SENDING MESSAGE -----
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botMessage = { sender: "bot", text: generateReply(input) };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="chat-container">

      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>⬅ More Help?</button>

      {/* Chat Area */}
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p
            key={index}
            className={`chat-bubble ${msg.sender === "user" ? "user-bubble" : "bot-bubble"}`}
          >
            {msg.text}
          </p>
        ))}
      </div>

      {/* Input Box */}
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

    </div>
  );
}

export default ChatbotPage;
