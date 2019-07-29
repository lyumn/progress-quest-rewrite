import { humanizePosition, increment } from '../concerns/bars';
import { loadGame } from '../concerns/loadStorage';

const initialState = {
  position: 0,
  total: 21600
};

export const getPosition = state => humanizePosition(state.plotBar.position, state.plotBar.total);

const completeAct = state => {
  const newState = { ...state };
  newState.total = 60 * 60 * (1 + 5 * state.Act);

  return newState;
};

const plotBar = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_GAME':
      return loadGame(state, 'plotBar');
    case 'COMPLETE_ACT':
      return completeAct(state);
    case 'INCREMENT_PLOT':
      return increment(state, action.value);
    default:
      return state;
  }
};

export default plotBar;
