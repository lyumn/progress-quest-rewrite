import { humanizePosition, increment } from '../concerns/bars';
import { loadGame } from '../concerns/loadStorage';

const TOTAL = 100; // change to 20

const initialState = {
  position: 0,
  task: 'Starting game',
  taskType: 'kill',
  monster: { name: 'Violet Fungi', level: '3', loot: 'spore' }
};

export const getPosition = state => humanizePosition(state.taskBar.position, TOTAL);

export const getTask = state => state.taskBar.task;

const nextTask = (state, text, taskType, monster) => {
  const newState = { ...state };
  newState.position = 0;
  newState.task = text;
  newState.taskType = taskType;
  if (monster) newState.monster = monster;

  return newState;
};

const taskBar = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_GAME':
      return loadGame(state, 'taskBar');
    case 'INCREMENT_TASK':
      return increment(state);
    case 'NEXT_TASK':
      return nextTask(state, action.text, action.taskType, action.monster);
    default:
      return state;
  }
};

export default taskBar;
