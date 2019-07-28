import { load } from '../../utils/storage';

// eslint-disable-next-line import/prefer-default-export
export const loadGame = (state, key) => {
  let newState = { ...state };
  const data = load();
  newState = data[key];

  return newState;
};
