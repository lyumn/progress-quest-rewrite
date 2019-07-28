import { loadGame } from './concerns/loadStorage';

const initialState = {
  Act: 1
};

export const getPlotDevelopment = state => state.plotDevelopment;

const completeAct = state => {
  const newState = { ...state };
  newState.Act += 1;

  return newState;
};

const plotDevelopment = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_GAME':
      return loadGame(state, 'plotDevelopment');
    case 'COMPLETE_ACT':
      return completeAct(state);
    default:
      return state;
  }
};

export default plotDevelopment;
