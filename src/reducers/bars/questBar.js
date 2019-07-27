import { load } from '../../utils/storage';

// TODO: use gameProgress instead?
const initialState = {
  position: 0,
  total: 500
};

export const getPosition = state =>
  `${(state.questBar.position / state.questBar.total).toFixed(2) * 100}%`;

export const increment = (state, value) => {
  const newState = { ...state };
  newState.position += value;

  return newState;
};

const loadGame = state => {
  let newState = { ...state };
  const data = load();
  newState = data.questBar;

  return newState;
};

const questBar = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return initialState;
    case 'LOAD_GAME':
      return loadGame(state);
    case 'INCREMENT_QUEST':
      return increment(state, action.value);
    default:
      return state;
  }
};

export default questBar;
