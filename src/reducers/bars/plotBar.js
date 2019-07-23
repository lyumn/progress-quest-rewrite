// TODO: use gameProgress instead?
const initialState = {
  position: 0,
  total: 20
};

export const getPosition = state =>
  `${(state.plotBar.position / state.plotBar.total).toFixed(2) * 100}%`;

export const isPlotBarFull = state => state.plotBar.position >= state.plotBar.total;

export const increment = (state, value) => {
  const newState = { ...state };
  newState.position += value;

  return newState;
};

const plotBar = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return initialState;
    case 'LOAD_GAME':
      return state;
    case 'INCREMENT_PLOT':
      return increment(state, action.value);
    default:
      return state;
  }
};

export default plotBar;
