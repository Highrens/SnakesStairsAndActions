// src/components/ActionButton.js
"use client";
import { useState } from "react";
import { actions } from "@/app/constants/actions";
import "./ActionButton.css"; // Импорт CSS-файла

const ActionButton = () => {
  const [currentAction, setCurrentAction] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getRandomAction = () => {
    const randomIndex = Math.floor(Math.random() * actions.actions.length);
    return actions.actions[randomIndex].description;
  };

  const handleClick = () => {
    setIsLoading(true);
    let interval;

    interval = setInterval(() => {
      setCurrentAction(getRandomAction());
    }, 10);

    setTimeout(() => {
      clearInterval(interval);
      setCurrentAction(getRandomAction());
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="action-container">
      <button onClick={handleClick} className="action-button">
        Действие!
      </button>
      <div className="text-container">
        <p className={isLoading ? "loading-text text" : "final-text text"}>
          {isLoading ? getRandomAction() : currentAction}
        </p>
      </div>
      
    </div>
  );
};

export default ActionButton;
