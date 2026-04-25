"use client";
import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { actions2 } from "@/constants/actions";
import { DEFAULT_DICE_CONFIG } from "@/constants/dice";
import "./ActionButton.css";
import Button from "./Button/Button";
import DiceRoller from "./DiceRoller";
import ProgressPath from "./ProgressPath";

const START_POSITION = 1;
const FINISH_POSITION = 49;

const clampToPath = (position) =>
  Math.max(START_POSITION, Math.min(FINISH_POSITION, position));

const generateRandomSeed = () =>
  String(Math.floor(Math.random() * 1e8)).padStart(8, "0");

const GITHUB_PAGES_URL =
  process.env.NEXT_PUBLIC_GITHUB_PAGES_URL ||
  "https://highrens.github.io/SnakesStairsAndActions/";

const isValidSeed = (value) => /^[0-9]{8}$/.test(value);

const createSeededRng = (seed) => {
  let value = Number(seed.split("").reduce((acc, digit) => acc * 10 + Number(digit), 0)) || 1;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
};

const generateActionCells = (seed) => {
  if (!/^[0-9]{8}$/.test(seed)) return [];
  const rng = createSeededRng(seed);
  const count = Math.max(1, Math.min(20, Math.floor(rng() * 20) + 1));
  const positions = new Set();

  while (positions.size < count) {
    const position = Math.floor(rng() * (FINISH_POSITION - START_POSITION - 1)) + START_POSITION + 1;
    if (position === START_POSITION || position === FINISH_POSITION) continue;
    positions.add(position);
  }

  return [...positions].sort((a, b) => a - b);
};

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

  const [seed, setSeed] = useState("00000000");
  const [shareUrl, setShareUrl] = useState("");
  const [gameStatus, setGameStatus] = useState("playing");
  const [lossRollInput, setLossRollInput] = useState("");
  const [lossFeedback, setLossFeedback] = useState("");
  const [remainingActions, setRemainingActions] = useState([]);
  const [currentAction, setCurrentAction] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
    onlyEven: false,
    onlyOdd: false,
  });
  const normalizedActions = useMemo(() => normalizeActions(actions2.actions), []);
  const actionCells = useMemo(() => generateActionCells(seed), [seed]);
  const lastTriggeredCell = useRef(null);

  const diceConfig = {
    ...DEFAULT_DICE_CONFIG,
    customOutcomes: [
      {
        value: 7,
        weight: 1,
        isEnabled: (context) => context.enableLuckySeven,
      },
    ],
    filter: (context) => (value) => {
      if (context.onlyEven && value % 2 !== 0) return false;
      if (context.onlyOdd && value % 2 === 0) return false;
      return true;
    },
  };

  useEffect(() => {
    setRemainingActions(normalizedActions);
  }, [normalizedActions]);

  useEffect(() => {
    const querySeed = typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("seed")
      : null;
    setSeed(isValidSeed(querySeed) ? querySeed : generateRandomSeed());
  }, []);

  useEffect(() => {
    setShareUrl(`${GITHUB_PAGES_URL}?seed=${encodeURIComponent(seed)}`);
  }, [seed]);

  useEffect(() => {
    setRemainingActions(normalizedActions);
    setCurrentAction(null);
    setResult("");
    setSelectedOption(null);
    setShowImage(false);
    setPendingDecision(null);
    setPendingRoll(null);
    setRollInputValue("");
    setPlayerPosition(START_POSITION);
    setPlayerStats({
      health: 3,
      gold: 3,
      curses: 0,
    });
    setDiceContext({
      enableLuckySeven: false,
    });
    setGameStatus("playing");
    setLossRollInput("");
    setLossFeedback("");
    lastTriggeredCell.current = null;
  }, [normalizedActions, seed]);

  useEffect(() => {
    if (playerPosition >= FINISH_POSITION) {
      setGameStatus("win");
      return;
    }
    if (playerStats.health <= 0) {
      setGameStatus("lost");
    }
  }, [playerPosition, playerStats.health]);

  const getRandomAction = useCallback(() => {
    if (!remainingActions.length)
      return { id: -1, description: "Все действия закончились :(" };
    const randomIndex = Math.floor(Math.random() * remainingActions.length);
    return remainingActions[randomIndex];
  }, [remainingActions]);

  const isActionCell = useCallback(
    (position) => actionCells.includes(position),
    [actionCells]
  );

  const triggerActionCellEvent = useCallback(
    (position) => {
      if (!isActionCell(position)) return;

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
        setIsLoading(false);
        setTimeout(() => setShowImage(true), 100);
      }, 300);
    },
    [getRandomAction, isActionCell]
  );

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
      setIsLoading(false);
      setTimeout(() => setShowImage(true), 100); // плавное появление картинки
    }, 300);
  }, [getRandomAction]);

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



  const handleDiceRollComplete = useCallback(
    (value) => {
      if (gameStatus !== "playing") return;
      movePlayerBy(value);
    },
    [gameStatus, movePlayerBy]
  );

  const handleDeathRollConfirm = useCallback(() => {
    const rolledValue = Number(lossRollInput);
    if (!Number.isInteger(rolledValue) || rolledValue < 1 || rolledValue > 20) return;

    if (rolledValue === 20) {
      setPlayerStats((prev) => ({ ...prev, health: 3 }));
      movePlayerBy(3);
      setGameStatus("playing");
      setLossFeedback("Великолепно! Ты воскрес с 3 здоровьем и продвинулся на 3 клетки.");
    } else if (rolledValue > 10) {
      setPlayerStats((prev) => ({ ...prev, health: 1 }));
      setGameStatus("playing");
      setLossFeedback("Отлично! Ты воскрес с 1 здоровьем.");
    } else {
      setLossFeedback("Неудача. Попробуй снова бросить D20.");
    }
    setLossRollInput("");
  }, [lossRollInput, movePlayerBy]);

  useEffect(() => {
    if (playerPosition === lastTriggeredCell.current) return;
    if (gameStatus !== "playing") return;
    if (isActionCell(playerPosition)) {
      lastTriggeredCell.current = playerPosition;
      triggerActionCellEvent(playerPosition);
    }
  }, [playerPosition, isActionCell, triggerActionCellEvent, gameStatus]);

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
        <div className="dice-and-stats">
          <div className="player-stats">
            <div>❤️ {playerStats.health}</div>
            <div>🪙 {playerStats.gold}</div>
            <div>☠️ {playerStats.curses}</div>
          </div>
          <DiceRoller
            config={diceConfig}
            context={diceContext}
            onRollComplete={handleDiceRollComplete}
          />
          
        </div>

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
          <button
            type="button"
            className={`panel-tab ${activeTab === "seed" ? "panel-tab_active" : ""}`}
            onClick={() => setActiveTab("seed")}
          >
            SEED
          </button>
        </div>
        {activeTab !== "seed" && gameStatus === "playing" && (
          <Button label="Действие!" onClick={handleActionButtonClick} />
        )}


        {activeTab === "seed" ? (
          <div className="seed-tab-panel fade-in">
            <label className="seed-label" htmlFor="seed-input">
              SEED (8 цифр)
            </label>
            <div className="seed-row">
              <input
                id="seed-input"
                className="seed-input"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={8}
                value={seed}
                onChange={(event) => {
                  const value = event.target.value.replace(/\D/g, "").slice(0, 8);
                  setSeed(value.padStart(8, "0"));
                }}
              />
              <Button
                label="Новый SEED"
                size="s"
                onClick={() => setSeed(generateRandomSeed())}
              />
            </div>
            <p className="seed-description">
              Клеток действия: {actionCells.length} — {actionCells.join(", ")}
            </p>
            <div className="share-row">
              <input
                className="share-url"
                type="text"
                readOnly
                value={shareUrl}
                aria-label="Ссылка для общего доступа"
              />
              <Button
                label="Копировать ссылку"
                size="s"
                onClick={() => navigator.clipboard.writeText(shareUrl)}
              />
            </div>
            <div className="qr-row">
              <img
                className="qr-code"
                src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
                  shareUrl
                )}`}
                alt="QR код для ссылки"
              />
            </div>
          </div>
        ) : gameStatus === "win" ? (
          <div className="status-panel fade-in">
            <h2>Победа!</h2>
            <p>Ты добрался до финиша.</p>
            <Button
              label="Новая игра с новым SEED"
              size="m"
              onClick={() => setSeed(generateRandomSeed())}
            />
          </div>
        ) : gameStatus === "lost" ? (
          <div className="status-panel fade-in">
            <h2>Поражение</h2>
            <p>Здоровье достигло 0. Воскресни броском D20.</p>
            <div className="roll-check-row">
              <input
                type="number"
                className="roll-input"
                min={1}
                max={20}
                value={lossRollInput}
                onChange={(event) => setLossRollInput(event.target.value)}
                placeholder="1-20"
              />
              <Button
                label="Проверить"
                size="m"
                onClick={handleDeathRollConfirm}
                disabled={!Number.isInteger(Number(lossRollInput)) || Number(lossRollInput) < 1 || Number(lossRollInput) > 20}
              />
            </div>
            {lossFeedback && <p className="decision-warning">{lossFeedback}</p>}
          </div>
        ) : gameStatus !== "playing" ? null : activeTab === "action" ? (
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


      </div>

      <ProgressPath position={playerPosition} actionCells={actionCells} />
    </div>
  );
};

export default ActionButton;
