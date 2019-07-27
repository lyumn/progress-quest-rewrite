import { load } from '../utils/storage';

const initialState = {
  Act: 1
};

export const getPlotDevelopment = state => state.plotDevelopment;

const completeAct = state => {
  const newState = { ...state };
  newState.Act += 1;

  return newState;
};

const loadGame = state => {
  let newState = { ...state };
  const data = load();
  newState = data.plotDevelopment;

  return newState;
};

const plotDevelopment = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return initialState;
    case 'LOAD_GAME':
      return loadGame(state);
    case 'COMPLETE_ACT':
      return completeAct(state);
    default:
      return state;
  }
};

export default plotDevelopment;
