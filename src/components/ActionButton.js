// src/components/ActionButton.js
"use client";
import { useEffect, useState } from "react";
import { actions } from "@/constants/actions";
import "./ActionButton.css"; // Импорт CSS-файла
import Checkbox from "./Checkbox/Checkbox";
import Button from "./Button/Button";

const ActionButton = () => {
  const [currentAction, setCurrentAction] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [remainingActions, setRemainingActions] = useState("");
  const [removeUsedActions, setRemoveUsedActions] = useState(false);

  useEffect(() => {
    setRemainingActions(actions.actions);
  }, []);

  const getRandomAction = () => {
    if (remainingActions.length == 0) return {id: -1, description: "Все действия закончились :("}
    const randomIndex = Math.floor(Math.random() * remainingActions.length);
    return remainingActions[randomIndex];
  };

  const restoreActions = () => {
    setRemainingActions(actions.actions);
  };

  const handleActionButtonClick = () => {
    setIsLoading(true);
    let interval;

    interval = setInterval(() => {
      setCurrentAction(getRandomAction().description);
    }, 10);

    setTimeout(() => {
      clearInterval(interval);
      const currentAction = getRandomAction();

      setCurrentAction(currentAction.description);

      if (removeUsedActions)
        setRemainingActions(
          remainingActions.filter((action) => action.id !== currentAction.id)
        );

      setIsLoading(false);
    }, 1000);
  };

  // Обработчик изменения чекбокса
  const handleCheckboxChange = () => {
    setRemoveUsedActions(!removeUsedActions);
  };

  return (
    <div className="action-container">
      <Button label="Действие!" onClick={handleActionButtonClick} />
      <div className={isLoading ? "text-container text-container_loading" : "text-container"}>
        <p className={isLoading ? "loading-text text" : "final-text text"}>
          {isLoading ? getRandomAction().description : currentAction}
        </p>
      </div>

      <div className="text-container">
        <Checkbox
          label="Удалять использованные действия"
          checked={removeUsedActions}
          onChange={handleCheckboxChange}
        />
        {removeUsedActions ? (
          <Button label="Восстановить все действия!" size="m" onClick={restoreActions} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ActionButton;
