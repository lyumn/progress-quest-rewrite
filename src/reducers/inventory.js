import { loadGame } from './concerns/loadStorage';

const initialState = [
  {
    name: 'Gold',
    quantity: 10
  }
];

export const getInventory = state => state.inventory;

const loot = (state, name) => {
  const newState = [...state];
  newState.push({
    name,
    quantity: 1
  });

  return newState;
};

const pay = (state, price) => {
  const newState = [...state];
  newState[0].quantity -= price;

  return newState;
};

const sellOne = (state, price) => {
  const newState = [...state];
  newState[0].quantity += price;
  newState.splice(1, 1); // TODO remove splice
  return newState;
};

const inventory = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_GAME':
      return loadGame(state, 'inventory');
    case 'LOOT':
      return loot(state, action.value);
    case 'BUY':
      return pay(state, action.price);
    case 'SELL_ONE':
      return sellOne(state, action.price);
    default:
      return state;
  }
};

export default inventory;
