"use client";
import { useEffect, useState, useCallback } from "react";
import { actions2 } from "@/constants/actions";
import "./ActionButton.css";
import Button from "./Button/Button";

const ActionButton = () => {
  const [remainingActions, setRemainingActions] = useState([]);
  const [currentAction, setCurrentAction] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [removeUsedActions, setRemoveUsedActions] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setRemainingActions(actions2.actions);
  }, []);

  const getRandomAction = useCallback(() => {
    if (!remainingActions.length)
      return { id: -1, description: "Все действия закончились :(" };
    const randomIndex = Math.floor(Math.random() * remainingActions.length);
    return remainingActions[randomIndex];
  }, [remainingActions]);

  const handleActionButtonClick = useCallback(() => {
    setIsLoading(true);
    setResult("");
    setSelectedOption(null);
    setShowImage(false);

    setTimeout(() => {
      const chosen = getRandomAction();
      setCurrentAction(chosen);

      if (removeUsedActions)
        setRemainingActions((prev) => prev.filter((a) => a.id !== chosen.id));

      setIsLoading(false);
      setTimeout(() => setShowImage(true), 100); // плавное появление картинки
    }, 300);
  }, [getRandomAction, removeUsedActions]);

  const handleOptionSelect = useCallback((option) => {
    setSelectedOption(option);
    setShowImage(false); // картинка исчезает при выборе
    const randomResult =
      option.results[Math.floor(Math.random() * option.results.length)];

    setIsLoading(true);
    setTimeout(() => {
      setResult(randomResult);
      setIsLoading(false);
    }, 300);
  }, []);

  const restoreActions = useCallback(() => {
    setRemainingActions(actions2.actions);
  }, []);

  return (
    <div className="action-container">
      <Button label="Действие!" onClick={handleActionButtonClick} />

      <div className={`text-container ${isLoading ? "text-container_loading" : ""}`}>
        <p className={`text ${isLoading ? "loading-text" : "final-text"}`}>
          {isLoading
            ? "..."
            : result ||
            currentAction?.description ||
            "Нажми, чтобы получить действие"}
        </p>
        {/* 🖼️ Картинка события */}
        {currentAction && showImage && currentAction.image && (
          <img
            src={currentAction.image}
            alt="event illustration"
            className="action-image"
          />
        )}
      </div>



      {/* 🔘 Опции выбора */}
      {currentAction && !result && !isLoading && (
        <div className="options-container fade-in">
          {currentAction.options?.map((option, idx) => (
            <Button
              key={idx}
              label={option.name}
              size="m"
              onClick={() => handleOptionSelect(option)}
            />
          ))}
        </div>
      )}

      {removeUsedActions && (
        <Button
          label="Восстановить все действия!"
          size="m"
          onClick={restoreActions}
        />
      )}
    </div>
  );
};

export default ActionButton;
