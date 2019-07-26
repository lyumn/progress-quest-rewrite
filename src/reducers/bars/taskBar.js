// TODO: use gameProgress instead?
import { SpecialItem, InterestingItem, BoringItem } from '../../utils/randomHelpers';
import encumbranceBar from './encumbranceBar';

const TOTAL = 100;

const initialState = {
  // task: '',
  position: 0,
  task: 'aaa',
  taskType: 'kill',
  monster: { name: 'Violet Fungi', level: '3', loot: 'spore' }
};

export const getPosition = state => `${state.taskBar.position}%`;

export const getTask = state => state.taskBar.task;

const incrementTask = state => {
  const newState = { ...state };
  newState.position += 1;
  return newState;
};

// function EquipPrice() {
//   return  5 * GetI(Traits,'Level') * GetI(Traits,'Level') +
//     10 * GetI(Traits,'Level') +
//     20;
// }

// function GetI(list, key) {
//   return StrToIntDef(Get(list,key), 0);
// }

// export const completeTask = state => {
//   const newState = { ...state };
//   newState.position = 0;
//   if (state.taskType == 'kill') {
//     if (state.monster.loot === '*') {
//       newState.inventory.push(SpecialItem());
//     } else {
//       newState.inventory.push(state.monster.loot);
//     }
//   }
//   return newState;
// };

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
    case '1':
      return initialState;
    case 'LOAD_GAME':
      return state;
    case 'INCREMENT_TASK':
      return incrementTask(state);
    case 'NEXT_TASK':
      return nextTask(state, action.text, action.taskType, action.monster);
    default:
      return state;
  }
};

export default taskBar;
