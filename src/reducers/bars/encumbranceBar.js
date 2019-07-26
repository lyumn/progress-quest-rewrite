// TODO: use gameProgress instead?
const TOTAL = 12;

const initialState = {
  position: 0
};

export const getPosition = state => `${(state.encumbranceBar.position / TOTAL).toFixed(2) * 100}%`;

const increase = state => {
  const newState = { ...state };
  newState.position += 1;

  return newState;
};
const decrease = state => {
  const newState = { ...state };
  newState.position -= 1;

  return newState;
};

const encumbranceBar = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return initialState;
    case 'LOAD_GAME':
      return state;
    case 'LOOT':
      return increase(state, action.value);
    case 'SELL_ONE':
      return decrease(state, action.price);
    default:
      return state;
  }
};

export default encumbranceBar;
