// import * as types from '../constants/ActionTypes'

const ROLL = 'ROLL'
const SOLD = 'SOLD'
const GENERATE_NAME = 'GENERATE_NAME'
const LOAD_GAME = 'LOAD_GAME'
const LEVEL_UP = 'LEVEL_UP'
const COMPLETE_QUEST = 'COMPLETE_QUEST'
const COMPLETE_PLOT = 'COMPLETE_PLOT'

export const generateName = () => ({
  type: GENERATE_NAME,
})

export const roll = () => ({
  type: ROLL,
})

export const loadGame = () => ({
  type: LOAD_GAME,
})

export const levelUp = () => ({
  type: LEVEL_UP,
})

export const completeQuest = () => ({
  type: COMPLETE_QUEST,
})

export const completePlot = () => ({
  type: COMPLETE_PLOT,
})