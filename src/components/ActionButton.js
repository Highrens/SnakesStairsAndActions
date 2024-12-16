// src/components/ActionButton.js
"use client";
import { useEffect, useState } from "react";
import { actions } from "@/app/constants/actions";
import "./ActionButton.css"; // Импорт CSS-файла
import CustomCheckbox from "./CustomCheckbox/CustomCheckbox";

const ActionButton = () => {
  const [currentAction, setCurrentAction] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [remainingActions, setRemainingActions] = useState("");
  const [removeUsedActions, setRemoveUsedActions] = useState(false);

  useEffect(() => {
    setRemainingActions(actions.actions);
  }, []);

  const getRandomAction = () => {
    const randomIndex = Math.floor(Math.random() * remainingActions.length);
    return remainingActions[randomIndex];
  };

  const handleClick = () => {
    setIsLoading(true);
    let interval;

    interval = setInterval(() => {
      setCurrentAction(getRandomAction().description);
    }, 10);

    setTimeout(() => {
      clearInterval(interval);
      const currentAction = getRandomAction();

      setCurrentAction(currentAction.description);

      if (removeUsedActions) setRemainingActions( remainingActions.filter((action) => action.id !== currentAction.id) );

      setIsLoading(false);
    }, 1000);
  };

  // Обработчик изменения чекбокса
  const handleCheckboxChange = () => {
    setRemoveUsedActions(!removeUsedActions);
  };

  return (
    <div className="action-container">
      <button onClick={handleClick} className="action-button">
        Действие!
      </button>
      <div className="text-container">
        <p className={isLoading ? "loading-text text" : "final-text text"}>
          {isLoading ? getRandomAction().description : currentAction}
        </p>
      </div>

      <div className="text-container">
      <CustomCheckbox
        label="Удалять использованные действия"
        checked={removeUsedActions}
        onChange={handleCheckboxChange}
      />
      </div>
    </div>
  );
};

export default ActionButton;
