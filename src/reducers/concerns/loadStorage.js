import { load } from '../../utils/storage';

export const loadGame = (state, key) => {
  let newState = { ...state };
  const data = load();
  newState = data[key];

  return newState;
};
