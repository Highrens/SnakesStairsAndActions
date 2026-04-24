"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import { actions2 } from "@/constants/actions";
import { DEFAULT_DICE_CONFIG } from "@/constants/dice";
import "./ActionButton.css";
import Button from "./Button/Button";
import Checkbox from "./Checkbox/Checkbox";
import DiceRoller from "./DiceRoller";
import ProgressPath from "./ProgressPath";

const START_POSITION = 1;
const FINISH_POSITION = 49;

const clampToPath = (position) =>
  Math.max(START_POSITION, Math.min(FINISH_POSITION, position));

const normalizeOutcome = (option) => {
  if (Array.isArray(option.outcomes) && option.outcomes.length > 0) {
    return option.outcomes;
  }
  return [];
};

const normalizeActions = (actions = []) =>
  actions.map((action) => ({
    ...action,
    options: (action.options || []).map((option) => ({
      ...option,
      outcomes: normalizeOutcome(option),
    })),
  }));

const compareRoll = (rolledValue, operator, targetValue) => {
  switch (operator) {
    case "<":
      return rolledValue < targetValue;
    case "<=":
      return rolledValue <= targetValue;
    case ">":
      return rolledValue > targetValue;
    case ">=":
      return rolledValue >= targetValue;
    case "==":
      return rolledValue === targetValue;
    default:
      return false;
  }
};

const getDecisionState = (decision, playerStats) => {
  if (!decision) {
    return { canConfirm: true, requirementMessage: "" };
  }

  const requirements = decision.requirements || [];
  const failedRequirement = requirements.find((requirement) => {
    const currentValue = playerStats[requirement.stat] || 0;
    if (typeof requirement.min === "number" && currentValue < requirement.min) return true;
    if (typeof requirement.max === "number" && currentValue > requirement.max) return true;
    return false;
  });

  if (!failedRequirement) {
    return { canConfirm: true, requirementMessage: "" };
  }

  return {
    canConfirm: false,
    requirementMessage: failedRequirement.message || "Требования не выполнены.",
  };
};

const ActionButton = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const withBasePath = useCallback(
    (assetPath = "") => {
      if (!assetPath) return "";
      return assetPath.startsWith("/") ? `${basePath}${assetPath}` : `${basePath}/${assetPath}`;
    },
    [basePath]
  );

  const [remainingActions, setRemainingActions] = useState([]);
  const [currentAction, setCurrentAction] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [removeUsedActions, setRemoveUsedActions] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [pendingDecision, setPendingDecision] = useState(null);
  const [pendingRoll, setPendingRoll] = useState(null);
  const [rollInputValue, setRollInputValue] = useState("");
  const [activeTab, setActiveTab] = useState("action");
  const [playerPosition, setPlayerPosition] = useState(START_POSITION);
  const [playerStats, setPlayerStats] = useState({
    health: 3,
    gold: 3,
    curses: 0,
  });
  const [diceContext, setDiceContext] = useState({
    enableLuckySeven: false,
  });
  const normalizedActions = useMemo(() => normalizeActions(actions2.actions), []);

  const diceConfig = {
    ...DEFAULT_DICE_CONFIG,
    customOutcomes: [
      {
        value: 7,
        weight: 1,
        isEnabled: (context) => context.enableLuckySeven,
      },
    ],
  };

  useEffect(() => {
    setRemainingActions(normalizedActions);
  }, [normalizedActions]);

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
    setPendingDecision(null);
    setPendingRoll(null);
    setRollInputValue("");

    setTimeout(() => {
      const chosen = getRandomAction();
      setCurrentAction(chosen);

      if (removeUsedActions)
        setRemainingActions((prev) => prev.filter((a) => a.id !== chosen.id));

      setIsLoading(false);
      setTimeout(() => setShowImage(true), 100); // плавное появление картинки
    }, 300);
  }, [getRandomAction, removeUsedActions]);

  // Отдельный метод для будущих эффектов (например, телепортов).
  const movePlayerBy = useCallback((steps) => {
    setPlayerPosition((prev) => clampToPath(prev + steps));
  }, []);

  // Отдельный метод для прямого перемещения в конкретную точку.
  const movePlayerTo = useCallback((position) => {
    setPlayerPosition(clampToPath(position));
  }, []);

  const applyOutcomeEffects = useCallback(
    (effects = []) => {
      effects.forEach((effect) => {
        switch (effect.type) {
          case "moveBy":
            movePlayerBy(effect.value || 0);
            break;
          case "moveTo":
            movePlayerTo(effect.value || START_POSITION);
            break;
          case "setDiceContext":
            setDiceContext((prev) => ({
              ...prev,
              ...(effect.value || {}),
            }));
            break;
          case "modifyStat":
            setPlayerStats((prev) => {
              const statKey = effect.stat;
              const nextValue = (prev[statKey] || 0) + (effect.value || 0);
              return {
                ...prev,
                [statKey]: Math.max(0, nextValue),
              };
            });
            break;
          default:
            break;
        }
      });
    },
    [movePlayerBy, movePlayerTo]
  );

  const handleOptionSelect = useCallback(
    (option) => {
      setSelectedOption(option);
      setShowImage(false); // картинка исчезает при выборе

      const outcomes = normalizeOutcome(option);
      const chosenOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];

      setIsLoading(true);
      setTimeout(() => {
        const outcomeText = chosenOutcome?.text || "Ничего не произошло";
        setResult(outcomeText);
        if (chosenOutcome?.requiresConfirmation && chosenOutcome?.confirmation) {
          setPendingDecision(chosenOutcome.confirmation);
          setPendingRoll(null);
          setRollInputValue("");
        } else if (chosenOutcome?.rollCheck) {
          applyOutcomeEffects(chosenOutcome?.effects || []);
          setPendingRoll(chosenOutcome.rollCheck);
          setRollInputValue("");
          setPendingDecision(null);
        } else {
          applyOutcomeEffects(chosenOutcome?.effects || []);
          setPendingDecision(null);
          setPendingRoll(null);
          setRollInputValue("");
        }
        setIsLoading(false);
      }, 300);
    },
    [applyOutcomeEffects]
  );

  const handleDecision = useCallback(
    (isConfirmed) => {
      if (!pendingDecision) return;
      const { canConfirm } = getDecisionState(pendingDecision, playerStats);
      if (isConfirmed && !canConfirm) return;

      if (isConfirmed) {
        applyOutcomeEffects(pendingDecision.onConfirmEffects || []);
        if (pendingDecision.onConfirmText) {
          setResult((prev) => `${prev}\n${pendingDecision.onConfirmText}`);
        }
      } else {
        applyOutcomeEffects(pendingDecision.onCancelEffects || []);
        if (pendingDecision.onCancelText) {
          setResult((prev) => `${prev}\n${pendingDecision.onCancelText}`);
        }
      }

      setPendingDecision(null);
    },
    [applyOutcomeEffects, pendingDecision, playerStats]
  );

  const handleRollCheckConfirm = useCallback(() => {
    if (!pendingRoll) return;

    const rolledValue = Number(rollInputValue);
    if (!Number.isInteger(rolledValue)) return;
    if (rolledValue < 1 || rolledValue > pendingRoll.diceSides) return;

    const isSuccess = compareRoll(
      rolledValue,
      pendingRoll.condition?.operator,
      pendingRoll.condition?.value
    );

    const effectsToApply = isSuccess
      ? pendingRoll.onSuccessEffects || []
      : pendingRoll.onFailEffects || [];
    const resultText = isSuccess
      ? pendingRoll.onSuccessText || "Условие выполнено."
      : pendingRoll.onFailText || "Условие не выполнено.";

    applyOutcomeEffects(effectsToApply);
    setResult((prev) => `${prev}\n${resultText}`);
    setPendingRoll(null);
    setRollInputValue("");
  }, [applyOutcomeEffects, pendingRoll, rollInputValue]);

  const restoreActions = useCallback(() => {
    setRemainingActions(normalizedActions);
  }, [normalizedActions]);

  const handleDiceRollComplete = useCallback(
    (value) => {
      movePlayerBy(value);
    },
    [movePlayerBy]
  );

  const decisionState = useMemo(
    () => getDecisionState(pendingDecision, playerStats),
    [pendingDecision, playerStats]
  );
  const isRollInputValid = useMemo(() => {
    if (!pendingRoll) return false;
    const value = Number(rollInputValue);
    return Number.isInteger(value) && value >= 1 && value <= pendingRoll.diceSides;
  }, [pendingRoll, rollInputValue]);

  return (
    <div
      className="action-container"
      style={{ "--action-bg-image": `url("${withBasePath("/background.png")}")` }}
    >
      <div className="action-main">
        <DiceRoller
          config={diceConfig}
          context={diceContext}
          onRollComplete={handleDiceRollComplete}
        />
        <p className="player-position">Позиция игрока: {playerPosition}/49</p>
        <div className="panel-tabs">
          <button
            type="button"
            className={`panel-tab ${activeTab === "action" ? "panel-tab_active" : ""}`}
            onClick={() => setActiveTab("action")}
          >
            Событие
          </button>
          <button
            type="button"
            className={`panel-tab ${activeTab === "stats" ? "panel-tab_active" : ""}`}
            onClick={() => setActiveTab("stats")}
          >
            Игрок
          </button>
        </div>
        <Button label="Действие!" onClick={handleActionButtonClick} />
        <Checkbox
          label="Убирать уже использованные события"
          checked={removeUsedActions}
          onChange={(e) => setRemoveUsedActions(e.target.checked)}
        />

        {activeTab === "action" ? (
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
                src={withBasePath(currentAction.image)}
                alt="event illustration"
                className="action-image"
              />
            )}
            {pendingDecision && !isLoading && (
              <div className="decision-panel fade-in">
                <p className="decision-text">
                  {pendingDecision.prompt || "Подтвердить действие?"}
                </p>
                <div className="decision-buttons">
                  <Button
                    label={pendingDecision.confirmLabel || "Да"}
                    size="m"
                    onClick={() => handleDecision(true)}
                    disabled={!decisionState.canConfirm}
                  />
                  <Button
                    label={pendingDecision.cancelLabel || "Нет"}
                    size="m"
                    onClick={() => handleDecision(false)}
                  />
                </div>
                {!decisionState.canConfirm && (
                  <p className="decision-warning">{decisionState.requirementMessage}</p>
                )}
              </div>
            )}
            {pendingRoll && !isLoading && (
              <div className="decision-panel fade-in">
                <p className="decision-text">
                  {pendingRoll.prompt ||
                    `Брось D${pendingRoll.diceSides} и введи выпавшее число`}
                </p>
                <div className="roll-check-row">
                  <input
                    type="number"
                    className="roll-input"
                    min={1}
                    max={pendingRoll.diceSides}
                    value={rollInputValue}
                    onChange={(event) => setRollInputValue(event.target.value)}
                    placeholder={`1-${pendingRoll.diceSides}`}
                  />
                  <Button
                    label={pendingRoll.confirmLabel || "Проверить"}
                    size="m"
                    onClick={handleRollCheckConfirm}
                    disabled={!isRollInputValid}
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="stats-container fade-in">
            <p className="stats-title">Характеристики игрока</p>
            <p className="stats-row">Здоровье: {playerStats.health}</p>
            <p className="stats-row">Золото: {playerStats.gold}</p>
            <p className="stats-row">Проклятия: {playerStats.curses}</p>
          </div>
        )}

        {/* 🔘 Опции выбора */}
        {activeTab === "action" && currentAction && !result && !isLoading && (
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

      <ProgressPath position={playerPosition} />
    </div>
  );
};

export default ActionButton;
