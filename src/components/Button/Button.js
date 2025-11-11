"use client";
import React from "react";
import "./Button.css"; // Стили для чекбокса

const Button = ({ label, onClick, size = "l" }) => {
  const buttonClass = `action-button action-button_${size}`;
  return (
    <button onClick={onClick} className={buttonClass}>
    {label}
  </button>
  );
};

export default Button;