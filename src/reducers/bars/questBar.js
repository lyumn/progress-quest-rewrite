// TODO: use gameProgress instead?
const initialState = {
  position: 0,
  total: 20
};

export const getPosition = state =>
  `${(state.questBar.position / state.questBar.total).toFixed(2) * 100}%`;

export const isQuestBarFull = state => state.questBar.position >= state.questBar.total;

export const increment = (state, value) => {
  const newState = { ...state };
  newState.position += value;

  return newState;
};

const questBar = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return initialState;
    case 'LOAD_GAME':
      return state;
    case 'INCREMENT_QUEST':
      return increment(state, action.value);
    default:
      return state;
  }
};

export default questBar;
