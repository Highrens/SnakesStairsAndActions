"use client";

import { useMemo, useState } from "react";
import { DEFAULT_DICE_CONFIG, rollDiceValue } from "@/constants/dice";
import "./DiceRoller.css";

const DiceRoller = ({ config = DEFAULT_DICE_CONFIG, context = {}, onRollComplete }) => {
  const [isRolling, setIsRolling] = useState(false);
  const [currentValue, setCurrentValue] = useState(null);

  const buttonLabel = useMemo(() => {
    if (isRolling) return "Прокрутка...";
    if (currentValue === null) return "Нажми на кубик";
    return `Выпало: ${currentValue}`;
  }, [currentValue, isRolling]);

  const handleRoll = () => {
    if (isRolling) return;

    setIsRolling(true);

    setTimeout(() => {
      const rolledValue = rollDiceValue(config, context);
      setCurrentValue(rolledValue);
      setIsRolling(false);

      if (typeof onRollComplete === "function") {
        onRollComplete(rolledValue);
      }
    }, 1000);
  };

  return (
    <div className="dice-roller">
      <button
        type="button"
        className={`dice-face ${isRolling ? "dice-face_rolling" : ""}`}
        onClick={handleRoll}
        disabled={isRolling}
        aria-label="Игровой кубик"
      >
        {isRolling ? "🎲" : currentValue ?? "?"}
      </button>
      <p className="dice-label">{buttonLabel}</p>
    </div>
  );
};

export default DiceRoller;
