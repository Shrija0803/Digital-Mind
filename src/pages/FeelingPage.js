import React from "react";
import "./FeelingPage.css";
import { useNavigate } from "react-router-dom";

function FeelingPage() {
  const navigate = useNavigate();

  return (
    <div className="feeling-container">
      
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>←</button>

      {/* Heading */}
      <h2 className="title">Hi friend!</h2>
      <h3 className="subtitle">How are you feeling today??</h3>

      {/* Options */}
      <div className="options">
        <button className="option pink" onClick={() => navigate("/chatbot")}>Just wanna talk to someone...</button>
        <button className="option coral">Evaluate myself maybe?</button>
        <button className="option blue">Need genuine help!</button>
        <button className="option green">Wanna play a game!!</button>
      </div>
      
    </div>
  );
}

export default FeelingPage;
