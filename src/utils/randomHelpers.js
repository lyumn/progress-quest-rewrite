// From http://baagoe.com/en/RandomMusings/javascript/
// Johannes BaagÃ¸e <baagoe@baagoe.com>, 2010
import random from 'random';

export const SpecialItem = () => {
  return `${InterestingItem()} of ${window.K.ItemOfs[random.int(0, window.K.ItemOfs.length - 1)]}`;
};

export const InterestingItem = () => {
  return `${window.K.ItemAttrib[random.int(0, window.K.ItemAttrib.length - 1)]} ${
    window.K.Specials[random.int(0, window.K.Specials.length - 1)]
  }`;
};

export const BoringItem = () => {
  return window.K.BoringItems[random.int(0, window.K.BoringItems.length - 1)];
};

export const odds = (chance, outof) => {
  return random.int(0, outof) < chance;
};

export const pick = arr => arr[random.int(0, arr.length - 1)];

const KParts = [
  'br|cr|dr|fr|gr|j|kr|l|m|n|pr||||r|sh|tr|v|wh|x|y|z'.split('|'),
  'a|a|e|e|i|i|o|o|u|u|ae|ie|oo|ou'.split('|'),
  'b|ck|d|g|k|m|n|p|t|v|x|z'.split('|')
];

export function generateName() {
  let result = '';
  for (let i = 0; i <= 5; ++i) result += pick(KParts[i % 3]);
  return result.charAt(0).toUpperCase() + result.slice(1);
}

function rollStat() {
  return 3 + random.int(1, 6) + random.int(1, 6) + random.int(1, 6);
}

export function rollAllStats(stats) {
  const retVal = { ...stats };
  window.K.PrimeStats.forEach(e => {
    retVal[e] = rollStat(e);
  });

  return retVal;
}

export function randomQuest() {
  let quest;
  switch (random.int(0, 4)) {
    case 0:
      // eslint-disable-next-line no-undef
      quest = `Exterminate ${window.K.Monsters[random.int(0, window.K.Monsters.length - 1)]}`;
      break;
    case 1:
      quest = `Seek ${InterestingItem()}`;
      break;
    case 2:
      quest = `Deliver this ${BoringItem()}`;
      break;
    case 3:
      quest = `Fetch me ${BoringItem()}`;
      break;
    case 4:
      // eslint-disable-next-line no-undef
      quest = `Placate ${window.K.Monsters[random.int(0, window.K.Monsters.length - 1)].name}`;
      break;
    default:
      quest = '';
      break;
  }

  return quest;
}

export function randomSpellBook() {
  // eslint-disable-next-line no-undef
  return [window.K.Spells[random.int(0, window.K.Spells.length - 1)], 'I'];
}
