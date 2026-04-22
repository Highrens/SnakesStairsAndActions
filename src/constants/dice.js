export const DEFAULT_DICE_SIDES = [1, 2, 3, 4, 5, 6];

/**
 * Базовый пул результатов кубика.
 * Можно расширять через customOutcomes, например:
 * { value: 7, weight: 1, isEnabled: (context) => context.enableLuckySeven }
 */
export const DEFAULT_DICE_CONFIG = {
  baseSides: DEFAULT_DICE_SIDES,
  customOutcomes: [],
};

const toWeightedPool = (config, context = {}) => {
  const basePool = (config.baseSides || []).map((value) => ({ value, weight: 1 }));
  const customPool = (config.customOutcomes || [])
    .filter((outcome) => (typeof outcome.isEnabled === "function" ? outcome.isEnabled(context) : true))
    .map((outcome) => ({
      value: outcome.value,
      weight: typeof outcome.weight === "number" && outcome.weight > 0 ? outcome.weight : 1,
    }));

  return [...basePool, ...customPool];
};

export const rollDiceValue = (config = DEFAULT_DICE_CONFIG, context = {}) => {
  const weightedPool = toWeightedPool(config, context);
  if (!weightedPool.length) return 1;

  const totalWeight = weightedPool.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;

  for (const item of weightedPool) {
    random -= item.weight;
    if (random <= 0) return item.value;
  }

  return weightedPool[weightedPool.length - 1].value;
};
