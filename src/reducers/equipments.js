const initialState = {
  "Weapon":"Pole-adze",
    "Shield":"Pavise",
    "Helm":"-2 Ringmail",
    "Hauberk":"Leathers",
    "Brassairts":"Studded Pleathers",
    "Vambraces":"Leathers",
    "Gauntlets":"Holey Bearskin",
    "Gambeson":"Leathers",
    "Cuisses":"Studded Pleathers",
    "Greaves":"Plastic Scale Mail",
    "Sollerets":"-1 Bearskin"
}

export const getEquipments = (state) =>
 state.equipments

const equipments = (state = initialState, action) => {
 switch (action.type) {
   case '1':
     return initialState
   default:
     return state
 }
}

export default equipments
