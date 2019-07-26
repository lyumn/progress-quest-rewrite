// import * as types from '../constants/ActionTypes'

const ROLL = 'ROLL';
const SOLD = 'SOLD';
const GENERATE_NAME = 'GENERATE_NAME';
const LOAD_GAME = 'LOAD_GAME';
const LEVEL_UP = 'LEVEL_UP';
const COMPLETE_QUEST = 'COMPLETE_QUEST';
const COMPLETE_PLOT = 'COMPLETE_PLOT';
const INCREMENT_TASK = 'INCREMENT_TASK';
const INCREMENT_EXPERIENCE = 'INCREMENT_EXPERIENCE';
const INCREMENT_QUEST = 'INCREMENT_QUEST';
const INCREMENT_PLOT = 'INCREMENT_PLOT';
const NEXT_TASK = 'NEXT_TASK';
const LOOT = 'LOOT';
const BUY = 'BUY';
const SELL_ONE = 'SELL_ONE';

const CHOOSE_CLASS = 'CHOOSE_CLASS';
const CHOOSE_RACE = 'CHOOSE_RACE';
const UPDATE_NAME = 'UPDATE_NAME';

export const generateName = () => ({
  type: GENERATE_NAME
});

export const roll = () => ({
  type: ROLL
});

export const loadGame = () => ({
  type: LOAD_GAME
});

export const levelUp = total => ({
  type: LEVEL_UP,
  total
});

export const completeQuest = () => ({
  type: COMPLETE_QUEST
});

export const completePlot = () => ({
  type: COMPLETE_PLOT
});

export const nextTask = (text, taskType, monster) => ({
  type: NEXT_TASK,
  text,
  taskType,
  monster
});

export const incrementTask = () => ({
  type: INCREMENT_TASK
});

export const incrementExperience = value => ({
  type: INCREMENT_EXPERIENCE,
  value
});

export const incrementQuest = value => ({
  type: INCREMENT_QUEST,
  value
});

export const incrementPlot = value => ({
  type: INCREMENT_PLOT,
  value
});

export const loot = value => ({
  type: LOOT,
  value
});

export const buy = (equipType, value, price) => ({
  type: BUY,
  equipType,
  value,
  price
});

export const sellOne = price => ({
  type: SELL_ONE,
  price
});

export const chooseClass = value => ({
  type: CHOOSE_CLASS,
  value
});

export const chooseRace = value => ({
  type: CHOOSE_RACE,
  value
});

export const updateName = value => ({
  type: UPDATE_NAME,
  value
});
