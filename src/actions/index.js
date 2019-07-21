// import * as types from '../constants/ActionTypes'

const ROLL = 'ROLL'
const SOLD = 'SOLD'
const GENERATE_NAME = 'GENERATE_NAME'
const LOAD_GAME = 'LOAD_GAME'

export const generateName = () => ({
  type: GENERATE_NAME,
})

export const roll = () => ({
  type: ROLL,
})

export const loadGame = () => ({
  type: LOAD_GAME,
})