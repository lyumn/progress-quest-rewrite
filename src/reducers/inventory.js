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
  newState[0].quantity = newState[0].quantity - price;

  return newState;
};

const sellOne = (state, price) => {
  const newState = [...state];
  newState[0].quantity = newState[0].quantity - price;
  // var amt = GetI(Inventory, 1) * GetI(Traits,'Level');
  // if (Pos(' of ', Inventory.label(1)) > 0)
  //   amt *= (1+RandomLow(10)) * (1+RandomLow(GetI(Traits,'Level')));
  // Inventory.remove1();
  // Add(Inventory, 'Gold', amt);
  newState.splice(1, 1);
  return newState;
};

const inventory = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return initialState;
    case 'LOAD_GAME':
      return state;
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
