import random from 'random';
import { generateName, rollAllStats } from '../utils/randomHelpers';
import { loadGame } from './concerns/loadStorage';

const initialState = {
  Traits: {
    Name: '',
    Race: '',
    Class: '',
    Level: 1
  },
  Stats: {
    STR: 0,
    // "best":"WIS",
    CON: 0,
    DEX: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
    'HP Max': 0,
    'MP Max': 0
  }
};

const STAT_NAMES = ['STR', 'CON', 'DEX', 'INT', 'WIS', 'CHA'];

export const getCharacterSheet = state => state.characterSheet;

export const getTraits = state => state.characterSheet.Traits;

export const getStats = state => state.characterSheet.Stats;

const roll = state => {
  const newState = { ...state };

  newState.Stats = rollAllStats(newState.Stats);
  newState.Stats['HP Max'] = random.int(1, 8) + newState.Stats.CON.div(6);
  newState.Stats['MP Max'] = random.int(1, 8) + newState.Stats.INT.div(6);

  return newState;
};

const levelUp = state => {
  // TODO revisit immutablity here
  const newState = { ...state };
  newState.Traits.Level += 1;
  newState.Stats['HP Max'] += newState.Stats.CON.div(3) + 1 + random.int(0, 4);
  newState.Stats['MP Max'] += newState.Stats.INT.div(3) + 1 + random.int(0, 4);
  const randStat1 = STAT_NAMES[random.int(0, STAT_NAMES.length - 1)];
  const randStat2 = STAT_NAMES[random.int(0, STAT_NAMES.length - 1)];
  newState.Stats[randStat1] += random.int(0, 3);
  newState.Stats[randStat2] += random.int(0, 3);

  return newState;
};

const chooseClass = (state, value) => {
  return { ...state, Traits: { ...state.Traits, Class: value } };
};

const chooseRace = (state, value) => {
  return { ...state, Traits: { ...state.Traits, Race: value } };
};

const updateName = (state, value) => {
  return { ...state, Traits: { ...state.Traits, Name: value } };
};

const characterSheet = (state = initialState, action) => {
  switch (action.type) {
    case 'ROLL':
      return roll(state);
    case 'GENERATE_NAME':
      return updateName(state, generateName());
    case 'LOAD_GAME':
      return loadGame(state, 'characterSheet');
    case 'LEVEL_UP':
      return levelUp(state);
    case 'CHOOSE_CLASS':
      return chooseClass(state, action.value);
    case 'CHOOSE_RACE':
      return chooseRace(state, action.value);
    case 'UPDATE_NAME':
      return updateName(state, action.value);
    default:
      return state;
  }
};

export default characterSheet;
