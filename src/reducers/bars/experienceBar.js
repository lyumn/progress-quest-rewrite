// TODO: use gameProgress instead?
const initialState = {
  position: 0,
  total: 1000
};

export const getPosition = state =>
  `${(state.experienceBar.position / state.experienceBar.total).toFixed(2) * 100}%`;

export const isExperienceBarFull = state =>
  state.experienceBar.position >= state.experienceBar.total;

export const increment = (state, value) => {
  const newState = { ...state };
  newState.position += value;

  return newState;
};

const levelUp = state => {
  const newState = { ...state };
  newState.position = 0;

  return newState;
};

const experienceBar = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return initialState;
    case 'LOAD_GAME':
      return state;
    case 'LEVEL_UP':
      return levelUp(state);
    case 'INCREMENT_EXPERIENCE':
      return increment(state, action.value);
    default:
      return state;
  }
};

export default experienceBar;
