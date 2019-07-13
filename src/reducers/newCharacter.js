// const initialState = {
//   characterSheet:{
//    "Traits":{  
//      "Name":"Brovdrub",
//      "Race":"Crested Dwarf",
//      "Class":"Mage Illusioner",
//     }
//   }
// }

export const getTraits = (state) =>
 state.characterSheet["Traits"]

const newCharacter = (state = {}, action) => {
 switch (action.type) {
   default:
     return state
 }
}

export default newCharacter
