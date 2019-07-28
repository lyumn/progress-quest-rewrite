import random from 'random';
import Humanize from 'humanize-plus';

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

export function randomEquip() {
  const types = [
    'Weapon',
    'Shield',
    'Helm',
    'Hauberk',
    'Brassairts',
    'Vambraces',
    'Gauntlets',
    'Gambeson',
    'Cuisses',
    'Greaves',
    'Sollerets'
  ];
  const posn = random.int(0, 10);
  let stuff;
  let better;
  let worse;

  if (!posn) {
    stuff = window.K.Weapons;
    better = window.K.OffenseAttrib;
    worse = window.K.OffenseBad;
  } else {
    better = window.K.DefenseAttrib;
    worse = window.K.DefenseBad;
    stuff = posn == 1 ? window.K.Shields : window.K.Armors;
  }

  const name = stuff[random.int(0, stuff.length - 1)];
  let modifier;
  if (random.int(0, 4) == 0) {
    modifier = worse[random.int(0, worse.length - 1)];
  } else {
    modifier = worse[random.int(0, better.length - 1)];
  }
  return {
    type: types[posn],
    name: `${modifier.split('|')[0]} ${name.split('|')[0]}`
  };
}

function abs(x) {
  if (x < 0) return -x;
  return x;
}

function max(a, b) {
  return a > b ? a : b;
}

function prefix(a, m, s, sep) {
  if (sep == undefined) sep = ' ';
  m = abs(m);
  if (m < 1 || m > a.length) return s; // In case of screwups
  return a[m - 1] + sep + s;
}

function Sick(m, s) {
  m = 6 - abs(m);
  return prefix(['dead', 'comatose', 'crippled', 'sick', 'undernourished'], m, s);
}

function Young(m, s) {
  m = 6 - abs(m);
  return prefix(['foetal', 'baby', 'preadolescent', 'teenage', 'underage'], m, s);
}

function Big(m, s) {
  return prefix(['greater', 'massive', 'enormous', 'giant', 'titanic'], m, s);
}

function Special(m, s) {
  if (s.includes(' ')) return prefix(['veteran', 'cursed', 'warrior', 'undead', 'demon'], m, s);
  return prefix(['Battle-', 'cursed ', 'Were-', 'undead ', 'demon '], m, s, '');
}

export function randomeMonsterTask(level) {
  let definite = false;
  let i;
  for (i = level; i >= 1; --i) {
    if (odds(2, 5)) level += random.int(1, 2) * 2 - 1;
  }
  if (level < 1) level = 1;
  // level = level of puissance of opponent(s) we'll return

  let monster = {
    name: null,
    level: null,
    loot: null
  };
  let lev;
  if (odds(1, 25)) {
    // Use an NPC every once in a while
    monster.name = `${pick(window.K.Races).split('|')[0]}`;
    monster.level = parseInt(pick(window.K.Races).split('|')[1]);
    monster.loot = `${pick(window.K.Races).split('|')[2]}`;
    if (odds(1, 2)) {
      monster.name = `passing ${monster} ${pick(window.K.Klasses).split('|')[0]}`;
      // level and loot?
    } else {
      monster.name = `${pick(window.K.Titles)} ${generateName()} the ${monster}`;
      definite = true;
    }
    lev = level;
    monster.name = `${monster}|${level}|*`;
  } else if ('game.questmonster' && odds(1, 4)) {
    // todo quest monster
    // Use the quest monster
    // monster = K.Monsters[game.questmonsterindex];
    monster = window.K.Monsters[1];
    lev = monster.level;
  } else {
    // Pick the monster out of so many random ones closest to the level we want
    monster = pick(window.K.Monsters);
    lev = monster.level;
    for (let ii = 0; ii < 5; ++ii) {
      const m1 = pick(window.K.Monsters);
      if (abs(level - m1.level) < abs(level - lev)) {
        monster = m1;
        lev = monster.level;
      }
    }
  }

  let result = monster.name;
  // game.task = 'kill|' + monster;

  let qty = 1;
  if (level - lev > 10) {
    // lev is too low. multiply...
    qty = Math.floor((level + random.int(1, lev)) / max(lev, 1));
    if (qty < 1) qty = 1;
    level = Math.floor(level / qty);
  }

  if (level - lev <= -10) {
    result = `imaginary ${result}`;
  } else if (level - lev < -5) {
    i = 10 + (level - lev);
    i = 5 - random.int(1, i + 1);
    result = Sick(i, Young(lev - level - i, result));
  } else if (level - lev < 0 && random.int(1, i + 1) == 1) {
    result = Sick(level - lev, result);
  } else if (level - lev < 0) {
    result = Young(level - lev, result);
  } else if (level - lev >= 10) {
    result = `messianic ${result}`;
  } else if (level - lev > 5) {
    i = 10 - (level - lev);
    i = 5 - random.int(1, i + 1);
    result = Big(i, Special(level - lev - i, result));
  } else if (level - lev > 0 && random.int(1, 2) == 1) {
    result = Big(level - lev, result);
  } else if (level - lev > 0) {
    result = Special(level - lev, result);
  }

  lev = level;
  level = lev * qty;

  if (!definite) result = `${qty} ${Humanize.pluralize(qty, result)}`; // TODO move humanization to the reducer
  return { text: result, monster };
}
