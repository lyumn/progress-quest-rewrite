import random from 'random';
import { Alea } from '../utils/randomHelpers';
import { generateName } from '../utils/generation';
import CharacterSheet from '../components/CharacterSheet';

const initialState = {
  Traits: {
    Name: 'Brovdrub',
    Race: 'Crested Dwarf',
    Class: 'Mage Illusioner',
    Level: 8
  },
  Stats: {
    seed: [0.06654448481276631, 0.3819211523514241, 0.7914541012141854, 200298],
    STR: 20,
    // "best":"WIS",
    CON: 13,
    DEX: 15,
    INT: 20,
    WIS: 19,
    CHA: 12,
    'HP Max': 51,
    'MP Max': 74
  }
};

const STAT_NAMES = ['STR', 'CON', 'DEX', 'INT', 'WIS', 'CHA'];

export const getCharacterSheet = state => state.characterSheet;

export const getTraits = state => state.characterSheet.Traits;

export const getStats = state => state.characterSheet.Stats;

const seed = Alea();

export const getTotal = state => state.characterSheet.Traits;

export const getBest = state => state.characterSheet.Traits;

function Random(n) {
  return seed.uint32() % n;
}

function rollStat(stat) {
  // stats[stat] =
  // // if (document)
  // //   $("#"+stat).text(stats[stat]);
  return 3 + Random(6) + Random(6) + Random(6);
}

const roll = () => {
  const stats = {};
  stats.seed = seed.state();

  window.K.PrimeStats.forEach(e => {
    stats[e] = rollStat(e);
  });

  stats['HP Max'] = Random(8) + stats.CON.div(6);
  stats['MP Max'] = Random(8) + stats.INT.div(6);

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

const characterSheet = (state = initialState, action) => {
  switch (action.type) {
    case 'ROLL':
      const stats = roll();
      return { ...state, Stats: { ...stats } };
    case 'GENERATE_NAME':
      const Name = generateName(seed);
      return { ...state, Traits: { ...state.Traits, Name } };
    case 'LOAD_GAME':
      let data;
      // const data = load([state['Traits']['Name'], ['CharacterSheet'])
      return { ...state, data };
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
