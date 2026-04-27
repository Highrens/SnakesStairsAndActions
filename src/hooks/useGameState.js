import { useState, useEffect, useCallback } from "react";
import { clampToPath, generateRandomSeed, isValidSeed } from "../utils/gameUtils";
import { START_POSITION, FINISH_POSITION, MAX_CHARACTER_POINTS, BASE_SETUP_STATS, INITIAL_PLAYER_STATS } from "../constants/gameConfig";

const GITHUB_PAGES_URL =
  process.env.NEXT_PUBLIC_GITHUB_PAGES_URL ||
  "https://highrens.github.io/SnakesStairsAndActions/";

export const useGameState = (normalizedActions, seed, setSeed) => {
  const [shareUrl, setShareUrl] = useState("");
  const [gameStatus, setGameStatus] = useState("playing");
  const [lossRollInput, setLossRollInput] = useState("");
  const [lossFeedback, setLossFeedback] = useState("");
  const [playerPosition, setPlayerPosition] = useState(START_POSITION);
  const [isCharacterCreated, setIsCharacterCreated] = useState(false);
  const [setupStats, setSetupStats] = useState(BASE_SETUP_STATS);
  const [playerStats, setPlayerStats] = useState(INITIAL_PLAYER_STATS);
  const [diceContext, setDiceContext] = useState({
    enableLuckySeven: false,
    onlyEven: false,
    onlyOdd: false,
  });
  const [rolledPoints, setRolledPoints] = useState(null);

  const totalSetupPoints = Object.values(setupStats).reduce((sum, value) => sum + value, 0);
  const baseSetupSum = Object.values(BASE_SETUP_STATS).reduce((sum, value) => sum + value, 0);
  const remainingSetupPoints = rolledPoints !== null ? rolledPoints - (totalSetupPoints - baseSetupSum) : 0;
  const isSetupComplete = rolledPoints !== null && remainingSetupPoints === 0;
  const displayedHealth = isCharacterCreated ? playerStats.health : setupStats.health;

  const handleAdjustSetupStat = useCallback(
    (stat, delta) => {
      if (rolledPoints === null) return;
      setSetupStats((prev) => {
        const nextValue = (prev[stat] || 0) + delta;
        const minValue = stat === 'health' ? 3 : 0;
        if (nextValue < minValue) return prev;
        if (delta > 0 && remainingSetupPoints <= 0) return prev;
        return {
          ...prev,
          [stat]: nextValue,
        };
      });
    },
    [remainingSetupPoints, rolledPoints]
  );

  const handleConfirmCharacterSetup = useCallback(() => {
    if (!isSetupComplete) return;
    setPlayerStats((prev) => ({
      ...prev,
      ...setupStats,
    }));
    setIsCharacterCreated(true);
  }, [isSetupComplete, setupStats]);

  const movePlayerBy = useCallback((steps) => {
    setPlayerPosition((prev) => clampToPath(prev + steps));
  }, []);

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
    const querySeed = typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("seed")
      : null;
    setSeed(isValidSeed(querySeed) ? querySeed : generateRandomSeed());
  }, [setSeed]);

  useEffect(() => {
    setShareUrl(`${GITHUB_PAGES_URL}?seed=${encodeURIComponent(seed)}`);
  }, [seed]);

  useEffect(() => {
    setPlayerPosition(START_POSITION);
    setSetupStats(BASE_SETUP_STATS);
    setPlayerStats(INITIAL_PLAYER_STATS);
    setIsCharacterCreated(false);
    setDiceContext({
      enableLuckySeven: false,
      onlyEven: false,
      onlyOdd: false,
    });
    setGameStatus("playing");
    setLossRollInput("");
    setLossFeedback("");
    setRolledPoints(null);
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

  return {
    shareUrl,
    gameStatus,
    lossRollInput,
    setLossRollInput,
    lossFeedback,
    playerPosition,
    isCharacterCreated,
    setupStats,
    playerStats,
    setPlayerStats,
    diceContext,
    setDiceContext,
    rolledPoints,
    setRolledPoints,
    totalSetupPoints,
    remainingSetupPoints,
    isSetupComplete,
    displayedHealth,
    handleAdjustSetupStat,
    handleConfirmCharacterSetup,
    movePlayerBy,
    movePlayerTo,
    applyOutcomeEffects,
    handleDeathRollConfirm,
  };
};