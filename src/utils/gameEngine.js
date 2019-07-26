import delay from 'delay';
import random from 'random';
import Humanize from 'humanize-plus';
import { odds, pick, SpecialItem, InterestingItem, BoringItem } from './randomHelpers.js';
// make this a reducer
const delayedCall = async action => {
  await delay(50);
  action();
};

function WinEquip() {
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

const KParts = [
  'br|cr|dr|fr|gr|j|kr|l|m|n|pr||||r|sh|tr|v|wh|x|y|z'.split('|'),
  'a|a|e|e|i|i|o|o|u|u|ae|ie|oo|ou'.split('|'),
  'b|ck|d|g|k|m|n|p|t|v|x|z'.split('|')
];

function generateName() {
  let result = '';
  for (let i = 0; i <= 5; ++i) result += pick(KParts[i % 3]);
  return result.charAt(0).toUpperCase() + result.slice(1);
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

function monsterTask(level) {
  const definite = false;
  let i;
  for (i = level; i >= 1; --i) {
    if (odds(2, 5)) level += random.int(1, 2) * 2 - 1;
  }
  if (level < 1) level = 1;
  // level = level of puissance of opponent(s) we'll return

  let monster;
  let lev;
  if (odds(1, 25)) {
    // Use an NPC every once in a while
    monster = ` ${pick(window.K.Races).split('|')[0]}`;
    if (odds(1, 2)) {
      monster = `passing ${monster} ${pick(window.K.Klasses).split('|')[0]}`;
    } else {
      monster = `${pick(window.K.Titles)} ${generateName()} the ${monster}`;
      definite = true;
    }
    lev = level;
    monster = `${monster}|${level}|*`;
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

const completeTask = (
  data,
  nextTask,
  loot,
  buy,
  sellOne,
  {
    isEncumbranceFull,
    currentTaskType,
    currentTaskMonster,
    isInventoryEmpty,
    nextEquipmentPrice,
    getGold,
    currentMonsterLoot
  }
) => {
  const taskType = currentTaskType(data);
  if (taskType == 'kill') {
    if (currentTaskMonster(data).loot === '*') {
      loot(SpecialItem());
    } else {
      loot(currentMonsterLoot(data));
    }
  } else if (taskType == 'buy') {
    const equips = WinEquip();
    buy(equips.type, equips.name, nextEquipmentPrice(data));
  } else if (taskType == 'market' || taskType == 'sell') {
    if (taskType == 'sell') {
      let amt = data.inventory[1].quantity * data.characterSheet.Traits.Level;

      if (data.inventory[1].name.includes(' of ')) {
        amt *= (1 + random.int(1, 10)) * (1 + random.int(1, data.characterSheet.Traits.level));
      }
      sellOne(amt);
    }
    if (!isInventoryEmpty(data)) {
      nextTask(`Selling ${data.inventory[1].name}`, 'sell');
    }
  }
  if (isEncumbranceFull(data)) {
    nextTask(`Heading to market to sell loot`, 'market');
  } else if (
    taskType != 'kill' &&
    taskType != 'heading'
    // (Pos('kill|', old) <= 0) && (old != 'heading')
  ) {
    if (getGold(data) > nextEquipmentPrice(data)) {
      nextTask(`Negotiating purchase of better equipment`, 'buying');
    } else {
      nextTask(`Heading to the killing fields`, 'heading');
    }
  } else {
    const result = monsterTask(data.characterSheet.Traits.Level);
    nextTask(`Executing ${result.text}`, 'kill', result.monster);
    // debugger;

    //     var nn = GetI(Traits, 'Level');
    //     var t = MonsterTask(nn);
    //     var InventoryLabelAlsoGameStyleTag = 3;
    //     nn = Math.floor((2 * InventoryLabelAlsoGameStyleTag * t.level * 1000) / nn);
    //     Task('Executing ' + t.description, nn);
  }
};

const start = async ({
  data,
  incrementTask,
  levelUp,
  completeQuest,
  completePlot,
  nextTask,
  incrementExperience,
  incrementQuest,
  incrementPlot,
  loot,
  buy,
  sellOne,
  helpers
}) => {
  const {
    isEncumbranceFull,
    isExperienceBarFull,
    isPlotBarFull,
    isQuestBarFull,
    isTaskBarFull,
    currentTaskType,
    currentTaskMonster,
    isInventoryEmpty
  } = helpers;

  if (isTaskBarFull(data)) {
    if (isExperienceBarFull(data)) {
      levelUp();
    } else {
      incrementExperience(10);
    }

    if (isQuestBarFull(data)) {
      completeQuest();
    } else {
      incrementQuest(1);
    }

    if (isPlotBarFull(data)) {
      completePlot();
    } else {
      incrementPlot(1);
    }

    completeTask(data, nextTask, loot, buy, sellOne, helpers);
  } else {
    delayedCall(incrementTask);
  }
};

export default start;
