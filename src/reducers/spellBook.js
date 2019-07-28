import { randomSpellBook } from '../utils/randomHelpers';
import { loadGame } from './concerns/loadStorage';

const initialState = [];

export const getSpellBook = state => state.spellBook;

const levelUp = state => {
  const newState = [...state];
  newState.push(randomSpellBook());

  return newState;
};

const spellBook = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_GAME':
      return loadGame(state, 'spellBook');
    case 'LEVEL_UP':
      return levelUp(state);
    default:
      return state;
  }
};

export default spellBook;
