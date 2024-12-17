"use client";
import React from "react";
import "./Checkbox.css"; // Стили для чекбокса

const Checkbox = ({ label, checked, onChange }) => {
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

export default Checkbox;
