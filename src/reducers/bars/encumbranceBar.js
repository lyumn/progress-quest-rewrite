import { humanizePosition, increment } from '../concerns/bars';
import { loadGame } from '../concerns/loadStorage';

const TOTAL = 12;

const initialState = {
  position: 0
};

export const getPosition = state => humanizePosition(state.encumbranceBar.position, TOTAL);

const encumbranceBar = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_GAME':
      return loadGame(state, 'encumbranceBar');
    case 'LOOT':
      return increment(state, 1);
    case 'SELL_ONE':
      return increment(state, -1);
    default:
      return state;
  }
};

export default encumbranceBar;
