import random from 'random';
import { humanizePosition, increment } from '../concerns/bars';
import { loadGame } from '../concerns/loadStorage';

const initialState = {
  position: 0,
  total: 100
};

export const getPosition = state => humanizePosition(state.questBar.position, state.questBar.total);

const completeQuest = state => {
  const newState = { ...state };
  newState.position = 0;
  newState.total = 50 + random.int(1, 1000);

  return newState;
};

const questBar = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_GAME':
      return loadGame(state, 'questBar');
    case 'INCREMENT_QUEST':
      return increment(state, action.value);
    case 'COMPLETE_QUEST':
      return completeQuest(state);
    default:
      return state;
  }
};

export default questBar;
