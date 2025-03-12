// src/components/ActionButton.js
"use client";
import { useEffect, useState } from "react";
import { actions } from "@/constants/actions";
import "./ActionButton.css"; // Импорт CSS-файла
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import IconTray from "../IconsTray/IconsTray";

const ActionButton = ({ gameMode }) => {
  const [currentAction, setCurrentAction] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [remainingActions, setRemainingActions] = useState("");
  const [removeUsedActions, setRemoveUsedActions] = useState(false);

  const [icons, setIcons] = useState([]);

  useEffect(() => {
    restoreActions();
  }, []);

  const getRandomAction = () => {
    if (remainingActions.length == 0)
      return { id: -1, description: "Все действия закончились :(" };
    const randomIndex = Math.floor(Math.random() * remainingActions.length);
    return remainingActions[randomIndex];
  };

  const restoreActions = () => {
    if (gameMode == "RPG") setRemainingActions(actions.RPG);
    if (gameMode == "actions") setRemainingActions(actions.actions);
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
      if (currentAction.icon && !icons.includes(currentAction))
        setIcons((prevIcons) => [...prevIcons, currentAction]);
      setIsLoading(false);
    }, 1000);
  };

  // Обработчик изменения чекбокса
  const handleCheckboxChange = () => {
    setRemoveUsedActions(!removeUsedActions);
  };

  return (
    <>
      {icons.length == 0 ? (
        <></>
      ) : (
        <IconTray IconList={icons} setIcons={setIcons} />
      )}

      <div
        className={
          isLoading ? "text-container text-container_loading" : "text-container"
        }
      >
        <Button label="Действие!" onClick={handleActionButtonClick} />
        <p className={isLoading ? "loading-text text" : "final-text text"}>
          {isLoading ? getRandomAction().description : currentAction}
        </p>
      </div>

      {gameMode == "actions" ? (
        <div className="text-container">
          <Checkbox
            label="Удалять использованные действия"
            checked={removeUsedActions}
            onChange={handleCheckboxChange}
          />
          {removeUsedActions ? (
            <Button
              label="Восстановить все действия!"
              size="m"
              onClick={restoreActions}
            />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ActionButton;
