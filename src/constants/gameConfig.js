// Game configuration constants
export const START_POSITION = 1;
export const FINISH_POSITION = 100;
export const MAX_CHARACTER_POINTS = 11;
export const MAX_ACTION_CELLS = 50; // Maximum number of action cells that can be generated

export const BASE_SETUP_STATS = {
  health: 3,
  dexterity: 0,
  strength: 0,
  charisma: 0,
};

export const INITIAL_PLAYER_STATS = {
  ...BASE_SETUP_STATS,
  gold: 3,
  curses: 0,
};