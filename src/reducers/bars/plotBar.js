// TODO: use gameProgress instead?
import { load } from '../../utils/storage';

const initialState = {
  position: 0,
  total: 20
};

export const getPosition = state =>
  `${(state.plotBar.position / state.plotBar.total).toFixed(2) * 100}%`;

export const increment = (state, value) => {
  const newState = { ...state };
  newState.position += value;

  return newState;
};

const loadGame = state => {
  let newState = { ...state };
  const data = load();
  newState = data.plotBar;

  return newState;
};

const plotBar = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return initialState;
    case 'LOAD_GAME':
      return loadGame(state);
    case 'INCREMENT_PLOT':
      return increment(state, action.value);
    default:
      return state;
  }
};

export default plotBar;
