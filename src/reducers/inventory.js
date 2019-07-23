const initialState = [
  {
    name: 'Gold',
    quantity: 19
  },
  {
    name: 'Harpy Mascra',
    quantity: 1
  }
];

export const getInventory = state => state.inventory;

const inventory = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return initialState;
    case 'LOAD_GAME':
      return state;
    default:
      return state;
  }
};

export default inventory;
