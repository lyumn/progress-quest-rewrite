// import { completeQuest } from "../actions";
import random from 'random';
import { SpecialItem, InterestingItem, BoringItem } from '../utils/randomHelpers';

const initialState = [
  // 'Seek the Astral Lens',
  // 'Deliver this planter box',
  // 'Seek the Grandiose Lens',
  // 'Placate the Zombies',
  // 'Deliver this anvil'
];

export const getQuests = state => state.quests;

const completeQuest = state => {
  let nextQuest;

  switch (random.int(0, 4)) {
    case 0:
      nextQuest = `Exterminate ${window.K.Monsters[random.int(0, window.K.Monsters.length - 1)]}`;
      break;
    case 1:
      nextQuest = `Seek ${InterestingItem()}`;
      break;
    case 2:
      nextQuest = `Deliver this ${BoringItem()}`;
      break;
    case 3:
      nextQuest = `Fetch me ${BoringItem()}`;
      break;
    case 4:
      nextQuest = `Placate ${window.K.Monsters[random.int(0, window.K.Monsters.length - 1)].name}`;
      break;
  }

  const newState = [...state];
  newState.push(nextQuest);

  return newState;
};

const quests = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return initialState;
    case 'LOAD_GAME':
      return state;
    case 'COMPLETE_QUEST':
      return completeQuest(state);
    default:
      return state;
  }
};

export default quests;
