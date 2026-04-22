"use client";
import React from "react";
import "./Button.css"; // Стили для чекбокса

const Button = ({ label, onClick, size = "l", disabled = false }) => {
  const buttonClass = `action-button action-button_${size} ${disabled ? "action-button_disabled" : ""}`;
  return (
    <button onClick={onClick} className={buttonClass} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;