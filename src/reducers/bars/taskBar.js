// TODO: use gameProgress instead?
const TOTAL = 100;

const initialState = {
  // task: '',
  position: 0,
  task: 'aaa'
};

export const getPosition = state => `${state.taskBar.position}%`;

const incrementTask = state => {
  const newState = { ...state };
  newState.position += 1;
  return newState;
};

export const isTaskBarFull = state => state.taskBar.position > TOTAL;

export const completeTask = state => {
  const newState = { ...state };
  newState.position = 0;
  return newState;
};

const taskBar = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return initialState;
    case 'LOAD_GAME':
      return state;
    case 'INCREMENT_TASK':
      return incrementTask(state);
    case 'COMPLETE_TASK':
      return completeTask(state);
    default:
      return state;
  }
};

export default taskBar;
