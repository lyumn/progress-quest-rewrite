const _ = require('lodash');

const KEYS = ["inventory", "characterSheet", "equipments", "plotDevelopment", "quests", "spellBook", "status", "seed"]

const getNestedObject = (nestedObj, pathArr) => {
  return pathArr.reduce((obj, key) =>
      (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}


export const save = (data) => {
  const saveName = data.characterSheet['Traits']['Name']
  let saveData = {};
  saveData[saveName] = _.pick(data, ...KEYS);

  window
    .localStorage
    .setItem(
      'roster', 
      JSON.stringify(saveData)
    )
}

export const load = (keys) => {
  const data = window
    .localStorage
    .getItem(
      'roster'
    )
  return getNestedObject(data, keys)
}