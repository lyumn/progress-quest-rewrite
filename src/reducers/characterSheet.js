import random from 'random';
import { generateName } from '../utils/randomHelpers';
import { load } from '../utils/storage';

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

export const getTotal = state => state.characterSheet.Traits;

export const getBest = state => state.characterSheet.Traits;

function rollStat() {
  return 3 + random.int(1, 6) + random.int(1, 6) + random.int(1, 6);
}

const roll = () => {
  const stats = {};

  window.K.PrimeStats.forEach(e => {
    stats[e] = rollStat(e);
  });

  stats['HP Max'] = random.int(1, 8) + stats.CON.div(6);
  stats['MP Max'] = random.int(1, 8) + stats.INT.div(6);

  return stats;
};

const levelUp = state => {
  const newState = { Traits: { ...state.Traits }, Stats: { ...state.Stats } };
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
  const newState = { ...state };
  newState.Traits.Class = value;

  return newState;
};

const chooseRace = (state, value) => {
  const newState = { ...state };
  newState.Traits.Race = value;

  return newState;
};

const updateName = (state, value) => {
  const newState = { ...state };
  newState.Traits.Name = value;

  return newState;
};

const loadGame = state => {
  let newState = { ...state };
  const data = load();
  newState = data.characterSheet;

  return newState;
};

const characterSheet = (state = initialState, action) => {
  switch (action.type) {
    case 'ROLL':
      const stats = roll();
      return { ...state, Stats: { ...stats } };
    case 'GENERATE_NAME':
      const Name = generateName();
      return { ...state, Traits: { ...state.Traits, Name } };
    case 'LOAD_GAME':
      return loadGame(state);
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
