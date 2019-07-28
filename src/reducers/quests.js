import { randomQuest } from '../utils/randomHelpers';
import { loadGame } from './concerns/loadStorage';

const initialState = [];

export const getQuests = state => state.quests;

const completeQuest = state => {
  const newState = [...state];
  newState.push(randomQuest());

  return newState;
};

const quests = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_GAME':
      return loadGame(state, 'quests');
    case 'COMPLETE_QUEST':
      return completeQuest(state);
    default:
      return state;
  }
};

export default quests;
