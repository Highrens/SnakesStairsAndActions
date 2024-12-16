"use client";
import React from "react";
import "./CustomCheckbox.css"; // Стили для чекбокса

const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <div className="checkbox-container">
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className="checkmark"></span>
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
