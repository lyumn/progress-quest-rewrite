const initialState = {
  Act: 2
};

export const getPlotDevelopment = state => state.plotDevelopment;

const completeAct = state => {
  const newState = { ...state };
  newState.Act += 1;

  return newState;
};

const plotDevelopment = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return initialState;
    case 'LOAD_GAME':
      return state;
    case 'COMPLETE_ACT':
      return completeAct(state);
    default:
      return state;
  }
};

export default plotDevelopment;
