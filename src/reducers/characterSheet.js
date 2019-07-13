const initialState = {
  "Traits":{  
    "Name":"Brovdrub",
    "Race":"Crested Dwarf",
    "Class":"Mage Illusioner",
    "Level":8
 },
 "Stats":{  
  "seed":[  
     0.06654448481276631,
     0.3819211523514241,
     0.7914541012141854,
     200298
  ],
  "STR":20,
  "best":"WIS",
  "CON":13,
  "DEX":15,
  "INT":20,
  "WIS":19,
  "CHA":12,
  "HP Max":51,
  "MP Max":74
}
}

export const getCharacterSheet = (state) =>
  state.characterSheet

export const getTraits = (state) =>
  state.characterSheet['Traits']


const characterSheet = (state = initialState, action) => {
  switch (action.type) {
    case '1':
      return initialState
    default:
      return state
  }
}

export default characterSheet
