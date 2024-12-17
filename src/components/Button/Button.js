"use client";
import React from "react";
import "./Button.css"; // Стили для чекбокса

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="action-button">
    {label}
  </button>
  );
};

export default Button;