import {Alea} from '../utils/random'
import {generateName} from '../utils/generation'
import CharacterSheet from '../components/CharacterSheet';

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
  // "best":"WIS",
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

export const getStats = (state) =>
  state.characterSheet['Stats']



  const seed = Alea()

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
  
  export const getTotal = (state) =>
    state.characterSheet['Traits']
  
  export const getBest = (state) =>
    state.characterSheet['Traits']
  
  function Random(n) {
    return seed.uint32() % n;
  }
  
  function rollStat(stat) {
    // stats[stat] = 
    // // if (document)
    // //   $("#"+stat).text(stats[stat]);
    return (3 + Random(6) + Random(6) + Random(6));
  }
  
  
  const roll = () => {
    let stats = {};
    stats.seed = seed.state();

    window.K.PrimeStats.forEach(e => {
      stats[e] = rollStat(e);
    });

    stats['HP Max'] = Random(8) + stats.CON.div(6);
    stats['MP Max'] = Random(8) + stats.INT.div(6);
  
    // var color =
    //   (total >= (63+18)) ? 'red'    :
    //   (total > (4 * 18)) ? 'yellow' :
    //   (total <= (63-18)) ? 'grey'   :
    //   (total < (3 * 18)) ? 'silver' :
    //   'white';
    
      // if (document) {
      //   var Total = $("#Total");
      //   Total.text(total);
      //   Total.css("background-color", color);
    
      //   $("#Unroll").attr("disabled", !seedHistory.length);
      // }

      return stats
  }
  
  // const sold


const characterSheet = (state = initialState, action) => {
  switch (action.type) {
    case 'ROLL':
      const stats = roll()
      return {...state, 'Stats': {...stats}}
    case 'GENERATE_NAME':
      const Name = generateName(seed)
      return {...state, 'Traits': {...state["Traits"], Name}};
    case 'LOAD_GAME':
      let data;
      // const data = load([state['Traits']['Name'], ['CharacterSheet'])
      return {...state, data}
    default:
      return state
  }
}

export default characterSheet
