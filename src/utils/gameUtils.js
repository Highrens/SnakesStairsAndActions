import { START_POSITION, FINISH_POSITION, MAX_ACTION_CELLS } from "../constants/gameConfig";

export const clampToPath = (position) =>
  Math.max(START_POSITION, Math.min(FINISH_POSITION, position));

export const generateRandomSeed = () =>
  String(Math.floor(Math.random() * 1e8)).padStart(8, "0");

export const isValidSeed = (value) => /^[0-9]{8}$/.test(value);

export const createSeededRng = (seed) => {
  let value = Number(seed.split("").reduce((acc, digit) => acc * 10 + Number(digit), 0)) || 1;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
};

export const generateActionCells = (seed) => {
  if (!/^[0-9]{8}$/.test(seed)) return [];
  const rng = createSeededRng(seed);
  const count = Math.max(1, Math.min(MAX_ACTION_CELLS, Math.floor(rng() * MAX_ACTION_CELLS) + 1));
  const positions = new Set();

  while (positions.size < count) {
    const position = Math.floor(rng() * (FINISH_POSITION - START_POSITION - 1)) + START_POSITION + 1;
    if (position === START_POSITION || position === FINISH_POSITION) continue;
    positions.add(position);
  }

  return [...positions].sort((a, b) => a - b);
};

export const normalizeOutcome = (option) => {
  if (Array.isArray(option.outcomes) && option.outcomes.length > 0) {
    return option.outcomes;
  }
  return [];
};

export const normalizeActions = (actions = []) =>
  actions.map((action) => ({
    ...action,
    options: (action.options || []).map((option) => ({
      ...option,
      outcomes: normalizeOutcome(option),
    })),
  }));

export const compareRoll = (rolledValue, operator, targetValue) => {
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

export const getDecisionState = (decision, playerStats) => {
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