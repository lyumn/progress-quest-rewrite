import { load } from '../utils/storage';

const initialState = {
  Weapon: 'Stick',
  Shield: '',
  Helm: '',
  Hauberk: 'Burlap',
  Brassairts: '',
  Vambraces: '',
  Gauntlets: '',
  Gambeson: '',
  Cuisses: '',
  Greaves: '',
  Sollerets: ''
}; // todo: make this an array so it's ordered

export const getEquipments = state => state.equipments;

const buy = (state, type, name) => {
  const newState = { ...state };
  newState[type] = name;
  return newState;
};

const loadGame = state => {
  let newState = { ...state };
  const data = load();
  newState = data.equipments;

  return newState;
};

const equipments = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return initialState;
    case 'LOAD_GAME':
      return loadGame(state);
    case 'BUY':
      return buy(state, action.equipType, action.value);
    default:
      return state;
  }
};

export default equipments;
