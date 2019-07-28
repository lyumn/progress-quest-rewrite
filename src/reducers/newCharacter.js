import { save } from '../utils/storage';

// const initialState = {
//   characterSheet:{
//    "Traits":{
//      "Name":"Brovdrub",
//      "Race":"Crested Dwarf",
//      "Class":"Mage Illusioner",
//     }
//   }
// }

export const getTraits = state => state.characterSheet.Traits;

//  var stats = {};
// var traits = {};
// var total = 0;
// var seedHistory = [];

//  stats.seed = randseed();
//  total = 0;
//  var best = -1;
//  $.each(K.PrimeStats, function () {
//    total += Roll(this);
//    if (best < stats[this]) {
//      best = stats[this];
//      stats.best = this;
//    }
//  });
//  stats['HP Max'] = Random(8) + stats.CON.div(6);
//  stats['MP Max'] = Random(8) + stats.INT.div(6);

//  var color =
//    (total >= (63+18)) ? 'red'    :
//    (total > (4 * 18)) ? 'yellow' :
//    (total <= (63-18)) ? 'grey'   :
//    (total < (3 * 18)) ? 'silver' :
//    'white';

//  if (document) {
//    var Total = $("#Total");
//    Total.text(total);
//    Total.css("background-color", color);

//    $("#Unroll").attr("disabled", !seedHistory.length);
//  }

//  var seed = new Alea();

// function randseed(set) {
//   return seed.state(set);
// }

export const getTotal = state => state.characterSheet.Traits;

// const sold

export const sold = state => {
  return () => {
    save(state);
    window.location.href = `/game/${state.characterSheet.Traits.Name}`;
  };
};

const newCharacter = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default newCharacter;
