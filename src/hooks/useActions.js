import { useState, useEffect, useCallback, useMemo } from "react";
import { normalizeActions, generateActionCells, getDecisionState, compareRoll } from "../utils/gameUtils";

export const useActions = (normalizedActions, seed, isCharacterCreated, applyOutcomeEffects, playerStats) => {
  const [remainingActions, setRemainingActions] = useState([]);
  const [currentAction, setCurrentAction] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [pendingDecision, setPendingDecision] = useState(null);
  const [pendingRoll, setPendingRoll] = useState(null);
  const [rollInputValue, setRollInputValue] = useState("");

  const actionCells = useMemo(() => generateActionCells(seed), [seed]);

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
      if (!isActionCell(position) || !isCharacterCreated) return;

      setIsLoading(true);
      setResult("");
      setSelectedOption(null);
      setShowImage(false);
      setPendingDecision(null);
      setPendingRoll(null);
      setRollInputValue("");

      const chosen = getRandomAction();
      setCurrentAction(chosen);
      setIsLoading(false);
      setShowImage(true);
    },
    [getRandomAction, isActionCell, isCharacterCreated]
  );

  const handleActionButtonClick = useCallback(() => {
    if (!isCharacterCreated) return;
    setIsLoading(true);
    setResult("");
    setSelectedOption(null);
    setShowImage(false);
    setPendingDecision(null);
    setPendingRoll(null);
    setRollInputValue("");

    const chosen = getRandomAction();
    setCurrentAction(chosen);
    setIsLoading(false);
    setShowImage(true);
  }, [getRandomAction, isCharacterCreated]);

  const handleOptionSelect = useCallback(
    (option) => {
      setSelectedOption(option);
      setShowImage(false);

      const outcomes = option.outcomes || [];
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

  useEffect(() => {
    setRemainingActions(normalizedActions);
  }, [normalizedActions]);

  return {
    remainingActions,
    currentAction,
    selectedOption,
    result,
    isLoading,
    showImage,
    pendingDecision,
    pendingRoll,
    rollInputValue,
    setRollInputValue,
    actionCells,
    getRandomAction,
    isActionCell,
    triggerActionCellEvent,
    handleActionButtonClick,
    handleOptionSelect,
    handleDecision,
    handleRollCheckConfirm,
  };
};