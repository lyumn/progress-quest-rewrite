const initialState = {
  Weapon: 'Pole-adze',
  Shield: 'Pavise',
  Helm: '-2 Ringmail',
  Hauberk: 'Leathers',
  Brassairts: 'Studded Pleathers',
  Vambraces: 'Leathers',
  Gauntlets: 'Holey Bearskin',
  Gambeson: 'Leathers',
  Cuisses: 'Studded Pleathers',
  Greaves: 'Plastic Scale Mail',
  Sollerets: '-1 Bearskin'
}; // todo: make this an array so it's ordered

export const getEquipments = state => state.equipments;

const buy = (state, type, name) => {
  const newState = { ...state };
  newState[type] = name;
  return newState;
};

const equipments = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return initialState;
    case 'LOAD_GAME':
      return state;
    case 'BUY':
      return buy(state, action.equipType, action.value);
    default:
      return state;
  }
};

export default equipments;
