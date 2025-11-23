import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FeelingPage from "./pages/FeelingPage";
import ChatbotPage from "./pages/ChatbotPage";
import "./App.css";

function HomeScreens() {
  const [screen, setScreen] = useState("home");

  return (
    <div className="container">

      {/* ---------------- HOME SCREEN ---------------- */}
      {screen === "home" && (
        <div className="home-screen">
          <h1 className="home-title">DIGITAL MIND</h1>
          <p className="home-subtitle">Your mental wellness companion</p>
          <p className="home-small">Presented by Team Serenity Sync</p>

          <button className="big-button" onClick={() => setScreen("language")}>
            Choose Language
          </button>

          <button className="big-button" onClick={() => setScreen("intro")}>
            Let's Get Started
          </button>
        </div>
      )}

      {/* ---------------- LANGUAGE SCREEN ---------------- */}
      {screen === "language" && (
        <div className="language-page">
          <h2 className="lang-title">Select Your Language</h2>

          <button className="lang-btn">English</button>
          <button className="lang-btn">Hindi</button>
          <button className="lang-btn">Marathi</button>
          <button className="lang-btn">Kannada</button>
          <button className="lang-btn">Telugu</button>

          <button className="back-btn" onClick={() => setScreen("home")}>
            ⬅ Back
          </button>
        </div>
      )}

      {/* ---------------- INTRO SCREEN ---------------- */}
      {screen === "intro" && (
        <div className="intro-screen">
          <h2 className="hello-text">
            Helloo<span className="wave">👋</span>
          </h2>

          <label className="field-label">What should I call you?</label>
          <input className="input-box" placeholder="enter your name...or nickname works too" />

          <label className="field-label">What grade are you studying in?</label>
          <input className="input-box" placeholder="would help us suggest content" />

          <label className="field-label">Password</label>
          <input className="input-box" placeholder="So that we protect your personal data" type="password" />

          <button className="signin-btn" onClick={() => window.location.href = "/feeling"}>
            SIGN IN
          </button>

          <button className="back-btn" onClick={() => setScreen("home")}>
            ⬅ Back
          </button>
        </div>
      )}

    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Home + Intro + Language Pages */}
        <Route path="/" element={<HomeScreens />} />

        {/* Feeling Page */}
        <Route path="/feeling" element={<FeelingPage />} />

        {/* Chatbot Page */}
        <Route path="/chatbot" element={<ChatbotPage />} />
      </Routes>
    </Router>
  );
}

export default App;
