import { humanizePosition, increment } from '../concerns/bars';
import { loadGame } from '../concerns/loadStorage';

const initialState = {
  position: 0,
  total: 50
};

export const getPosition = state =>
  humanizePosition(state.experienceBar.position, state.experienceBar.total);

const levelUp = (state, total) => {
  const newState = { ...state };
  newState.position = 0;
  newState.total = total;

  return newState;
};

const experienceBar = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_GAME':
      return loadGame(state, 'experienceBar');
    case 'LEVEL_UP':
      return levelUp(state, action.total);
    case 'INCREMENT_EXPERIENCE':
      return increment(state, action.value);
    default:
      return state;
  }
};

export default experienceBar;
