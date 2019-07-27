import { load } from '../../utils/storage';

// TODO: use gameProgress instead?
const initialState = {
  position: 0,
  // total: 1000
  total: 10
};

export const getPosition = state =>
  `${(state.experienceBar.position / state.experienceBar.total).toFixed(2) * 100}%`;

export const increment = (state, value) => {
  const newState = { ...state };
  newState.position += value;

  return newState;
};

const levelUp = (state, total) => {
  const newState = { ...state };
  newState.position = 0;
  newState.total = total;

  return newState;
};

const loadGame = state => {
  let newState = { ...state };
  const data = load();
  newState = data.experienceBar;

  return newState;
};

const experienceBar = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return initialState;
    case 'LOAD_GAME':
      return loadGame(state);
    case 'LEVEL_UP':
      return levelUp(state, action.total);
    case 'INCREMENT_EXPERIENCE':
      return increment(state, action.value);
    default:
      return state;
  }
};

export default experienceBar;
