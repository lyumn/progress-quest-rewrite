const KParts = [
  'br|cr|dr|fr|gr|j|kr|l|m|n|pr||||r|sh|tr|v|wh|x|y|z'.split('|'),
  'a|a|e|e|i|i|o|o|u|u|ae|ie|oo|ou'.split('|'),
  'b|ck|d|g|k|m|n|p|t|v|x|z'.split('|')
];

function Random(n, seed) {
  return seed.uint32() % n;
} // TODO COPY PASTA
function Pick(a, seed) {
  return a[Random(a.length, seed)];
}

export function generateName(seed) {
  let result = '';
  for (let i = 0; i <= 5; ++i) result += Pick(KParts[i % 3], seed);
  return result.charAt(0).toUpperCase() + result.slice(1);
}
