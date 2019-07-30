const _ = require('lodash');

const KEYS = [
  'inventory',
  'characterSheet',
  'equipments',
  'plotDevelopment',
  'quests',
  'spellBook',
  'status',
  'taskBar',
  'encumbranceBar',
  'experienceBar',
  'plotBar',
  'questBar'
  // 'seed'
];

// const getNestedObject = (nestedObj, pathArr) => {
//   return pathArr.reduce(
//     (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
//     nestedObj
//   );
// };

export const save = data => {
  const saveName = data.characterSheet.Traits.Name;
  // const saveData = {};
  // saveData[saveName] = _.pick(data, ...KEYS);
  let roster = JSON.parse(window.localStorage.getItem('roster'));
  if (!roster) {
    roster = {};
  }
  roster[saveName] = _.pick(data, ...KEYS);
  window.localStorage.setItem('roster', JSON.stringify(roster)); // change this
};

export const load = () => {
  const name = window.location.href.split('/').pop();
  const data = JSON.parse(window.localStorage.getItem('roster'));
  return data[name];
};

export const gameDataList = () => {
  try {
    return Object.keys(JSON.parse(window.localStorage.roster));
  } catch (_error) {
    return [];
  }
};
