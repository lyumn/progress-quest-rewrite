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
